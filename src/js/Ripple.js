var Ripple = function (_ctx, _x, _y, _diameter) {

  this.ctx = _ctx
  this.mainImg = document.getElementById('mainImg')
  this.displacementImg = document.getElementById('displacementImg')
  this.displacementOverlayImg = document.getElementById('displacementOverlayImg')

  this.normalImgData
  this.displacedImgData

  this.animationProps = {
    depth: 0,
    scale: 0
  }

  this.diameter = _diameter
  this.diameter1 = _diameter-1
  this.x = _x
  this.y = _y

  this.tmpCanvas = document.createElement('canvas')
  this.tmpCanvas.width = this.tmpCanvas.height = _diameter
  this.tmpCanvasCtx = this.tmpCanvas.getContext('2d')

  // And tmp canvas to body for debugging purposes
  document.body.appendChild(this.tmpCanvas)
  this.init()
}

Ripple.prototype = {

	init: function() {
		var self = this
		if (!this.checkImagesLoaded()) {
			this.displacementImg.onload = function() {
				self.checkImagesLoaded()
			}
			this.displacementOverlayImg.onload = function() {
				self.checkImagesLoaded()
			}
		}
	},

	checkImagesLoaded: function() {

		if (this.displacementImg.width && this.displacementOverlayImg.width) {
			this.start()
			return true
		}
		return false
	},

	start: function() {

		this.normalImgData = this.ctx.getImageData(this.x, this.y, this.diameter, this.diameter)
		this.displacedImgData = this.ctx.getImageData(this.x, this.y, this.diameter, this.diameter)

		// Begin animation
		TweenMax.to(this.animationProps, 5, {
			scale: 4,
			repeat: -1,
			ease: Sine.easeOut
		})

		var tl = new TimelineMax({
			repeat: -1
		})
		tl.add(TweenMax.to(this.animationProps, .5, {
			depth: 10,
			ease: Quad.easeOut
		}))
		tl.add(TweenMax.to(this.animationProps, 4.5, {
			depth: 0,
			ease: Quad.easeOut
		}))

		this.render()
	},

	render: function() {

		var self = this,
			scale = this.animationProps.scale,
			depth = this.animationProps.depth,
			currentDiameter = this.diameter * scale,
			centerPoint = this.diameter / 2 - currentDiameter / 2,
			i,
			j,
			current,
			target,
			x,
			y,
			py,
			val

		this.tmpCanvasCtx.clearRect(0, 0, this.diameter, this.diameter)
		this.tmpCanvasCtx.drawImage(this.displacementImg, centerPoint, centerPoint, currentDiameter, currentDiameter)
		this.tmpCanvasCtx.globalCompositeOperation = 'multiply'
		this.tmpCanvasCtx.drawImage(this.displacementOverlayImg, 0, 0, this.diameter, this.diameter)

		this.displacementImgData = this.tmpCanvasCtx.getImageData(0, 0, this.diameter, this.diameter)


		for (y = 0; y < this.diameter; y++) {
			for (x = 0; x < this.diameter; x++) {

				current = y * this.diameter + x << 2

				val = this.displacementImgData.data[current] / 255

				py = y + val * -3 * depth >> 0

				if (py < 0) {
					py = 0
				} else if (py > this.diameter1) {
					py = this.diameter1
				}

				target = py * this.diameter + x << 2

				this.displacedImgData.data[current] = this.normalImgData.data[target]
				this.displacedImgData.data[current + 1] = this.normalImgData.data[target + 1]
				this.displacedImgData.data[current + 2] = this.normalImgData.data[target + 2]
			}
		}
		this.ctx.putImageData(this.displacedImgData, this.x, this.y)
		requestAnimationFrame(function() {
			self.render()
		})

	}

}

module.exports = Ripple
