import { Injectable } from '@angular/core'
import { Member } from '../components/Member'
import { MEMBERS } from '../models/members'

@Injectable()
export class MemberService {
	getMembers(): Promise<Member[]> {
		return Promise.resolve(MEMBERS)
	}
}
