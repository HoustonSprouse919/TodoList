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
          let divId = "divId" + i;
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
               navButton.addEventListener("click", openForm );
               navButton.addEventListener("click", () => {
               currentProjectEdit = i;
              });
               return navButton;
            }
            document.querySelector("#"+divId).appendChild(button());
            document.querySelector("#submitChanges").addEventListener("click", () => {
              editProject(document.getElementById('projectName').value , document.getElementById('projectDesc').value)
            });
            document.querySelector("#submitChanges").addEventListener("click",closeForm );



            function addNewButton(){
              let navButton = document.createElement("button");
              navButton.setAttribute('id',"addNewButton");
                 navButton.append("Add new project");
                 navButton.addEventListener("click", addNewProject);
                 return navButton;
              }
              document.querySelector("#projectsArea").appendChild(addNewButton());
          }
    }
    displayProjects();

    function testAddNew(){
      new projectItem("first project", "its the first");
      displayProjects()
    }

/*function displayTask(arrayId){
const element = document.createElement('div');
 element.setAttribute('id',"taskArea");
 document.querySelector('#content').appendChild(element);

 for(let i =0; i<arrayId.length;i++){
      let divId = "divId" + i;
      function createDiv() {
        const element = document.createElement('div');
        element.setAttribute('id',divId);
         element.setAttribute('class',"taskDiv");
        return element;
       }
       document.querySelector('#taskArea').appendChild(createDiv());

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
} */

function addNewProject(projectName,projectDesc){
  new projectItem(projectName, projectDesc);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
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


console.log(projects)

