class Cell {
  constructor () {
    this.status = 0;
  }

  getStatus () {
    return this.status;
  }

  setStatus (status) {
    this.status = !!status ? 1 : 0;
  }

  evolve (statuses) {
    return 0;
  }
}

module.exports = Cell;
