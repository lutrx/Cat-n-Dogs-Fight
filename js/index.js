// Variables and constants needed for game design
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const background = new Image ();
background.src = '../images/background_game.jpg';
const startScreen = document.querySelector('.game-intro');
const gameScreen = document.querySelector('.game-board');
const gameOverScreen = document.querySelector('.game-over');
const cat = new Image ();
cat.src = '../images/cat.png';

//Variables and constants needed for game performance
let isGameOver = false;
let gameId = 0;
let catX = canvas.width - 500;
let catY = canvas.height - 220;
let catWidth = 120;
let catHeight = 150;
let bgy = 0;
let bgy2 = -canvas.width;
let isMovingLeft = false;
let isMovingRight = false;

//Functions

//Game start
window.onload = () => {
    //beides nach Styling rausnehmen:
    //startScreen.style.display = 'none';
    //gameScreen.style.display = 'none';
    //nach Style wieder aktiv setzen:
    gameOverScreen.style.display = 'none';
    document.querySelector('.start-button').onclick = () => {
        startGame();
    };

    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowRight') {
            isMovingRight = true;
        } else if (event.code === 'ArrowLeft') {
            isMovingLeft = true;
        }
    });

    document.addEventListener('keyup', () => {
        isMovingRight = false;
        isMovingLeft = false;
    })

    document.querySelector('.restart-button').onclick = () => {
        startGame();
    }

    function startGame() {
        startScreen.style.display = 'none';
        ctx.drawImage(background, bgy, 0, canvas.width, canvas.height);
        ctx.drawImage(background, bgy2, 0, canvas.width, canvas.height);
        ctx.drawImage(cat, catX, catY, catWidth, catHeight);

        //Canvas background movement:

        //bgy += 0.5;
        //bgy2 += 0.5;

        //if (bgy > canvas.width) {
        //bgy = -canvas.width;
        //}
        //if (bgy2 > canvas.width) {
        //bgy2 = -canvas.width;
        //}

        if (isGameOver) {
            cancelAnimationFrame(gameId);
          } else {
            gameId = requestAnimationFrame(startGame);
          }
        if (isMovingLeft) {
            catX -= 4;
        } else if (isMovingRight) {
            catX += 4;
        }
    }
}