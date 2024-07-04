const input = "((";

var isValid = function (s) {
  const stackOfChar = [];

  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const splittedChar = s.split("");

  if (s.length === 1) {
    return false;
  }

  for (let i = 0; i < splittedChar.length; i++) {
    if (["(", "{", "["].includes(splittedChar[i])) {
      console.log("exec if 1");
      stackOfChar.push(splittedChar[i]);
    }

    if ([")", "}", "]"].includes(splittedChar[i])) {
      console.log("exec if 2");
      const thePair = bracketPairs[splittedChar[i]];
      if (stackOfChar[stackOfChar.length - 1] === thePair) {
        stackOfChar.pop();
      } else {
        return false;
      }
    }
  }

  return stackOfChar.length === 0;
};

console.log(isValid(input));
