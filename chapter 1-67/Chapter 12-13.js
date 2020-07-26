//-------Chapter 12-13

//Task-1
var x=prompt();
var code= x.charCodeAt(0);
if(code>=48 && code<=57){
     document.write("input is a number")
 }else if(code>=65 && code<=90){
     document.write("input is a capital letter")
     }else if(code>=97 && code<=122){
         document.write("input is a small letter")
     }else{
         document.write("input is not letter nor number")
     }
//---------



//Task-2
var x1=+prompt("enter first number");
var x2=+prompt("enter second number");

if(x1<x2){
    document.write(x2+" is greator")
}else if(x2<x1){
    document.write(x1+" is greator")
}else{
    document.write("Both are same")
}


//------


//Task-3

var x=+prompt()
if(x==0){
    document.write("zero number")
}else if(x<=0){
    document.write("negative number")
}else if(x>0){
    document.write("Positive number")
}


//-------


//Task-4
var str=prompt();
var vowels=["a", "e", "i", "o", "u"];
for(var i=0; i<=vowels.length; i++){
    if(str===vowels[i]){
        document.write(str +" is a vowel")
        break;
    }else{
        document.write(str+" is not a vowel")
    }
}



//-----------------


//Task-5
var creatpass=prompt("Create a passowrd");
var confirmpass=prompt("Enter password again to confirm");
if(creatpass!=confirmpass){
    alert("wrong confirmed password")
}else{
    var enterpass=prompt("Enter your password");
if(creatpass != enterpass){
    alert("Invalid password")
}else{
    document.write("Your password is :"+ "<b>"+creatpass+"<b>")
}}


//---------

//Task-6

//after correction of code

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
document.write(greeting)

//---------


//Task-7

var time=+prompt("time");
if(time<=12){
    alert("Good Moring")
}else if(time<=17){
    alert("Good Afternoon")
}else if(time<=21){
    alert("Good Evening")
}else if(time<=24){
    alert("Good Night")
}

//----------

//--End