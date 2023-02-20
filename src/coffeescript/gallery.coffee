import {Canvas,getJson} from "./common.js"

values = await getJson "values"
users = await getJson "users" 

params =
    gallery : true
    edition : "User gallery"
    version : globalThis.VERSION

canvas_elm = document.getElementById "banner"

[bg,fg] = if window.matchMedia("(prefers-color-scheme: dark)").matches \
    then ["#333","#EEE"] else ["#EEE","#333"]

canvas = new Canvas canvas_elm,1860,800,fg,bg

drawScores = (user_obj) ->
    do canvas.clearFields
    full_pars = {
        ...params
        user : user_obj.name
    }
    scores = Object.values user_obj.stats
    for scr,ind in Object.keys scores
        canvas.drawValueBg ind
        canvas.drawScoreRect scores,values,scr,ind
        canvas.drawScoreLabel scores[scr],values,ind

    canvas.drawHeader full_pars

user_dropdown = document.getElementById("userdropdown")

user_dropdown.addEventListener "change", ->
    drawScores users[user_dropdown.selectedIndex]

for user,i in users
    user_dropdown.innerHTML += "<option value=#{i}>#{user.name}</option>"

for val,ind in values
    canvas.drawValues val,ind

setTimeout (->
    event = new Event "load"
    window.dispatchEvent event
    drawScores users[0]
    ), 300

