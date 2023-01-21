pug = require "pug"
cson = require "cson"
fs = require "fs"

renderTemplates = (cjson) ->   
    views_dir_name = "./views/"
    views_dir = fs.readdirSync views_dir_name

    for file in views_dir
        split = file.split "."
        if split.at(-1) is "pug"
            html = pug.renderFile views_dir_name + file, cjson
            fs.writeFileSync "./#{split[0]}.html", html

calcShort = (questions) ->
    questions.filter((x) -> x.short).length

data_dir_name = "./data/"
data_dir = fs.readdirSync data_dir_name
parsed_jsons = {}

for file in data_dir
    split = file.split "."
    if split.at(-1) is "cson"
        obj = cson.parseCSONFile data_dir_name + file
        parsed_jsons[split[0]] = obj

if Object.keys(parsed_jsons.config).length is 0
    throw new Error "Missing config json"

parsed_jsons.config = {
    ...parsed_jsons.config,
    shortq: calcShort parsed_jsons.questions,
    version: process.env.npm_package_version
}

renderTemplates parsed_jsons.config
parsed_jsons.users.sort((a, b) -> a.name.localeCompare b.name)

for key,value of parsed_jsons
    if key is "config"
        value = parsed_jsons[key].values
        delete val.desc for val in value
        key = "values"
    fs.writeFileSync "./dist/#{key}.json", JSON.stringify value

