var mySqrt = function (x) {
  if (x === 0) return 0;

  let guess = x / 2.0;
  while (true) {
    let betterGuess = 0.5 * (guess + x / guess);
    if (Math.abs(guess - betterGuess) < 1e-7) {
      return Math.floor(betterGuess);
    }
    guess = betterGuess;
  }
};
