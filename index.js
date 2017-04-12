let sleep = require('sleep');

const Cell = require('./src/Cell');
const World = require('./src/World');

let world = new World(100, 50);
world.init()

let draw = (world) => {
  for (let row of world.layout) {
    let rowVals = [];
    for (let cell of row) {
      rowVals.push(cell.getStatus());
    }
    process.stdout.write(rowVals.join(' ') + '\n');
  }
}

while (1) {
  draw(world);
  sleep.msleep(300);
  process.stdout.write("\033c")
  world.evolve();
}
