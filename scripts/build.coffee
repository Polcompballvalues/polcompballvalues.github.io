pug = require "pug"
cson = require "cson"
terser = require "terser"
fs = require "fs"
path = require "path"
sqlite3 = require "sqlite3"
sqlite = require "sqlite"

minify = process.argv.some((x) -> x.toLowerCase() is "--minify")

jsDir = "./dist/"
jsKeep = ["common"]
fsParams =
    encoding: "utf8"

terserParams = 
    compress:
        ecma: 2022
        arrows: true
        unsafe: true
        unsafe_arrows: true
    ,
    module: true,
    toplevel: true

jsKv = (output,filename) ->
    bareName = path.parse(filename).name
    code = output.code
    filtCode = code.replace(/\.\/(\w+)\.js/gmi, "./dist/$1.min.js")
    return { [bareName]: filtCode }


minifyFile = (file) ->
    ext = path.extname file
    if ext isnt ".js"
        return

    new Promise((res, rej) ->
        fs.readFile(jsDir+file, fsParams, (err,data) ->
            if err
                rej(err)
            else if data
                terser.minify(data,terserParams)
                    .then((x) -> res(jsKv(x,file)))
                    .catch((x) -> rej(x))
        )
    )


minifyAll = (jsFiles)->
    jsObj = {}

    minJs = await Promise.all(
        jsFiles.map minifyFile
    )

    for file in minJs
        if file
            jsObj = {
                ...jsObj
                ...file
            }
    
    for keeper in jsKeep
        fs.writeFileSync(
            jsDir + keeper + ".min.js",
            jsObj[keeper]
        )

    return jsObj

renderTemplates = (cjson) -> 
    views_dir_name = "./src/pug/"
    views_dir = fs.readdirSync views_dir_name

    for file in views_dir
        split = file.split "."
        if split.at(-1) is "pug"
            html = pug.renderFile views_dir_name + file, cjson
            fs.writeFileSync "./#{split[0]}.html", html.replaceAll(/\n/gm,"")

calcShort = (questions) ->
    questions.filter((x) -> x.short).length

data_dir_name = "./src/cson/"
data_dir = fs.readdirSync data_dir_name
parsed_jsons = {}

for file in data_dir
    split = file.split "."
    if split.at(-1) is "cson"
        obj = cson.parseCSONFile data_dir_name + file
        parsed_jsons[split[0]] = obj

if Object.keys(parsed_jsons.config).length is 0
    throw new Error "Missing config json"

jsFiles = fs.readdirSync jsDir
minJs = if minify then await minifyAll jsFiles else {}

parsed_jsons.config = {
    ...parsed_jsons.config
    version: process.env.npm_package_version
    size: parsed_jsons.config.values.length
    longq: parsed_jsons.questions.length
    shortq: calcShort parsed_jsons.questions
    js: minJs
    inlineJS: minify
}


parseScores = (scores) ->
    return {
        name: scores.name,
        stats: [
            scores.spos, 
            scores.alle,
            scores.expr,
            scores.pers,
            scores.horn,
            scores.fame,
            scores.shwr,
            scores.sani,
            scores.real,
            scores.fedp,
            scores.actn,
            scores.purp,
            scores.perc,
            scores.cmdy
        ]
    }


db = await sqlite.open({
    filename: "./database/scores.db",
    driver: sqlite3.Database
})

parsed_jsons.users = []

await db.each("SELECT * FROM scores", (err, row) -> 
    parsed_jsons.users.push(parseScores(row))
)

renderTemplates parsed_jsons.config
parsed_jsons.users.sort((a, b) -> a.name.localeCompare b.name)

for key,value of parsed_jsons
    if key is "config"
        value = parsed_jsons[key].values
        delete val.desc for val in value
        key = "values"
    fs.writeFileSync "./dist/#{key}.json", JSON.stringify value

