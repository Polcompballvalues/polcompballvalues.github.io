import {getJson, Canvas} from "./common.js"

valid_scores = true

set_bar_value = (name, value) ->
    innerel = document.getElementById "span-" + name
    outerel = document.getElementById "bar-" + name
    outerel.style.width = value.toFixed(1) + "%"
    innerel.innerHTML = value.toFixed(1) + "%"
    if value < 20
        innerel.style.display = "none"
    else
        innerel.style.display = "block"

order_scores = (scores, weights, users) ->
    finalscore = []
    for user,ind in users
        sum = 0
        for scr,ind in Object.keys scores
            raw_delta = Math.abs scores[scr] - user.stats[ind]
            sum += weights[ind] * Math.pow(raw_delta/100, 3)
        finalscore.push {
            name : user.name
            score: sum/weights.length
        }
    finalscore.sort (a,b) -> 
        a.score - b.score

is_valid = (scores) ->
    if Object.keys(scores).length isnt values.length
        return false

    if Object.values(scores).some (x) -> x is undefined
        return false

    if not Object.values(scores).every (x) -> x >= 0 and x <= 100
        return false

    true




url_pars = new URLSearchParams document.location.search

scores_raw = url_pars.get("score") or ""
edition_raw = url_pars.get "edition"
values = await getJson "values"
weights = new Array(values.length).fill 2

scores = scores_raw.split(",").reduce( 
    ((obj,val,ind) -> 
        { ...obj, [values[ind].key] : parseFloat val}
    ),{})

if not is_valid scores
    valid_scores = false
    err = "Invalid scores"
    alert err
    throw new Error err



users = order_scores scores,weights,await getJson "users"

document.getElementById("cmatch").textContent = users[0].name + \
    ": " + ((1 - users[0].score)*100).toFixed(1) + "%"

other_matches = document.getElementById("other-matches")
for i in [1..5]
    do(i) ->    
        elm = document.createElement "p"
        elm.textContent = users[i].name + ": " +\ 
        ((1 - users[i].score)*100).toFixed(1) + "%"
        other_matches.appendChild elm

params =
    edition: if edition_raw is "s" then "Short test" else "Full test"
    user: users[0].name
    version: globalThis.VERSION

canvas_elm = document.getElementById "banner"
[bg,fg] = if window.matchMedia("(prefers-color-scheme: dark)").matches \
    then ["#333","#EEE"] else ["#EEE","#333"]

canvas = new Canvas canvas_elm,1860,800,fg,bg

for val,ind in values
    canvas.drawValues val,ind
    canvas.drawValueBg ind
    elm = document.getElementById val.name + "-label"
    score = scores[val.key]
    elm.textContent = val.tiers[Canvas.findTier score]
    for lab,ind in val.labels
        set_bar_value lab, (if ind then 100 - score else score)

for scr,ind in Object.keys scores
    canvas.drawScoreRect scores,values,scr,ind

document.getElementById("download-button").addEventListener "click", ->
    link = document.createElement "a"
    link.download = "polcompballvalues.png"
    link.href = canvas.element.toDataURL "image/png"
    do link.click

onload_render = ->
    if valid_scores
        for scr,ind in Object.keys scores
            canvas.drawScoreLabel scores[scr],values,ind

        canvas.drawHeader params


setTimeout (->
    event = new Event "load"
    window.dispatchEvent event
    do onload_render
    ), 300

