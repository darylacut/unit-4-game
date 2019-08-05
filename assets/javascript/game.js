// game displays a random number onscreen between 19-120

//document.getElementById("#randomNumber").innerHTML = 



    var randomNumber;
    var button1Value;
    var button2Value;
    var button3Value;
    var button4Value;
    var winsCount = 0
    var lossesCount = 0
    var totalValue;


    function startGame() {
        randomNumber = Math.floor(Math.random() * (120 - 19 +1)) + 19;
        button1Value = Math.floor(Math.random() * (12)) + 1;
        button2Value = Math.floor(Math.random() * (12)) + 1;
        button3Value = Math.floor(Math.random() * (12)) + 1;
        button4Value = Math.floor(Math.random() * (12)) + 1;
        totalValue = 0
    
        $('#total').text(totalValue);
        $('#wins').text(winsCount);
        $('#losses').text(lossesCount);
        $("#randomNumberBox").text(randomNumber);
    }
    
    function checkIfWin() {
        if ( totalValue == randomNumber ) {
            winsCount++;
            alert ("You got a WIN!");
            $('#wins').text(winsCount);
            startGame();
        }
          
         if ( totalValue > randomNumber ) {
            lossesCount++;
            alert ("You incurred a LOSS!");
            $('#losses').text(lossesCount);
            startGame();
        }
    }


 $(document).ready(function() {

    
$("#randomNumberBox").text(randomNumber);
//as far as i know this should be able to display the value of randomNumber to randomNumberBox in html


    $("#button1").on("click", function() {
        totalValue = button1Value + totalValue;
        $("#total").text(totalValue);   
        checkIfWin();
    });
    
    $("#button2").on("click", function() {
        totalValue = button2Value + totalValue;
        $("#total").text(totalValue);
        checkIfWin();
    });

    $("#button3").on("click", function() {
        totalValue = button3Value + totalValue;
        $("#total").text(totalValue);
        checkIfWin();
    });
    
    $("#button4").on("click", function() {
        totalValue = button4Value + totalValue;
        $("#total").text(totalValue);
        checkIfWin();
    });



         startGame();

    
       
});

