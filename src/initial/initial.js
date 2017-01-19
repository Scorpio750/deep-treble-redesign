import TweenMax from 'gsap'
import Ripple from './Ripple.js'

// disable/enable scrolling
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

// GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    disableScroll();
    const coffee = document.getElementById('coffee');
    const myCanvas = document.getElementById('coffee-canvas');
    const coffeeHolder = document.getElementById('coffee-holder-placeholder');
    const ctx = myCanvas.getContext('2d');
    ctx.drawImage(coffee, 0, 0);


    // initial animations on pageload
    (function aCupofCoffee() {
        TweenMax.to(myCanvas, 4, {
            opacity: 1,
            ease: Power3.easeInOut
        })
    })()


    coffeeHolder.addEventListener('click', function fadeToBlack() {
        coffee.style.display = 'none'
        coffeeHolder.style.display = 'none'
        this.style.display = 'none'
        // ripple animations
        let r = new Ripple(ctx, 0, -14, 720)

        TweenMax.to(document.getElementById('ripple'), 4, {
            opacity: 0,
            display: 'none',
            ease: Power2.easeInOut,
            onComplete: showMain
        })
    })

    function showMain() {
        TweenMax.to(document.getElementById('black-space'), 1.5, {
            opacity: 0,
            display: 'none',
            ease: Power2.easeInOut,
            onComplete: enableScroll
        })
    }

})
