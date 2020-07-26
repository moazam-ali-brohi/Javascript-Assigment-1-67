//----CHAPTER 17-20

//Task-1
var arry=[[]];

//Task-2
var matrix=[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
for(var a=0; a<3; a++){
    //document.write(matrix[a]+"<br>")
    for(var b=0; b<4; b++){
        document.write(matrix[a][b])
    }
    document.write(" <br> ")
}
//------------


//Task-3
for(var i=0; i<=10; i++){
    document.write(i+"<br>")
}


//Task-4

var tableNum=+prompt("Enter number to see its multiplication table");
var tableLength=+prompt("Enter the length how long table displayed");
document.write("Multiplication Table of "+tableNum+" length "+tableLength+"<br><br><br>")
for(var i=1; i<=tableLength; i++){
    var tableStructure=tableNum +" x "+i+" = "+ tableNum*i+"<br>";
    
    document.write(tableStructure)
}

//-------

//Task-5
var fruits=["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0; i<=fruits.length-1; i++){
    document.write(fruits[i]+"<br>");
}
document.write("<br><br>");
for(var a=0; a<fruits.length-1; a++){
    document.write("Element at Index "+a+" is "+fruits[a]+"<br>");
}

//------------------------------

//Task-6
document.write("<h1>Counting:</h1>")
for(var i=1; i<=15; i++){
    document.write(i+", ")
}
document.write("<br>")
document.write("<h1>Reverse Counting:</h1>")
for(var i=10; i>0; i--){
    document.write(i+", ")
}
document.write("<br>")
document.write("<h1>Even:</h1>")
for(var i=0; i<=20; i++){
    if(i%2==0){
        document.write(i+", ")
    }
}
document.write("<br>")
document.write("<h1>Odd:</h1>")
for(var i=0; i<=20; i++){
    if(i%2==!0){
        document.write(i+", ")
    }
}
document.write("<br>")
document.write("<h1>Series:</h1>")
for(var i=1; i<=20; i++){
    if(i%2==0){
        document.write(i+"K, ")
    }
}

//------------------------

//Task-7
var cookies=["cake", "apple pie", "cookie", "chips", "patties"];
var a=prompt("enter any dessert you want order");
var x=cookies.includes(a);
if(x==true){
    alert(a+" is available")
}else{alert(a+" is not available");}

//---------------

//Task-8
var num=[24 , 91 , 78 , 51 , 12];
document.write("Array item: "+num);
document.write("<br>")
var high= Math.max.apply(null, num);
document.write("biggest Number: "+high);
//-----------

//Task-9
var num=[24 , 91 , 78 , 51 , 12];
document.write("Array item: "+num);
document.write("<br>")
var high= Math.min.apply(null, num);
document.write("lowest Number: "+high);

//--------


//Task-10
var num=5;
for(var i=0; i<=100; i++){
    var x=num*i;
    document.write(x+"<br>");
    if(x===100){
        break;
    }
    
}

//-------------