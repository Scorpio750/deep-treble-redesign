/* Modules */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

/* Components */
import { AppComponent } from '../components/app.component'
import { HomeComponent } from '../components/home/home.component'
import { MembersComponent } from '../components/members/members.component'

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
		MembersComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {}
