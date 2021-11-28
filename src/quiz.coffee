#Initializes questions text
init_question = ->
    document.getElementById("question-text").innerHTML = questions[qn].question #Sets question text
    document.getElementById("question-number").innerHTML = "Question " + (qn + 1) + " of " + (questions.length) # Sets question number
    #Disables middle 3 buttons and renames remaining buttons to yes and no if yesno is true
    if questions[qn].yesno is true
        document.getElementById("stragree-button").innerHTML = "Yes"
        document.getElementById("strdisag-button").innerHTML = "No"
        document.getElementById("agree-button").style.display = "none"
        document.getElementById("neutral-button").style.display = "none"
        document.getElementById("disag-button").style.display = "none"
    else
        document.getElementById("stragree-button").innerHTML = "Strongly Agree"
        document.getElementById("strdisag-button").innerHTML = "Strongly Disagree"
        document.getElementById("agree-button").style.display = "block"
        document.getElementById("neutral-button").style.display = "block"
        document.getElementById("disag-button").style.display = "block"


#Jumps to next question when option button clicked or to results if no questions are left
next_question = (mult) ->
    spos += mult*questions[qn].effect.spos
    alle += mult*questions[qn].effect.alle
    expr += mult*questions[qn].effect.expr
    pers += mult*questions[qn].effect.pers
    horn += mult*questions[qn].effect.horn
    fame += mult*questions[qn].effect.fame
    shwr += mult*questions[qn].effect.shwr
    sani += mult*questions[qn].effect.sani
    rela += mult*questions[qn].effect.rela
    fedp += mult*questions[qn].effect.fedp
    actn += mult*questions[qn].effect.actn
    purp += mult*questions[qn].effect.purp
    perc += mult*questions[qn].effect.perc
    cmdy += mult*questions[qn].effect.cmdy
    qn++
    answers.push mult
    if qn < questions.length
        do init_question
    else
        do results

#Rewinds to previous question when back button clicked (if previous answer exists)
prev_question = ->
    if answers.length is 0
        do window.history.back
    else
        qn--
        prev_answer = answers[..].pop()
        spos -= prev_answer * questions[qn].effect.spos
        alle -= prev_answer * questions[qn].effect.alle
        expr -= prev_answer * questions[qn].effect.expr
        pers -= prev_answer * questions[qn].effect.pers
        horn -= prev_answer * questions[qn].effect.horn
        fame -= prev_answer * questions[qn].effect.fame
        shwr -= prev_answer * questions[qn].effect.shwr
        sani -= prev_answer * questions[qn].effect.sani
        rela -= prev_answer * questions[qn].effect.rela
        fedp -= prev_answer * questions[qn].effect.fedp
        actn -= prev_answer * questions[qn].effect.actn
        purp -= prev_answer * questions[qn].effect.purp
        perc -= prev_answer * questions[qn].effect.perc
        cmdy -= prev_answer * questions[qn].effect.cmdy
        do answers.pop
        do init_question

#Calculates the score by diving the obtained values by the maxiumum for each axis
calc_score = (score,max) ->
    if max is 0
        return "50.0"
    else
        return (100*(max+score)/(2*max)).toFixed(1)

#Jumps to results page with the correct percentage scores for each axis
results = ->
    window.location.href = "results.html" \
        + "?a=" + calc_score(spos,max_spos) \
        + "&b=" + calc_score(alle,max_alle) \
        + "&c=" + calc_score(expr,max_expr) \
        + "&d=" + calc_score(pers,max_pers) \
        + "&e=" + calc_score(horn,max_horn) \
        + "&f=" + calc_score(fame,max_fame) \
        + "&g=" + calc_score(shwr,max_shwr) \
        + "&h=" + calc_score(sani,max_sani) \
        + "&i=" + calc_score(rela,max_rela) \
        + "&j=" + calc_score(fedp,max_fedp) \
        + "&k=" + calc_score(actn,max_actn) \
        + "&l=" + calc_score(purp,max_purp) \
        + "&m=" + calc_score(perc,max_perc) \
        + "&n=" + calc_score(cmdy,max_cmdy) \
        + "&z=" + length

#Defines each variable as 0
max_spos = max_alle = max_expr = max_pers = max_horn = max_fame = max_shwr = max_sani = max_rela = max_fedp = max_actn = max_purp = max_perc = max_cmdy =\
spos = alle = expr = pers = horn = fame = shwr = sani = rela = fedp = actn = purp = perc = cmdy = qn = 0
#Defines arrrays as empty
answers = []
shortquestions = []
questions = []
#Fetches short questions if url substring is s
if window.location.search.substring(1) is "s"
    for question in fullquestions
        if question.short is true
            shortquestions.push(question)
    questions = shortquestions;
    length = "s";
else
    questions = fullquestions;
    length = "f";

#Calculates max score for each axis
for question in questions
    max_spos += Math.abs(question.effect.spos)
    max_alle += Math.abs(question.effect.alle)
    max_expr += Math.abs(question.effect.expr)
    max_pers += Math.abs(question.effect.pers)
    max_horn += Math.abs(question.effect.horn)
    max_fame += Math.abs(question.effect.fame)
    max_shwr += Math.abs(question.effect.shwr)
    max_sani += Math.abs(question.effect.sani)
    max_rela += Math.abs(question.effect.rela)
    max_fedp += Math.abs(question.effect.fedp)
    max_actn += Math.abs(question.effect.actn)
    max_purp += Math.abs(question.effect.purp)
    max_perc += Math.abs(question.effect.perc)
    max_cmdy += Math.abs(question.effect.cmdy)
#starts the question initializer
do init_question
