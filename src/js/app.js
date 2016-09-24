import TweenMax from 'gsap'
import Ripple from './Ripple.js'

// GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    const coffee = document.getElementById('coffee');
	const myCanvas = document.getElementById('myCanvas');
    const coffeeHolder = document.getElementById('coffee-holder');

    // initial animations on pageload
    (function aCupofCoffee() {
        TweenMax.to(coffee, 3, {
            opacity: 1,
            ease: Power2.easeInOut
        })
    })()

	coffeeHolder.addEventListener('click', showMain)

    // ripple animations
    let ctx = myCanvas.getContext('2d')
    ctx.drawImage(coffee, 0, 0)
})

function showMain(ctx) {
	TweenMax.to(document.getElementById('ripple'), .2, {
		opacity: 0,
		display: 'none',
		ease: Power4.easeIn
	})
    let r = new Ripple(ctx, 100, 50, 1000)
}
