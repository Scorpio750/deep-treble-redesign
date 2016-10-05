import { Component, OnInit } from '@angular/core'
import { Merch } from './Merch'
import { MerchService } from '../../services/merch.service'

@Component({
	selector: 'merch',
	templateUrl: './merch.component.html',
	styleUrls:['./merch.component.scss'],
	providers: [MerchService]
})
export class MerchComponent implements OnInit {
	merch: Merch[]
	placeholder = 'http://placehold.it/400'
	constructor(private merchService: MerchService) {}

	ngOnInit(): void {
		this.getMerch()
	}
	getMerch(): void {
		this.merchService.getMerch()
			.then((merch: Merch[]) => this.merch = merch)
	}
}
