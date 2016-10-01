import TweenMax from 'gsap'
import Ripple from './Ripple.js'

// GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    const coffee = document.getElementById('coffee');
    const blankSpace = document.getElementById('blank-space');
    const myCanvas = document.getElementById('myCanvas');
    const coffeeHolder = document.getElementById('coffee-holder');
    const ctx = myCanvas.getContext('2d');
    ctx.drawImage(coffee, 0, 0);

    // initial animations on pageload
    (function aCupofCoffee() {
        TweenMax.to(myCanvas, 3, {
            opacity: 1,
            ease: Power3.easeInOut
        })
    })()


    coffeeHolder.addEventListener('click', function showMain() {
        coffee.style.display = 'none'
        coffeeHolder.style.display = 'none'
        this.style.display = 'none'
        // ripple animations
        let r = new Ripple(ctx, 0, -15, 720)

        TweenMax.to(document.getElementById('ripple'), .4, {
            opacity: 0,
            display: 'none',
            ease: Power2.easeInOut
        })
    })

})
