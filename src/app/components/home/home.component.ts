import { Component } from '@angular/core'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    greeting = {
        header: "Follow our social media to catch a glimpse of us on Summer DTour 2k17!",
        body: ""
    }
}
