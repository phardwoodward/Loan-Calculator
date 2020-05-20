/* this external script file is the javascript file to calculate the 
 the loans for the index*/

function loanProcess(){


	var one = document.getElementById("num1").value;
    var two = document.getElementById("num2").value;
    var sum = parseInt(one) + parseInt(two);
    document.getElementById("answer").innerHTML = sum;
        
}