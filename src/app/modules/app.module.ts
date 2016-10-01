/* Modules */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

/* Components */
import { AppComponent } from '../components/app.component'
import { HomeComponent } from '../components/home/home.component'
import { RippleComponent } from '../components/ripple/ripple.component'


@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		HomeComponent,
		RippleComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {}
