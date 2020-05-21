/* this external script file is the javascript file to calculate the 
 the loans for the index*/

function loanProcess(){


	var one = document.getElementById("num1").value;
    var two = document.getElementById("num2").value;
    var three = document.getElementById("num3").value;
    var sum = parseInt(one) + parseInt(two) + parseInt(three);
    document.getElementById("answer").innerHTML = ("your total is " + sum);
        
}