
var foodDemand = function(food) {

      console.log("I want to eat" + " " + food);
      foodDemand (food,"Jello");
}:

        
// 2

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting (name);


// 3

var orangeCost = function (orange) {
console.log(orange * 5);
};

// On line 11, call the greeting function!
orangeCost(5);


//  4

// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber =  timesTwo(8);

console.log(newNumber);





// Define quarter here.

var quarter = function(number){
    
};

if (quarter() % 3 === 0 ) 
  console.log("The statement is true");
     quarter(3);
} else {

  console.log("The statement is false");
}


// 5


// Write your function starting on line 3

var perimeterBox = function(length, width) {
    return length + length + width + width;
    console.log(perimeterBox)
};

//// correct 6 using returns

var nameString = function(name) {
    return "Hi, I am" + " " + name;

};

var newNumber =  nameString("Anthony");

console.log(newNumber);

