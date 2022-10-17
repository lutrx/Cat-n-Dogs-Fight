// Variables and constants needed for game design
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const background = new Image ();
background.src = '../images/background_game.jpg';
const background2 = new Image ();
background2.src = '../images/background_game.jpg';
const startScreen = document.querySelector('.game-intro');
const gameScreen = document.querySelector('.game-board');
const gameOverScreen = document.querySelector('.game-over');

//Variables and constants needed for game performance
let isGameOver = false;
let gameId = 0;

//Cat variables
const cat = new Image ();
cat.src = '../images/cat.png';
let catX = canvas.width - 500;
let catY = canvas.height - 220;
let catWidth = 120;
let catHeight = 150;

//Dog variables:
const dog = new Image ();
dog.src = '../images/anger_bulldog_head_vector_logo.jpg';
let dogWidth = 100;
let dogHeight = 130;
let dogY = 0;

//Mouse variables:
const mouse = new Image ();
mouse.src = '../images/atrk_8u30_220329.jpg';
let mouseWidth = 100;
let mouseHeight = 130;
let mouseY = 0;

//Function for creating random numbers for X:

const randomNumbersX = () => {
    return Math.random() * (canvas.width - 120 - 10) + 10;
}

//Dog array of dogs
const dogArr = [
    { x: randomNumbersX(), y: -200, img: dog },
    { x: randomNumbersX(), y: -800, img: dog },
    { x: randomNumbersX(), y: -1200, img: dog },
    { x: randomNumbersX(), y: -1600, img: dog },
    { x: randomNumbersX(), y: -2000, img: dog },
    { x: randomNumbersX(), y: -2400, img: dog },
    { x: randomNumbersX(), y: -2800, img: dog },
    { x: randomNumbersX(), y: -3200, img: dog },
    { x: randomNumbersX(), y: -3600, img: dog },
    { x: randomNumbersX(), y: -4000, img: dog },
  ];

  //Mouse array of mice
  const mouseArr = [
    { x: randomNumbersX(), y: -600, img: mouse },
    { x: randomNumbersX(), y: -1000, img: mouse },
    { x: randomNumbersX(), y: -1400, img: mouse },
    { x: randomNumbersX(), y: -1800, img: mouse },
    { x: randomNumbersX(), y: -2200, img: mouse },
    { x: randomNumbersX(), y: -2600, img: mouse },
  ]

  //Arrow variables
  const arrow = new Image ();
  arrow.src = '../images/ship_K.png';
  let arrowWidth = 20;
  let arrowHeight = 30;
  let arrowX = catX + 60;
  let arrowY = catY + 20;

let bgy = 0;
let bgy2 = -canvas.width;

let isMovingLeft = false;
let isMovingRight = false;
let isSpacePressed = false;

//Functions

const moveCat = () => {
    if (isMovingLeft) {
        if (catX > 0) {
            catX -= 4;
        }
    } else if (isMovingRight) {
        if (catX < canvas.width - catWidth) {
            catX += 4;
        }
    }
}

const shootDog = () => {
    if (isSpacePressed) {
        ctx.drawImage(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
    }
}

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
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            isSpacePressed = true;
        }
    });

    document.addEventListener('keyup', () => {
        isSpacePressed = false;
    });

    document.querySelector('.restart-button').onclick = () => {
        startGame();
    }

    function startGame() {
        startScreen.style.display = 'none';
        ctx.drawImage(background, bgy, 0, canvas.width, canvas.height);
        //ctx.drawImage(background2, bgy2, 0, canvas.width, canvas.height);
        ctx.drawImage(cat, catX, catY, catWidth, catHeight);

        moveCat();
        shootDog();

        //Dogs falling down
        for (let i = 0; i < dogArr.length; i += 1) {
            let currentDog = dogArr[i];
            ctx.drawImage(currentDog.img, currentDog.x, currentDog.y, dogWidth, dogHeight);
            currentDog.y += 3;
            if (currentDog.y > canvas.height) {
              currentDog.y = -300;
            }
        }

        //Mice falling down
        for (let j = 0; j < mouseArr.length; j += 1) {
            let currentMouse = mouseArr[j];
            ctx.drawImage(currentMouse.img, currentMouse.x, currentMouse.y, mouseWidth, mouseHeight);
            currentMouse.y += 3;
            if (currentMouse.y > canvas.height) {
              currentMouse.y = -300;
            }
        }

        if (isGameOver) {
            cancelAnimationFrame(gameId);
          } else {
            gameId = requestAnimationFrame(startGame);
          }
    }
}