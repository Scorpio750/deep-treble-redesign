import { Injectable } from '@angular/core'
import { Media } from '../components/media/Media'
import { MEDIA } from '../models/mediaSeed'

@Injectable()
export class MediaService {
	getMedia(): Promise<Media[]> {
		return Promise.resolve(MEDIA)
	}
}
