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
  

});








