
// Get references to HTML elements
const homeScore = document.querySelector('.home-score .score');
const opponentScore = document.querySelector('.opponent-score .score');
const numberInput = document.querySelector('#number-input');
const submitButton = document.querySelector('#submit-btn');
const scoreModal = document.querySelector('#score-modal');
const newDayButton = document.querySelector('#new-day-btn');
const winnerModal = document.querySelector('#winner-modal');
const gameLostModal = document.querySelector('#gamelost-modal');
const gameTiedModal = document.querySelector('#gametied-modal');
const taskButton = document.getElementById("task-btn");
const taskModal = document.getElementById("task-screen-modal");
const statButton = document.getElementById("stat-btn");
const statModal = document.getElementById("stat-screen-modal");
const statList = document.getElementById("stat-list");
const inputNumber = document.getElementById("number-input");
const homeButton = document.getElementById("home-btn");
const gameScreen = document.getElementById("game-screen");
const startGame = document.getElementById("start-screen");  
const audio = new Audio("./Sounds/CrowdCheering1.mp3");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const resetButton = document.getElementById("reset-btn");



let previousHomeScore = 0;  

let tasks = [];

let sessionTasks = [...tasks];


function start() {
  startGame.style.display = "none";
  gameScreen.style.display = "block";
}

function displayTutorialModal() {
  const tutorialButton = document.getElementById("tutorial-btn");
  const tutorialModal = document.getElementById("tutorial-screen-modal");

  tutorialButton.addEventListener("click", function() {
    tutorialModal.style.display = "block";
  });

  const closeButton = document.querySelector(".tutclose");
  closeButton.addEventListener("click", function() {
    tutorialModal.style.display = "none";
  });
}
homeButton.addEventListener('click', () => {
  // Hide the game screen and show the home screen
  gameScreen.style.display = 'none';
  startGame.style.display = 'block';
});

submitButton.addEventListener('click', () => {
  const taskScore = parseInt(inputNumber.value);
  if (!taskScore) {
    alert("Please enter a valid task number");
    return;
  }
  tasks.push(taskScore);
  numberInput.value = "";
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
  scoreModal.style.display = "block";
  audio.play();
  setTimeout(() => {
    scoreModal.style.display = "none";
  }, 4100);
  setTimeout(() => {
    const newScore = parseInt(homeScore.textContent) + 2;
    homeScore.textContent = newScore;
    alert("Nice Shot!");
    audio.pause();
  }, 5000);  
  const newTasks = tasks.slice(); // Create a copy of the tasks array
  statList.innerHTML = "";
  newTasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = taskScore;
    statList.appendChild(li);
  });
});
newDayButton.addEventListener("click", () => {
  // Get the current home score.
  const currentHomeScore = parseInt(homeScore.textContent);
  if (currentHomeScore > opponentScore.textContent) {
    // Display the winner modal.
    winnerModal.style.display = "block";
    // Hide the winner modal after 5 seconds.
    audio.play();
    setTimeout(() => {
      winnerModal.style.display = "none";
      // Display an alert message.
      alert("Congrats! You keep improving!");
    }, 5000);
  } else if (opponentScore.textContent > currentHomeScore) {
    // Display the game lost modal.
    gameLostModal.style.display = "block";
    setTimeout(() => {
      gameLostModal.style.display = "none";
      alert("Better luck tomorrow!");
    }, 2350);
  } else {
    // Display the game tied modal.
    gameTiedModal.style.display = "block";
    // Hide the game tied modal after 5 seconds.
    setTimeout(() => {
      gameTiedModal.style.display = "none";
      alert("You tied!")
    }, 1800);
  }

  // Set the opponent score to the previous home score.
  opponentScore.textContent = currentHomeScore;
  // Reset the home score to 0.
  homeScore.textContent = 0;
   // Clear the statList.
   tasks.length = 0;
   localStorage.removeItem("tasks");
   statList.innerHTML = "";

});


function displayTasks() {
  if(sessionTasks.length === 0) {
    return;
  }
  taskList.innerHTML = ""; // clear the task list
  for (let i = 0; i < sessionTasks.length; i++) {
    const task = sessionTasks[i];
    const taskItem = document.createElement("li");
    const taskName = document.createTextNode("Task " + (i + 1) + ": " + sessionTasks[i]);
    taskItem.appendChild(taskName);
    taskList.appendChild(taskItem);
  }
}

displayTasks(); // display the initial list of tasks

addTaskButton.addEventListener("click", function() {
  const newTaskName = taskInput.value.trim();
  if (newTaskName !== "") {
    sessionTasks.push(newTaskName); // add the task to the session array
    displayTasks();
    taskInput.value = ""; // clear the input field
  }
});

resetButton.addEventListener("click", function() {
  taskInput.value = ""; // clear the input field
  sessionTasks = [];
  tasks = []; // reset the session array to the original tasks array
  taskList.innerHTML = ""; // display the original list of tasks
});
// When the task button is clicked, show the task screen modal
taskButton.addEventListener("click", () => {
  taskModal.style.display = "block";
});

// When the user clicks on the close button or outside the modal, hide the task screen modal
window.onclick = (event) => {
  if (event.target == taskModal || event.target.classList.contains("close")) {
    taskModal.style.display = "none";
  }
  if (event.target == statModal || event.target.classList.contains("close")) {
    statModal.style.display = "none";
  }
};

function updateStatList() {
  // get all the values stored in localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  statList.innerHTML = ""; // clear the statList
  // Loop through the tasks array and add the values to the statList.
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    statList.appendChild(li);
  });
}

statButton.addEventListener("click", () => {
  statModal.style.display = "block";
  statList.innerHTML = ""; 
  updateStatList();
});
tasks.forEach(function(task) {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(task));
  taskList.appendChild(li);
});








