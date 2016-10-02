import { Component } from '@angular/core'
import { MembersService } from '../services/members.service'

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [MembersService]
})
export class AppComponent {

}
