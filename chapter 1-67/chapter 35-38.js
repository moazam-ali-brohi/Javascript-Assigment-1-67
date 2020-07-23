//---Chapter 31-38

//Task-1
function showTime(){var time = new Date();
document.write(time)}

showTime();

//----------



//Task-2
function GreetName(){
    var firstN =prompt("Enter First name");
    var lastN = prompt("Enter Last name");
    alert("Welcome "+firstN+lastN) 
}
GreetName();

//---------



//Task-3
function sum(){
    var x1 =+prompt("Enter first digit")
    var x2 =+prompt("Enter second digit")
    var sumOf=x1+x2;
    alert("Sum of " + x1 + " & " + x2 +" is:  "+ sumOf) }
    
    sum();

//----------


//Task-4

function calulator(){

    var x1 = +prompt("Enter first number")
    var x2 = +prompt("Enter second number")
    var op = prompt("Enter Operation")

if (op == "/") { alert(x1 / x2); } else
    if (op == "*") { alert(x1 * x2); } else
        if (op == "+") { alert(x1 + x2); } else
            if (op == "-") { alert(x1 - x2); } else
                if (op == "%") { alert(x1 % x2); }

}

calulator();

//-----------------------


//Task-5

function squareRoot(){var square =+prompt("Enter a number to show its Square root")
var squared =Math.sqrt(square)
document.write("Square Root of "+square+" is: "+squared)
}
squareRoot();

//-----------

//Task-6

//factorial of 10

document.write("<h1>Factorial of 10</h1>")
var x=10;
var num=1;
for(var i=1; i<=x; i++){
    num=num*i;
    document.write(num);
    document.write("<br>")
}


//-------------

//Task-7
function counting(){
    var start=+prompt("Enter number where to start counting")
    var end=+prompt("Enter number where to end counting")
    for(var i=0; i<=end; ++i){
    if(i>=start){document.write(i+"<br>")}
}
}

counting();

//-------------




//Task 8

        //formula hypotunus2 =base2+perpendiculer2

        var bas = +prompt("Enter the Base value");
        var per = +prompt("Enter the perpendiculer value");
        var hyp;

        function hypCal() {
            bas = Math.pow(bas, 2);
            per = Math.pow(per, 2);

            function SqrCal() {
                hyp = bas + per;
                hyp = Math.pow(hyp, 2);
            }

            SqrCal();
            document.write("Hypotunus = " + hyp)
        }

        hypCal();



//------------
//Task-9

    function areaCal(){

    var widt=+prompt("Enter area width")
    var heig=+prompt("Enter area height")
    var areaa =widt*heig;
    alert("Area of Rectangle: "+areaa+"sq")

    }

    areaCal();

//-------------



//task-10
function palindrome(){
    var word=prompt("Enter Word");
var check="";
for(var i = word.length-1; i>=0; i--){
    check +=word[i]
}
if(word ===check){
    alert(word+" is a palindrome word")
}else if(word!==check){alert(word + " is not a palindrome word")}
}

palindrome();



//------------



//Task-11
var str="THE QUICK BROWN FOX"
var strL=str.toLocaleLowerCase();
document.write(strL)

//-------------


//Task-12
var str=prompt("Enter a sentence");
var strArry= str.split(" ");
var s=[10, 20 ,39 ,40];
var a =[];
var x =new Array();
for(var i=0; i<= strArry.length; i++){
     x[i] = strArry[i].length;
     a.push(x[i]);
}
var highNum=Math.max(a);


//----------



//Task 13

var srt="JSResourceS.com";
var n;
function findL(str,o){
    n="o";
var x=srt.match(/o/g);
document.write("Letter "+ n +" comes "+ x.length+" times");
}

findL();

//-----------
//task-14
var radius=+prompt("enter circle radius")
var pie=3.14159265359;

function calCircum(){
var circumF=2*pie*radius;
document.write("Circumference of circle: "+circumF);
}

calCircum(radius, pie);
document.write("<br>")

function calArea(){
var areaF=pie*radius*radius;
document.write("Area of Circle: "+areaF)
}

calArea(radius, pie);

//------------

