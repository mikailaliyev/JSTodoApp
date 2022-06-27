const inputText = document.getElementById("inputText");
const todosArea = document.getElementById("todos");
const addBtn = document.getElementById("addBtn");

// adding flex box to new todos
todosArea.style.display = "flex";
todosArea.style.flexDirection = "column";

// const checkBox = document.getElementById("checkbox");
const testText = document.getElementById("test");

// const deleteBtn = document.getElementById("deleteBtn");
const pars = document.querySelectorAll("p");

const creatingElements = (event) => {
  //Creating element for each todo
  const paragraph = document.createElement("textarea");
  const checkBox = document.createElement("input");
  const deleteBtn = document.createElement("button");
  const div = document.createElement("div");

  //Setting attribute and text
  checkBox.type = "checkbox";
  deleteBtn.innerText = "delete";
  paragraph.innerText = inputText.value;
  div.style.display = "flex";
  div.setAttribute("class", "todo");
  paragraph.setAttribute("class", "paragraph");
  checkBox.setAttribute("id", "checkBox");
  deleteBtn.setAttribute("id", "deleteBtn");
  div.appendChild(paragraph);
  div.appendChild(checkBox);
  div.appendChild(deleteBtn);

  todosArea.append(div);
  inputText.value = "";

  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this todo?")) div.remove();
  });

  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      paragraph.style.textDecoration = "line-through";
      paragraph.style.color = "red";
    } else {
      paragraph.style.textDecoration = "none";
      paragraph.style.color = "green";
    }
  });
};

inputText.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && inputText.value) {
    creatingElements();
  }
});

addBtn.addEventListener("click", (event) => {
  if (inputText.value) {
    creatingElements();
  }
});

window.onload = () => (inputText.value = "");
