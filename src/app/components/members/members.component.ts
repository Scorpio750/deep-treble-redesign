import { Component, OnInit, HostBinding } from '@angular/core'
import { trigger, transition, animate, style, state } from '@angular/core'
import { Member } from './Member'
import { MembersService } from '../../services/members.service'
// import { membersAnimations } from './members.animation'

@Component({
    selector: 'members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss'],
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1
                    // transform: 'translateY(0)'
                })
            ),
            transition('void => *', [
                style({
                    opacity: 0
                    // transform: 'translateY(-50%)'
                }),
                animate('1.5s ease-in-out')
            ]),
            transition('* => void', [
                animate('1.5s ease-out', style({
                    opacity: 0
                    // transform: 'translateY(-50%)'
                }))
            ])
        ])
    ]

})
export class MembersComponent implements OnInit {

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true
    }

    members: Member[]

    constructor(private membersService: MembersService) { }

    // onInit lifecycle hook
    ngOnInit(): void {
        this.getMembers()
    }
    getMembers(): void {
        this.membersService.getMembers()
            .then((members: Member[]) => this.members = members)
    }
}
