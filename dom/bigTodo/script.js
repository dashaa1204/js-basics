function createTag(tagName, tagClass) {
  const tag = document.createElement(`${tagName}`);
  tag.setAttribute("class", `${tagClass}`);
  return tag;
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

const listTitles = ["To-do", "In progress", "Stuck", "Done"];

for (let i = 0; i < 4; i++) {
  card = createTag("div", "card");
  header = createTag("div", "boardHeader");
  list = createTag("div", "list");
  list.setAttribute("id", `${i}`);
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
let submitBtn = document.createElement("button", "submitBtn");
submitBtn.setAttribute("type", "submit");
let statusOption1 = document.createElement("option");
let statusOption2 = document.createElement("option");
let statusOption3 = document.createElement("option");
let statusOption4 = document.createElement("option");
let priorityOption1 = document.createElement("option");
let priorityOption2 = document.createElement("option");
let priorityOption3 = document.createElement("option");

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

function visAdd() {
  addBoard.style.visibility = "visible";
}

function invisAdd() {
  addBoard.style.visibility = "hidden";
}

let getform = document.querySelectorAll(".addBtn");
getform.forEach((a) => {
  a.addEventListener("click", visAdd);
});

let awayForm = document.getElementById("away");
awayForm.addEventListener("click", invisAdd);

function alert() {
  if (titleInput.innerText == "") {
    helperText.style.display = "block";
  } else {
    helperText.style.display = "none";
  }
}

function addCard() {
  const card = createTag("div", "card");
  const done = createTag("div", "done");
  const details = createTag("div", "details");
  const actions = createTag("div", "actions");
}

addCard();

let addCards = document.querySelector("submitBtn");
addBoard.addEventListener("click", alert);

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
