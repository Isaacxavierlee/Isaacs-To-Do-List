const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === '') {
        alert("Stop Spamming and Type something you Miscreant!!");
    } else {
        const li = document.createElement("li");
        
        // Create a span for the delete button
        const deleteSpan = document.createElement("span");
        deleteSpan.textContent = "✅"; // Display "X" for the delete button

        // Add a class to the delete span for styling
        deleteSpan.classList.add("delete-button");

        // Add a click event listener to delete the task
        deleteSpan.addEventListener("click", function() {
            listContainer.removeChild(li);
        });

        // Create a span for the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        li.appendChild(taskSpan); // Add task text to the task
        li.appendChild(deleteSpan); // Add delete button to the task
        listContainer.appendChild(li);
        inputBox.value = '';
    }
}

// Toggle strikethrough when clicking on a task
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN" && e.target.parentElement.tagName === "LI") {
        e.target.parentElement.classList.toggle("checked");
    }
});

// Allow Enter key to add a task
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
