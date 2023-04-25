# Documentation standards

Each program or function should have the following information:

### Goals

- What is the goal of the program or function?

### Input

- What (if any) input does the program or function accept?
  Are there any specific data types or ranges?

### Output

- What (if any) output does the program or function return.

### Steps

- What are the steps (written in English) necessary to solve
  this problem. This should NOT be programming code, but each line
  should be specific enough to be translated to a line or two of code
  in your target language.

## Documentation

- App goal: A battleship game, with a computer vs player and player vs player with pass device option
- App input: User input from DOM, placing ships and hitting the gameboard
- App output: Gameboard receives a hit or/and ship receives a hit and/or ship is sunk.
- App steps: Create a Game class, Gameboard class, Ship class, Player class

### Gameboard

- Goal: Place ships, rotate ships, receive attacks, hold ship object inside a node, the board has 10x10 nodes.
- Input: mouse drag, drop, hover, click.
- Output: A ship is placed, rotated, bombed, or missed.
- Steps: Create a node system, a node should have x and y coords, ship object or empty object, bombed boolean,

### Ship

- Goal: receive attacks, get sunk, have coords of the ship head, get rotated
- Input: Gameboard
- Output: holds ship data

### Game

- Goal:
- Input:
- Output:
- Steps:

# Player

- Goal: interact with the board using a mouse on desktop or finger on mobile device.
- Input: Mouse coords and user id
- Output: Mouse coords and user id

# Computer

- Goal: have a randomly placed gameboard with 5 ships, make a random legal move on the enemy board
- Input: random
- Output: random
- Steps: the constructor should contain a representation of the enemy board, a list of hitted slots.
  Object should contain a function that randomly hits a slot on the board.
