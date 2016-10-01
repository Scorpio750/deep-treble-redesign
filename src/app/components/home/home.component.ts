import { Component } from '@angular/core'

@Component({
	selector: 'app',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	greeting = {
		header: "Welcome to Deep Treble's Webpage",
		body: "Please excuse our appearance as we build our new website!"
	}
}
