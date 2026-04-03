import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-intro-overlay',
  imports: [CommonModule],
  templateUrl: './intro-overlay.component.html',
})
export class IntroOverlayComponent implements OnInit {
  name = 'jeswin-james-portfolio.vercel.app'.split("");
  counter = signal(0);
  hasIntroFinished = signal(false);
  /* 
  NOTE: 
  - In TypeScript, you can't run code directly inside a class.
  - Code that does something needs to live inside a method (AKA the OnInit).
  */
  ngOnInit(): void {
    this.name.forEach((_, i) => {
      setTimeout(() => {
        this.counter.set(this.counter() + 1);
      }, i * 90)
    })

    setTimeout(() => {
      this.hasIntroFinished.set(true);
    }, this.name.length * 90 + 200);
  }
}

/* 
COMPONENTS NEEDED:

USE NGONINIT (LOADS WHEN PAGE LOADS)
SPLIT NAME INTO PARTS (J,E,S,W,I,N,ETC...)
CREATE COUNTER THAT TICKS EVERY 90MS



*/


/* 
WHAT INTRO-OVERLAY DOES:

1. HANDLES BLACK SCREEN
2. HANDLES ANIMATIONS 
3. HANDLES FADE OUT


*/