cson = require "cson"
fs = require "fs"
questions = cson.requireCSONFile "./src/questions.cson"
users = cson.requireCSONFile "./src/users.cson"
users.sort((a, b) -> a.name.localeCompare(b.name))
fs.writeFile("./dist/questions.json", JSON.stringify(questions, null, 2), (err)-> console.log err if err)
fs.writeFile("./dist/users.json", JSON.stringify(users, null, 2), (err)-> console.log err if err)
console.log("JSON files output")