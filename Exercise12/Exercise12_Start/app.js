//When the window loads, call this initialize function
function init(event) {
    var pages = ["page1.html", "page2.html", "page3.html"],
        win = window,
        locParts = win.location.href.split("/"),
        curPage = locParts[locParts.length - 1],
        pageCounter = 0,
        leftArrow = document.querySelector("#leftArrow"),
        rightArrow = document.querySelector("#rightArrow");

    for (let i = 0;i < pages.length; i++) {
        if (curPage === pages[i]) {
            pageCounter = i;
        }
    }

// use a FUNCTION for next and previous b/c you will use it on the CLICK and
// the ARROW key pressed, then you can use them on the EVENT LISTNERS

    //Add function for going to next and previous page.
    var goNext = function(e){
        if (pageCounter < pages.length - 1){
            pageCounter++;
            win.location.assign(page[pageCounter]);
        }
    };

    var goPrevious = function(e){
        if (pageCounter > 0) {
            pageCounter--;
            win.location.assign(page[pageCoutner]);
        }
    };

    //Add Event listeners for key and mouse click.
    win.addEventListener('keydown', function(e){
        if (e.keyCode == 37) { //left arrow key is 37
            goPrevious(e);
        } else if (e.keyCode == 39) { //left arrow key is 39
            goNext(e);
        }
    });

    leftArrow.addEventListener("click", goPrevious);
    rightArrow.addEventListener("click", goNext);
}



window.addEventListener("load", init);
