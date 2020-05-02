
// This would be 200% more spahgetti without inclement. Thanks man!

// Actual calculate.
function calculate() {
	
	let current = document.getElementById("current").value ;
	
	let target = document.getElementById("target").value ;
		
		// Gain from a bet is (bet*5)-bet, therefore (target - current)/4 is the amount needed right?
		document.getElementById("TargetField").innerHTML = (target - current)/4;
}
