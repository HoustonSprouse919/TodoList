(()=>{let e,t,n=[],d=0,c={};function r(e,t){this.title=e,this.description=t,n.push(this)}function a(){const t=document.querySelector("#projectsArea");t.replaceChildren();for(let p=0;p<n.length;p++){function r(){c[p]=[],console.log(c)}r();let y="proDivId"+p;function a(){const e=document.createElement("div");return e.setAttribute("id",y),e.setAttribute("class","projectDiv"),e.addEventListener("click",(()=>{d=p,i(),console.log(d)})),e}function o(){let e=document.createElement("h2");return e.append(n[p].title),e}function u(){let e=document.createElement("p");return e.append(n[p].description),e}function l(){let t=document.createElement("button");return t.setAttribute("class","edit"),t.setAttribute("id",p),t.append("edit"),t.addEventListener("click",(()=>{s("editProjectForm")})),t.addEventListener("click",(()=>{e=p})),t}function m(){let e=document.createElement("button");return e.setAttribute("id","addNewButton"),e.append("Add new project"),e.addEventListener("click",(()=>{s("addNewProjectForm")})),e}t.appendChild(a()),document.querySelector("#"+y).appendChild(o()),document.querySelector("#"+y).appendChild(u()),document.querySelector("#"+y).appendChild(l()),document.querySelector("#"+y).appendChild(m())}}function o(e,t,n,r,a){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.notes=a,this.checkStatus=!1,c[d].push(this)}function i(){const e=document.querySelector("#content");function n(){let e=document.createElement("button");return e.setAttribute("class","Task"),e.setAttribute("id","addNewTask"),e.append("edit"),e.addEventListener("click",(()=>{s("addNewTaskForm")})),e}e.replaceChildren(),document.querySelector("#content").appendChild(n());for(let m=0;m<c[d].length;m++){console.log(m);let p="taskDivId"+m;function r(){const e=document.createElement("div");return e.setAttribute("id",p),e.setAttribute("class","taskDiv"),e}function a(){let e=document.createElement("h2");return e.setAttribute("class","title"),e.append("Task: "+c[d][m].title),e}function o(){let e=document.createElement("p");return e.setAttribute("class","description"),e.append("Description: "+c[d][m].description),e}function i(){let e=document.createElement("p");return e.setAttribute("class","dueDate"),e.append("Due date: "+c[d][m].dueDate),e}function u(){let e=document.createElement("p");return e.setAttribute("class","priority"),e.append("Priority: "+c[d][m].priority),e}function l(){let e=document.createElement("p");return e.setAttribute("class","notes"),e.append("Notes: "+c[d][m].notes),e}function n(){let e=document.createElement("button");return e.setAttribute("class","Task"),e.setAttribute("id",m),e.append("edit"),e.addEventListener("click",(()=>{s("editTaskForm"),t=m})),e}e.appendChild(r()),document.querySelector("#"+p).appendChild(a()),document.querySelector("#"+p).appendChild(o()),document.querySelector("#"+p).appendChild(i()),document.querySelector("#"+p).appendChild(u()),document.querySelector("#"+p).appendChild(l()),document.querySelector("#"+p).appendChild(n())}}function s(e){document.getElementById(e).style.display="block"}function u(e){document.getElementById(e).style.display="none"}new r("First title","First description"),new r("First title","First description"),a(),new o("asdas","asdas","asdas","asdas","asdas"),new o("asdas","asdas","asdas","asdas","asdas"),new o("asdas","asdas","asdas","asdas","asdas"),new o("asdas","asdas","asdas","asdas","asdas"),console.log(c[d]),i(),document.querySelector("#submitChanges").addEventListener("click",(()=>{var t,d;t=document.getElementById("projectName").value,d=document.getElementById("projectDesc").value,n[e].title=t,n[e].description=d,a(),u("editProjectForm")})),document.querySelector("#btnCancel").addEventListener("click",(()=>{u("editProjectForm")})),document.querySelector("#submitNewProject").addEventListener("click",(()=>{new r(document.getElementById("newProjectName").value,document.getElementById("newProjectDesc").value),a(),u("addNewProjectForm")})),document.querySelector("#cancelNewProject").addEventListener("click",(()=>{u("addNewProjectForm")})),document.querySelector("#editTaskButton").addEventListener("click",(()=>{var e,n,d,r,a;e=document.getElementById("editTaskName").value,n=document.getElementById("editTaskDesc").value,d=document.getElementById("editTaskNotes").value,r=document.getElementById("editTaskPriority").value,a=document.getElementById("editTaskDueDate").value,c[t].title=e,c[t].description=n,c[t].dueDate=d,c[t].priority=r,c[t].notes=a,c[t].checkStatus=undefined,i(),u("editTaskForm")})),document.querySelector("#cancelEditTask").addEventListener("click",(()=>{u("editTaskForm")})),document.querySelector("#submitNewTaskButton").addEventListener("click",(()=>{new o(document.getElementById("newTaskName").value,document.getElementById("newTaskDesc").value,document.getElementById("newTaskDueDate").value,document.getElementById("newTaskPriority").value,document.getElementById("newTaskNotes").value,c),i(),u("editTaskForm")})),document.querySelector("#cancelNewTaskButton").addEventListener("click",(()=>{u("addNewTaskForm")}))})();