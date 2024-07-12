var plusOne = function (digits) {
  const merged = digits.join("");

  const plusOne = BigInt(merged) + BigInt(1);

  return plusOne.toString().split("");
};
