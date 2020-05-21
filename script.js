/* this external script file is the javascript file to calculate the 
 the loans for the index*/

function loanProcess(){

    //variable "amtDesired" is the Ammount loan desired
    var amtDesired = document.getElementById("num1").value;

    //variable "apr" Annual Percentage rate, need to be convert into hundreds decimal place
    var apr = document.getElementById("num2").value;
    //apr = 0.01 * apr;

    //variable "year" is the number of years desired to pay off the loan.
    var year = document.getElementById("num3").value;
     //varibale "n" is number of payments in year which is always 12
     var n = 12;

     //try # 1 it worked
    //var sum = parseFloat(amtDesired) + parseFloat(apr) + parseFloat(year) + n + 10;
    //document.getElementById("answer").innerHTML = ("your total is " + sum);

    var power = (-n) * (year);
    var numerator = (amtDesired) * ((apr)/(n));
    var denom = (1 - (1 + Math.pow( (apr)/(n) ,power)));

    var payment = (numerator) / (denom);


    document.getElementById("answer").innerHTML = ("your total is " + payment);


        
}

