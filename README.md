This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Boggle

Boggle is a word search game where a player find words in sequence of adjacent letters. Player gets points by building words.

# Solution Branch
### Features
**Board**
- [x] 5 x 5 board
- [x] Each tile is randomized
- [x] Board is shuffled
**Submitting Word**
- [x] Player selects a sequences of tiles to build a word, and it's shown in the Current Word section
- [x] Submit a current word will add to the word list
- [x] Duplicated words cannot be submitted
- [x] Submitting a word clears the current word and tiles
**Score**
- [x] Score is calculated based on the number of letters
**Selecting Tile**
- [x] Player can select and unselect the current tile
- [x] Player can only select a new tile from its previous adjacent tiles



## Getting Started

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
