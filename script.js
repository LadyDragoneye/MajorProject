var age = prompt("Please input your age: ");
var cost;

if (age < 5){
  document.getElementById("cost").innerHTML = "Under age 5, entry is free!";
}

if (age >= 5 && age <=12 ){
  document.getElementById("cost").innerHTML = "Tickets cost $5.00 for ages 5 - 12";
}

if (age > 12){
  document.getElementById("cost").innerHTML = "Tickets cost $9.00 for ages over 12";
}



