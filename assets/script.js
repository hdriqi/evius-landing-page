var i = 0;
var images = [];
var time = 2500;
var timeout;

images[0] = 'img/uu1.png';
images[1] = 'img/uu2.png';
images[2] = 'img/uu3.png';

function changeImg() {
	var dot = document.getElementById('dot'+i)
	dot.style.backgroundColor  = '#2A459B';
	document.slider.src = images[i];

	for (j=0; j < images.length; j++) {
		if (j !== i) {
			var dotx = document.getElementById('dot'+j)
			dotx.style.backgroundColor  = '#C4C4C4';
		}
	}

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

	timeout = setTimeout("changeImg()", time);
}

window.onload = changeImg;

var elements = document.querySelectorAll('#dot0,#dot1,#dot2');
for (x=0; x < elements.length; x++) {
	elements[x].addEventListener('click', function() {
		var newIndex = this.getAttribute('index');
		i = newIndex;
		
		// this.style.backgroundColor = '#2A459B';

		clearTimeout(timeout);
		changeImg();
	})
}

var menu = 'hidden';

document.getElementById('menuHamburger').addEventListener('click', function() {
	if (menu === 'hidden') {
		document.getElementById('nav').style.left = '0';
		document.getElementById('contentWrapper').style.filter = 'blur(10px)';
		document.getElementById('contentWrapper').style.pointerEvents = 'none';
		menu = 'shown';
		console.log(menu)
	}
	else{
		document.getElementById('nav').style.left = 'calc(-1 * calc(100% - 56px))';
		document.getElementById('contentWrapper').style.filter = 'blur(0px)';
		document.getElementById('contentWrapper').style.pointerEvents = 'auto';
		menu = 'hidden';
		console.log(menu)
	}
})

document.querySelectorAll('a[type^="scroll"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        console.log('scroll')

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});