fs = require "fs"
path = require "path"

dirToClean = ["./dist/"]
extToClean = [".js",".map"]
exceptions = ["common.min.js"]

extMatches = (file, exts) ->
    fileExt = path.extname file
    exts.includes fileExt

for dir in dirToClean
    dirlist = fs.readdirSync dir
    filteredList = dirlist 
        .filter((x) -> extMatches(x, extToClean))
        .filter((x) -> !exceptions.includes(x))

    for file in filteredList
        fs.unlinkSync dir + file
    

