import { Component, OnInit } from '@angular/core'
import { Event } from './Event'
import { HistoryService } from '../../services/history.service'

@Component({
	selector: 'history',
	templateUrl: './history.component.html',
	styleUrls:['./history.component.scss'],
	providers: [HistoryService]
})
export class HistoryComponent {
	timeline: Event[]
	selectedEvent: Event
	constructor(private historyService: HistoryService) {}
	ngOnInit(): void {
		this.getTimeline()
	}
	getTimeline(): void {
		this.historyService.getTimeline()
			.then((timeline: Event[]) => this.timeline = timeline)
	}
	onSelect(event: Event) {
		this.selectedEvent = event
	}
}
