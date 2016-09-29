import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyApp } from '../components/app.component'

@NgModule({
	imports: [BrowserModule],
	declarations: [MyApp],
	bootstrap: [MyApp]
})

export class MyAppModule {}
