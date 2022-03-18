let scroll = window.requestAnimationFrame || 
             function(callback) {
                 window.setTimeout(callback, 1000/60);
             };

const elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
    elementsToShow.forEach((element) => {
        if(isElemetInViewport(element)) {
            element.classList.add("is-visible");
        }
        else {
            element.classList.remove("is-visible");
        }
    });
    scroll(loop);
}

loop();

function isElemetInViewport (Elmnt) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && Elmnt instanceof jQuery) {
        Elmnt = Elmnt[0];
    }

    var rect = Elmnt.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElmntement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElmntement.clientWidth) /* or $(window).width() */
    );
}

let n = "5";
n = n.padStart(3,0)
console.log(n);