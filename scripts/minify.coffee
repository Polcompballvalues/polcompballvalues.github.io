terser = require "terser"
fs = require "fs"

minify = ->
    dir_name = "./dist/"
    dir = fs.readdirSync dir_name
    for file in dir 
        split = file.split "."
        if split[1] is "js" and split[2] is undefined 
            raw = fs.readFileSync(
                dir_name + file,
                { encoding : "utf8"}
            )
            map = fs.readFileSync(
                dir_name + file + ".map",
                { encoding : "utf8"}
            )
            parsed_map = JSON.parse map
            parsed_map.sourceRoot = parsed_map.sourceRoot.replace(/\\/g,"/")
            parsed_map.sources[0] = parsed_map.sources[0].replace(/\\/g,"/")

            params = {
                compress: {
                    ecma: 2022
                    arrows: true
                    unsafe: true
                    unsafe_arrows: true
                },
                sourceMap: {
                    content: JSON.stringify parsed_map,
                    url: split[0] + ".js.map"
                },
                module: true,
                toplevel: true
            }

            min = await terser.minify raw, params

            fs.writeFileSync(
                dir_name + file,
                min.code,
                { encoding: "utf8" }
            )

            fs.writeFileSync(
                dir_name + file + ".map",
                min.map,
                { encoding: "utf8" }
            )

do minify