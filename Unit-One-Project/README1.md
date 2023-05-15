# Task Buckets: A Task Tracking Game

Task Buckets is a fun and interactive task tracking game designed to help you stay organized and increase your productivity. The game allows you to manage your tasks in a unique way by shooting a virtual basketball into a bucket to mark a task as completed.

## Features

- Create a list of tasks for the day and assign them numbers.
- Shoot a virtual basketball into the bucket to mark a task as completed.
- Keep track of completed tasks and display your score.
- Gamified approach to task management for a more engaging experience.
- Simple gameplay mechanics and intuitive interface.
- View and manage tasks using the "Tasks" button.
- Enter task numbers and click "Shoot!" to mark tasks as completed.
- Home score represents the number of completed tasks.
- View a list of completed tasks using the "Stats" button.
- Start a new day with the "New Day" button.
- Compare your score to the previous day's score and display a message accordingly.

## Technologies Used

- JavaScript
- HTML
- CSS

## Getting Started

To access Task Buckets, visit the following link: [Task Buckets Game](https://zippy-gecko-bdfb1d.netlify.app)

## Images
<img width="1433" alt="Screenshot 2023-05-15 at 11 30 17 AM" src="https://github.com/rodriguezdevin24/devin-game-/assets/131619471/d5786afa-2b99-4a73-b827-f5fd232cbecf">
<img width="1438" alt="Screenshot 2023-05-15 at 11 30 32 AM" src="https://github.com/rodriguezdevin24/devin-game-/assets/131619471/dcf7c182-7990-4d58-8109-2ed3340930c2">
<img width="1437" alt="Screenshot 2023-05-15 at 11 30 22 AM" src="https://github.com/rodriguezdevin24/devin-game-/assets/131619471/ce70e797-6260-4429-820a-36211e505603">

## Instructions

1. Click on the "PLAY" button to start the game.
2. Read the tutorial to familiarize yourself with the game mechanics.
3. Use the "Tasks" button to manage your task list. Add, remove, or reset tasks as needed.
4. On the game screen, enter the task number in the input field and click "Shoot!" to mark it as completed.
5. The home score represents the number of completed tasks.
6. Click on the "Stats" button to view a list of completed tasks.
7. Click the "New Day" button to finish for the day or start a new day.
8. The game will compare your score to the previous day's score and display a message accordingly.

## MVP Goals

- As a player, I want the game to list out all the tasks somewhere and assign it to a number that I can input to recognize what task it is 
- As a player, I would like for the score to increase when the player inputs a task number 
- As a player, I'd like to see an animation or pop up when I score a 3 pointer
- As a player, I would like to be informed with some indication when I input a task so that I know it worked 
- As a player I would like to be able to restart the game when I press the reset button
- As a player, I'd like to have a spot where I can input tasks 
- As a player, I want the UI to be engaging and out of the way so that I enjoy the experience of playing the game.\*\*

## Stretch Goals
- As a player, I would like a new high score animation when I win the game, so that I feel good about my victory
- As a player, I would like to hear an audible swish sound when I score a basket.
- As a player, I'd like to have a score of yourself from the day before after you hit the reset button. (next day button instead?)
- As a player, I would like to play this game online so that I don't have to have my challenger sitting next to me.
- As a player, I'd like a timer of how much time I have left in the day &/or a display of the current time 

## Functionalty
1. Gets reference to html elements 
2. Initialize the variables 
3. Function start() Hides the start game screen and displays the game screen.
4. Function displayTutorialModal(): Handles the display of the tutorial modal when the tutorial button is clicked.
5. Event listeners are added for the home button, submit button, new day button, add task button, and reset button.
6. The submit button adds a task score to the tasks array, displays a score modal, updates the home score, and plays an audio.
7. The new day button determines the game result (win, loss, or tie) and displays the corresponding modal.
8. The task button and stat button display the task and stat modals, respectively.
9. The window onclick event closes the task and stat modals when clicking outside or on the close button.
10. Finally, the code updates the task list and stat list with the initial values stored in the tasks array.

## Next Steps

- Implement a login system to allow users to save their progress and access it from different devices.
- Add different skins for differnet sports
- Add different difficulty levels to provide more challenge and engagement.
- Introduce power-ups or bonuses that can be earned by completing specific tasks.
- Enhance the visual and audio effects to make the game more immersive.
- Implement a leaderboard to compare scores with other players. Make the game online
- When the day ends in a tie, go to a sudden death match where the player has to make a basket to win for the day


By continuously improving and expanding the features of Task Buckets, we aim to create a comprehensive and enjoyable task management experience that motivates users to stay organized and achieve their goals.

#References
- ChatGPT
- Bard
- Unit 1 Material, specifically addEventListeners and array iterators.
- YouTube Web Dev Simplified
