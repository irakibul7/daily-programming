function fizzBuzz1(n) {
  const results = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i);
    }
  }
  return results;
}

function fizzBuzz2(n) {
  const results = [];

  for (let i = 1; i <= n; i++) {
    let value = "";

    if (i % 3 === 0) {
      value += "Fizz";
    }

    if (i % 5 === 0) {
      value += "Buzz";
    }

    if (value) {
      results.push(value);
    } else {
      results.push(i);
    }
  }
  return results;
}

console.log(fizzBuzz1(3)); // [1,2,"Fizz"]
