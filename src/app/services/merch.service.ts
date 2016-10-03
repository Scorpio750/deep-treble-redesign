import { Injectable } from '@angular/core'
import { Merch } from '../components/merch/Merch'
import { MERCH } from '../models/merchSeed'

@Injectable()
export class MerchService {
	getMerch(): Promise<Merch[]> {
		return Promise.resolve(MERCH)
	}
}
