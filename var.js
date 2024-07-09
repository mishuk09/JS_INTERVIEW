// console.log("This is my age:", age);
// var age = 20;
// console.log("This is my age:", age);


// //This is hoistick problem

function exampleVar() {
    console.log(x); // undefined (due to hoisting)
    var x = 10;
    console.log(x); // 10
    
    if (true) {
      var x = 20; // same `x` as above
      console.log(x); // 20
    }
    
    console.log(x); // 20 (because `var` is function-scoped)
  }
  
  exampleVar();
  