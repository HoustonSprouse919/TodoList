let projects = [];
let currentProjectEdit;
let currentTaskEdit;
let currentProject = 0;
let task = {};
function projectItem(title, description){ //constructor for new book objects
  this.title= title;
  this.description= description;
  projects.push(this)
}
  new projectItem("First title", "First description");
  new projectItem("First title", "First description");
  
  function displayProjects(){
const container = document.querySelector('#projectsArea'); //selects container we are using
container.replaceChildren();
     for(let i =0; i<projects.length;i++){
     
      function newTaskArray(){
      const taskArray = [];
      task[i]= taskArray;
      console.log(task)
      };
      newTaskArray();

          let divId = "proDivId" + i;
          function createDiv() {
            const element = document.createElement('div');
            element.setAttribute('id',divId);
             element.setAttribute('class',"projectDiv");
             element.addEventListener("click",()=>{ 
              currentProject = i;
              displayTask() 
            console.log(currentProject)});

            return element;
           }
           container.appendChild(createDiv());
    
           function createTitle() {
            let element = document.createElement("h2");
            element.append(projects[i].title);
            return element;
           }
           document.querySelector("#"+divId).appendChild(createTitle());
    
          
           function createDescription() {
            let element = document.createElement("p");
            element.append(projects[i].description)
            return element;
           }
           document.querySelector("#"+divId).appendChild(createDescription());

           function button(){
            let navButton = document.createElement("button");
            navButton.setAttribute('class',"edit");
            navButton.setAttribute('id',i);
               navButton.append("edit");
               navButton.addEventListener("click",()=>{ openForm("editProjectForm") });
               navButton.addEventListener("click", () => {
               currentProjectEdit = i;
              });
               return navButton;
            }
            document.querySelector("#"+divId).appendChild(button());


            function addNewButton(){
              let navButton = document.createElement("button");
              navButton.setAttribute('id',"addNewButton");
                 navButton.append("Add new project");
                 navButton.addEventListener("click",()=>{ openForm("addNewProjectForm") });
                 return navButton;
              }
              document.querySelector("#"+divId).appendChild(addNewButton());
          }
    }
    displayProjects();

    function taskItem(title, description, dueDate,priority,notes){ //constructor for new book objects
      this.title= title;
      this.description= description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes= notes;
      this.checkStatus = false;
      task[currentProject].push(this);
    }
    
    new taskItem("asdas", "asdas", "asdas", "asdas","asdas")
    new taskItem("asdas", "asdas", "asdas", "asdas","asdas")
    new taskItem("asdas", "asdas", "asdas", "asdas","asdas")
    new taskItem("asdas", "asdas", "asdas", "asdas","asdas")
console.log(task[currentProject])

    function displayTask(){
      const container = document.querySelector('#content'); //selects container we are using
    container.replaceChildren();
    
    function button(){
      let navButton = document.createElement("button");
      navButton.setAttribute('class',"Task");
      navButton.setAttribute('id',"addNewTask");
         navButton.append("edit");
         navButton.addEventListener("click", () => {
          openForm("addNewTaskForm");
        });
         return navButton;
      }
      document.querySelector("#content").appendChild(button());
    
    
     for(let i =0; i<task[currentProject].length;i++){
      console.log(i);
          let divId = "taskDivId" + i;
          function createDiv() {
            const element = document.createElement('div');
            element.setAttribute('id',divId);
             element.setAttribute('class',"taskDiv");
            return element;
           }
           container.appendChild(createDiv());

        
           function createTitle() {
            let element = document.createElement("h2");
            element.setAttribute('class',"title");
            element.append("Task: " + task[currentProject][i].title);
            return element;
           }
           document.querySelector("#"+divId).appendChild(createTitle());
          
          
           function createDescription() {
            let element = document.createElement("p");
            element.setAttribute('class',"description");
            element.append("Description: " +task[currentProject][i].description)
            return element;
           }
           document.querySelector("#"+divId).appendChild(createDescription());
    
           function createDueDate() {
            let element = document.createElement("p");
            element.setAttribute('class',"dueDate");
            element.append("Due date: " +task[currentProject][i].dueDate);
            return element;
           }
           document.querySelector("#"+divId).appendChild(createDueDate());
    
    
           function createPriority() {
            let element = document.createElement("p");
            element.setAttribute('class',"priority");
            element.append("Priority: " +task[currentProject][i].priority);
            return element;
           }
           document.querySelector("#"+divId).appendChild(createPriority());
    
           function createNotes() {
            let element = document.createElement("p");
            element.setAttribute('class',"notes");
            element.append("Notes: " +task[currentProject][i].notes);
            return element;
           }
           document.querySelector("#"+divId).appendChild(createNotes());
    
           function button(){
            let navButton = document.createElement("button");
            navButton.setAttribute('class',"Task");
            navButton.setAttribute('id',i);
               navButton.append("edit");
               navButton.addEventListener("click", () => {
                openForm("editTaskForm");
                currentTaskEdit = i;
              });
               return navButton;
            }
            document.querySelector("#"+divId).appendChild(button());
        }
    }  
    displayTask() 


function openForm(id) {
  document.getElementById(id).style.display = "block";
}

function closeForm(id) {
  document.getElementById(id).style.display = "none";
}
function clearForm(){
}


function editProject(newTitle, newDescription){
  projects[currentProjectEdit].title = newTitle
  projects[currentProjectEdit].description = newDescription
  displayProjects()
}
function addNewProject(projectName,projectDesc){
  new projectItem(projectName, projectDesc);
  displayProjects()
}

function editTask(newTitle, newDescription, newDueDate, newPriority, newNotes, newCheckStatus){
  task[currentTaskEdit].title = newTitle
  task[currentTaskEdit].description = newDescription
  task[currentTaskEdit].dueDate = newDueDate;
  task[currentTaskEdit].priority = newPriority;
  task[currentTaskEdit].notes= newNotes;
  task[currentTaskEdit].checkStatus = newCheckStatus;
  displayTask(task)
}
function addNewTask(title, description, dueDate,priority,notes){
  new taskItem(title, description, dueDate,priority,notes,task);
  displayTask(task)
}

document.querySelector("#submitChanges").addEventListener("click", () => {
  editProject(document.getElementById('projectName').value , document.getElementById('projectDesc').value)
  closeForm("editProjectForm");
});
document.querySelector("#btnCancel").addEventListener("click",() =>{closeForm("editProjectForm")} );


document.querySelector("#submitNewProject").addEventListener("click", () => {
  addNewProject(document.getElementById('newProjectName').value , document.getElementById('newProjectDesc').value);
  closeForm("addNewProjectForm")
});
document.querySelector("#cancelNewProject").addEventListener("click",() =>{closeForm("addNewProjectForm")} );


document.querySelector("#editTaskButton").addEventListener("click", () => {
editTask(document.getElementById('editTaskName').value , document.getElementById('editTaskDesc').value, document.getElementById('editTaskNotes').value , document.getElementById('editTaskPriority').value, document.getElementById('editTaskDueDate').value);
  closeForm("editTaskForm")
});
document.querySelector("#cancelEditTask").addEventListener("click",() =>{closeForm("editTaskForm")} );



document.querySelector("#submitNewTaskButton").addEventListener("click", () => {
  addNewTask(document.getElementById('newTaskName').value , document.getElementById('newTaskDesc').value, document.getElementById('newTaskDueDate').value , document.getElementById('newTaskPriority').value, document.getElementById('newTaskNotes').value);
    closeForm("editTaskForm")
  });
  document.querySelector("#cancelNewTaskButton").addEventListener("click",() =>{closeForm("addNewTaskForm")} );