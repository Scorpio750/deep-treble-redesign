import { Component } from '@angular/core'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    greeting = {
        header: "Welcome to Deep Treble's New Webpage!",
        body: ""
    }
}
