import { TileData } from '../data';

const facesNum = 6;
const boardLength = 5;
const randomlySelectedFace = faces => {
  let randomIndex = Math.floor(Math.random() * facesNum);
  return faces.charAt(randomIndex);
};

const shuffleDice = dice => {
  for (let i = 0; i < dice.length; i++) {
    let randomIndex = Math.floor(Math.random() * dice.length); // random from 0 -> 25
    let temp = dice[i];
    dice[i] = dice[randomIndex];
    dice[randomIndex] = temp;
  }
  return dice;
};

export const shuffleBoard = () => {
  //  Create 1D array with dice
  //  Shuffle the dice
  //  Create 2D array with an empty board
  //  Randomly select from the 1D array
  //  Insert in the board and randomly pick a face

  const dice = [
    'aaafrs',
    'aaeeee',
    'aafirs',
    'aeeeem',
    'aeegmu',
    'aegmnn',
    'afirsy',
    'bjkqxz',
    'ccenst',
    'ceiilt',
    'ceilpt',
    'ceipst',
    'ddhnot',
    'dhhlor',
    'dhhlor',
    'dhlnor',
    'dhlnor',
    'eiiitt',
    'emottt',
    'ensssu',
    'fiprsy',
    'gorrvw',
    'iprrry',
    'nootuw',
    'ooottu'
  ];

  const board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ];

  const shuffledDice = shuffleDice(dice);

  for (let row = 0; row < boardLength; row++) {
    for (let col = 0; col < boardLength; col++) {
      let dice = shuffledDice.shift();

      let face = randomlySelectedFace(dice);
      const tileData = new TileData(face, row, col);
      board[row][col] = tileData;
    }
  }
  return board;
};

export const copyBoard = board => {
  const copiedBoard = board.map(row => {
    return row.map(tile => {
      return tile.clone();
    });
  });
  return copiedBoard;
};

export const isTileEqual = (tile1, tile2) => {
  if (!tile1 || !tile2) return false;
  return tile1.rowId === tile2.rowId && tile1.columnId === tile2.columnId;
};

export const isAdjacent = (tile1, tile2) => {
  if (!tile1 || !tile2) return false;
  if (isTileEqual(tile1, tile2)) {
    return false;
  }

  const colDiff = Math.abs(tile1.columnId - tile2.columnId);
  const rowDiff = Math.abs(tile1.rowId - tile2.rowId);
  if (colDiff <= 1 && rowDiff <= 1) {
    return true;
  } else {
    return false;
  }
};

export const calculateScore = word => {
  const score = word.length - 2;

  if (score < 1) {
    return 1;
  }
  if (score > 6) {
    return 6;
  }
  return score;
};
