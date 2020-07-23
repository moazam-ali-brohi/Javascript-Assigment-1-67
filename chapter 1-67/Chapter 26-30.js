//Chapter 26-30
        //Task-1
        var num=+prompt()
        var rNum= Math.round(num);
        var cNum= Math.ceil(num);
        var fNum= Math.floor(num);
        document.write("number: "+num+"<br> Round of value: "+rNum
        +"<br> floor value: "+fNum+"<br> ceil value: "+cNum)

        //---------


        //Task-2
        var num=+prompt()
        var rNum= Math.round(num);
        var cNum= Math.ceil(num);
        var fNum= Math.floor(num);
        document.write("number: "+num+"<br> Round of value: "+rNum
        +"<br> floor value: "+fNum+"<br> ceil value: "+cNum)

        //-----------



        //task-3
        var num=+prompt("Enter number")
        var ab= Math.abs(num)
        document.write(ab) 
    
        //--------



        //Task-4
        var num=Math.floor(Math.random()*6)+1;
        document.write("Random Dice Number "+num)

        //------------


        //task-5
        var x=Math.floor(Math.random()*2)+1;
        if(x==1){document.write("Random coin value head")}else 
        if(x==2){document.write("Random coin value tail")}

        //----------


        //Task-6
        var rNum=Math.floor(Math.random()*100)+1;
        document.write(rNum)

        //-------------


        //Task-7
        var userWeight=prompt("Enter your age")
        var userWeight=parseInt(userWeight); 
        document.write("Your Weight: "+userWeight+" kg")

        //------

        
        //Task-8
        var userX=+prompt("Enter a number from 1-10")
        var randomX=Math.floor(Math.random()*10)+1;
        if(userX===randomX){alert("Congratulation you number matches to random number <br>")}else{alert("Try again")}
    