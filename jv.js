document.getElementById('left_').onclick = sLeft;
var left = 0;
function sLeft(){
	var polosa = document.getElementById('polosa');
	left = left -300;
	if (left < -2100) {
		left = 0;
	}
	polosa.style.left = left +'px';
}