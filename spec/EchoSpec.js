describe("Echo", function() {
  var Echo = require('../src/Echo');
  var echo;

  beforeEach(function() {
    echo = new Echo();
    console.log = jasmine.createSpy("log");
  });
  
  it("should greet the user with a prompt", function() {
    echo.greeting();
    expect(console.log).toHaveBeenCalledWith("Say something: ");
  })

  it("should return 'You said: (input)'", function() {
    var stdin = require('mock-stdin').stdin();
    echo.response();
    stdin.send("Hello World");
    expect(console.log).toHaveBeenCalledWith("You said: Hello World")
  })

});








