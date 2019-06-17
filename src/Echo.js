function Echo() {
}

Echo.prototype.greeting = function() {
  console.log("Say something: ");
}


Echo.prototype.response = function() {
  process.stdin.on('data', function (input) {
    console.log(`You said: ${input.toString().trim()}`); 
    process.stdin.pause();
  });
}

var echo = new Echo();
echo.greeting();
echo.response();

module.exports = Echo;









