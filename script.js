function toggleSidebar() {
	document.getElementsByClassName('sidebar')[0].classList.toggle('active');
	document.getElementsByClassName('toggle-btn')[0].classList.toggle('active');
}

function readMore(where) {
	var dots = document.getElementById("dots-" + where)
	var moreText = document.getElementById("more-" + where);
	var btnText = document.getElementById("moreBtn-" + where);

	if(dots.style.display == "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "[Read More]";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "[Read less]";
		moreText.style.display = "inline";
	}
}