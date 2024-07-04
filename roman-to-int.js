const s = "MCMXCIV";

var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const splitted = s.split("");

  const result = splitted.map((data) => {
    return romanMap[data];
  });

  for (let i = 0; i < result.length; i++) {
    if (result[i] < result[i + 1]) {
      result[i] = result[i + 1] - result[i];
      result.splice(i + 1, 1);
    }
  }

  return result.reduce((a, b) => a + b);
};

console.log(romanToInt(s));
