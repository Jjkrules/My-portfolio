import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('fadeContainer') fadeContainer!: ElementRef;

ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.animate([
            { opacity: 0, transform: 'scale(1)' },
            { opacity: 1, transform: 'scale(1.05)' }
          ], {
            duration: 2000,
            easing: 'ease-out',
            fill: 'forwards'
          });
        } else {
          entry.target.animate([
            { opacity: 1, transform: 'scale(1.05)'},
            { opacity: 0, transform: 'scale(1)'}
          ], {
            duration: 0,
            fill: 'forwards'
          })
        }
      });
    }, { 
      root: document.querySelector('.overflow-y-scroll'),
      threshold: 0.2 
    });

    if (this.fadeContainer) {
      observer.observe(this.fadeContainer.nativeElement);
    }
  }
}
