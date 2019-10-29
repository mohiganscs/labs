var exceptions = document.getElementById('exceptions');

function toggleSidebar() {
	document.getElementsByClassName('sidebar')[0].classList.toggle('active');
	document.getElementsByClassName('toggle-btn')[0].classList.toggle('active');
}

function toggleUnit(whichUnit) {
	var element = document.getElementById(whichUnit);
	element.classList.toggle('shown');
}

function toUnit(whichUnit) {
	var id = document.getElementById(whichUnit);
	var offset = -143;
	var y = id.getBoundingClientRect().top + window.pageYOffset + offset;

	window.scrollTo({
		top: y,
		behavior: 'smooth',
	});

}
