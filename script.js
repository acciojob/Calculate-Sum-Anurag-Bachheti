const btn = document.getElementById("sum_btn");
const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const sum = document.getElementById("Sum");

btn.addEventListener("click", function(){
	const val1 = parseFloat(num1.value)
	const val2 = parseFloat(num2.value)
	sum.textContent = val1 + val2;
})