function User(name) {
    this.name = name;

    this.sayHi = function() {
      return( "My name is: " + this.name );
    };
}

let john = new User("John");

john.sayHi();

// okay so. make sure both functions are working separately.

// also: 
https://www.geeksforgeeks.org/how-to-execute-multiple-promises-sequentially-in-javascript/