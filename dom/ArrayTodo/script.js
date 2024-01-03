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
let submitBtn = createTag("button", "submitBtn");
submitBtn.setAttribute("type", "submit");
let statusOption1 = document.createElement("option");
let statusOption2 = document.createElement("option");
let statusOption3 = document.createElement("option");
let statusOption4 = document.createElement("option");
let statusOption5 = document.createElement("option");
statusOption5.setAttribute("selected", "true");
statusOption5.setAttribute("disabled", "disabled");
let priorityOption1 = document.createElement("option");
let priorityOption2 = document.createElement("option");
let priorityOption3 = document.createElement("option");
let priorityOption4 = document.createElement("option");
priorityOption4.setAttribute("selected", "true");
priorityOption4.setAttribute("disabled", "disabled");

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
statusInput.appendChild(statusOption5);
statusInput.appendChild(statusOption1);
statusInput.appendChild(statusOption2);
statusInput.appendChild(statusOption3);
statusInput.appendChild(statusOption4);
priorityInput.appendChild(priorityOption4);
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

function visAdd() {
  addBoard.style.visibility = "visible";
}

function invisAdd() {
  statusInput.value = statusOption5;
  priorityInput.value = priorityOption4;
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
  // const randId =
  let myobject = {
    title: `${titleInput.value}`,
    description: `${descInput.value}`,
    status: `${statusInput.value}`,
    priority: `${priorityInput.value}`,
    // id: `${mathrandom}`
  };

  if (titleInput.value > "" && descInput.value > "") {
    todos.push(myobject);
  }

  console.log(todos);

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

  let myfilteredCards = [todoList, inprogList, stuckList, doneList];

  myfilteredCards.map((cards) => {
    cards.map((element, index) => {
      const card = createTag("div", "card", "card");
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
      done.addEventListener("click", () => {
        element.status = "Done";
        render();
      });

      exit.addEventListener("click", () => {
        cards.splice(index, 1);
        console.log(todos);
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

submitBtn.addEventListener("click", render);
