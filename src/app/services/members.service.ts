import { Injectable } from '@angular/core'
import { Member } from '../components/members/Member'
import { MEMBERS } from '../models/membersSeed'

@Injectable()
export class MembersService {
	getMembers(): Promise<Member[]> {
		return Promise.resolve(MEMBERS)
	}
}
