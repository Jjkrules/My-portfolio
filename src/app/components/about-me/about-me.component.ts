import { Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  @ViewChild('journeyBox') journeyBox! : ElementRef;
  @ViewChild('sparkBox') sparkBox! : ElementRef;
  @ViewChild('futureBox') futureBox! : ElementRef;

  activeSection: string = 'none';

  focusSection(section: string) {
    // 1. Update the state
    this.activeSection = section;

    // 2. Define our targets in an array
    const sections = [
      { id: 'journey', el: this.journeyBox.nativeElement },
      { id: 'spark', el: this.sparkBox.nativeElement },
      { id: 'future', el: this.futureBox.nativeElement }
    ];

    sections.forEach(item => {
      const isTarget = item.id === section;

      if (!isTarget && item.el.dataset['state'] === 'small') {
        return;
      }
      
      item.el.animate([
        { 
          transform: isTarget ? 'scale(1)' : 'scale(1.1)', 
          opacity: isTarget ? 0.25 : 1 
        },
        { 
          transform: isTarget ? 'scale(1.1)' : 'scale(1)', 
          opacity: isTarget ? 1 : 0.15 
        }
      ], {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
      });
      item.el.dataset['state'] = isTarget ? 'large' : 'small';
    });
  }
}
