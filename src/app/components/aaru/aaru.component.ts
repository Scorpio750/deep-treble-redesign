import { Component, OnInit } from '@angular/core'
import { AARU } from './AARU'
import { AARUService } from '../../services/aaru.service'

@Component({
    selector: 'aaru',
    templateUrl: './aaru.component.html',
    styleUrls: ['./aaru.component.scss'],
    providers: [AARUService]
})
export class AARUComponent implements OnInit {
    aaru: AARU[]
    constructor(private aaruService: AARUService) { }
	
    ngOnInit(): void {
		this.getOrgs()
    }
	getOrgs(): void {
		this.aaruService.getOrgs()
			.then((aaru: AARU[]) => this.aaru = aaru)
	}
}
