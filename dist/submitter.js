var e,o,t,r,n,s,a,l,i;i=0,s=document.querySelector("lottie-player"),o=e=>{var o;if(confirm("Automatic submission of your scores failed, do you wish to download a copy of the scores to submit manually to the developers?"))return(o=document.createElement("a")).href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),o.download="scores.json",o.click()},n=()=>(s.load("./assets/85185-checkmark.json"),s.style.display="block",s.loop=!1,s.play(),s.addEventListener("complete",(()=>s.style.display="none"))),r=e=>(s.load("./assets/94303-failed.json"),s.style.display="block",s.loop=!1,s.play(),s.addEventListener("complete",(()=>(s.style.display="none",o(e))))),t=()=>{var e;if(14!==(e=(new URLSearchParams(document.location.search).get("score")||"").split(",").map((e=>parseFloat(e)))).length)throw Error("Invalid scores");if(!e.every((e=>e>=0&&e<=100)))throw Error("Invalid scores");return e},e=o=>{var t,r;return null==(t=o.trim())||""===t?(r=prompt("You did not enter a username, please enter one and submit."),e(r)):o},l=e=>{var o,a,l,c,d;try{c={name:e,vals:t()}}catch(e){return console.error(a=e),void alert(a)}return o=new AbortController,d=setTimeout((()=>o.abort()),1e4),l={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},signal:o.signal,body:JSON.stringify(c)},s.load("./assets/124239-loading-bouncy.json"),s.style.display="block",s.loop=!0,s.play(),fetch("https://pcbval.theghostofinky.repl.co/api/",l).then((e=>(clearTimeout(d),e.json()))).then((e=>e.success?(i++,n()):r(c))).catch((e=>(console.error(e),r(c))))},a=()=>{var o,t;if(t=document.getElementById("name").value.trim(),i>0){if(confirm("You already submitted your scores, do you wish to submit a new time?"))return o=e(t),l(o)}else if(o=e(t),confirm(`Do you confirm you wish to submit your scores under the name of "${o}"?`))return l(o)},document.getElementById("name").addEventListener("keydown",(e=>{if(13===e.keyCode)return e.preventDefault(),a()})),document.getElementById("send-button").addEventListener("click",(()=>a()));
//# sourceMappingURL=submitter.js.map