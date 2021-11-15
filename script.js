function next(currentPage, nextPage) {
    currentPage = document.getElementById(currentPage);
    nextPage = document.getElementById(nextPage);

    currentPage.style.display = "none";
    nextPage.style.display = "block";
}

function back(currentPage, nextPage) {
    progressBar = document.getElementById("bar");
    
    currentPage = document.getElementById(currentPage);
    nextPage = document.getElementById(nextPage);

    currentPage.style.display = "none";
    nextPage.style.display = "block";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function dropdownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.fafa-bars')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;

		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}