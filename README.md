# Cat n' Dogs Fight

[Click here to see deployed game](https://lutrx.github.io/Cat-n-Dogs-Fight/)

## Description
Cat n' Dogs Fight is a game in which the player has to move a cat horizontally and shoot up incoming dogs which appear at the top of the game and move down to the bottom. 
The player has to make sure to avoid collision with the dogs. Some dogs will not only fall down vertically, they also change their direction horizontally to make it more difficult 
shooting and avoiding them. Furthermore, the player has to catch the incoming mice which also will appear at the top of the game and move down to the bottom. A score is calculated 
according to the amount of shooted dogs and catched mice. The game ends when the cat collides with a dog.


## MVP
- one cat which moves horizontally
- the cat has to shoot the randomly incoming dogs
- randomly incoming mice have to be catched up by the cat


## Backlog
- boss feature: Bigger dog appearing 
- High Score feature


## Data structure
index.js:

- randomXNumbers ();
- direction ();
- moveCat ();
- pushArrows ();
- startGame ();


## States y States Transitions
- Game Intro
- Game Board
- Game Over


## Task
- build game intro
- build Game Screen
- build Game Over Screen
- build moveCat function
- build falling items
- build collision between cat and falling items
- build shooting ability 
- implement Score 
- implement updated Score on Game Over Screen
- implement sounds and music



## Links

- [Trello Link](https://trello.com/invite/b/ni5NpOje/ATTI785a20a3ab791d492b162a6c9b3dc0bf380D6DDA/project-1-ironhack)
- [Google Slides Link](https://docs.google.com/presentation/d/1VjMrwzpSb89X-_zEyMnzyaD-vuCzWjLw9z3dEaxKZBY/edit?usp=sharing)
- [Github repository Link](https://github.com/lutrx/Cat-n-Dogs-Fight)
- [Deployment Link](https://lutrx.github.io/Cat-n-Dogs-Fight/)