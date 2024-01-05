const root = document.getElementById("root");
function createTag(tagName, tagClass, tagId) {
  const tag = document.createElement(`${tagName}`);
  if (tagClass != "" && tagClass != undefined) {
    tag.setAttribute("class", `${tagClass}`);
  }
  if (tagId != "" && tagId != undefined) {
    tag.setAttribute("id", `${tagId}`);
  }
  return tag;
}
let todos = [];

const listTitles = ["To-do", "In-progress", "Stuck", "Done"];
const container = createTag("div", "container");
const cards = createTag("div", "cards");
root.appendChild(container);
container.appendChild(cards);
let list;

for (let i = 0; i < 4; i++) {
  const cardBoard = createTag("div", "cardBoard", "cardBoard");
  cards.appendChild(cardBoard);
  const boardHeader = createTag("div", "boardHeader", "boardHeader");
  list = createTag("div", "list", `${listTitles[i]}`);
  list.setAttribute("ondrop", "drop(event)");
  list.setAttribute("ondragover", "allowDrop(event)");
  cardBoard.appendChild(boardHeader);
  cardBoard.appendChild(list);
  const addBtn = createTag("div", "addBtn", "addBtn");
  cardBoard.appendChild(addBtn);
  const over = createTag("div", "over", "over");
  cardBoard.appendChild(over);
  const titleCount = createTag("span", "count", i + 1);
  const addBtnPls = createTag("span", "fa-regular fa-plus");
  boardHeader.innerText = listTitles[i];
  titleCount.value = 0;
  titleCount.innerText = titleCount.value;
  boardHeader.appendChild(titleCount);
  addBtn.innerText = "Add card";
  addBtn.appendChild(addBtnPls);
}

let addBoard = createTag("div", "addBoard");
let away = createTag("div", "away");
away.setAttribute("id", "away");
let modal = createTag("div", "modal");
let form = createTag("div", "form");
let headerForm = createTag("h1");
let formTitle = createTag("div", "formTitle");
let description = createTag("div", "description");
let status = createTag("div", "status");
let priority = createTag("div", "priority");
let formLabel = createTag("label", "formlabel");
let titleInput = createTag("input");
titleInput.setAttribute("id", "title");
let helperText = createTag("p", "helperText");
let descLabel = createTag("label", "desclabel");
let descInput = createTag("textarea");
descInput.setAttribute("id", "description");
let descHelpText = createTag("p", "helperText");
let statusLabel = createTag("label");
let statusInput = createTag("select");
statusInput.setAttribute("id", "status");
let priorityLabel = createTag("label", "priorityLabel");
let priorityInput = createTag("select");
priorityInput.setAttribute("id", "priority");
let submitBtn = createTag("button", "submitBtn", "submitBtn");
submitBtn.setAttribute("type", "submit");
let statusOption1 = document.createElement("option");
let statusOption2 = document.createElement("option");
let statusOption3 = document.createElement("option");
let statusOption4 = document.createElement("option");
statusOption1.setAttribute("selected", "true");
let priorityOption1 = document.createElement("option");
let priorityOption2 = document.createElement("option");
let priorityOption3 = document.createElement("option");
let priorityOption4 = document.createElement("option");
priorityOption1.setAttribute("selected", "true");

container.appendChild(addBoard);
addBoard.appendChild(away);
addBoard.appendChild(modal);
modal.appendChild(form);
form.appendChild(headerForm);
form.appendChild(formTitle);
form.appendChild(description);
form.appendChild(status);
form.appendChild(priority);
formTitle.appendChild(formLabel);
formTitle.appendChild(titleInput);
formTitle.appendChild(helperText);
description.appendChild(descLabel);
description.appendChild(descInput);
description.appendChild(descHelpText);
status.appendChild(statusLabel);
status.appendChild(statusInput);
priority.appendChild(priorityLabel);
priority.appendChild(priorityInput);
form.appendChild(submitBtn);
statusInput.appendChild(statusOption1);
statusInput.appendChild(statusOption2);
statusInput.appendChild(statusOption3);
statusInput.appendChild(statusOption4);
priorityInput.appendChild(priorityOption1);
priorityInput.appendChild(priorityOption2);
priorityInput.appendChild(priorityOption3);
headerForm.innerText = "Add Task";
formLabel.innerText = "Title";
helperText.innerText = "Бөглөнө үү";
descLabel.innerText = "Description";
statusLabel.innerText = "Status";
priorityLabel.innerText = "Priority";
descHelpText.innerText = "Бөглөнө үү";
submitBtn.innerText = "Add Task";
statusOption1.innerText = "To do";
statusOption2.innerText = "In progress";
statusOption3.innerText = "Stuck";
statusOption4.innerText = "Done";
priorityOption1.innerText = "Low";
priorityOption2.innerText = "Medium";
priorityOption3.innerText = "High";

function editTask(a) {
  headerForm.innerText = "Edit task";
  submitBtn.innerText = "Save";
  submitBtn.setAttribute("id", "editBtn");
  let editBtn = document.querySelector("#editBtn");

  visAdd();
}

function deleted(a) {
  a.title = "Deleted";
}

function visAdd() {
  addBoard.style.visibility = "visible";
}

function invisAdd() {
  addBoard.style.visibility = "hidden";
  titleInput.value = "";
  descInput.value = "";
  statusInput.style.border = "solid 1px grey";
  priorityInput.style.border = "solid 1px grey";
  helperText.style.display = "none";
  titleInput.style.border = "1px solid rgb(165, 165, 165)";
  descHelpText.style.display = "none";
  descInput.style.border = "1px solid rgb(165, 165, 165)";
}

let getform = document.querySelectorAll(".addBtn");
getform.forEach((a) => {
  a.addEventListener("click", visAdd);
});

let awayForm = document.getElementById("away");
awayForm.addEventListener("click", invisAdd);
const select = document.getElementById("#select");

function render() {
  const todoOut = document.querySelector(`#To-do`);
  const inprogOut = document.querySelector(`#In-progress`);
  const stuckOut = document.querySelector("#Stuck");
  const doneOut = document.querySelector("#Done");
  todoOut.innerHTML = "";
  inprogOut.innerHTML = "";
  stuckOut.innerHTML = "";
  doneOut.innerHTML = "";
  let myobject = {
    title: `${titleInput.value}`,
    description: `${descInput.value}`,
    status: `${statusInput.value}`,
    priority: `${priorityInput.value}`,
    priorityIndex: ``,
  };

  function createProirIndex() {
    if (myobject.priority == `High`) {
      myobject.priorityIndex = `30`;
    } else if (myobject.priority == `Medium`) {
      myobject.priorityIndex = `20`;
    } else if (myobject.priority == `Low`) {
      myobject.priorityIndex = `10`;
    }
  }

  createProirIndex();

  if (titleInput.value > "" && descInput.value > "") {
    todos.push(myobject);
    console.log(todos);
  } else {
    if (titleInput.value == "") {
      helperText.style.display = "block";
      titleInput.style.border = "1px solid red";
    }
    if (descInput.value == "") {
      descHelpText.style.display = "block";
      descInput.style.border = "1px solid red";
    } else {
      descHelpText.style.display = "none";
    }
  }

  titleInput.addEventListener("input", () => {
    titleInput.style.border = "1px solid rgb(165, 165, 165)";
    helperText.style.display = "none";
  });
  descInput.addEventListener("input", () => {
    descInput.style.border = "1px solid rgb(165, 165, 165)";
    descHelpText.style.display = "none";
  });

  todos = todos.filter((todos) => {
    return todos.title != "Deleted";
  });

  let todoList = todos.filter((todos) => {
    return todos.status == "To do";
  });
  let inprogList = todos.filter((todos) => {
    return todos.status == "In progress";
  });
  let stuckList = todos.filter((todos) => {
    return todos.status == "Stuck";
  });
  let doneList = todos.filter((todos) => {
    return todos.status == "Done";
  });

  document.getElementById("1").innerText = todoList.length;
  document.getElementById("2").innerText = inprogList.length;
  document.getElementById("3").innerText = stuckList.length;
  document.getElementById("4").innerText = doneList.length;

  let myfilteredCards = [todoList, inprogList, stuckList, doneList];

  myfilteredCards.map((cards) => {
    cards = cards.sort((a, b) => {
      return b.priorityIndex - a.priorityIndex;
    });
    cards.map((element) => {
      const card = createTag("div", "card", "card");
      card.setAttribute("draggable", "true");
      card.setAttribute("ondragstart", "drag(event)");
      const done = createTag("div", "done", "done");
      const symbolDone = createTag("i", "fa-solid fa-check");
      const details = createTag("div", "details", "details");
      const actions = createTag("div", "actions", "actions");
      let detailTitle = createTag("div", "detailTitle", "detailTitle");
      let detailText = createTag("p", "detailText", "detailText");
      let priority = createTag("div", "addedPriority");
      const exit = createTag("div", "done");
      const symbolExit = createTag("i", "fa-solid fa-x");
      const edit = createTag("div", "done");
      const symbolEdit = createTag("i", "fa-regular fa-pen-to-square");
      card.appendChild(done);
      done.appendChild(symbolDone);
      card.appendChild(details);
      card.appendChild(actions);
      details.appendChild(detailTitle);
      details.appendChild(detailText);
      details.appendChild(priority);
      actions.appendChild(exit);
      exit.appendChild(symbolExit);
      actions.appendChild(edit);
      edit.appendChild(symbolEdit);

      detailTitle.innerText = `${element.title}`;
      detailText.innerText = `${element.description}`;
      priority.innerText = `${element.priority}`;
      // card.addEventListener("drop", () => {
      //   console.log(drop);
      // });
      // edit.addEventListener("click", (()=>{
      //   titleInput.style.
      // }))

      edit.addEventListener("click", editTask);

      done.addEventListener("click", () => {
        element.status = "Done";
        render();
      });

      exit.addEventListener("click", () => {
        deleted(element);
        render();
      });

      if (cards == todoList) {
        todoOut.appendChild(card);
      } else if (cards == inprogList) {
        inprogOut.appendChild(card);
      } else if (cards == stuckList) {
        stuckOut.appendChild(card);
      } else if (cards == doneList) {
        doneOut.appendChild(card);
      }

      invisAdd();
    });
  });
}

let addbtn = document.querySelector("#submitBtn");
addbtn.addEventListener("click", render);
