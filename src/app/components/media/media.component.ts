import { Component, OnInit } from '@angular/core'
import { Media } from './Media'
import { MediaService } from '../../services/media.service'

@Component({
	selector: 'media',
	templateUrl: './media.component.html',
	styleUrls:['./media.component.scss'],
	providers: [MediaService]
})
export class MediaComponent {
	media: Media[]
	constructor(private mediaService: MediaService) {}
	ngOnInit(): void {
		this.getMedia()
	}
	getMedia(): void {
		this.mediaService.getMedia()
			.then((media: Media[]) => this.media = media)
	}

}
