// Running main function for output
let data = ["8", "UDDDUDUUDDDDDUUUUU"];
//
let one = data[0];
// Get input and turn it into arrays of integers.
let two = data[1].split("");

main(one, two);

// Main function
function main(n, s) {
  let level = 0,
    valleyCount = 0,
    mountainCount = 0,
    enter = false;

  console.log(level);

  s.forEach(element => {
    // Increment the level
    if (element === "D") {
      level--;
    } else if (element === "U") {
      level++;
    }

    // Check which level & count once we have gone above sea level
    if (level > 0 && enter !== true) {
      enter = true;
      mountainCount++;
    } else if (level < 0 && enter !== true) {
      enter = true;
      valleyCount++;
    } else if (level === 0) {
      enter = false;
    }
  });

  // Output
  console.log(valleyCount);
}
