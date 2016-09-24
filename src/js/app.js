import TweenMax from 'gsap'
import Ripple from './Ripple.js'

// GSAP animations
document.addEventListener('DOMContentLoaded', () => {
	const coffee = document.getElementById('coffee');

	// initial animations on pageload
	(function aCupofCoffee() {
		TweenMax.to(coffee, 3, {
			opacity: 1,
			ease: Power2.easeInOut
		})
	})()

// ripple animations
var ctx = document.getElementById('myCanvas').getContext('2d');
ctx.drawImage(document.getElementById('coffee'), 0, 0)
var r = new Ripple(ctx, 100, 50, 400);
})
