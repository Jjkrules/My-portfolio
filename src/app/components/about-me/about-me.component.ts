import { Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';
import { Scale } from 'lucide-angular';

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
    this.activeSection = section;

    const sections = [
      { id: 'journey', el: this.journeyBox.nativeElement },
      { id: 'spark', el: this.sparkBox.nativeElement },
      { id: 'future', el: this.futureBox.nativeElement }
    ];

    sections.forEach(item => {
      const isTarget = item.id === section;

      if (!isTarget && item.el.dataset['state'] === 'small') {return}
      if(isTarget && item.el.dataset['state'] === 'large') {
        item.el.animate([
          { transform: 'scale(1.1)', opacity: 1 },
          { transform: 'scale(1)', opacity: 0.05 }
        ], {
          duration: 1000,
          easing: 'ease-out',
          fill: 'forwards'
        })
        item.el.dataset['state'] = 'small';
        return;
      }
      
      item.el.animate([
        { 
          transform: isTarget ? 'scale(1)' : 'scale(1.1)', 
          opacity: isTarget ? 0.05 : 1 
        },
        { 
          transform: isTarget ? 'scale(1.1)' : 'scale(1)', 
          opacity: isTarget ? 1 : 0.05 
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
