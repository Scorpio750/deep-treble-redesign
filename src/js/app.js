import TweenMax from 'gsap'

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
})
