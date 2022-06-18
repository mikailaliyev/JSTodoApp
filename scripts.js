const inputText = document.getElementById("inputText")
const todosArea = document.getElementById("todos")
const addBtn = document.getElementById("addBtn")

addBtn.addEventListener('click', ()=> {
    const paragraph = document.createElement("p")
    paragraph.innerText = inputText.value
    todosArea.appendChild(paragraph)

})