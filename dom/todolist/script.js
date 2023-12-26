let root = document.getElementById("root");

function createTag(tagName, tagClass) {
  const tag = document.createElement(`${tagName}`);
  tag.setAttribute("class", `${tagClass}`);
  return tag;
}

const container = createTag("div", "container");
const header = createTag("h1", "header");
const inputCont = createTag("div", "inputCont");
const input1 = createTag("input", "input1");
const button1 = createTag("button", "button1");
const listCont = createTag("div", "listCont");
let input2;
let button3;

root.appendChild(container);
container.appendChild(header);
container.appendChild(inputCont);
container.appendChild(listCont);
inputCont.appendChild(input1);
inputCont.appendChild(button1);

header.innerText = "To-Do List";
button1.innerText = "Add Task";
input1.setAttribute("placeholder", "Enter task here");

function addlist() {
  if (input1.value == 0) {
    button1.addEventListener("click", (addlist.disabled = true));
  } else {
    const smallContList = createTag("div", "smallContList");
    input2 = createTag("input", "input2");
    const button2 = createTag("button", "button2");
    button3 = createTag("button", "edit");
    button2.innerText = "Delete";
    button3.innerText = "Edit";
    listCont.appendChild(smallContList);
    smallContList.appendChild(input2);
    input2.disabled = true;
    smallContList.appendChild(button2);
    smallContList.appendChild(button3);
    input2.value = input1.value;
    input1.value = "";

    function deleteList() {
      smallContList.remove();
    }
    button2.addEventListener("click", deleteList);

    function editList() {
      input2.disabled = false;
      const button4 = createTag("button", "save");
      smallContList.appendChild(button4);
      button4.innerText = "Save";
    }

    button3.addEventListener("click", editList);
  }
}

button1.addEventListener("click", addlist);

// {
//   /* <div class="container">
// <h1>To-Do List</h1>
// <div>
//   <input type="text" name="" id="" />
//   <button>Add Task</button>
// </div>
// <div>
//   <input type="text" />
//   <button>Delete</button>
// </div>
// </div> */
// }
