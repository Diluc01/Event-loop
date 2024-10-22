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

// part 2
function flattenArr(inputArray) {
  let outputArray = [];
  recursion(0, inputArray, outputArray);
  return outputArray;
}

function recursion(index, inputArray, outputArray) {
  if (index >= inputArray.length) return;

  if (Array.isArray(inputArray[index])) {
    recursion(0, inputArray[index], outputArray);
  } else {
    outputArray.push(inputArray[index]);
  }

  return () => recursion(index + 1, inputArray, outputArray);
}

flatArray = flattenArr([1, 2, [3, [4, 5]], 6]);
console.log(flatArray);

function trampoline(f, ...args) {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }

  return result;
}

console.log(trampoline(() => flattenArr([1, 2, [3, [4, 5]], 6])));
