// Global Variables
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Create List Item
function createListItem(taskText) {
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  //  Toggle class when clicked
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  return listItem;
}

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = createListItem(taskText);
    taskList.appendChild(listItem);
    taskInput.value = ""; 
  }
}

// Event Listener
addTaskButton.addEventListener("click", addTask);
