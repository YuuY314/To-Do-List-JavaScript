const toggleFormBtn = document.querySelector("#toggle-task-form");
const tasks = document.querySelector("#tasks");
const addTaskForm = document.querySelector("#add-task-form");
const searchInput = document.querySelector("#search");
let taskId = 0;
let taskIdEdit = 0;

toggleFormBtn.addEventListener("click", () => {
    toFormScreen();
});

const addTaskBtn = document.querySelector("#add-task");
const cancelTaskBtn = document.querySelector("#cancel-task");
const nameInput = document.querySelector("#name-task");
const descriptionInput = document.querySelector("#description-task");

cancelTaskBtn.addEventListener("click", () => {
    toTasksScreen();
});

addTaskBtn.addEventListener("click", () => {
    if(!addTaskBtn.classList.contains("edit-task")){
        addTaskBtn.textContent = "Adicionar";
        let name = nameInput.value;
        let description = descriptionInput.value;

        const task = document.createElement("div");
        const title = document.createElement("div");
        const buttons = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const status = document.createElement("p");
        const check = document.createElement("button");
        const edit = document.createElement("button");
        const delet = document.createElement("button");

        h3.textContent = name;
        p.textContent = description;
        status.textContent = "Pendente";
        check.innerHTML = "<i class='fa-solid fa-check'></i>";
        edit.innerHTML = "<i class='fa-solid fa-pencil'></i>";
        delet.innerHTML = "<i class='fa-solid fa-trash'></i>";

        task.classList.add("task");
        title.classList.add("title");
        buttons.classList.add("buttons");
        check.classList.add("check");
        edit.classList.add("edit");
        delet.classList.add("delete");
        status.classList.add("status");

        title.appendChild(h3);
        title.appendChild(p);
        buttons.appendChild(check);
        buttons.appendChild(edit);
        buttons.appendChild(delet);
        task.appendChild(title);
        task.appendChild(buttons);
        task.appendChild(status);

        addTaskForm.classList.add("hide");
        tasks.classList.remove("hide");

        task.id = taskId;
        taskId++;
        tasks.appendChild(task);
        nameInput.value = "";
        descriptionInput.value = "";
    } else {
        toTasksScreen();
        let tasks = document.querySelectorAll(".task");
        tasks.forEach(task => {
            if(task.id == taskIdEdit){
                let title = task.firstChild;
                let taskName = title.firstChild;
                let taskDescription = title.lastChild;
                taskName.textContent = nameInput.value;
                taskDescription.textContent = descriptionInput.value;
            }
        });
        nameInput.value = "";
        descriptionInput.value = "";
        addTaskBtn.textContent = "Adicionar";
        addTaskBtn.classList.remove("edit-task");
    }
});

function toFormScreen() {
    addTaskForm.classList.remove("hide");
    tasks.classList.add("hide");
}

function toTasksScreen() {
    addTaskForm.classList.add("hide");
    tasks.classList.remove("hide");
}

function searchTask(search) {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        const taskName = task.querySelector("h3").innerText.toLowerCase();
        task.style.display = "flex";
        if(!taskName.includes(search)){
            task.style.display = "none";
        }
    });
}

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
    searchTask(search);
});

document.addEventListener("click", (e) => {
    let element = e.target;
    let parentElement = element.closest(".task");

    if(element.classList.contains("check")){
        parentElement.classList.toggle("checked");
        let statusElement = parentElement.lastChild;
        if(parentElement.classList.contains("checked")){
            statusElement.textContent = "Concluído";
        } else {
            statusElement.textContent = "Pendente";
        }
    }

    if(element.classList.contains("edit")){
        toFormScreen();

        let addTaskBtn = document.querySelector("#add-task");
        addTaskBtn.classList.add("edit-task");
        addTaskBtn.textContent = "Atualizar";

        let title = parentElement.firstChild;
        let taskName = title.firstChild.textContent;
        let taskDescription = title.lastChild.textContent;
        taskIdEdit = parentElement.id;
        nameInput.value = taskName;
        descriptionInput.value = taskDescription;
    }

    if(element.classList.contains("delete")){
        parentElement.remove();
    }
});