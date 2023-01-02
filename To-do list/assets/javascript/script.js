/*
window.onload = function(){
    var btn_add = document.getElementById("add_activity");
    btn_add.onclick = add_atividade;
}

function add_atividade(){
    let atividade = document.getElementById("afazeres").value;
    document.getElementById("activity").innerHTML = 
    "<input type=checkbox id=confirmado name=feito>" + "<label for=feito class=checked>" + atividade + "</label>";

}
*/

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('afazeres');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', 'atividade');

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}