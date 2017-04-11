'use strict';

let assert = require('assert');

const Cell = require('../src/Cell');

describe('Cell', () => {

  describe('instance', () => {
    it('shuold has default value of 0', () => {
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

  describe('instance', () => {
    it('should die when no live neighbours nearby', () => {
      let cell = new Cell();
      cell.evolve([0,0,0,0,0,0,0,0]);
      assert.equal(0, cell.getStatus());
    })
  })
})
