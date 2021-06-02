(()=>{"use strict";var e,t=new Uint8Array(16);function n(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(t)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o=function(e){return"string"==typeof e&&a.test(e)};for(var s=[],r=0;r<256;++r)s.push((r+256).toString(16).substr(1));const d=function(e,t,a){var r=(e=e||{}).random||(e.rng||n)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){a=a||0;for(var d=0;d<16;++d)t[a+d]=r[d];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!o(n))throw TypeError("Stringified UUID is invalid");return n}(r)};class c{constructor(e,t,n){this.name=e,this.date=t,this.priority=n,this.id=d(),this.completed=!1}}const i=[{name:"Example project",tasks:[{name:"example task"}]}];class l{constructor(e){this.name=e,this.tasks=[],this.head_id=d(),this.body_id=d()}}(()=>{const e=document.querySelector("#content"),t=document.createElement("input"),n=document.createElement("button"),a=document.createElement("div");a.classList.add("d-flex"),a.appendChild(n),a.appendChild(t),t.classList.add("form-control"),t.placeholder="Enter project name",n.classList.add("btn","btn-primary","my-button"),n.innerText="+",e.appendChild(a),window.onload=()=>{const t=JSON.parse(localStorage.getItem("projects")),n=document.createElement("div");n.classList.add("card");const a=document.createElement("div");a.innerHTML=`\n      In total there are ${t.length} projects in the LocalStorage.\n\n    `,n.innerHTML=`<div class='card-title'>\n    <p class='heading'>Project name: ${i[0].name}</p> \n     <button class='btn btn-success disabled addBtn' }>Add task</button>\n     <button class='btn btn-danger disabled deleteProjectBtn' data=$>Delete project</button>\n    </div>\n    <div class='card-body'>\n    <div class='card-item'}>${i[0].tasks[0].name} | Due date: 01-01-2022 | priority: high <button class='btn btn-danger deleteBtn disabled'>Delete</button></div>\n    </div>`,console.log(i[0].tasks[0].name),e.appendChild(a),e.appendChild(n)},n.addEventListener("click",(()=>{if(""===t.value){const t=document.createElement("div");t.innerText="Please fill in the name of the project",t.classList.add("error"),e.appendChild(t),setTimeout((()=>{t.innerText=""}),3e3)}else{const n=new l(t.value);i.push(n),(e=>{let t;t=null===localStorage.getItem("projects")?[]:JSON.parse(localStorage.getItem("projects")),t.push(e),localStorage.setItem("projects",JSON.stringify(t))})(n);const a=JSON.parse(localStorage.getItem("projects")),o=document.createElement("div");o.classList.add("card");const s=d();i.forEach((e=>{o.innerHTML=`\n            <div class='card-title'>\n               <p class='heading'>Project name: ${e.name}</p> \n                <button class='btn btn-success addBtn' data=${n.head_id}>Add task</button>\n                <button class='btn btn-danger deleteProjectBtn' data=${n.body_id}>Delete project</button>\n            </div>\n            <div class='card-body' data=${s}>\n                \n            </div>\n            \n        `})),e.appendChild(o);const r=document.querySelector(`[data='${n.body_id}']`);t.value="",r.addEventListener("click",(e=>{(e=>{const t=JSON.parse(localStorage.getItem("projects"));t.forEach((n=>{if(e.head_id===n.head_id){const e=t.indexOf(n);t.splice(e,1),localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(t))}}))})(n),e.target.parentElement.parentElement.remove()})),document.querySelector(`[data='${n.head_id}']`).addEventListener("click",(()=>{const t=d(),o=d(),r=d(),i=d(),l=document.querySelector(`[data='${s}']`);l.innerHTML=`\n            <form type='submit'>\n                  \n                <input type='text' placeholder='enter a task' class='form-control taskInput' data=${o}>\n                <input type='date' class='dateInput' data=${i}> \n                <select name='priority' class='priority' data=${r}>\n                    <option value='low'>Low</option>\n                    <option value='high'>High</option>\n                </select> \n            <button type ='submit' class='btn btn-secondary submitForm' data=${t}>Submit</button>\n            </form> \n            `;const p=document.querySelector(`[data='${t}']`),u=document.querySelector(`[data='${o}']`),m=document.querySelector(`[data='${r}']`),h=document.querySelector(`[data='${i}']`);p.addEventListener("click",(t=>{if(t.preventDefault(),""===u.value||""===h.value){const t=document.createElement("div");t.innerText="Please fill all the fields.",t.classList.add("error"),e.appendChild(t),setTimeout((()=>{t.innerText=""}),3e3)}else{const e=new c(u.value,h.value,m.value);a.forEach((t=>{if(t.head_id===n.head_id){((e,t)=>{const n=JSON.parse(localStorage.getItem("projects"));n.forEach((a=>{t.head_id===a.head_id&&(a.tasks.push(e),localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(n)))}))})(e,n),((e,t,n,a)=>{e.style.display="none",t.style.display="none",n.style.display="none",a.style.display="none"})(u,h,m,p);const t=JSON.parse(localStorage.getItem("projects")),a=d();t.forEach((t=>{t.head_id===n.head_id&&(t.tasks.forEach((e=>{l.innerHTML+=`\n                                    <div class='card-item' data=${a}>${e.name} | Due date: ${e.date} | priority: ${e.priority}<button class='btn btn-danger deleteBtn' data=${e.id}>Delete</button></div>\n                                `})),document.querySelectorAll(".deleteBtn").forEach((t=>{t.addEventListener("click",(t=>{const a=n.tasks.indexOf(e);n.tasks.splice(a,1),t.target.parentElement.remove()}))})))}))}}))}}))}))}}))})()})();