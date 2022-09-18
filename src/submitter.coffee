submissions = 0

player = document.querySelector "lottie-player"

play_success = ->
    player.load "./assets/85185-checkmark.json"
    player.style.display = "block"
    do player.play
    player.addEventListener "complete", ->
        player.style.display = "none"

play_error = ->
    player.load "./assets/94303-failed.json"
    player.style.display = "block"
    do player.play
    player.addEventListener "complete", ->
        player.style.display = "none"

parse_scores = ->
    url_pars = new URLSearchParams document.location.search

    scores = url_pars.get("score").split(",").map((x) -> parseFloat(x))
    
    if scores.length is not 14
        throw new Error "Invalid scores"

    if not scores.every (x) -> x >= 0 and x <= 100
        throw new Error "Invalid scores"
    
    return scores

check_username = (user_name) ->
    trimmed_name = do user_name.trim
    if trimmed_name is null or trimmed_name is undefined or trimmed_name is ""
        user = prompt "You did not enter a username, please enter one and submit."
        return check_username(user)
    else
        return user_name

send_scores = (user_name) ->
    post_body = {
        name: user_name
        vals: do parse_scores
    }

    controller = new AbortController()
    timeout = setTimeout (-> do controller.abort), 10000

    params = {
        method : "POST"
        headers : { "Content-Type": "application/json; charset=utf-8" }
        signal : controller.signal
        body : JSON.stringify post_body
    }

    fetch("https://pcbval.theghostofinky.repl.co/api/", params)
        .then (resp) ->
            clearTimeout timeout
            do resp.json
        
        .then (data) ->
            if data.success
                submissions++
                do play_success
            else 
                do play_error
        
        .catch (err) ->
            console.error err
            do play_error

send_message = ->
    user_name = document.getElementById("name").value.trim()
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