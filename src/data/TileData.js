export default class TileData {
  // TODO 0): TileData constructor
  constructor(letter, rowId, columnId, selected=false) {
    this.letter = letter;
    this.rowId = rowId;
    this.columnId = columnId;
    this.selected = selected;
  }
  // Returns a new TileData instance with the same properties
  clone() {
    // TODO 0): TileData clone function
    new TileData(this.letter, this.rowId, this.columnId, this.selected)
  }
}
