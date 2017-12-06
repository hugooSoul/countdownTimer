function randomNumber(n) {

  if (n <= 0){
    console.log("The value must to be greater than 0");
  }
  else if (n >= 1000000) {
    console.log("The value must to be less than 1000000");
  } else {
    /*
      Your implementation, using the flip() function
    */
    result = flip();
    var da = new Date();
    var timestamp = da.getTime();
    // Returns a number between [0, n)
    if (result === true) {
      var random = Math.round((timestamp*n)%1000000);
      console.log(random);
      console.log("Tales");
    } else {
      var random = Math.round((timestamp*n)%1000000);
      console.log(random);
      console.log("Heads");
    }
  }

}


function flip() {
  return Math.random() >= 0.5;
}
