let assert = require('assert');

const World = require('../src/World')

describe('World', () => {

  describe('instance', () => {
    it('should be instance of World class', () => {
      let world = new World();
      assert.ok(world instanceof World);
    });
  });

});
