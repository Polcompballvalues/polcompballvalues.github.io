var e,o,t,r,n,s,a,l,i,c;t=!1,c=0,a=document.querySelector("lottie-player"),o=e=>{var o;if(confirm("Automatic submission of your scores failed, do you wish to download a copy of the scores to submit manually to the developers?"))return(o=document.createElement("a")).href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),o.download="scores.json",o.click()},s=()=>(a.load("./assets/85185-checkmark.json"),a.style.display="block",a.loop=!1,a.play(),a.addEventListener("complete",(()=>a.style.display="none"))),n=e=>(a.load("./assets/94303-failed.json"),a.style.display="block",a.loop=!1,a.play(),a.addEventListener("complete",(()=>(a.style.display="none",o(e))))),r=()=>{var e;if(14!==(e=(new URLSearchParams(document.location.search).get("score")||"").split(",").map((e=>parseFloat(e)))).length)throw Error("Invalid scores");if(!e.every((e=>e>=0&&e<=100)))throw Error("Invalid scores");return e},e=o=>{var t,r;return null==(t=o.trim())||""===t?(r=prompt("You did not enter a username, please enter one and submit."),e(r)):o},i=e=>{var o,l,i,d,u;try{d={name:e,vals:r()}}catch(e){return console.error(l=e),void alert(l)}return o=new AbortController,u=setTimeout((()=>o.abort()),1e4),i={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},signal:o.signal,body:JSON.stringify(d)},a.load("./assets/124239-loading-bouncy.json"),a.style.display="block",a.loop=!0,a.play(),fetch("https://pcbval.theghostofinky.repl.co/api/",i).then((e=>(clearTimeout(u),e.json()))).then((e=>(t=!1,e.success?(c++,s()):n(d)))).catch((e=>(t=!1,console.error(e),n(d))))},l=()=>{var o,r;if(!t)if(t=!0,r=document.getElementById("name").value.trim(),c>0){if(confirm("You already submitted your scores, do you wish to submit a new time?"))return o=e(r),i(o)}else if(o=e(r),confirm(`Do you confirm you wish to submit your scores under the name of "${o}"?`))return i(o)},document.getElementById("name").addEventListener("keydown",(e=>{if(13===e.keyCode)return e.preventDefault(),l()})),document.getElementById("send-button").addEventListener("click",(()=>l()));
//# sourceMappingURL=submitter.js.map