// quiz.component.ts
import { Component } from '@angular/core';
import { QUESTIONS } from '../questions';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  imports:[NgIf,NgFor]
})
export class QuizComponent {
  questions = QUESTIONS;
  currentQuestionIndex = 0;
  selectedAnswer: string | null = null;
  score = 0;

  onSelectAnswer(answer: string): void {
    this.selectedAnswer = answer;
  }

  onSubmitAnswer(): void {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    this.selectedAnswer = null;
    this.currentQuestionIndex++;
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}
