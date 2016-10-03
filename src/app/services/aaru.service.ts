import { Injectable } from '@angular/core'
import { AARU } from '../components/aaru/AARU'
import { ORGS } from '../models/aaruSeed'

@Injectable()
export class AARUService {
	getOrgs(): Promise<AARU[]> {
		return Promise.resolve(ORGS)
	}
}
