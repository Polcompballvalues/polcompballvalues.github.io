import {getJson} from "./common.js"

render_question = ->
    document.getElementById("question-number").textContent = "Question #{q_n + 1} of #{questions.length}"
    document.getElementById("question-text").textContent = questions[q_n].question
    if questions[q_n].yesno
        for k,v of buttons
            button = document.getElementById "button-" + k
            switch v
                when 1
                    button.textContent = "Yes"
                when -1
                    button.textContent = "No"
                else 
                    button.style.display = "none"
    else
        for k,v of buttons
            button = document.getElementById "button-" + k
            switch v
                when 1
                    button.textContent = "Strongly Agree"
                when -1
                    button.textContent = "Strongly Disagree"
                else 
                    button.style.display = "block"

calc_scores = ->
    final_scores = []

    for v,i in Object.keys scores
        final_scores.push (100*(maxscores[v]+scores[v])/(2*maxscores[v])).toFixed 1

    window.location.href = "results.html?" + "score=" + \
    final_scores.join(",") + "&edition=" + \
    if short then "s" else "f"

next_question = (val) ->
    answers[q_n] = val
    for k,v of questions[q_n].effect
        scores[k] += v*val
    q_n++
    if q_n >= questions.length
        do calc_scores
    else
        do render_question

short = document.location.search is "?s"
questions = await getJson "questions"
if short
    questions = questions.filter( (question) ->
        question.short
    )

answers = new Array questions.length

maxscores = {}
scores = {}
q_n = 0

for k,v of questions[0].effect
    scores[k] = 0 
    maxscores[k] = 0

for question in questions
    for k,v of question.effect
        maxscores[k] += Math.abs v

buttons = 
    stag : 1.0
    ag : 0.5
    neut : 0
    disag : -0.5
    stdisag : -1

for k,v of buttons
    do(k,v) ->
        obj = document.getElementById "button-" + k
        obj.addEventListener "click", -> next_question v

document.getElementById("back_button").addEventListener "click", ->
    if q_n is 0
        do window.history.back
    else
        q_n--
        for k,v of questions[q_n].effect
            scores[k] -= answers[q_n]*v
        do render_question

do render_question
