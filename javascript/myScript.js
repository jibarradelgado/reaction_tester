var createdTime = Date.now();

function getRandomNumber() {
	var time = Math.random();
	time *= 5000;
	time = Math.floor(time);
	return time; 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeBoxAppear() {
	setTimeout(function() {
		document.getElementById("box").style.display = "block";
		createdTime = Date.now();
	}, getRandomNumber());
}

function changeBoxColor() {
	document.getElementById("box").style.backgroundColor = getRandomColor();
}

function changeBoxShape() {
	if (Math.random() > 0.5) {
		document.getElementById("box").style.borderRadius = "100px";
	}
	else {
		document.getElementById("box").style.borderRadius = "0";
	}
}

function changeBoxPosition() {
	var top = Math.random();
	var left = Math.random();
	top *= 300; 
	left += 500;
	document.getElementById("box").style.top = top + "px";
	document.getElementById("box").style.left = left + "px";
}

document.getElementById("box").onclick = function() { 
	this.style.display = 'none';
	
	var clickedTime = Date.now();

	var reactionTime = (clickedTime - createdTime)/1000;

	document.getElementById("time").innerHTML = reactionTime;

	changeBoxColor();
	changeBoxShape();
	changeBoxPosition();
	makeBoxAppear();
}

