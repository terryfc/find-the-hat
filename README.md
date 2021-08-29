# Project 2: Find the Hat game

Objective:
1. To build an interactive terminal game

Tools:
Javascript, Node.Js, Visual Studio Code

Scenario:
The 'player' has lost the hat in a field full of holes. They must navigate their way back to find the hat without stepping on the holes or go out of the field.

Game Control:
1. W,S,A,D - for up, down, left, right direction
2. X to exit the game ("You have quit the game. See you next time!")
3. Game ends when player reach the hat ("Congrats! You found the magic hat!")
4. Game ends when player step on a hole ("Oops! You drop into a hole!")
5. Game ends when player step out of the field ("Oh No! You have fallen into the dark abyss..")


Miscellaneous:
1. Colours using terminal-kit (https://www.npmjs.com/package/terminal-kit)
2. Randomize 'home' location of the player (and re-randomize hat location again if it is in same location as player's home)
3. pathCharacter(*) do not leave trails of stars behind, making it easier to see if player moves back
4. Check if player enter invalid keys, notify player to enter 'W, S, A, D' with boolean
5. implement a quit game key 'X' with boolean


Reflection:
Things I like about this project is "gaining the ability" to create and customise the game. As a gamer myself, I gained a new level of appreciation towards game creators. Initial part of the project I was struggling with understanding how 2D array works to move the player. This leads me to googling for more informations and samples to have a deeper understanding. I also seek some guidance when I am stuck, to sound out my thoughts and logic so that I can work towards a solution. 
