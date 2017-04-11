'use strict';

let assert = require('assert');

const Cell = require('../src/Cell');

describe('Cell', () => {

  describe('instance', () => {
    it('should be instance of Cell class', () => {
      let cell = new Cell();
      assert.ok(cell instanceof Cell);
    })
  })

  describe('instance', () => {
    it('should has default value of 0', () => {
      let cell = new Cell();
      assert.equal(0, cell.getStatus());
    })
  })

  describe('instance', () => {
    it('should be able to set value', () => {
      let cell = new Cell();
      cell.setStatus(1);
      assert.equal(1, cell.getStatus());
    })
  })

  describe('live cell', () => {
    it('should die when it has less than 2 live neighbours', () => {
      let cell = new Cell(1);
      cell.evolve([0,0,0,1,0,0,0,0]);
      assert.equal(0, cell.getStatus());
    })

    it('should live when it has exactly 2 or 3 neighbours', () => {
      let cell = new Cell(1);
      cell.evolve([0,0,1,1,0,0,0,0]);
      assert.equal(1, cell.getStatus());

      cell = new Cell(1);
      cell.evolve([0,0,1,1,0,0,1,0]);
      assert.equal(1, cell.getStatus());
    })
  })

  describe('dead cell', () => {
    it('should become live when it has exactly 3 live neighbours', () => {
      let cell = new Cell();
      cell.evolve([0,1,1,1,0,0,0,0]);
      assert.equal(1, cell.getStatus());
    })
  })
})
