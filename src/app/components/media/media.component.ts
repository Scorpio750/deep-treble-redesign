import { Component, OnInit } from '@angular/core'
import { Media } from './Media'
import { MediaService } from '../../services/media.service'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss'],
    providers: [MediaService]
})
export class MediaComponent {
    media: Media[]
    baseUrl: string = '//www.youtube.com/embed/'
    constructor(private mediaService: MediaService) { }
    ngOnInit(): void {
        this.getMedia()
    }
    getMedia(): void {
        this.mediaService.getMedia()
            .then((media: Media[]) => this.media = media)
    }
}
