export default class TileData {
  // TODO: TileData constructor
  constructor(letter, rowId, columnId, selected = false) {
    this.letter = letter;
    this.rowId = rowId;
    this.columnId = columnId;
    this.selected = selected;
  }

  // Returns a new TileData instance with the same properties
  clone() {
    // TODO: TileData clone function
    return new TileData(this.letter, this.rowId, this.columnId, this.selected);
  }
}
