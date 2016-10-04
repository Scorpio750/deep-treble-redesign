import { Injectable } from '@angular/core'
import { Event } from '../components/history/Event'
import { TIMELINE } from '../models/historySeed'

@Injectable()
export class HistoryService {
	getTimeline(): Promise<Event[]> {
		return Promise.resolve(TIMELINE)
	}
}
