// Part 1
let counter = 0;

function simpleFunction() {
  counter++;
  try {
    simpleFunction();
  } catch (err) {
    console.log(err, counter);
  }
}

simpleFunction();
