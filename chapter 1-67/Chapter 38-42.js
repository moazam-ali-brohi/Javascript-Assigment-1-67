//Chapter 43-48
//Task-1
var bas=10;
var powr=5;
var basCal=bas;
function power(){
    for(var i=0; i<powr-1; i++){
        basCal=basCal*bas;}
}
power();
document.write(basCal);
//--------



//Task-2
var yearTocheck=+prompt("Eter year to check it is leap or not");

function yearToStr(yearTocheck){
  yearStr=yearTocheck.toString();
  yearArry=yearStr.split("");
  yearArry.shift();
  yearArry.shift();
  yearArry= yearArry.join("");
  yearNum= Number(yearArry);
  return yearNum;}

var num= yearToStr(yearTocheck);
var nt=false;
function leapCheck(num){
    for(var i=0; i<=100; i+=4){
        switch (num) {
            case i:
                alert(yearTocheck+" is a leap year")
                nt=true  }}}
leapCheck(num);
if(nt==false){alert(yearTocheck+" is not a leap year")}
//----------


//Task-3
var a=10;
var b=15;
var c=20;
function areaOfTraingle(a, b, c){
    //Area of Traingle Formula
    var s=(a+b+c)/2;
    s = s*((s-a)*(s-b)*(s-c));
    s=s.toFixed(1);
    document.write("Area of Traingle: "+s);
}
areaOfTraingle(a,b,c);

//------


//Task-4
var sMrks=[];
var a=+prompt("Enter subject 1 marks");
var b=+prompt("Enter subject 2 marks");
var c=+prompt("Enter subject 3 marks");
sMrks.push(a, b, c);
var obt=sMrks[0]+sMrks[1]+sMrks[2];
var totalsubMarks=1500;

function avrgeAndperc(obt, sMrks){
    function Avrge(obt, sMrks){
    var avrg=obt/3;
     document.write("Average Marks of student "+avrg+"<br>")}

    function percntg(obt, sMrks){
    var per=obt/1500*100;
    document.write("Percentage of student "+per+"%")}
    Avrge(obt, sMrks);
    percntg(obt, sMrks);
}

avrgeAndperc(obt, sMrks);
//----------


//Task-5
var sent=["dog", "cat", "cow", "chicken"];
var strToFind="chicken";
for(var i=0; i<=sent.length; i++){
    if(sent[i]==strToFind){
        document.write("Index of "+strToFind+" is "+i);
    }
}
//---------------


//Task-6
var sent="This is javascript course";
var str=sent.split("");
document.write("Sentence with vowels: "+sent)
document.write("<br>")
for(var i=0; i<=str.length; i++){
    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
        str.splice(i,1);
    }
}
str=str.join("");
document.write("Sentence without vowels: "+str)

//-------------

//Task-7
var sent="This is javascript course";
var occurA=0;
var occurI=0;
var i=0;
for(var i=0; i<=sent.length; i++){
switch (sent[i]) {
    case "a":
        occurA++

    case "i":
        occurI++ }
}
document.write("Vowel a comes "+occurA+" times")
document.write("<br>")
document.write("Vowel i comes "+occurI+" times")

//------------


//Task-8
var lngth = +prompt("Enter length in km");
        function kmToMeter(lngth) {
            return lngth * 1000;
        }
        function kmToFeet(lngth) {
            return lngth * 3281;
        }
        function kmToInch(lngth) {
            return lngth * 39370;
        }
        function kmToCenti(lngth) {
            return lngth * 100000;
        }

        var a = kmToMeter(lngth);
        var b = kmToFeet(lngth);
        var c = kmToInch(lngth);
        var d = kmToCenti(lngth);
        document.write("Length from city A to City B "+lngth+"<br>")
        document.write("Length in Meters "+a+"<br>")
        document.write("Length in Feets "+b+"<br>")
        document.write("Length in Inches "+c+"<br>")
        document.write("Length in Centimeters "+d+"<br>")

        //--------------------

//Task-9

var employeeWorked=+prompt("enter the time you worked");
var overtimeprise=12;
var timelimit=40;
if(employeeWorked>40){
    var x=employeeWorked-40;
    xx=x*12;
    document.write("You have worked "+x+" hours overtime and you will be paid "+xx+"Rs for extra time")
}
//--------------

