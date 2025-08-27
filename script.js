const num1 = document.getElementById("n1").value;
const num2 = document.getElementById("n2").value;
const btn = document.getElementById("sum_button");
const sum = document.getElementById("sum");

btn.addEventListener("click", function(){
	sum.textContent = num1 + num2;
})