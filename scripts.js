const inputText = document.getElementById("inputText");
const todosArea = document.getElementById("todos");
const addBtn = document.getElementById("addBtn");

// const checkBox = document.getElementById("checkbox");
const testText = document.getElementById("test");

// const deleteBtn = document.getElementById("deleteBtn");
const pars = document.querySelectorAll("p");

addBtn.addEventListener("click", (event) => {
  event.preventDefault(); // preventinf from sending form's data

  //Creating element for each todo
  const paragraph = document.createElement("p");
  const checkBox = document.createElement("input");
  const deleteBtn = document.createElement("button");

  //Setting attribute and text
  checkBox.type = "checkbox";
  deleteBtn.innerText = "delete";

  if (inputText.value) {
    paragraph.innerText = inputText.value;
    todosArea.appendChild(paragraph);
    todosArea.appendChild(checkBox);
    todosArea.appendChild(deleteBtn);
  }
});



window.onload = () => inputText.value = "";
