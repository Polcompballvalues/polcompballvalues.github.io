var e,t,r,n,a,o,s,l,c,d,m,i,h,u,p,w,g,E,b,y,v,f,j,x,I,O,k,B,F,S,C,L,M,R,T,V;import{getJson as H,Canvas as A}from"./common.js";if(R=!0,F=(e,t)=>{var r;return r=document.getElementById("span-"+e),document.getElementById("bar-"+e).style.width=t.toFixed(1)+"%",r.innerHTML=t.toFixed(1)+"%",r.style.display=t<20?"none":"block"},b=(e,t,r)=>{var n,a,o,s,l,c,d,m,i,h,u;for(n=[],a=o=0,l=r.length;o<l;a=++o){for(u=r[a],h=0,a=s=0,c=(m=Object.keys(e)).length;s<c;a=++s)i=m[a],d=Math.abs(e[i]-u.stats[i]),h+=t[a]*Math.pow(d/100,3);n.push({name:u.name,score:h/t.length})}return n.sort(((e,t)=>e.score-t.score))},d=e=>Object.keys(e).length===M.length&&(!Object.values(e).some((e=>void 0===e))&&!!Object.values(e).every((e=>e>=0&&e<=100))),M=["spos","alle","expr","pers","horn","fame","shwr","sani","rela","fedp","actn","purp","perc","cmdy"],O=(S=new URLSearchParams(document.location.search)).get("score"),n=S.get("edition"),I=O.split(",").reduce(((e,t,r)=>({...e,[M[r]]:parseFloat(t)})),{}),document.getElementById("submit-button").addEventListener("click",(()=>R?location.href="submitter.html?score="+Object.values(I).map((e=>e.toFixed(1))).join(","):alert(o))),!d(I))throw R=!1,o="Invalid scores",alert(o),Error(o);for(V=Array(14).fill(2),T=await H("values"),C=b(I,V,await H("users")),document.getElementById("cmatch").textContent=C[0].name+": "+(100*(1-C[0].score)).toFixed(1)+"%",y=document.getElementById("other-matches"),l=m=1;m<=5;l=++m)(e=>{var t;(t=document.createElement("p")).textContent=C[e].name+": "+(100*(1-C[e].score)).toFixed(1)+"%",y.appendChild(t)})(l);for(v={edition:"s"===n?"Short test":"Full test",user:C[0].name,version:window.VERSION},r=document.getElementById("banner"),[e,s]=window.matchMedia("(prefers-color-scheme: dark)").matches?["#333","#EEE"]:["#EEE","#333"],t=new A(r,1860,800,s,e),c=i=0,u=T.length;i<u;c=++i)for(L=T[c],t.drawValues(L,c),t.drawValueBg(c),a=document.getElementById(L.name+"-label"),B=Object.keys(I)[c],x=I[B],a.textContent=L.tiers[A.findTier(x)],f=L.labels,c=h=0,p=f.length;h<p;c=++h)F(f[c],c?100-x:x);for(c=g=0,w=(j=Object.keys(I)).length;g<w;c=++g)k=j[c],t.drawScoreRect(I,T,k,c);E=()=>{var e,r,n;if(R){for(c=r=0,e=(n=Object.keys(I)).length;r<e;c=++r)k=n[c],t.drawScoreLabel(I[k],T,c);return t.drawHeader(v)}},setTimeout((()=>{var e;return e=new Event("load"),window.dispatchEvent(e),E()}),300);
//# sourceMappingURL=results.js.map