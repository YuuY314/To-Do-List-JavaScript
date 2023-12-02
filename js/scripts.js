const toggleFormBtn = document.querySelector("#toggle-task-form");
const tasks = document.querySelector("#tasks");
const addTaskForm = document.querySelector("#add-task-form");
let isHidden = true;

toggleFormBtn.addEventListener("click", () => {
    addTaskForm.classList.remove("hide");
    tasks.classList.add("hide");
});

const addTaskBtn = document.querySelector("#add-task");
const nameInput = document.querySelector("#name-task");
const descriptionInput = document.querySelector("#description-task");

addTaskBtn.addEventListener("click", () => {
    let name = nameInput.value;
    let description = descriptionInput.value;

    const task = document.createElement("div");
    const title = document.createElement("div");
    const buttons = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const check = document.createElement("button");
    const edit = document.createElement("button");
    const delet = document.createElement("button");

    h3.textContent = name;
    p.textContent = description;
    check.innerHTML = "<i class='fa-solid fa-check'></i>";
    edit.innerHTML = "<i class='fa-solid fa-pencil'></i>";
    delet.innerHTML = "<i class='fa-solid fa-trash'></i>";

    task.classList.add("task");
    title.classList.add("title");
    buttons.classList.add("buttons");
    check.classList.add("check");
    edit.classList.add("edit");
    delet.classList.add("delete");

    title.appendChild(h3);
    title.appendChild(p);
    buttons.appendChild(check);
    buttons.appendChild(edit);
    buttons.appendChild(delet);
    task.appendChild(title);
    task.appendChild(buttons);

    addTaskForm.classList.add("hide");
    tasks.classList.remove("hide");

    tasks.appendChild(task);
    nameInput.value = "";
    descriptionInput.value = "";
});

document.addEventListener("click", (e) => {
    let element = e.target; 
    let parentElement = element.closest(".task");

    if(element.classList.contains("check")){
        parentElement.classList.toggle("checked");
        if(checked){
            element.style.color = "lightgreen";
        } else {
            element.style.color = "#232323";
        }
        checked = true;
    }
});