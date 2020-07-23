
//-----------Chapter-5------
//task 1
var a = 88;
var b = 8
var c = a + b;
document.write("Sum of " + a + " and " + b + " equals to " + c)
document.write("<br>")


//task 2
var c = a - b;
document.write("substraction of " + a + " and " + b + " equals to " + c)
var c = a * b;
document.write("<br>")
document.write("multiplication of " + a + " by " + b + " equals to " + c)
var c = a / b;
document.write("<br>")
document.write("division of " + a + " by " + b + " equals to " + c)
var c = a % b;
document.write("<br>")
document.write("Modulus of " + a + " by " + b + " equals to " + c)
document.write("<br>")
document.write("<br>")


//task 4
var ticket = 600;
var quantity = 5;
document.write("Total cost of movie tickets<br>")
document.write("The cost to by 5 tickets is " + ticket * quantity)


//task 5
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write("<h1>Table of 4</h1> <br>")
document.write("  4 x 1 = 4  <br>")
document.write("  4 x 2 = 8  <br>")
document.write("  4 x 3 = 12 <br>")
document.write("  4 x 4 = 16 <br>")
document.write("  4 x 5 = 20 <br>")
document.write("  4 x 6 = 24 <br>")
document.write("  4 x 7 = 28 <br>")
document.write("  4 x 8 = 32 <br>")
document.write("  4 x 9 = 36 <br>")
document.write("  4 x 10 = 40 <br>")


//task 6
var c = 30;
var c_f = (30 * 9) / 5 + 32;
var f = 50
var f_c = (50 - 32) * 5 / 9
document.write("<h1>Temperature converter</h1>")
document.write("30<sup>o</sup>C is " + c_f + " <sup>o</sup>F<br>")
document.write("50<sup>o</sup>F is " + f_c + " <sup>o</sup>C<br>")


//task 7
var item1 = 650;
var item2 = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var charges = 100;
var total = item1 * item1Quantity + item2 * item2Quantity + charges;

document.write("<h1>Shopping cart</h1> <br>")
document.write("Price of item 1" + item1 + "<br>")
document.write("quantity of item 1" + item1Quantity + "<br>")
document.write("Price of item 2" + item2 + "<br>")
document.write("quantity of item 2" + item2Quantity + "<br>")
document.write("Shipping charges" + charges + "<br>")
document.write("Total cost of your order" + total + "<br>")


//task 8
var tmarks = 980;
var omarks = 804;
var per = omarks / tmarks * 100;
document.write("<h1>Total marks</h1> <br>")
document.write("total marks = 980 <br>")
document.write("obtained marks = 804 <br>")
document.write("Percentage" + per + "%")


//task 9
var $ = 104.80;
var riyal = 28;
var total = 10 * $ + 25 * riyal;
document.write("<h1>Currency in PKR</h1>")
document.write("total currency in PKR" + total + "<br>")
document.write("<br>")


//task10
var a = 10;
var x = ((a + 5) * 10) / 2;
document.write("arithematic calculation ")
document.write(x)


//task11
var cyear = 2020;
var byear = 1998;
var age = cyear - byear;
document.write("<h1>Age Calculator</h1> <br>")
document.write("Current Year 2020 <br>")
document.write("Birth Year 1998 <br>")
document.write("Your age " + age + "<br>")


//task 12
//the Geometrizer
var circleRadius = 20;
var circumference = 125.679;
var circleArea = 3.142 * circleRadius * circleRadius;
document.write("<h1>The Geometrizer</h1> <br>")
document.write("Radius of circle: 20 <br>")
document.write("circumference of circle: 125.67999999 <br>")
document.write("The are of circle: " + circleArea)