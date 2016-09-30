import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/app.home-component';

@NgModule({
	imports: [BrowserModule],
	declarations: [HomeComponent],
	bootstrap: [HomeComponent]
})

export class AppModule {}
