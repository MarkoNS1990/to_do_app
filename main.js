(()=>{"use strict";(()=>{const t=document.querySelector(".addBtn");t&&t.addEventListener("click",(()=>{const t=document.querySelector(".card-body"),e=document.createElement("input");e.classList.add("form-control"),t.appendChild(e),console.log("ffsf")}))})();var t,e=new Uint8Array(16);function n(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o=function(t){return"string"==typeof t&&a.test(t)};for(var s=[],d=0;d<256;++d)s.push((d+256).toString(16).substr(1));const r=function(t,e,a){var d=(t=t||{}).random||(t.rng||n)();if(d[6]=15&d[6]|64,d[8]=63&d[8]|128,e){a=a||0;for(var r=0;r<16;++r)e[a+r]=d[r];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!o(n))throw TypeError("Stringified UUID is invalid");return n}(d)};let c=[];class i{constructor(t){this.name=t,this.tasks=[],this.head_id=r(),this.body_id=r()}}class l{constructor(t,e,n){this.name=t,this.date=e,this.priority=n,this.id=r(),this.completed=!1}}(()=>{const t=document.querySelector("#content"),e=document.createElement("input"),n=document.createElement("button"),a=document.createElement("div");a.classList.add("d-flex"),a.appendChild(n),a.appendChild(e),e.classList.add("form-control"),e.placeholder="Enter project name",n.classList.add("btn","btn-primary","my-button"),n.innerText="+",t.appendChild(a),n.addEventListener("click",(()=>{if(""==e.value)alert("Put the project name please");else{const n=new i(e.value);c.push(n);const a=document.createElement("div");a.classList.add("card");const o=r();c.forEach((t=>{a.innerHTML=`\n            <div class='card-title'>\n               <p class='heading'>Project name: ${t.name}</p> \n                <button class='btn btn-success addBtn' data=${n.head_id}>Add task</button>\n            </div>\n            <div class='card-body' data=${o}>\n                \n            </div>\n            \n        `})),t.appendChild(a),e.value="",document.querySelector(`[data='${n.head_id}']`).addEventListener("click",(t=>{const e=r(),a=r(),s=r(),d=r(),c=document.querySelector(`[data='${o}']`);c.innerHTML=`\n            <form type='submit'>\n                  \n                <input type='text' placeholder='enter a task' class='form-control taskInput' data=${a}>\n                <input type='date' class='dateInput' data=${d}> \n                <select name='priority' class='priority' data=${s}>\n                    <option value='low'>Low</option>\n                    <option value='high'>High</option>\n                </select> \n            <button type ='submit' class='btn btn-secondary submitForm' data=${e}>Submit</button>\n            </form> \n            `;const i=document.querySelector(`[data='${e}']`),p=document.querySelector(`[data='${a}']`),m=document.querySelector(`[data='${s}']`),y=document.querySelector(`[data='${d}']`);i.addEventListener("click",(t=>{if(t.preventDefault(),""===p.value||""===y.value)alert("Please fill in all fields"),console.log("ffs");else{const t=new l(p.value,y.value,m.value);n.tasks.push(t),u(p,y,m,i);const e=r();n.tasks.forEach((t=>{c.innerHTML+=`\n                    <div class='card-item' data=${e}>${t.name} | Due date: ${t.date} | priority: ${t.priority}<button class='btn btn-danger deleteBtn' data=${t.id}>Delete</button></div>\n                `})),document.querySelector(".deleteBtn"),document.querySelectorAll(".deleteBtn").forEach((e=>{console.log(e),e.addEventListener("click",(e=>{console.log(e.target);const a=n.tasks.indexOf(t);n.tasks.splice(a,1),e.target.parentElement.remove()}))}))}}))}))}}))})();const u=(t,e,n,a)=>{t.style.display="none",e.style.display="none",n.style.display="none",a.style.display="none"}})();