(()=>{let e,t=[],n=[];function c(e,t){this.title=e,this.description=t,n.push(this)}function d(e,t,n,c,d,r){this.title=e,this.description=t,this.dueDate=n,this.priority=c,this.notes=d,this.checkStatus=!1,r.push(this)}function r(){const t=document.querySelector("#projectsArea");t.replaceChildren();for(let a=0;a<n.length;a++){let u="proDivId"+a;function c(){const e=document.createElement("div");return e.setAttribute("id",u),e.setAttribute("class","projectDiv"),e}function d(){let e=document.createElement("h2");return e.append(n[a].title),e}function r(){let e=document.createElement("p");return e.append(n[a].description),e}function o(){let t=document.createElement("button");return t.setAttribute("class","edit"),t.setAttribute("id",a),t.append("edit"),t.addEventListener("click",(()=>{i("editProjectForm")})),t.addEventListener("click",(()=>{e=a})),t}function s(){let e=document.createElement("button");return e.setAttribute("id","addNewButton"),e.append("Add new project"),e.addEventListener("click",(()=>{i("addNewProjectForm")})),e}t.appendChild(c()),document.querySelector("#"+u).appendChild(d()),document.querySelector("#"+u).appendChild(r()),document.querySelector("#"+u).appendChild(o()),document.querySelector("#projectsArea").appendChild(s())}}function i(e){document.getElementById(e).style.display="block"}function o(e){document.getElementById(e).style.display="none"}new c("First title","First description"),new c("First title","First description"),new d("go to gym","get those gains","every day","2","need to eat more",t),new d("asdas","asdas","asdas","asdas","asdas",t),new d("asdas","asdas","asdas","asdas","asdas",t),new d("asdas","asdas","asdas","asdas","asdas",t),r(),function(e){const t=document.querySelector("#content");t.replaceChildren();for(let s=0;s<e.length;s++){let a="taskDivId"+s;function n(){const e=document.createElement("div");return e.setAttribute("id",a),e.setAttribute("class","taskDiv"),e}function c(){let t=document.createElement("h2");return t.setAttribute("class","title"),t.append("Task: "+e[s].title),t}function d(){let t=document.createElement("p");return t.setAttribute("class","description"),t.append("Description: "+e[s].description),t}function r(){let t=document.createElement("p");return t.setAttribute("class","dueDate"),t.append("Due date: "+e[s].dueDate),t}function i(){let t=document.createElement("p");return t.setAttribute("class","priority"),t.append("Priority: "+e[s].priority),t}function o(){let t=document.createElement("p");return t.setAttribute("class","notes"),t.append("Notes: "+e[s].notes),t}t.appendChild(n()),document.querySelector("#"+a).appendChild(c()),document.querySelector("#"+a).appendChild(d()),document.querySelector("#"+a).appendChild(r()),document.querySelector("#"+a).appendChild(i()),document.querySelector("#"+a).appendChild(o())}}(t),document.querySelector("#submitChanges").addEventListener("click",(()=>{var t,c;t=document.getElementById("projectName").value,c=document.getElementById("projectDesc").value,n[e].title=t,n[e].description=c,r()})),document.querySelector("#submitChanges").addEventListener("click",(()=>{o("editProjectForm")})),document.querySelector("#btnCancel").addEventListener("click",(()=>{o("editProjectForm")})),document.querySelector("#submitNewProject").addEventListener("click",(()=>{new c(document.getElementById("newProjectName").value,document.getElementById("newProjectDesc").value),r()})),document.querySelector("#submitNewProject").addEventListener("click",(()=>{o("addNewProjectForm")})),document.querySelector("#newProjectCancel").addEventListener("click",(()=>{o("addNewProjectForm")}))})();