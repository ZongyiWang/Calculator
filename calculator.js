var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var sum = document.getElementById("sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
	var first = parseFloat(numOne.value) || 0;
	var second = parseFloat(numTwo.value) || 0;
	var theSum = first + second;
	sum.innerHTML = "The sum is now: " + theSum;
}
