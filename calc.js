
// Actual calculate.
function calculate() {
	
	let current = document.getElementById("current").value ;
	
	let target = document.getElementById("target").value ;
		
		document.getElementById("TargetField").innerHTML = (target - current)/5;
}
