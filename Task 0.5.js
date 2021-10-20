
function areaOfATriangle(number1,number2,number3){

    let semiPerimeter = (number1 + number2 + number3) / 2;
    return Math.sqrt(
        semiPerimeter *
      (semiPerimeter - number1) *
      (semiPerimeter - number2) *
      (semiPerimeter - number3)
  );
}

console.log("area: "+areaOfATriangle(3,4,5));