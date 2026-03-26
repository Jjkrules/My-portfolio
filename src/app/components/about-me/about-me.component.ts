import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  @ViewChild('journeyBox') journeyBox! : ElementRef;
  @ViewChild('sparkBox') sparkBox! : ElementRef;
  @ViewChild('futureBox') futureBox! : ElementRef;

  @ViewChild('journeyBtn') journeyBtn! : ElementRef;
  @ViewChild('sparkBtn') sparkBtn! : ElementRef;
  @ViewChild('futureBtn') futureBtn! : ElementRef;


  activeSection: string = 'none';

  focusSection(section: string) {
    this.activeSection = section;

    const sections = [
      { id: 'journey', el: this.journeyBox.nativeElement, btn: this.journeyBtn.nativeElement },
      { id: 'spark', el: this.sparkBox.nativeElement, btn: this.sparkBtn.nativeElement },
      { id: 'future', el: this.futureBox.nativeElement, btn: this.futureBtn.nativeElement }
    ];

    sections.forEach(item => {
      const isTarget = item.id === section;

      if (!isTarget && item.el.dataset['state'] === 'small') {return}
      if(isTarget && item.el.dataset['state'] === 'large') {
        item.el.animate([
          { transform: 'scale(1.1)', opacity: 1 },
          { transform: 'scale(1)', opacity: 0.15 }
        ], {
          duration: 1000,
          easing: 'ease-out',
          fill: 'forwards'
        })
        item.btn.animate([
          { transform: 'scale(1.1)', opacity: 1 },
          { transform: 'scale(1)', opacity: 0.15 }
        ], {
          duration: 1000,
          easing: 'ease-out',
          fill: 'forwards'
        })
        item.el.dataset['state'] = 'small';
        item.btn.dataset['state'] = 'small';
        return;
      }
      
      item.el.animate([
        { 
          transform: isTarget ? 'scale(1)' : 'scale(1.05)', 
          opacity: isTarget ? 0.15 : 1 
        },
        { 
          transform: isTarget ? 'scale(1.05)' : 'scale(1)', 
          opacity: isTarget ? 1 : 0.15 
        }
      ], {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
      });

      item.btn.animate([
        {
          transform: isTarget ? 'scale(1)' : 'scale(1.05)',
          opacity: isTarget ? 0.15 : 1
        },
        {
          transform: isTarget ? 'scale(1.05)' : 'scale(1)',
          opacity: isTarget ? 1 : 0.15
        }
      ], {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
      })

      item.btn.dataset['state'] = isTarget ? 'large' : 'small';
      item.el.dataset['state'] = isTarget ? 'large' : 'small';
    });
  }
}
