function pop(){
	let blln = document.getElementById("balloon");
	let size = blln.offsetHeight;
	if (size < 420) {
		blln.style.height = (size + 10) + "px";
		blln.style.width = (size + 10) + "px";
	}
	else {
		blln.style.height = 200 + "px";
		blln.style.width = 200 + "px";
	}
	let color = blln.style.backgroundColor;
	colors(color, blln);
}

function colors(color, blln){
	if (color == "red") {
		blln.style.backgroundColor = "green";
	}
	else if (color == "green") {
		blln.style.backgroundColor = "blue";
	}
	else if (color == "blue") {
		blln.style.backgroundColor = "red";
	}
}

function shrink(){
	let blln = document.getElementById("balloon");
	let size = blln.offsetHeight;
	if (size >= 205) {
		blln.style.height = (size - 5) + "px";
		blln.style.width = (size - 5) + "px";
	}
	let color = blln.style.backgroundColor;
	if (color == "green") {
		blln.style.backgroundColor = "red";
	}
	else if (color == "blue") {
		blln.style.backgroundColor = "green";
	}
	else if (color == "red") {
		blln.style.backgroundColor = "blue";
	}
}