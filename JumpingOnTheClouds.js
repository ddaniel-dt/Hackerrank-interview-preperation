// Running main function for output
let data = [0, 0, 1, 0, 0, 1, 0];

main(data);

// Main function
function main(clouds) {
  let jumps = 0,
    maxJumpDistance = 2,
    position = 0;

  while (position < clouds.length - 1) {
    if (
      position + maxJumpDistance < clouds.length &&
      clouds[position + maxJumpDistance] !== 1
    ) {
      position = position + 2;
    } else {
      position = position + 1;
    }
    jumps++;
  }

  // Output
  console.log(jumps);
}
