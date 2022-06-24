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
  const paragraph = document.createElement("p");
  const checkBox = document.createElement("input");
  const deleteBtn = document.createElement("button");
  const div = document.createElement("div");

  //Setting attribute and text
  checkBox.type = "checkbox";
  deleteBtn.innerText = "delete";
  paragraph.innerText = inputText.value;
  div.appendChild(paragraph);
  div.appendChild(checkBox);
  div.appendChild(deleteBtn);
  div.style.display = "flex";
  div.style.fontSize = "2em";
  todosArea.append(div);
  inputText.value = "";

  deleteBtn.addEventListener("click", () => {
    div.remove();
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
