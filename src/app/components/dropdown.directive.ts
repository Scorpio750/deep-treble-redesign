import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core'

@Directive({ selector: 'dropdown' })
export class DropdownDirective {

    constructor(private el: ElementRef, private renderer: Renderer) { }
    @HostListener('') onClick() {
        this.toggleDropdown();
    }
	private toggleDropdown(): void {

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
