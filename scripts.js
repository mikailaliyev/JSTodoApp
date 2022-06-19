const inputText = document.getElementById("inputText");
const todosArea = document.getElementById("todos");
const addBtn = document.getElementById("addBtn");
const checkBox = document.getElementById("checkbox");
const testText = document.getElementById("test");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const paragraph = document.createElement("p");
  if (inputText.value) {
    paragraph.innerText = inputText.value;
    todosArea.appendChild(paragraph);
  }
});

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    testText.style.textDecoration = "line-through";
  } else {
    testText.style.textDecoration = "none";
  }
});
