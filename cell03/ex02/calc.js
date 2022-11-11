function calculator()
{
	let first = Number(document.getElementById("first").value);
	let second = Number(document.getElementById("second").value);
	let select = document.getElementById("operand").value;

	if ((parseInt(first) || parseInt(second)) < 0){
		alert("Error :(")
	}

	if (select == '+') {
		alert(parseInt(first) + parseInt(second));
		console.log(parseInt(first) + parseInt(second));
	}
	else if (select == '-') {
		alert(parseInt(first) - parseInt(second));
		console.log(parseInt(first) - parseInt(second));
	}
	else if (select == '*') {
		alert(parseInt(first) * parseInt(second));
		console.log(parseInt(first) * parseInt(second));
	}
	else if (select == '/') {
		if (parseInt(second) == 0){
			alert("It's over 9000!");
			console.log("It's over 9000!");
		}
		else {
			alert(parseInt(first) / parseInt(second));
			console.log(parseInt(first) / parseInt(second));
		}
	}
	else if (select == '%') {
		if (parseInt(second) == 0){
			alert("It's over 9000!");
			console.log("It's over 9000!");
		}
		else {
			alert(parseInt(first) % parseInt(second));
			console.log(parseInt(first) % parseInt(second));
		}
	}
}