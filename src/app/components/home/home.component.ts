import { Component } from '@angular/core'
import './home.component.html'
import './home.component.scss'

@Component({
	selector: 'app',
	styleUrls: ['./home.component.scss'],
	templateUrl: './home.component.html'
})
export class HomeComponent {
	greeting = {
		header: "Welcome to Deep Treble's Webpage",
		body: "Please excuse our appearance as we build our new website!"
	}
}
