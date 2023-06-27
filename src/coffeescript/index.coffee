heads_up = document.getElementById "heads-up"
close = document.getElementById "close"

window.onload = (->
    if localStorage.getItem "dismissed-2"
        heads_up.style.display = "none"
)

close.onclick = (->
    heads_up.style.display = "none"
    localStorage.setItem "dismissed-2", true
)