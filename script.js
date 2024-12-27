const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const listItem = createTaskElement(taskText);
    taskList.appendChild(listItem);

    saveTasks();
    taskInput.value = "";
}

function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
        saveTasks();
    });

    listItem.appendChild(removeBtn);
    return listItem;
}

function saveTasks() {
    const tasks = Array.from(taskList.children).map((item) =>
        item.firstChild.textContent.trim()
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((taskText) => {
        const listItem = createTaskElement(taskText);
        taskList.appendChild(listItem);
    });
}
