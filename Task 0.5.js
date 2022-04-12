function areaOfATriangle(length1, length2, length3) {
  let semiPerimeter = (length1 + length2 + length3) / 2;
  return Math.sqrt(
    semiPerimeter *
      (semiPerimeter - length1) *
      (semiPerimeter - length2) *
      (semiPerimeter - length3)
  );
}

console.log("area: " + areaOfATriangle(3, 4, 5));
