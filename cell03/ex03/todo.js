function delElem(id) {
	if (confirm("Seguro que quieres borrar la tarea")){
		document.getElementById(id).remove();
		saveCookies();
	}
}

let counter = 0;

function newToDo() {
	let newTask = prompt("Please enter a new task", "");
	let list = document.getElementById("ft_list");
	if (newTask != "") {
		var todo = document.createElement("div");
		todo.setAttribute("id", "newE" + counter);
		todo.setAttribute("onclick", "delElem(id)")
		let texto = todo.innerHTML = newTask;
		list.insertBefore(todo, list.firstChild);
		counter = counter + 1;
		saveCookies();
	}
	
}

function saveCookies() {
	localStorage.setItem("saved_ToDo", document.getElementById("ft_list").innerHTML);
}

function setCookies() {
	document.getElementById("ft_list").innerHTML = localStorage.getItem("saved_ToDo");
}

window.onload = setCookies();