var e,t,r,o,n,a,s,l;l=0,n=document.querySelector("lottie-player"),o=()=>(n.load("./assets/85185-checkmark.json"),n.style.display="block",n.play(),n.addEventListener("complete",(()=>n.style.display="none"))),r=()=>(n.load("./assets/94303-failed.json"),n.style.display="block",n.play(),n.addEventListener("complete",(()=>n.style.display="none"))),t=()=>{var e;if(!1===(e=(new URLSearchParams(document.location.search).get("score")||"").split(",").map((e=>parseFloat(e)))).length)throw Error("Invalid scores");if(!e.every((e=>e>=0&&e<=100)))throw Error("Invalid scores");return e},e=t=>{var r,o;return null==(r=t.trim())||""===r?(o=prompt("You did not enter a username, please enter one and submit."),e(o)):t},s=e=>{var n,a,s,i,c;try{i={name:e,vals:t()}}catch(e){return console.error(a=e),void alert(a)}return n=new AbortController,c=setTimeout((()=>n.abort()),1e4),s={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},signal:n.signal,body:JSON.stringify(i)},fetch("https://pcbval.theghostofinky.repl.co/api/",s).then((e=>(clearTimeout(c),e.json()))).then((e=>e.success?(l++,o()):r())).catch((e=>(console.error(e),r())))},a=()=>{var t,r;if(r=document.getElementById("name").value.trim(),l>0){if(confirm("You already submitted your scores, do you wish to submit a new time?"))return t=e(r),s(t)}else if(t=e(r),confirm(`Do you confirm you wish to submit your scores under the name of "${t}"?`))return s(t)},document.getElementById("name").addEventListener("keydown",(e=>{if(13===e.keyCode)return e.preventDefault(),a()})),document.getElementById("send-button").addEventListener("click",(()=>a()));
//# sourceMappingURL=submitter.js.map