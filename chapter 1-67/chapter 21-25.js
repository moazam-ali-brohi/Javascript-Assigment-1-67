
        //-------chapter 21-25
        
        ///task-1
        var f=prompt("Enter your first name")
        var l=prompt("Enter your last name")
        var fl=f+l;
        alert("Welcome "+fl);

       
        //task-2
        var yourPhone=prompt("Enter your Favorite phone")
        document.write("your Favorite phone: "+yourPhone+"<br> Length of string: "+yourPhone.length)
        document.write("<br>")


        //task-3
        var x="pakistani"
        var x1= x.search("n");
        document.write("string: "+x+"<br>Index of 'n':"+x1+"<br>");

        //---------------
        

        //task-4
        var x ="hello world"
        var x2= x.lastIndexOf(l);
        document.write("last index of l: "+x2+"<br>")

        //----------------


        //task-5
        var x= "Pakistani"
        var x3= x.split("")
        document.write("Character at index 3: "+x3[3])
        document.write("<br>")

        //----------------

        
        //task-6
        var f=prompt("Enter your first name")
        var l=prompt("Enter your last name")
        var fl=f.concat(l)
        alert("Welcome "+fl);
        document.write("<br>")
        
        //----------------


        //task-7
        var a="hyderabad"
        var x= a.replace("hydera", "Islama")
       document.write(x)
       document.write("<br>");
        
        //----------------


        //task-8
        var message = "Ali and Sami are best friends. They play cricket and football together.";
        document.write(message+"<br>")
        var newMessage = message.replace(/and/g, "&")
        document.write(newMessage)
        document.write("<br>");

        //----------------

       
       //task-9
       var str="472"
       var num = str
       document.write("varlue: "+str+"<br>"+"type: "+ typeof str + "<br>" + "value:"+num+"<br>"+"type: "+typeof num)
       document.write("<br>");

        //----------------


        //task-10
        var a=prompt("Enter a word")
        a = a.toUpperCase();
        document.write(a)
        document.write("<br>");


        //task-11
        var name=prompt("Enter a word")
        var fchar= name.slice(0,1);
        var rchar=name.slice(1);
        fchar= fchar.toUpperCase()
        rchar= rchar.toLowerCase()
        var name=fchar + rchar;
        document.write(name);
        document.write("<br>")

        //-------------


        //task-12
        var numb = 35.36;
        var str = numb.toString();
        document.write("Number: "+numb+"<br>Result: "+str)

        //-------------



        //task-13
        var uMatch= false;
        var userName = prompt("Enter your username")
        var userStr = userName.split("");
        var ntu = ["@", ".", ",", "!"]
        for(var i=0; i<=userStr.length; i++){
            if(userStr[i]===ntu[i]){
                uMatch=true;
                break;
                }
            }
            if(uMatch===true){alert("Username is invalid")}else if(uMatch===false){document.write("Your Username: "+ userName)}
        
        //------------------



        //task-14
        var x=prompt("Welcome to New Bakery. What do you want to order sir/ma'am?")
        var x = x.toLowerCase();
        var cookieList=['cake', 'apple pie', 'cookie', 'chips', 'patties']
        var xx= cookieList.includes(x)
        if(xx===true){document.write(x+" is available in our Bakery")}else
        if(xx===false){document.write("sorry "+x+" is not available in our bakery")}
        
        //---------

        //task-15


        //task-16
        var uniName= "University of Karachi"
        var uniStr=uniName.split("");
        for(var i=0; i<uniStr.length; i++){document.write(uniStr[i]+"<br>")}

        //--------------



        //task-17
        var user="pakistan"
        var lastC=user.lastIndexOf("n")
        document.write("Last index of 'n' is: "+lastC)

        //--------------



        //task-18
        var sent="the quick brown fox jumps over the lazy dog";
        var sentStr=sent.split(" ")
        var times=0;
        for(var i=0; i<=sentStr.length; i++){
            if(sentStr[i]=="the"){
                ++times
            }
         }
        document.write("Word 'the' comes "+times+" time in the sentence")

        //------------
        
        

    