import { CommonModule, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NgIf,CommonModule]
})
export class HomeComponent {
  activeSection: string = 'about';
  isActive = false;
  isActive2 = false;
  isActive3 = false;
  isActive4= false;

  onClick1() {
    this.isActive = true;
    this.isActive2 = false;
    this.isActive3 = false;
    this.isActive4 = false;
  }
  onClick2() {
    this.isActive = false;
    this.isActive2 = true;
    this.isActive3 = false;
    this.isActive4 = false;
  }
  onClick3() {
    this.isActive = false;
    this.isActive2 = false;
    this.isActive3 = true;
    this.isActive4 = false;
  }
  onClick4() {
    this.isActive = false;
    this.isActive2 = false;
    this.isActive3 = false;
    this.isActive4 = true;
  }
  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
