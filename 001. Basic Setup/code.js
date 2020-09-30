window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	for (var i=0; i<100; i++) {
		context.beginPath();
		context.moveTo(Math.random() * width, Math.random() * height);
		context.lineTo(Math.random() * width, Math.random() * height);
		context.stroke();
	}
}