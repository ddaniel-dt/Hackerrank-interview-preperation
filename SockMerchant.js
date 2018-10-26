// Running main function for output
main(["9", "10 20 20 10 10 30 50 10 20"]);

// Main function
function main(input) {
  var n = input[0];
  // Get input and turn it into arrays of integers.
  var socks = input[1].split(" ").map(Number);
  // Initialize required variables
  let sockHashMap = {};
  let total = 0;

  socks.forEach(item => {
    sockHashMap[item] = sockHashMap[item] + 1 || 1;
  });

  for (var i in sockHashMap) {
    total = total + Math.floor(sockHashMap[i] / 2);
  }

  // Output
  console.log(total);
}
