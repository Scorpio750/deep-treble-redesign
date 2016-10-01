/* Modules */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

/* Components */
import { AppComponent } from '../components/app.component'
import { HomeComponent } from '../components/home/home.component'


@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		HomeComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {}
