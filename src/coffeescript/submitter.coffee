lock = false
submissions = 0

player = document.querySelector "lottie-player"

download_scores = (scores) ->
    if confirm "Automatic submission of your scores failed, do you wish to download a copy of the scores to submit manually to the developers?"
        link = document.createElement "a"
        link.href = "data:text/json;charset=utf-8," + \
            encodeURIComponent JSON.stringify scores
        link.download = "scores.json"
        do link.click

play_success = ->
    player.load "./assets/85185-checkmark.json"
    player.style.display = "block"
    player.loop = false
    do player.play

    listener = ->
        player.style.display = "none"
        player.removeEventListener "complete", listener

    player.addEventListener "complete", listener

play_error = (scores) ->
    player.load "./assets/94303-failed.json"
    player.style.display = "block"
    player.loop = false
    do player.play
    
    listener = ->
        player.style.display = "none"
        download_scores scores
        player.removeEventListener "complete", listener
    
    player.addEventListener "complete", listener

        

parse_scores = ->
    url_pars = new URLSearchParams document.location.search

    raw_scores = url_pars.get("score") or ""
    scores = raw_scores.split(",").map (x) -> parseFloat x
    
    if scores.length isnt 14
        throw new Error "Invalid scores"

    if not scores.every (x) -> x >= 0 and x <= 100
        throw new Error "Invalid scores"
    
    return scores

check_username = (user_name) ->
    trimmed_name = do user_name.trim
    if trimmed_name is null or trimmed_name is undefined or trimmed_name is ""
        user = prompt "You did not enter a username, please enter one and submit."
        return check_username user
    else
        return user_name

send_scores = (user_name) ->
    try
        post_body = {
            name: user_name
            vals: do parse_scores
        }

    catch e
        console.error e
        alert e
        return

    controller = new AbortController
    timeout = setTimeout (-> do controller.abort), 10000

    params = {
        method : "POST"
        headers : { "Content-Type": "application/json; charset=utf-8" }
        signal : controller.signal
        body : JSON.stringify post_body
    }

    player.load "./assets/124239-loading-bouncy.json"
    player.style.display = "block"
    player.loop = true
    do player.play

    fetch("https://pcbval.theghostofinky.repl.co/api/", params)
        .then (resp) ->
            clearTimeout timeout
            lock = false
            do resp.json
        
        .then (data) ->
            if data.success
                submissions++
                do play_success
            else 
                play_error post_body
        
        .catch (err) ->
            clearTimeout timeout
            lock = false
            console.error err
            play_error post_body

send_message = ->
    if lock
        return
    lock = true
    user_name = do document.getElementById("name").value.trim
    if submissions > 0
        if confirm "You already submitted your scores, do you wish to submit a new time?"
            user = check_username user_name 
            send_scores user
    else
        user = check_username user_name
        if confirm "Do you confirm you wish to submit your scores under the name of \"#{user}\"?"
            send_scores user


document.getElementById("name").addEventListener "keydown", (key) ->
    if key.keyCode is 13
        do key.preventDefault
        do send_message
    
document.getElementById("send-button").addEventListener "click", ->
    do send_message