/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var age = prompt("Please input your age: ");
var cost;

if (age < 5){
  document.getElementById("cost").innerHTML = "Entry is free!";
}

if (age >= 5 && age <=12 ){
  document.getElementById("cost").innerHTML = "Ticket is $5.00";
}

if (age > 12){
  document.getElementById("cost").innerHTML = "Ticket is $9.00";
}



