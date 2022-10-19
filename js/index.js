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
let scoreOnGameOver = document.querySelector('.Score span');

//Variables and constants needed for game performance
let isGameOver = false;
let gameId = 0;
let Score = 0;

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
let dogArr = [
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
  let mouseArr = [
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
  let arrowWidth = 50;
  let arrowHeight = 50;
  let arrowY = 0;
  let arrowX = 0;

  let arrowArr = [
    { x: arrowX, y: arrowY, img: arrow },
  ]

//Variables for movement

let bgy = 0;
let bgy2 = -canvas.width;

let isMovingLeft = false;
let isMovingRight = false;
let isSpacePressed = false;
let isShooting = false;
let intervalId = 0;
let count = 0;

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

const pushArrows = (x,y) => {
    arrowArr.push({x, y, img: arrow});
    console.log(arrowArr);
}


//Game start
window.onload = () => {
    gameOverScreen.style.display = 'none';
    document.querySelector('.start-button').onclick = () => {
        startGame();
        console.log("on click start",isGameOver)
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
            arrowX = catX + 28;
            arrowY = catY - 12;
            isShooting = true;
            //intervalId = setInterval(() => {
                count += 1;
            //}, 10);
            console.log(count);
            //if (count === 1 || count % 1000 === 0)
            if (count === 1) {
                pushArrows(arrowX, arrowY);
                //clearInterval(intervalId);
            }
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            isSpacePressed = false;
            count = 0;
        }
    });

    document.querySelector('.restart-button').onclick = () => {
        isGameOver = false
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dogArr = [
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
    
      
        mouseArr = [
        { x: randomNumbersX(), y: -600, img: mouse },
        { x: randomNumbersX(), y: -1000, img: mouse },
        { x: randomNumbersX(), y: -1400, img: mouse },
        { x: randomNumbersX(), y: -1800, img: mouse },
        { x: randomNumbersX(), y: -2200, img: mouse },
        { x: randomNumbersX(), y: -2600, img: mouse },
      ];

        arrowArr = [
        { x: -10, y: -10, img: arrow },
      ];  

        Score = 0;
        startGame();
    };

    function startGame() {
        startScreen.style.display = 'none';
        gameOverScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        ctx.drawImage(background, bgy, 0, canvas.width, canvas.height);
        //ctx.drawImage(background2, bgy2, 0, canvas.width, canvas.height);
        ctx.drawImage(cat, catX, catY, catWidth, catHeight);
        //Draw Score:
        ctx.font = '30px Arial';
        ctx.fillText(`Score: ${Score}`, 50, 50);

        moveCat();

        //Dogs falling down
        for (let i = 0; i < dogArr.length; i += 1) {
            let currentDog = dogArr[i];
            ctx.drawImage(currentDog.img, currentDog.x, currentDog.y, dogWidth, dogHeight);
            currentDog.y += 3;
            if (currentDog.y > canvas.height) {
              currentDog.y = -500;
            }
            //Collision of cat with dog:
            if (
                currentDog.y + dogWidth - 20 > catY &&
                catX + catWidth > currentDog.x &&
                catX < currentDog.x + dogWidth &&
                catY + dogHeight > currentDog.y
            ) {
            isGameOver = true;
            gameScreen.style.display = 'none';
            gameOverScreen.style.display = 'block';
            scoreOnGameOver.innerHTML = Score;
            }

            for (let k = 0; k < arrowArr.length; k += 1) {
                let currentArrow = arrowArr[k];
                ctx.drawImage(currentArrow.img, currentArrow.x, currentArrow.y, arrowWidth, arrowHeight);
                currentArrow.y -= 1;

                //Collision of arrow with dog:
                if (
                    currentDog.y + dogWidth - 20 > currentArrow.y &&
                    currentArrow.x + arrowWidth > currentDog.x &&
                    currentArrow.x < currentDog.x + dogWidth &&
                    currentArrow.y + dogHeight > currentDog.y &&
                    currentDog.y > 0
                ) {
                    currentDog.y = -1000;
                    arrowArr.splice(k, 1);
                    Score += 20;
                }
            }

            
            
        }

        //Mice falling down
        for (let j = 0; j < mouseArr.length; j += 1) {
            let currentMouse = mouseArr[j];
            ctx.drawImage(currentMouse.img, currentMouse.x, currentMouse.y, mouseWidth, mouseHeight);
            currentMouse.y += 3;
            if (currentMouse.y > canvas.height) {
              currentMouse.y = -800;
            }
            //Collision of cat with mouse:
            if (
                currentMouse.y + mouseWidth > catY &&
                catX + catWidth > currentMouse.x &&
                catX < currentMouse.x + mouseWidth &&
                catY + mouseHeight > currentMouse.y
            ) {
                currentMouse.y = -800;
                Score += 10;
            }
        }

    
        if (isGameOver) {
            cancelAnimationFrame(gameId);
          } else {
            gameId = requestAnimationFrame(startGame);
          }
    }
}