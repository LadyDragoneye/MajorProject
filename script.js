/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var age = prompt("Please input your age: ");
var cost = 0;

if (age < 5){
  cost = 0;
}

if (age >= 5 && age <=12 ){
  cost = 5;
}

if (age > 12){
  cost = 9;
}


