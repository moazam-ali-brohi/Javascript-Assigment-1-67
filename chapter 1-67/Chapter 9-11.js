                //---------Chapter 9-11-------

//-------task 1
var city = prompt("Enter a city name")
if (city == "karachi") { var city = " city of lights"; }
alert("Welcome to " + city)


//-------task 2
var gender = prompt("What's your gender")
if (gender == "male") { alert("Good Morning Sir."); } else { alert("Good Morning Ma'am"); }


//-------task 3
var color = prompt("Enter traffic light color")
if (color == "red") { alert("Red color means you must stop"); } else
    if (color == "green") { alert("Green color means Move now"); } else
        if (color == "yellow") { alert("Yellow color means Ready to move"); }


//------task 4
var fuel = +prompt("Enter your remaining fuel")
if (fuel < 0.25) { alert("Please refill the fuel in your car") } else
    if (fuel > 0.25) { alert("You have enough fuel"); }


//------task 5
var a = 4;
if (++a === 5) { alert("given condition for variable a is true"); }

var b = 82;
if (b++ === 83) {alert("given condition for variable b is true");}

var c = 12;
if (c++ === 13) {alert("condition 1 is true");}
if (c === 13) { alert("condition 2 is true"); }
if (++c < 14) { alert("condition 3 is true"); }
if (c === 14) { alert("condition 4 is true"); }

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
if (true) { alert("True"); }
if (false) { alert("False"); }
if ("car" < "cat") { alert("car is smaller than cat"); }


//--------task 6
var omarks = +prompt("Enter your obtained marks")
var tmarks = +prompt("Enter the totals marks")
var per = omarks / tmarks * 100;
var grade = "A";
var remark = 1;

if (per >= 80) { grade = "A+"; } else
    if (per >= 70) { grade = "A"; } else
        if (per >= 60) { grade = "B"; } else
            if (per >= 50) { grade = "C"; } else
                if (per >= 40) { grade = "D"; }

if (grade == "A+") { remark = "You are brilliant"; } else
    if (grade == "A") { remark = "You are good enough"; } else
        if (grade == "B") { remark = "You need to improve"; } else
            if (grade == "C") { remark = "You are fail"; }

document.write("<h1>Mark Sheet</h1>");
document.write("Total marks:" + tmarks + "<br>");
document.write("Marks obtained:" + omarks + "<br>");
document.write("Percentage:" + per + "%" + "<br>");
document.write("Grade:" + grade + "<br>")
document.write("Remarks:" + remark)


//------task 7
var x = +prompt("Guess a number from 1-10")
var n = 7;
if (x == 7) { alert("Correct Guess"); } else
    if (x == 6) { alert("close but not correct"); } else
        if (x == 8) { alert("close but not correct"); }


//------task 10
var temp = +prompt("Enter temperature");
if (temp > 80) { alert("Its boiling hot"); } else
    if (temp > 60) { alert("its die hot out"); } else
        if (temp > 40) { alert("its to hot outside"); } else
            if (temp > 30) { alert("The weather is normal today"); } else
                if (temp > 20) { alert("Weather is cool today"); } else
                    if (temp > 10) { alert("Weather is so cold today"); }


//-----task 11
var x1 = +prompt("Enter first number")
var x2 = +prompt("Enter second number")
var op = prompt("Enter Operation")

if (op == "/") { alert(x1 / x2); } else
    if (op == "*") { alert(x1 * x2); } else
        if (op == "+") { alert(x1 + x2); } else
            if (op == "-") { alert(x1 - x2); } else
                if (op == "%") { alert(x1 % x2); }