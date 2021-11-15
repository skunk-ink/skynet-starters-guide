function next(currentPage, nextPage) {
    progressBar = document.getElementById("bar");
    
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