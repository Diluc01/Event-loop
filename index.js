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
  console.log(inputArray.length);
  console.log(outputArray);
  if (index >= inputArray.length) {
    return;
  }
  if (Array.isArray(inputArray[index])) {
    console.log("Inside of Checking");
    recursion(0, inputArray[index], outputArray);
    return recursion(index + 1, inputArray, outputArray);
  } else {
    outputArray.push(inputArray[index]);
    console.log("Inside of Pushing");
    return recursion(index + 1, inputArray, outputArray);
  }
}
function trampoline(f, ...args) {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
}
console.log(trampoline(() => flattenArr([1, 2, [3, [4, 5]], 6])));

// part 3
// let paragraph = document.getElementById("paragraph");

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function printPrimeNumbers(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// printPrimeNumbers(100);

// paragraph.textContent = printPrimeNumbers(100);
