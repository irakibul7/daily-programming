function reverseString1(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output = output + str[i];
  }
  return output;
}

function reverseString(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output = str[i] + output;
  }
  return output;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseString(str) {
  return [...str].reverse().join("");
}

function reverseString(str) {
  const arrStr = Array.from(str);
  let left = 0;
  let right = arrStr.length - 1;
  while (left < right) {
    const temp = arrStr[left];
    arrStr[left] = arrStr[right];
    arrStr[right] = temp;
    left++;
    right--;
  }

  return arrStr.join("");
}

console.log(reverseString("hello")); // 'olleh'
console.log(reverseString("world")); // 'dlrow'
