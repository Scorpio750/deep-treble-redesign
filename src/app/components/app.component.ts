import { Component } from '@angular/core'
import { MembersService } from '../services/members.service'

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MembersService]
})
export class AppComponent {
    public dropdownFlag: boolean = false
    toggleDropdown(e): void {
		let display = e.target.children[0].style['display']
        if (display === 'block') {
            this.dropdownFlag = false
        }
		else if (display === 'none'){
			this.dropdownFlag = true
		}
    }
    isTriggered(): boolean {
        return this.dropdownFlag === true
    }
}
