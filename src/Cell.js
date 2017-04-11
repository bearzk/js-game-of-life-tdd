'use strict';

class Cell {
  constructor (status = 0, x = 0, y = 0) {
    this._setStatus(status);
    this._setPrev(status);
    this._setNext(status);
    this._setX(x);
    this._setY(y);
  }

  __countLive (statuses) {
    return statuses.reduce((acc, val) => {
      return acc + val;
    }, 0);
  }

  getStatus () {
    return this.status;
  }

  getPrev () {
    return this.prev;
  }

  getNext () {
    return this.next;
  }

  getX () {
    return this.x;
  }

  getY () {
    return this.y;
  }

  _setStatus (status) {
    this.status = !!status ? 1 : 0;
  }

  _setPrev (status) {
    this.prev = !!status ? 1 : 0;
  }

  _setNext (status) {
    this.next = !!status ? 1 : 0;
  }

  _setX (x) {
    this.x = x;
  }

  _setY (y) {
    this.y = y;
  }

  _willDie () {
    this._setPrev(this.getStatus());
    this._setNext(0);
  }

  _willLive () {
    this._setPrev(this.getStatus());
    this._setNext(1);
  }

  _evolve (statuses) {
    let liveNeighbours = this.__countLive(statuses);

    if (!this.getStatus() && liveNeighbours == 3) {
      this._willLive();
      return;
    }

    if (liveNeighbours < 2) {
      this._willDie();
      return;
    }

    if (liveNeighbours == 2 || liveNeighbours == 3) {
      this._willLive();
      return;
    }

    if (liveNeighbours > 3) {
      this._willDie();
      return;
    }
  }

  evolve (statuses) {
    this._evolve(statuses);
    this._setPrev(this.getStatus());
    this._setStatus(this.getNext());
  }
}

module.exports = Cell;
