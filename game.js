const { terminal } = require('terminal-kit');
const prompt = require('prompt-sync')({ sigint: true });
const clear = require('clear-screen');

const hat = '^';
const hole = terminal.white.str('O');
const fieldCharacter = terminal.yellow.str('░');
const pathCharacter = terminal.red.str('*');
const rowNum = 10, colNum = 10;
let playing = true;

class Field {
    constructor() {
        this._field = Array(rowNum).fill().map(() => Array(colNum));
        this._locationX = Math.floor(Math.random() * colNum);
        this._locationY = Math.floor(Math.random() * rowNum);
    }

    // Set the game environment
    generateField(percentage) {
        for (let y = 0; y < rowNum; y++) {
            for (let x = 0; x < colNum; x++) {
                const prob = Math.random();
                this._field[y][x] = prob > percentage ? fieldCharacter : hole;
            }
        }

        //Setting the "hat" object
        const hatLocation = {
            x: Math.floor(Math.random() * colNum),
            y: Math.floor(Math.random() * rowNum)
        };
        //To ensure that "hat" is not at player starting point
        while (hatLocation.x == this._locationX && hatLocation.y == this._locationY) {
            hatLocation.x = Math.floor(Math.random() * colNum);
            hatLocation.y = Math.floor(Math.random() * rowNum);
        }
        //Set the "Hat" position
        this._field[hatLocation.y][hatLocation.x] = hat;

        //Set a random "Home" position before game starts
        this._field[this._locationY][this._locationX] = pathCharacter;
    }

    runGame() {
        console.log("Game start NOW!");
        console.log(`Please enter 'W' for Up, 'S' for Down, 'A' for Left or 'D' for Right`);
        console.log(`Or enter 'X' to exit`);
        this.print();
        this.askQuestion();
    }

    print() {
        const displayString = this._field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }

    askQuestion() {
        while (playing) {
            // to check if player enter W, A, S, D
            let validInput = true;
            // to end game when player enter X
            let exitGame = false;

            const direction = prompt('Which way? ').toUpperCase();
            switch (direction) {
                case 'W':
                    this._field[this._locationY][this._locationX] = fieldCharacter;
                    this._locationY -= 1;
                    break;

                case 'S':
                    this._field[this._locationY][this._locationX] = fieldCharacter;
                    this._locationY += 1;
                    break;

                case 'A':
                    this._field[this._locationY][this._locationX] = fieldCharacter;
                    this._locationX -= 1;
                    break;

                case 'D':
                    this._field[this._locationY][this._locationX] = fieldCharacter;
                    this._locationX += 1;
                    break;

                case 'X':
                    exitGame = true;
                    break;

                default:
                    console.log(`Please enter 'W', 'S', 'A', 'D' for Up, Down, Left or Right`);
                    console.log(`You can also enter 'X' to quit the game!`);
                    validInput = false;
            }

            if (exitGame == true) {
                console.log(`You have quit the game. See you next time!`);
                return;
            }

            // check for boundaries (make sure player is within the field)
            if ((this._locationY >= 0 && this._locationY < 10) && (this._locationX >= 0 && this._locationX < 10)) {
                // check if player falls into hole, game ends.
                if (this._field[this._locationY][this._locationX] == hole) {
                    console.log("Oops! You drop into a hole!");
                    playing = false;
                }
                // check if player gets hat, game ends.
                else if (this._field[this._locationY][this._locationX] == hat) {
                    this._field[this._locationY][this._locationX] == pathCharacter;
                    console.log("Congrats! You found the magic hat!");
                    playing = false;
                }
                // if player don't win/ lose/ not out of bound, player moves and waiting for the next move.
                else {
                    if (validInput == true) {
                        this._field[this._locationY][this._locationX] = pathCharacter;
                        clear();
                        this.print();
                    }
                }
            }
            // if player moves out of the boundaries, game ends.
            else {
                console.log("Oh No! You have fallen into the dark abyss..");
                playing = false;
            }
        }
    }
}


const myField = new Field();
myField.generateField(0.3);
myField.runGame();

