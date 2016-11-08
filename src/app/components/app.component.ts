import { Component } from '@angular/core'

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public dropdownFlag: boolean = false
    toggleDropdown(e): void {
		let display = e.target.children[0].style['display']
        if (display === 'block') {
            this.dropdownFlag = false
        }
		else {
			this.dropdownFlag = true
		}
    }
    isTriggered(): boolean {
        return this.dropdownFlag === true
    }
}
