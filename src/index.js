let task = [];
function taskItem(title, description, dueDate,priority,notes,arrayName){ //constructor for new book objects
    this.title= title;
    this.description= description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes= notes;
    this.checkStatus = false;
    arrayName.push(this)
  }
  new taskItem("go to gym", "get those gains", "every day", "2","need to eat more" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);
  new taskItem("asdas", "asdas", "asdas", "asdas","asdas" , task);
  console.log(task)

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
        element.append(arrayId[i].title);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createTitle());

      
       function createDescription() {
        let element = document.createElement("p");
        element.append(arrayId[i].description)
        return element;
       }
       document.querySelector("#"+divId).appendChild(createDescription());

       function createDueDate() {
        let element = document.createElement("p");
        element.append(arrayId[i].dueDate);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createDueDate());


       function createPriority() {
        let element = document.createElement("p");
        element.append(arrayId[i].priority);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createPriority());

       function createNotes() {
        let element = document.createElement("p");
        element.append(arrayId[i].notes);
        return element;
       }
       document.querySelector("#"+divId).appendChild(createNotes());
    }
}

displayTask(task);