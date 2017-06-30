
//When the window loads, call this initialize function
function init(event) {
    var leftArrow = document.querySelector("#leftArrow");
    var rightArrow = document.querySelector("#rightArrow");
    var urlParts = window.location.href.split("/");
    var pages = ["page1.html", "page2.html", "page3.html"];
    var currentPage = urlParts[urlParts.length-1];
    var pageCounter = 0;


    for (let i = 0; i < pages.length; i++) {
        if (currentPage === pages[i]) {
            pageCounter = i;
        }
    }

    //Add function for going to next and previous page.
    var goNext = function(e) {
        if (pageCounter < pages.length - 1) {
            pageCounter++;
            window.location.assign(pages[pageCounter]);
        }
    };

    var goPrevious = function(e) {
        if (pageCounter > 0) {
            pageCounter--;
            window.location.assign(pages[pageCounter]);
        }
    };

    //Add Event listeners for key and mouse click.
    window.addEventListener('keydown', function(e) {
        if (e.keyCode === 37) { //left arrow key
            goPrevious(e);
        } else if (e.keyCode === 39) { //Right arrow key
            goNext(e);
        }
    });

    leftArrow.addEventListener("click", goPrevious);
    rightArrow.addEventListener("click", goNext);
}

window.addEventListener("load", init);
