import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuizComponent } from './quiz/quiz.component';
import { AnalyticsService } from './analytics.service';

@NgModule({
    declarations: [
         // Add HomeComponent to declarations
         QuizComponent
    ],
    imports: [
        BrowserModule,
        QuizComponent
        // Add RouterModule to imports with the specified routes
    ],
 
    providers: [AnalyticsService],
    bootstrap: [] // Bootstrap the application with HomeComponent
})
export class AppModule { }

