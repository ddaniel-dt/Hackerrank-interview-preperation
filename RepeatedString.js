// Running main function for output
let string = "aba";
let integer = 15;

main(string, integer);

// Main function
function main(letterString, amountToRepeat) {
  console.time("main");

  const occurances = letterString.split("").filter(letter => letter === "a")
    .length;

  const multiplier = Math.floor(amountToRepeat / letterString.length);

  const remainder = amountToRepeat % letterString.length;

  const remainderLength = letterString
    .slice(0, remainder)
    .split("")
    .filter(letter => letter === "a").length;

  const totalOccurances = occurances * multiplier + remainderLength;

  // console.log(repeatedString);
  // for (let index = 0; index < amountToRepeat; index++) {
  //   // console.log(repeatedString[index % repeatedString.length]);
  //   if (repeatedString[index % repeatedString.length] === "a") {
  //     occurances++;
  //   }
  // }

  // Output
  console.timeEnd("main");
  console.log(totalOccurances);
}
