// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

// ---------------------
// CODE STEP TWO HERE
// ---------------------

// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  $("#time-left").html("<h2> About 10 Seconds Left! </h2>");
  // console log 10 seconds left
  console.log("10 seconds left");
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  $("#time-left").html("<h2> About 5 Seconds Left! </h2>");
  // console log 5 seconds left
  console.log("5 seconds left");
}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  $("#time-left").html("<h2> Time's Up! </h2>");
  // console log done
  console.log("done");
  // The following line will play the audio file above
  audio.play();
}

setTimeout(fiveSeconds, 5 * 1000);
setTimeout(tenSeconds, 10 * 1000);
setTimeout(timeUp, 15 * 1000);