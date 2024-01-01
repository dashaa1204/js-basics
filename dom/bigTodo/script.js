function createTag(tagName, tagClass) {
  const tag = document.createElement(`${tagName}`);
  tag.setAttribute("class", `${tagClass}`);
  return tag;
}

function dragstartHandler(ev) {
  ev.dataTransfer.setData("application/my-app", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("application/my-app");
  ev.target.appendChild(document.getElementById(data));
}
const root = document.getElementById("root");
const container = createTag("div", "container");
let cards;
cards = createTag("div", "cards");
root.appendChild(container);
container.appendChild(cards);
let card;
let header;
let list;
let addBtn;
let over;
let titleCount;
let addBtnPls;

const listTitles = ["To-do", "In-progress", "Stuck", "Done"];

for (let i = 0; i < 4; i++) {
  card = createTag("div", "allcard");
  header = createTag("div", "boardHeader");
  list = createTag("div", "list");
  list.setAttribute("id", `${listTitles[i]}`);
  list.setAttribute("ondragover", "dragstartHandler(event)");
  list.setAttribute("ondrop", `dropHandler(event)`);
  addBtn = createTag("div", "addBtn");
  over = createTag("div", "over");
  titleCount = createTag("span", "count");
  addBtnPls = createTag("span", "fa-regular fa-plus");
  cards.appendChild(card);
  card.appendChild(header);
  card.appendChild(list);
  card.appendChild(addBtn);
  card.appendChild(over);
  header.innerText = listTitles[i];
  header.appendChild(titleCount);
  titleCount.innerText = "0";
  addBtn.innerText = "Add card";
  addBtn.appendChild(addBtnPls);
}

function addList() {}

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
}

let getform = document.querySelectorAll(".addBtn");
getform.forEach((a) => {
  a.addEventListener("click", visAdd);
});

let awayForm = document.getElementById("away");
awayForm.addEventListener("click", invisAdd);
const select = document.getElementById("#select");

function addCard() {
  if (titleInput.value === "") {
    helperText.style.display = "block";
    titleInput.style.border = "solid 1px red";
  } else if (descInput.value === "") {
    descHelpText.style.display = "block";
    descInput.style.border = "solid 1px red";
  } else if (statusInput.value === "") {
    statusInput.style.border = "solid 1px red";
  } else if (priorityInput.value === "") {
    priorityInput.style.border = "solid 1px red";
  } else {
    titleInput.style.border = "solid 1px grey";
    descHelpText.style.display = "none";
    descInput.style.border = "solid 1px grey";
    const card = createTag("div", "card");
    card.setAttribute("dragable", "true");
    card.setAttribute("ondragstart", "dragstartHandler(event)");
    const done = createTag("div", "done");
    done.setAttribute("id", "done");
    const symbolDone = createTag("i");
    symbolDone.setAttribute("class", "fa-solid fa-check");
    const details = createTag("div", "details");
    const actions = createTag("div", "actions");
    const detailTitle = createTag("h4", "detailTitle");
    const detailText = createTag("p", "detailText");
    const priority = createTag("div", "addedPriority");
    const exit = createTag("div", "done");
    const symbolExit = createTag("i");
    symbolExit.setAttribute("class", "fa-solid fa-x");
    const edit = createTag("div", "done");
    const symbolEdit = createTag("i");
    symbolEdit.setAttribute("class", "fa-regular fa-pen-to-square");

    list.appendChild(card);
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

    detailTitle.innerText = `${titleInput.value}`;
    detailText.innerText = `${descInput.value}`;
    priority.innerText = `${priorityInput.value}`;

    let todoList = document.querySelector(`#To-do`);
    let inprogressList = document.querySelector(`#In-progress`);
    let stuckList = document.querySelector("#Stuck");
    let doneList = document.querySelector("#Done");

    if (statusInput.value == "To do") {
      todoList.appendChild(card);
    } else if (statusInput.value == "In progress") {
      inprogressList.appendChild(card);
    } else if (statusInput.value == "Stuck") {
      stuckList.appendChild(card);
    } else if (statusInput.value == "Done") {
      doneList.appendChild(card);
    }

    invisAdd();
    done.addEventListener("click", () => {
      doneList.appendChild(card);
    });
    exit.addEventListener("click", () => {
      card.remove();
    });
  }
}

let addCards = document.querySelector(".submitBtn");
addCards.addEventListener("click", addCard);

titleInput.addEventListener("input", () => {
  helperText.style.display = "none";
});

// /* <div class="container">
//       <div class="card">
//         <div class="boardHeader">
//           To do <span class="count" id="todo-count">0 </span>
//         </div>
//         <div class="list" id="todo-list"></div>
//         <div class="addBtn">
//           <i class="fa-regular fa-plus"></i>
//           <div>Add card</div>
//         </div>
//         <div class="over"></div>
//       </div>
//       <div class="card">
//         <div class="boardHeader">
//           In progress <span class="count" id="todo-count">0 </span>
//         </div>
//         <div class="list" id="todo-list"></div>
//         <div class="addBtn">
//           <i class="fa-regular fa-plus"></i>
//           <div>Add card</div>
//         </div>
//         <div class="over"></div>
//       </div>
//       <div class="card">
//         <div class="boardHeader">
//           Stuck <span class="count" id="todo-count">0 </span>
//         </div>
//         <div class="list" id="todo-list"></div>
//         <div class="addBtn">
//           <i class="fa-regular fa-plus"></i>
//           <div>Add card</div>
//         </div>
//         <div class="over"></div>
//       </div>
//       <div class="card">
//         <div class="boardHeader">
//           Done <span class="count" id="todo-count">0 </span>
//         </div>
//         <div class="list" id="todo-list"></div>
//         <div class="addBtn">
//           <i class="fa-regular fa-plus"></i>
//           <div>Add card</div>
//         </div>
//         <div class="over"></div>
//       </div>
//     </div> */
