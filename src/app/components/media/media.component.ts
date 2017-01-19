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
    fullVids: []
    baseUrl: string = '//www.youtube.com/embed/'
    constructor(private mediaService: MediaService) { }
    ngOnInit(): void {
        this.getMedia()
    }
    getMedia(): void {
        this.mediaService.getMedia()
            .then((media: Media[]) => this.media = media)
    }
    for (item of media) {
        constructor(private sanitizer: DomSanitizer) {
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id)
        }
        item.link = url
            fullVids.push({ item })
    });
}
