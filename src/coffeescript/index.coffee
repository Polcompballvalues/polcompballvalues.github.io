heads_up = document.getElementById "heads-up"
close = document.getElementById "close"

window.onload = (->
    if localStorage.getItem "dismissed"
        heads_up.style.display = "none"
)

close.onclick = (->
    heads_up.style.display = "none"
    localStorage.setItem "dismissed", true
)