short = exports ? this
users = exports ? this
score = exports ? this
#Gets variables from url query and parses them into individual variables
getQueryVariable = (variable) ->
    query = window.location.search.substring(1)
    vars = query.split("&")
    i = 0
    while i < vars.length
        pair = vars[i].split("=")
        if pair[0] is variable
            return pair[1]
        i++
    return(NaN)

#Sets the value for each bar div (if value is over 20%)
setBarValue = (name, value) ->
    innerel = document.getElementById(name)
    outerel = document.getElementById("bar-" + name)
    outerel.style.width = value + "%"
    innerel.innerHTML = value + "%"
    if value < 20
        innerel.style.display = "none"
    else
        innerel.style.display = "block"

#Jumps to submit page with url query
submit = ->
    window.location.href = "submitter.html?" \
    + window.location.search.substring(1)

#Sets the label for each axis
setLabel = (val,ary) ->
    if val > 100
        return ""
    else if val > 95 
        return ary[0]
    else if val > 85
        return ary[1]
    else if val > 75
        return ary[2]
    else if val > 65
        return ary[3]
    else if val > 55
        return ary[4]
    else if val >= 45
        return ary[5]
    else if val >= 35 
        return ary[6]
    else if val >= 25
        return ary[7]
    else if val >= 15
        return ary[8]
    else if val >= 5 
        return ary[9]
    else if val >= 0 
        return ary[10]
    else
        return ""

sortVal = (e1,e2) ->
    if e1.value < e2.value
        return -1
    if e1.value > e2.value
        return 1
    else 
        return 0

percComp = (val) ->
    if val[0].value > 14
        maxval = val[0].value
    else
        maxval = 1400
    i = 0
    while i < val.length
        val[i].value = 100 * (maxval / val[i].value)
        i++
    return val

parseR = (data) ->
    users = data
    #Defines value of each value
    score.a = parseFloat(getQueryVariable("a"))
    score.b = parseFloat(getQueryVariable("b"))
    score.c = parseFloat(getQueryVariable("c"))
    score.d = parseFloat(getQueryVariable("d"))
    score.e = parseFloat(getQueryVariable("e"))
    score.f = parseFloat(getQueryVariable("f"))
    score.g = parseFloat(getQueryVariable("g"))
    score.h = parseFloat(getQueryVariable("h"))
    score.i = parseFloat(getQueryVariable("i"))
    score.j = parseFloat(getQueryVariable("j"))
    score.k = parseFloat(getQueryVariable("k"))
    score.l = parseFloat(getQueryVariable("l"))
    score.m = parseFloat(getQueryVariable("m"))
    score.n = parseFloat(getQueryVariable("n"))
    #Detects if short test was taken
    length = getQueryVariable("z")
    if length is "s"
        short = true
    else
        short = false

    #Sets bar values for all bars
    #Left collumn
    setBarValue("sincerity", score.a.toFixed(1))
    setBarValue("jannyphobe", score.b.toFixed(1))
    setBarValue("veteran", score.c.toFixed(1))
    setBarValue("wholesome", score.d.toFixed(1))
    setBarValue("horny", score.e.toFixed(1))
    setBarValue("active", score.f.toFixed(1))
    setBarValue("standard", score.g.toFixed(1))
    setBarValue("boring", score.h.toFixed(1))
    setBarValue("liked", score.i.toFixed(1))
    setBarValue("discriminatory", score.j.toFixed(1))
    setBarValue("behaving", score.k.toFixed(1))
    setBarValue("artist", score.l.toFixed(1))
    setBarValue("pleasant", score.m.toFixed(1))
    setBarValue("funny", score.n.toFixed(1))
    #Right collumn
    setBarValue("irony", (100 - score.a ).toFixed(1))
    setBarValue("jannyphile", (100 - score.b ).toFixed(1))
    setBarValue("newbie", (100 - score.c ).toFixed(1))
    setBarValue("edgy", (100 - score.d ).toFixed(1))
    setBarValue("antihorny", (100 - score.e ).toFixed(1))
    setBarValue("lurker", (100 - score.f ).toFixed(1))
    setBarValue("wacky", (100 - score.g ).toFixed(1))
    setBarValue("schizo", (100 - score.h ).toFixed(1))
    setBarValue("disliked", (100 - score.i ).toFixed(1))
    setBarValue("inclusive", (100 - score.j ).toFixed(1))
    setBarValue("misbehaving", (100 - score.k ).toFixed(1))
    setBarValue("community", (100 - score.l ).toFixed(1))
    setBarValue("annoying", (100 - score.m ).toFixed(1))
    setBarValue("unfunny", (100 - score.n ).toFixed(1))

    #Sets label for all axis divs
    document.getElementById("seriousposting-label").innerHTML = setLabel(score.a, spos_array)
    document.getElementById("allegiance-label").innerHTML     = setLabel(score.b, alle_array)
    document.getElementById("experience-label").innerHTML     = setLabel(score.c, expr_array)
    document.getElementById("personality-label").innerHTML    = setLabel(score.d, pers_array)
    document.getElementById("hornyposting-label").innerHTML   = setLabel(score.e, horn_array)
    document.getElementById("fame-label").innerHTML           = setLabel(score.f, fame_array)
    document.getElementById("shower-label").innerHTML         = setLabel(score.g, shwr_array)
    document.getElementById("sanity-label").innerHTML         = setLabel(score.h, sani_array)
    document.getElementById("relationship-label").innerHTML   = setLabel(score.i, rela_array)
    document.getElementById("fedposting-label").innerHTML     = setLabel(score.j, fedp_array)
    document.getElementById("actions-label").innerHTML        = setLabel(score.k, actn_array)
    document.getElementById("purpose-label").innerHTML        = setLabel(score.l, purp_array)
    document.getElementById("perception-label").innerHTML     = setLabel(score.m, perc_array)
    document.getElementById("comedy-label").innerHTML         = setLabel(score.n, cmdy_array)

    #Finds closest match to this user
    i = 0
    while i < users.length
        dist = 0
        dist += Math.pow(Math.abs(users[i].stats.spos - score.a), 2)
        dist += Math.pow(Math.abs(users[i].stats.alle - score.b), 2)
        dist += Math.pow(Math.abs(users[i].stats.expr - score.c), 2)
        dist += Math.pow(Math.abs(users[i].stats.pers - score.d), 2)
        dist += Math.pow(Math.abs(users[i].stats.horn - score.e), 2)
        dist += Math.pow(Math.abs(users[i].stats.fame - score.f), 2)
        dist += Math.pow(Math.abs(users[i].stats.shwr - score.g), 2)
        dist += Math.pow(Math.abs(users[i].stats.sani - score.h), 2)
        dist += Math.pow(Math.abs(users[i].stats.rela - score.i), 2)
        dist += Math.pow(Math.abs(users[i].stats.fedp - score.j), 2)
        dist += Math.pow(Math.abs(users[i].stats.actn - score.k), 2)
        dist += Math.pow(Math.abs(users[i].stats.purp - score.l), 2)
        dist += Math.pow(Math.abs(users[i].stats.perc - score.m), 2)
        dist += Math.pow(Math.abs(users[i].stats.cmdy - score.n), 2)
        #console.log dist
        users[i].value = dist 
        i++
    users.sort(sortVal)
    users = percComp(users)

    document.getElementById("user-label").innerHTML = users[0].name
    document.getElementById("match2").innerHTML = "#{users[1].value.toFixed(1)}% - #{users[1].name}"
    document.getElementById("match3").innerHTML = "#{users[2].value.toFixed(1)}% - #{users[2].name}"
    document.getElementById("match4").innerHTML = "#{users[3].value.toFixed(1)}% - #{users[3].name}"
    document.getElementById("match5").innerHTML = "#{users[4].value.toFixed(1)}% - #{users[4].name}"
#Starts canvas element and sets darkmode to true if present
window.onload = -> 
    await fetch("dist/users.json")
        .then((response) -> do response.json)
        .then((data) -> parseR(data))
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        darkmode = true
    else
        darkmode = false
    makeUserCanvas(score,false,short,darkmode,users[0].name)