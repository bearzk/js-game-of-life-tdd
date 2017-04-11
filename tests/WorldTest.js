let assert = require('assert');

const World = require('../src/World');
const Cell = require('../src/Cell');

describe('World', () => {

  describe('instance', () => {
    it('should be instance of World class', () => {
      let world = new World();
      assert.ok(world instanceof World);
    });
  });

  describe('instance', () => {
    it('should be able to init a rectangle layout', () => {
      let world = new World(0, 0);
      assert.deepEqual([[]], world.layout);
    });
  });

  describe('instance', () => {
    it('should be able to init a rectangle layout without init params 5*5', () => {
      let world = new World();
      assert.equal(5, world.layout.length);
      for (let row of world.layout) {
        assert.equal(5, row.length);
        for (let cell of row) {
          assert.ok(cell instanceof Cell);
          assert.equal(0, cell.getStatus());
        }
      }
    })
  })

  describe('instance', () => {
    it('should be able to init a rectangle layout without init params 3*3', () => {
      let world = new World(3, 3);
      assert.equal(3, world.layout.length);
      for (let row of world.layout) {
        assert.equal(3, row.length);
        for (let cell of row) {
          assert.ok(cell instanceof Cell);
          assert.equal(0, cell.getStatus());
        }
      }
    })
  })

  describe('instance', () => {
    it('should be able to randomnize the values in its layout', () => {
      let world = new World(50, 50);

      world.init();

      for (let row of world.layout) {
        assert.ok(50, row.length);
        assert.ok(row.some((element, index, array) => {
          return element.getStatus() === 1;
        }));
      }

    })
  })
});
