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
  addBtn.innerText = "Add Button";
  addBtn.appendChild(addBtnPls);
}

function addList() {}

let addBoard = createTag("div", "addBoard");
let away = createTag("div", "away");
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

container.appendChild(addBoard);
addBoard.appendChild(away);
addBoard.appendChild(modal);
modal.appendChild(form);
form.appendChild(formTitle);
form.appendChild(description);
form.appendChild(status);
form.appendChild(priority);
formTitle.appendChild(formLabel);
formTitle.appendChild(titleInput);
formTitle.appendChild(helperText);

formLabel.innerText = "Title";
helperText.innerText = "Бөглөнө үү";

function visAdd() {
  console.log(addBtn);
  addBoard.style.visibility = "visible";
}

let aaa = document.querySelectorAll(".addBtn");
aaa.forEach((a) => {
  a.addEventListener("click", visAdd);
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
