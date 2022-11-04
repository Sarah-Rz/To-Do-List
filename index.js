let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDo.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  paragraph.classList.add("paragraph-style");
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through white";
  });
  paragraph.addEventListener("dblclick", () => {
    toDoContainer.removeChild(paragraph);
  });
});
