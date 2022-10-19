let task = [];
let projects = [];
let currentProjectEdit = 0;
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
  new projectItem("first project", "its the first");
  new taskItem("go to gym", "get those gains", "every day", "2","need to eat more" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);

  function displayProjects(){
    const element = document.createElement('div');
     element.setAttribute('id',"projectsArea");
     document.querySelector('body').appendChild(element);
    
     for(let i =0; i<projects.length;i++){
          let divId = "divId" + i;
          function createDiv() {
            const element = document.createElement('div');
            element.setAttribute('id',divId);
             element.setAttribute('class',"projectDiv");
            return element;
           }
           document.querySelector('#projectsArea').appendChild(createDiv());
    
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
               return navButton;
            }
            document.querySelector("#"+divId).appendChild(button());

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


function displayTask(arrayId){
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
}
function editForm(i){
  console.log(i)
}

function addNewProject(projectName,projectDesc){
  new projectItem(projectName, projectDesc);
  console.log(projects);
}




function editProjectPopUp(){
  const element = document.createElement('div');
 element.setAttribute('id',"form-popup");
 document.querySelector('body').appendChild(element);

 function createForm(){
    const element = document.createElement('FORM');
    element.setAttribute('class',"form-container");
    element.setAttribute('id',"formArea");
    return element;
    }
document.querySelector('#form-popup').appendChild(createForm());

function createLabel(text, name){
  var x = document.createElement("LABEL");
  var t = document.createTextNode(text);
  x.setAttribute("for", name);
  x.appendChild(t);
  return x;
}
 
function inputArea(placeholder, name){
  let element = document.createElement("INPUT");
  element.setAttribute('id',name);
  element.setAttribute('type',"text");
  element.setAttribute('placeholder', placeholder);
  element.setAttribute('name', name);
  return element;
}
document.querySelector("#formArea").appendChild(createLabel("Title: ", "titleName"));
document.querySelector("#formArea").appendChild(inputArea("Title goes here", "titleName"));

document.querySelector("#formArea").appendChild(createLabel("Description: ", "description"));
document.querySelector("#formArea").appendChild(inputArea("Description: ", "description"));

function submitButton(){
  let button = document.createElement("button");
  button.setAttribute('class',"change");
  button.setAttribute('id',"changeButton");
  button.append("Confirm");
  button.addEventListener("click",editProject(document.getElementById('titleName').value , document.getElementById('description').value));
  button.addEventListener("click",closeForm() );
  return button;
}
   document.querySelector("#formArea").appendChild(submitButton());

}


function editProject(title, description){
  console.log(title + description)
}

function openForm() {
  document.getElementById("form-popup").style.display = "block";
}

function closeForm() {
  document.getElementById("form-popup").style.display = "none";
}
editProjectPopUp()
displayTask(task); 