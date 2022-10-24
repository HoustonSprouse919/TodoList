let task = [];
let projects = [];
let currentProjectEdit;
function projectItem(title, description){ //constructor for new book objects
  this.title= title;
  this.description= description;
  projects.push(this)
}

function taskItem(title, description, dueDate,priority,notes,arrayName){ //constructor for new book objects
    this.title= title;
    this.description= description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes= notes;
    this.checkStatus = false;
    arrayName.push(this)
  }
  new projectItem("First title", "First description");
  new projectItem("First title", "First description");
  new taskItem("go to gym", "get those gains", "every day", "2","need to eat more" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);

  function displayProjects(){
const container = document.querySelector('#projectsArea'); //selects container we are using
container.replaceChildren();
     for(let i =0; i<projects.length;i++){
          let divId = "proDivId" + i;
          function createDiv() {
            const element = document.createElement('div');
            element.setAttribute('id',divId);
             element.setAttribute('class',"projectDiv");
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
              document.querySelector("#projectsArea").appendChild(addNewButton());
          }
    }
    displayProjects(task);
    function testAddNew(){
      new projectItem("first project", "its the first");
      displayProjects()
    }

function displayTask(arrayId){
  const container = document.querySelector('#content'); //selects container we are using
container.replaceChildren();
 for(let i =0; i<arrayId.length;i++){
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
        element.append("Task: " + arrayId[i].title);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createTitle());

      
       function createDescription() {
        let element = document.createElement("p");
        element.setAttribute('class',"description");
        element.append("Description: " +arrayId[i].description)
        return element;
       }
       document.querySelector("#"+divId).appendChild(createDescription());

       function createDueDate() {
        let element = document.createElement("p");
        element.setAttribute('class',"dueDate");
        element.append("Due date: " +arrayId[i].dueDate);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createDueDate());


       function createPriority() {
        let element = document.createElement("p");
        element.setAttribute('class',"priority");
        element.append("Priority: " +arrayId[i].priority);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createPriority());

       function createNotes() {
        let element = document.createElement("p");
        element.setAttribute('class',"notes");
        element.append("Notes: " +arrayId[i].notes);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createNotes());
    }
} 
displayTask(task)



function openForm(id) {
  document.getElementById(id).style.display = "block";
}

function closeForm(id) {
  document.getElementById(id).style.display = "none";
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
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

document.querySelector("#submitChanges").addEventListener("click", () => {
  editProject(document.getElementById('projectName').value , document.getElementById('projectDesc').value)
});
document.querySelector("#submitChanges").addEventListener("click",() =>{closeForm("editProjectForm")} );
document.querySelector("#btnCancel").addEventListener("click",() =>{closeForm("editProjectForm")} );


document.querySelector("#submitNewProject").addEventListener("click", () => {
  addNewProject(document.getElementById('newProjectName').value , document.getElementById('newProjectDesc').value)
});
document.querySelector("#submitNewProject").addEventListener("click",() =>{closeForm("addNewProjectForm")} );
document.querySelector("#newProjectCancel").addEventListener("click",() =>{closeForm("addNewProjectForm")} );

