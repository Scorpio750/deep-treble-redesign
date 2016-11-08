import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core'

@Directive({ selector: 'dropdown' })
export class DropdownDirective {

    constructor(private el: ElementRef, private renderer: Renderer) { }
    @HostListener('mouseenter') onMouseEnter() {
        this.setOpacity(1);
		console.log('inside dropdown')
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setOpacity(0.7);
		console.log('exiting dropdown')
	}
	private setOpacity(degree): void {
		this.renderer.setElementStyle(this.el.nativeElement, 'opacity', degree)
	}
}

@Directive({ selector: 'dropdown-content' })
export class DropdownContentDirective {

    constructor(private el: ElementRef, private renderer: Renderer) { }

    @HostListener('mouseleave') onMouseLeave() {
        this.display('none');
    }
    private display(state: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'display', state)
    }
}
