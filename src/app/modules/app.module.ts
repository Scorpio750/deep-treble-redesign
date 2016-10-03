/* Modules */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

/* Components */
import { AppComponent } from '../components/app.component'
import { HomeComponent } from '../components/home/home.component'
import { MembersComponent } from '../components/members/members.component'
import { HistoryComponent } from '../components/history/history.component'
import { MediaComponent } from '../components/media/media.component'
import { MerchComponent } from '../components/merch/merch.component'
import { AARUComponent } from '../components/aaru/aaru.component'

/* Routing */
import { routing } from '../routing/app.routing'

@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	declarations: [
		AppComponent,
		HomeComponent,
		MembersComponent,
		HistoryComponent,
		MediaComponent,
		MerchComponent,
		AARUComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {}