const inputAddToDo = document.querySelector(".input_add_to_do_list");
const buttonAdd = document.querySelector(".add");
const checkedToDoList = document.querySelector(".checked_to_do_list");

function addTodo() {
  if (inputAddToDo.value !== "") {
    const divTodoItem = document.createElement("div");
    divTodoItem.className = "to_do";

    const labelTodoItem = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const spanTodo = document.createElement("span");
    spanTodo.innerHTML = inputAddToDo.value;

    labelTodoItem.append(checkbox, spanTodo);

    const icon = document.createElement("i");
    icon.className = "trash fa-solid fa-trash-can";

    icon.addEventListener("click", () => {
      icon.parentElement.remove();
    });

    divTodoItem.append(labelTodoItem, icon);

    checkedToDoList.append(divTodoItem);

    inputAddToDo.value = "";
  }
}

buttonAdd.addEventListener("click", addTodo);

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
