//--Chapter 14-16

//Task-1
var stdName=[];

//Task-2
var stdName=new Array();

//task-3
var name=["ali"];

//task-4
var num=[10];

//Task-5
var check=[true];

//Task-6
var mixed=["ali", 10 ,true];

//Task-7
var qualification=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
document.write("<h1>Qualifications</h1>")
document.write("<br>")
for(var i=0; i<=qualification.length-1; ++i){
    document.write(i+1+") "+qualification[i]+"<br>")
}

//Task-8

var std1=prompt("Enter 1st Student Name");
var std1mark=prompt("Enter 1st Student Marks");
var std2=prompt("Enter 2nd Student Name");
var std2mark=prompt("Enter 2nd Student Marks");
var std3=prompt("Enter 3rd Student Name");
var std3mark=prompt("Enter 3rd Student Marks");
var studentName=[];
var studentMark=[];
studentName.push(std1, std2, std3);
studentMark.push(std1mark, std2mark, std3mark);

for(var i=0; i<=2; i++){
    var perCal=studentMark[i]/500*100;
    document.write("Score of "+studentName[i]+" is "+studentMark[i]+" .Percentage: "+perCal+" %")
document.write("<br>")
}

//---------

//Task-9
var colors=["red", "green", "blue"];
document.write("Colors Array : "+colors+"<br>")
var addColorBeg= prompt("what color you want to add at the begining?")
colors.unshift(addColorBeg);
document.write("Colors Array after addition at the begining : "+colors+"<br>")
var addColorEnd= prompt("what color you want to add at the End?")
colors.push(addColorEnd);
document.write("Colors Array after addition of new color at the End : "+colors+"<br>")
colors.unshift("yello", "orange");
document.write("Colors Array after addition of two new color : "+colors+"<br>")
colors.shift()
document.write("Colors Array after removing color from begining : "+colors+"<br>")
colors.pop()
document.write("Colors Array after removing color from End : "+colors+"<br>")
var addColorPlace=+prompt("enter the Index of color you want to add at colors")
var addColorName=prompt("what color you want to  add at "+addColorPlace);
colors.splice(addColorPlace,0,addColorName)
document.write("Colors Array after adding new color at index "+ addColorPlace +" : "+colors+"<br>")
var deleteColorPlace=+prompt("Enter the index from where you wnat to delete color");
var howManyDeleteColor=+prompt("How many colors from it you want to delete")
colors.splice(deleteColorPlace,howManyDeleteColor);
document.write("Colors Array After deleting your desired index : "+colors+"<br>")

//----------

//Task-10
var studentScore=[320, 230, 480, 120];
document.write("Score of Students : "+studentScore);
document.write("<br>")
studentScore.sort();
document.write("Score of Students after order : "+studentScore);

//---------

//Task-11
var cities=["Hyderabad", "Karachi", "Lahore", "Islamabad"]
document.write("Cites: "+cities);
var selectedCities=[cities[0],cities[1],cities[2]];
document.write("Selected cites: "+selectedCities);

//------

//Task-12
var arr = ["This", "is", "my", "cat"];
document.write("Array:"+"<br>"+arr+"<br>");
var str=arr.join(" ");
document.write("String:"+"<br>"+str);

//--------

//Task-13
var value=[];
document.write("Countries: "+"<br>")
value[0]="America";
value[1]="Belgium";
value[2]="Canada";
value[3]="Denmark";
value[4]="Egypt";
document.write(value+"<br>");
for(var i=0; i<=4; i++){
    document.write("Out:"+value[i]+"<br>")}

//Task-14
var value=[];
document.write("Countries: "+"<br>")
value[0]="America";
value[1]="Belgium";
value[2]="Canada";
value[3]="Denmark";
value[4]="Egypt";
document.write(value+"<br>");

value.reverse();
for(var i=0; i<=4; i++){
    document.write("Out:"+value[i]+"<br>")}


//Task-15
var comp=["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h1>Company: </h1>"+"<br>")
document.write(comp[0]+"<br>")
document.write(comp[1]+"<br>")
document.write(comp[2]+"<br>")
document.write(comp[3]+"<br>")
document.write(comp[4]+"<br>")
document.write(comp[5]+"<br>")

//----
