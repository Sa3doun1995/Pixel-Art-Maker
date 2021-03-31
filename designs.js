var color = document.getElementById('colorPicker');
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
const submit = document.getElementById("button");
const grid = document.getElementById('pixelCanvas');

submit.addEventListener('click', function (event) {
	grid.innerHTML = " ";
	event.preventDefault();
	makeGrid();

});

grid.addEventListener('click', function (event) {
	if (event.target.nodeName === 'TD') {
		event.target.style.backgroundColor = color.value;
	}
});

function makeGrid() {
	for (var i = 0; i < height.value; i++) {
		const row = grid.insertRow(0);
		for (var j = 0; j < width.value; j++) {
			row.insertCell(0);
		}
	}
}