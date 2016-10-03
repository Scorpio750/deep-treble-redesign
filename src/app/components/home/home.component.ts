import { Component, HostBinding } from '@angular/core'
import { trigger, transition, animate, style, state } from '@angular/core'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1
                })
            ),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate('1.5s ease-in-out')
            ]),
            transition('* => void', [
                animate('1.5s ease-out', style({
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class HomeComponent {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true
    }
    greeting = {
        header: "Welcome to Deep Treble's Webpage",
        body: "Please excuse our appearance as we build our new website!"
    }
}
