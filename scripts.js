const inputText = document.getElementById("inputText");
const todosArea = document.getElementById("todos");
const addBtn = document.getElementById("addBtn");

// const checkBox = document.getElementById("checkbox");
const testText = document.getElementById("test");

// const deleteBtn = document.getElementById("deleteBtn");
const pars = document.querySelectorAll("p");

const creatingElements = (event) => {
  //Creating element for each todo
  const paragraph = document.createElement("p");
  const checkBox = document.createElement("input");
  const deleteBtn = document.createElement("button");

  //Setting attribute and text
  checkBox.type = "checkbox";
  deleteBtn.innerText = "delete";
  paragraph.innerText = inputText.value;
  todosArea.appendChild(paragraph);
  todosArea.appendChild(checkBox);
  todosArea.appendChild(deleteBtn);
  inputText.value = "";
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
