//----------chapter 6-8------

//task 1
var a = 10;
document.write("Result:<br>")
document.write("The value of a is " + a + "<br>")
document.write("...................................<br><br>")
a++;
document.write("The value of a++ is : " + a + "<br>")
document.write("Now the value of a is :" + a + "<br><br>")

document.write("The value of a++ is:" + a + "<br>")
a++;
document.write("Now the value of a is:" + a + "<br><br>")

document.write("The value of --a is :11 <br>")
--a;
document.write("Now the value of a is :" + a + "<br><br>")

document.write("The value of --a is :11 <br>")
--a;
document.write("Now the value of a is :" + a + "<br><br>")



//task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is 2 <br>")
document.write("b is 1 <br>")
document.write("result is " + result + "<br>")

//task 3
var name = prompt("What's your name?")
window.alert("Welcome! " + name)

//task 5
var n = +prompt("Enter any number to show its Multiplication Table")

if (n==0){ 
    n=5; }
document.write("<h1>Multiplication of: "+n+"</h1>");
for(var i=1; i<=10; i++){
document.write(n+" x "+i+" = "+n*i +"<br>")
}



//task 6
var sub1 = prompt("Enter your first subject ")
var sub1marks = prompt("Enter your " + sub1 + " obtained marks")
var sub2 = prompt("Enter your second subject ")
var sub2marks = prompt("Enter your " + sub2 + " obtained marks")
var sub3 = prompt("Enter your third subject ")
var sub3marks = prompt("Enter your " + sub3 + " obtained marks")
var tmarks = 100;
var per1 = sub1marks / tmarks * 100;
var per2 = sub2marks / tmarks * 100;
var per3 = sub3marks / tmarks * 100;

document.write("<h1>Subjects total marks and obtained marks Percentage</h1><br>")
document.write(sub1 + "&nbsp; &nbsp; &nbsp; &nbsp;" + tmarks + "&nbsp; &nbsp; &nbsp; &nbsp;" + sub1marks + "&nbsp; &nbsp; &nbsp; &nbsp;" + per1 + "%<br>")
document.write(sub2 + "&nbsp; &nbsp; &nbsp; &nbsp;" + tmarks + "&nbsp; &nbsp; &nbsp; &nbsp;" + sub2marks + "&nbsp; &nbsp; &nbsp; &nbsp;" + per2 + "%<br>")
document.write(sub3 + "&nbsp; &nbsp; &nbsp; &nbsp;" + tmarks + "&nbsp; &nbsp; &nbsp; &nbsp;" + sub3marks + "&nbsp; &nbsp; &nbsp; &nbsp;" + per3 + "%")
