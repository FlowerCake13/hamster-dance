var img = document.getElementById("hamster");
var text = document.getElementById("text");

document.addEventListener("keydown", function(event) {
	console.log(event.keyCode);
	switch(event.keyCode){
		case 37:
			console.log("left");
			img.src = 'imgs/left.png';
			text.innerHTML = "Left";
			break;
		case 38:
			console.log("up");
			img.src = 'imgs/up.png';
			text.innerHTML = "Up";
			break;
		case 39:
			console.log("right");
			img.src = 'imgs/right.png';
			text.innerHTML = "Right";
			break;
		case 40: 
			console.log("down");
			img.src = 'imgs/down.png';
			text.innerHTML = "Down";
			break;
		default:
			console.log("default");
	}
})