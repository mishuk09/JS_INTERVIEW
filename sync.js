console.log("Before delay");

function delayBySeconds(sec) {
    let start = now = Date.now()
    while (now - start < (sec * 1000)) {
        now = Date.now();
    }
}

delayBySeconds(5);

// Executes after delay of 5 seconds
console.log("After delay"); 



// console.log("Before delay");

// setTimeout(()=>{
//     console.log("After 2s delay");
// },2000);

// console.log("After delay");




 

// function LevelTwo() {
//     console.log("Inside Level Two!")
//  }
 
//  function LevelOne() {
//     LevelTwo()
//  }
 
//  function main() {
//     LevelOne()
//  }
 
//  main()
 



