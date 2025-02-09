document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector(".Task");
    const addBtn = document.querySelector(".add");
    const listContainer = document.querySelector(".List-container");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const taskPara = document.createElement("p");
        taskPara.textContent = taskText;

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("bi", "bi-trash3");

        // Event listener for deleting a task
        deleteIcon.addEventListener("click", function () {
            listContainer.removeChild(taskItem);
        });

        taskItem.appendChild(taskPara);
        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(deleteIcon);

        listContainer.appendChild(taskItem);
        taskInput.value = "";
    }

    // Event listener for adding task
    addBtn.addEventListener("click", addTask);

    // Allow pressing Enter to add a task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});