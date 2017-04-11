let assert = require('assert');

const World = require('../src/World')

describe('World', () => {

  describe('instance', () => {
    it('should be instance of World class', () => {
      let world = new World();
      assert.ok(world instanceof World);
    });
  });

  describe('instance', () => {
    it('should be able to init a rectangle layout', () => {
      let world = new World();
      world.init(0, 0);
      assert.deepEqual([[]], world.layout);
    });
  });

  describe('instance', () => {
    it('should be able to init a rectangle layout without init params 5*5', () => {
      let world = new World();
      world.init();
      assert.deepEqual(
        [
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0]
        ],
        world.layout
      );
    })
  })

  describe('instance', () => {
    it('should be able to init a rectangle layout without init params 3*3', () => {
      let world = new World();
      world.init(3, 3);
      assert.deepEqual(
        [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ],
        world.layout
      );
    })
  })
});
