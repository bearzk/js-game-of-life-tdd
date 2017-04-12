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
    it('should be able to get X', () => {
      let cell = new Cell(0,1,3);
      assert(1, cell.getX());
    })
    it('should be able to get Y', () => {
      let cell = new Cell(0,1,3);
      assert(3, cell.getY());
    })
  })

  describe('instance', () => {
    it('should be able to set value', () => {
      let cell = new Cell(1);
      assert.equal(1, cell.getStatus());
    })
  })

  describe('live cell', () => {
    it('should die when it has less than 2 live neighbours', () => {
      let cell = new Cell(1);
      cell.prepare([0,0,0,1,0,0,0,0]).evolve();
      assert.equal(0, cell.getStatus());
      assert.equal(1, cell.getPrev());
    })

    it('should live when it has exactly 2 or 3 neighbours', () => {
      let cell = new Cell(1);
      cell.prepare([0,0,1,1,0,0,0,0]).evolve();
      assert.equal(1, cell.getStatus());
      assert.equal(1, cell.getPrev());

      cell = new Cell(1);
      cell.prepare([0,0,1,1,0,0,1,0]).evolve();
      assert.equal(1, cell.getStatus());
      assert.equal(1, cell.getPrev());
    })
  })

  describe('dead cell', () => {
    it('should become live when it has exactly 3 live neighbours', () => {
      let cell = new Cell();
      cell.prepare([0,1,1,1,0,0,0,0]).evolve();
      assert.equal(1, cell.getStatus());
      assert.equal(0, cell.getPrev());
    })
  })
})
