import { Component } from '@angular/core'

@Component({
	selector: 'app',
	styleUrls: ['css/components/home.css'],
	templateUrl: 'views/components/home.html'
})

export class HomeComponent {
	greeting = {
		header: "Welcome to Deep Treble's Webpage",
		body: "Please excuse our appearance as we build our new website!"
	}
}
