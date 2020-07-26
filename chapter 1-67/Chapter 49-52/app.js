//Task-1
function getEntry(){
    var firstName   =document.getElementById("fname").value;
    var lastName =document.getElementById("lname").value;
    var emailAddress =document.getElementById("email").value;
    var phoneNum  =document.getElementById("phone").value;
    var cityName  =document.getElementById("city").value;
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="block";
    document.getElementById("pfname").innerHTML = firstName   ;
    document.getElementById("plname").innerHTML = lastName    ;
    document.getElementById("pemail").innerHTML = emailAddress;
    document.getElementById("pphone").innerHTML = phoneNum    ;
    document.getElementById("pcity").innerHTML = cityName    ;
}

//-----------------


//Task-2

