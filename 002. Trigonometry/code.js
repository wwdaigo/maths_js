window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	context.translate(0, height / 2);
	context.scale(1, -1);

	for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
		let x = angle * 200;
		let ySin = Math.sin(angle) * 200;
		let yCos = Math.cos(angle) * 200;

		context.fillRect(x, ySin, 100, 5);
		context.fillRect(x, yCos, 50, 1);
	}
}