var e,t,r,n,o,a,s,c,d,l,i,m,h,u,E,p,w,g,v,y,b,f,I,j,x,k,B,O,F,S,C,L,M;import{getJson as R,Canvas as T}from"./common.js";if(B=(e,t)=>{var r;return r=document.getElementById("span-"+e),document.getElementById("bar-"+e).style.width=t.toFixed(1)+"%",r.innerHTML=t.toFixed(1)+"%",r.style.display=t<20?"none":"block"},w=(e,t,r)=>{var n,o,a,s,c,d,l,i,m,h,u;for(n=[],o=a=0,c=r.length;a<c;o=++a){for(u=r[o],h=0,o=s=0,d=(i=Object.keys(e)).length;s<d;o=++s)m=i[o],l=Math.abs(e[m]-u.stats[m]),h+=t[o]*Math.pow(l/100,3);n.push({name:u.name,score:h/t.length})}return n.sort(((e,t)=>e.score-t.score))},C=["spos","alle","expr","pers","horn","fame","shwr","sani","rela","fedp","actn","purp","perc","cmdy"],j=(O=new URLSearchParams(document.location.search)).get("score"),n=O.get("edition"),I=j.split(",").reduce(((e,t,r)=>({...e,[C[r]]:parseFloat(t)})),{}),!1===Object.keys(I).length)throw Error("Invalid scores");if(!Object.values(I).every((e=>e>=0&&e<=100)))throw Error("Invalid scores");for(M=Array(14).fill(2),L=await R("values"),F=w(I,M,await R("users")),document.getElementById("cmatch").textContent=F[0].name+": "+(100*(1-F[0].score)).toFixed(1)+"%",g=document.getElementById("other-matches"),s=d=1;d<=5;s=++d)(e=>{var t;(t=document.createElement("p")).textContent=F[e].name+": "+(100*(1-F[e].score)).toFixed(1)+"%",g.appendChild(t)})(s);for(v={edition:"s"===n?"Short test":"Full test",user:F[0].name,version:window.VERSION},r=document.getElementById("banner"),[e,a]=window.matchMedia("(prefers-color-scheme: dark)").matches?["#333","#EEE"]:["#EEE","#333"],t=new T(r,1860,800,a,e),c=l=0,m=L.length;l<m;c=++l)for(S=L[c],t.drawValues(S,c),t.drawValueBg(c),o=document.getElementById(S.name+"-label"),k=Object.keys(I)[c],f=I[k],o.textContent=S.tiers[T.findTier(f)],y=S.labels,c=i=0,h=y.length;i<h;c=++i)B(y[c],c?100-f:f);for(c=E=0,u=(b=Object.keys(I)).length;E<u;c=++E)x=b[c],t.drawScoreRect(I,L,x,c);document.getElementById("submit-button").addEventListener("click",(()=>location.href="submitter.html?score="+Object.values(I).map((e=>e.toFixed(1))).join(","))),p=()=>{var e,r,n;for(c=r=0,e=(n=Object.keys(I)).length;r<e;c=++r)x=n[c],t.drawScoreLabel(I[x],L,c);return t.drawHeader(v)},setTimeout((()=>{var e;return(e=document.createEvent("Event")).initEvent("load",!1,!1),window.dispatchEvent(e),p()}),300);