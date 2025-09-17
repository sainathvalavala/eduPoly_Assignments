
    function compare(a, b, c) {
  if (a > b && a > c) {
    console.log(`a: ${a} is greatest`);
  } else if (b > a && b > c) {
    console.log(`b: ${b} is greatest`);
  } else if (c > a && c > b) {
    console.log(`c: ${c} is greatest`);
  } else {
    console.log("There is a tie or all numbers are equal");
  }
}
compare(45,7,23)
