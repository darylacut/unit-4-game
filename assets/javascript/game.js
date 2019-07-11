// game displays a random number onscreen between 19-120

//document.getElementById("#randomNumber").innerHTML = 

var randomNumber = Math.floor(Math.random() * (120 - 19 +1)) + 19;
    var button1Value = Math.floor(Math.random() * (12)) + 1;
    var button2Value = Math.floor(Math.random() * (12)) + 1;
    var button3Value = Math.floor(Math.random() * (12)) + 1;
    var button4Value = Math.floor(Math.random() * (12)) + 1;
    var winsCount = 0
    var lossesCount = 0
    var totalValue = 0


$(document).ready(function() {


    $("#button1").on("click," function() {
        totalValue = button1Value + totalValue;
        
    }
    
    $("#button2").on("click," function() {
        totalValue = button2Value + totalValue;
    }

    $("#button3").on("click," function() {
        totalValue = button3Value + totalValue;
    }
    
    $("#button4").on("click," function() {
        totalValue = button4Value + totalValue;
    }



    if ( total === randomNumber );
        wins++;
        $('#wins').text(winsCount);


    if ( total > randomNumber );
        losses++;

        $("#randomNumberBox").html("<h1>randomNumber</h1>");

        $("button1").on("click", function() {
            
        }





