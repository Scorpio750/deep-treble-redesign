import { Component, OnInit } from '@angular/core'
import { Member } from './Member'
import { MembersService } from '../../services/members.service'
// import { membersAnimations } from './members.animation'

@Component({
    selector: 'members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
    selectedMember: Member
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
    onSelect(selectedMember): void {
        this.selectedMember = selectedMember
    }
}
