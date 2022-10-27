//still need css makeover
let projects = [];
let currentTaskEdit;
let currentProject = 0;
let task = [];

function newTaskArray() {
  //creates new array for task to go into for new projects 
  const taskArray = [];
  let j = projects.length - 1;
  task[j] = taskArray;
}
function projectItem(title, description) {
  //constructor for new project group
  this.title = title;
  this.description = description;
  projects.push(this);
  newTaskArray();
}

function taskItem(title, description, dueDate, priority, notes) {
  //constructor for new task
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checkStatus = false;
  task[currentProject].push(this);
}

//checks to see if user has saved projects and task
if (!localStorage.getItem("projectsCopy")) {
  new projectItem("First title", "First description");
  new projectItem("Second title", "Second description");
  populateStorageProjects();
} else {
  setStorageProjects();
}

if (!localStorage.getItem("taskCopy")) {
  new taskItem("first Task", "yep that's first", "yep", "first", "first");
  new taskItem("Second task", "second", "second", "second", "second");
  populateStorageTask();
} else {
  setStorageTask();
}
//populates and stores data locally for each user
function populateStorageProjects() {
  localStorage.setItem("projectsCopy", JSON.stringify(projects));
  setStorageProjects();
}
function setStorageProjects() {
  projects = JSON.parse(localStorage.getItem("projectsCopy"));
  console.log(projects);
}

function populateStorageTask() {
  localStorage.setItem("taskCopy", JSON.stringify(task));
  setStorageTask();
}
function setStorageTask() {
  task = JSON.parse(localStorage.getItem("taskCopy"));
  console.log(task);
}

function displayProjects() {
  //used to display projects array in dom
  const container = document.querySelector("#projectsArea"); 
  container.replaceChildren();

  function createTopBar() {
    const element = document.createElement("div");
    element.setAttribute("id", "projectTopBar");
    return element;
  }
  container.appendChild(createTopBar());

  function addNewButton() {
    let navButton = document.createElement("button");
    navButton.setAttribute("id", "addNewButton");
    navButton.append("Add new project");
    navButton.addEventListener("click", () => {
      closeAllForms();
      openForm("addNewProjectForm");
    });
    return navButton;
  }
  document.querySelector("#projectTopBar").appendChild(addNewButton());

  for (let i = 0; i < projects.length; i++) {
    let divId = "proDivId" + i;
    function createDiv() {
      const element = document.createElement("div");
      element.setAttribute("id", divId);
      element.setAttribute("class", "projectDiv");
      element.addEventListener("click", () => {
        currentProject = i;
        displayTask();
      });

      return element;
    }
    container.appendChild(createDiv());

    function createTitle() {
      let element = document.createElement("h2");
      element.append(projects[i].title);
      return element;
    }
    document.querySelector("#" + divId).appendChild(createTitle());

    function createDescription() {
      let element = document.createElement("p");
      element.append(projects[i].description);
      return element;
    }
    document.querySelector("#" + divId).appendChild(createDescription());

    function button() {
      let navButton = document.createElement("button");
      navButton.setAttribute("class", "edit");
      navButton.setAttribute("id", i);
      navButton.append("edit");
      navButton.addEventListener("click", () => {
        closeAllForms();
        openForm("editProjectForm");
        currentProject = i;
      });
      return navButton;
    }
    document.querySelector("#" + divId).appendChild(button());
    function deleteButton() {
      let navButton = document.createElement("button");
      navButton.setAttribute("id", "deleteButton");
      navButton.append("Delete this project");
      navButton.addEventListener("click", () => {
        closeAllForms();
        deleteProject();
      });
      return navButton;
    }
    document.querySelector("#" + divId).appendChild(deleteButton());
  }
}
displayProjects();


function displayTask() {
  //used to display current group of task in dom
  const container = document.querySelector("#content"); //selects container we are using
  container.replaceChildren();

  function createDiv() {
    const element = document.createElement("div");
    element.setAttribute("id", "topBar");
    return element;
  }
  container.appendChild(createDiv());
  function button() {
    let navButton = document.createElement("button");
    navButton.setAttribute("class", "Task");
    navButton.setAttribute("id", "addNewTask");
    navButton.append("Add new task");
    navButton.addEventListener("click", () => {
      closeAllForms();
      openForm("addNewTaskForm");
    });
    return navButton;
  }
  document.querySelector("#topBar").appendChild(button());

  for (let i = 0; i < task[currentProject].length; i++) {
    let divId = "taskDivId" + i;
    function createDiv() {
      const element = document.createElement("div");
      element.setAttribute("id", divId);
      element.setAttribute("class", "taskDiv");
      return element;
    }
    container.appendChild(createDiv());

    function createTitle() {
      let element = document.createElement("h2");
      element.setAttribute("class", "title");
      element.append("Task: " + task[currentProject][i].title);
      return element;
    }
    document.querySelector("#" + divId).appendChild(createTitle());

    function createDescription() {
      let element = document.createElement("p");
      element.setAttribute("class", "description");
      element.append("Description: " + task[currentProject][i].description);
      return element;
    }
    document.querySelector("#" + divId).appendChild(createDescription());

    function createDueDate() {
      let element = document.createElement("p");
      element.setAttribute("class", "dueDate");
      element.append("Due date: " + task[currentProject][i].dueDate);
      return element;
    }
    document.querySelector("#" + divId).appendChild(createDueDate());

    function createPriority() {
      let element = document.createElement("p");
      element.setAttribute("class", "priority");
      element.append("Priority: " + task[currentProject][i].priority);
      return element;
    }
    document.querySelector("#" + divId).appendChild(createPriority());

    function createNotes() {
      let element = document.createElement("p");
      element.setAttribute("class", "notes");
      element.append("Notes: " + task[currentProject][i].notes);
      return element;
    }
    document.querySelector("#" + divId).appendChild(createNotes());
    function createButtonDiv() {
      const element = document.createElement("div");
      element.setAttribute("id", (divId+ "buttonGroup"));
      return element;
    }
    document.querySelector("#" + divId).appendChild(createButtonDiv());
    function button() {
      let navButton = document.createElement("button");
      navButton.setAttribute("class", "Task");
      navButton.setAttribute("id", i);
      navButton.append("edit");
      navButton.addEventListener("click", () => {
        closeAllForms();
        openForm("editTaskForm");
        currentTaskEdit = i;
      });
      return navButton;
    }
    document.querySelector("#" +divId+ "buttonGroup").appendChild(button());
    function deleteButton() {
      let navButton = document.createElement("button");
      navButton.setAttribute("id", "deleteTaskButton");
      navButton.append("Delete");
      navButton.addEventListener("click", () => {
        closeAllForms();
        currentTaskEdit = i;
        deleteTask();
      });
      return navButton;
    }
    document.querySelector("#" +divId+ "buttonGroup").appendChild(deleteButton());
  }
}
displayTask();

function openForm(id) {
  //opens specified form for user
  document.getElementById(id).style.display = "block";
}

function closeForm(id) {
  //closes specified form
  document.getElementById(id).style.display = "none";
}
function closeAllForms() {
  document.getElementById("editProjectForm").style.display = "none";
  document.getElementById("addNewProjectForm").style.display = "none";
  document.getElementById("addNewTaskForm").style.display = "none";
  document.getElementById("editTaskForm").style.display = "none";
}

function editProject(newTitle, newDescription) {
  //changes attributes of current project
  projects[currentProject].title = newTitle;
  projects[currentProject].description = newDescription;
  populateStorageProjects();
  displayProjects();
}
function addNewProject(projectName, projectDesc) {
  new projectItem(projectName, projectDesc);
  populateStorageProjects();
  displayProjects();
}

function editTask(
  newTitle,
  newDescription,
  newDueDate,
  newPriority,
  newNotes,
  newCheckStatus
) {
  task[currentProject][currentTaskEdit].title = newTitle;
  task[currentProject][currentTaskEdit].description = newDescription;
  task[currentProject][currentTaskEdit].dueDate = newDueDate;
  task[currentProject][currentTaskEdit].priority = newPriority;
  task[currentProject][currentTaskEdit].notes = newNotes;
  task[currentProject][currentTaskEdit].checkStatus = newCheckStatus;
  populateStorageTask();
  displayTask();
}
function addNewTask(title, description, dueDate, priority, notes) {
  new taskItem(title, description, dueDate, priority, notes, task);
  populateStorageTask();
  displayTask();
}
function deleteProject(){
  console.log("working")
  projects.splice(currentProject,1);
  task.splice(currentProject,1)
  currentProject = 0;
  populateStorageProjects();
  populateStorageTask();
  displayProjects();
  displayTask();
}

function deleteTask(){
  task[currentProject].splice(currentTaskEdit,1)
  populateStorageTask();
  displayTask();
}
//all of these are just adding event listeners to buttons in the forms
document.querySelector("#submitChanges").addEventListener("click", () => {
  editProject(
    document.getElementById("projectName").value,
    document.getElementById("projectDesc").value
  );
  closeForm("editProjectForm");
  document.getElementById("actualEditProjectForm").reset();
});
document.querySelector("#btnCancel").addEventListener("click", () => {
  closeForm("editProjectForm");
});

document.querySelector("#submitNewProject").addEventListener("click", () => {
  addNewProject(
    document.getElementById("newProjectName").value,
    document.getElementById("newProjectDesc").value
  );
  closeForm("addNewProjectForm");
  document.getElementById("actualNewProjectForm").reset();
});
document.querySelector("#cancelNewProject").addEventListener("click", () => {
  closeForm("addNewProjectForm");
});

document.querySelector("#editTaskButton").addEventListener("click", () => {
  editTask(
    document.getElementById("editTaskName").value,
    document.getElementById("editTaskDesc").value,
    document.getElementById("editTaskNotes").value,
    document.getElementById("editTaskPriority").value,
    document.getElementById("editTaskDueDate").value
  );
  closeForm("editTaskForm");
  document.getElementById("actualEditTaskForm").reset();
});
document.querySelector("#cancelEditTask").addEventListener("click", () => {
  closeForm("editTaskForm");
});

document.querySelector("#submitNewTaskButton").addEventListener("click", () => {
  addNewTask(
    document.getElementById("newTaskName").value,
    document.getElementById("newTaskDesc").value,
    document.getElementById("newTaskDueDate").value,
    document.getElementById("newTaskPriority").value,
    document.getElementById("newTaskNotes").value
  );
  closeForm("addNewTaskForm");
  document.getElementById("actualAddNewTaskForm").reset();
});
document.querySelector("#cancelNewTaskButton").addEventListener("click", () => {
  closeForm("addNewTaskForm");
});
