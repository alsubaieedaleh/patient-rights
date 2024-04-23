import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
         // Add HomeComponent to declarations
    ],
    imports: [
        BrowserModule,
        // Add RouterModule to imports with the specified routes
    ],
 
    providers: [],
    bootstrap: [] // Bootstrap the application with HomeComponent
})
export class AppModule { }

