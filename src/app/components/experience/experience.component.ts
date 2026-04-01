import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChild('experienceSection') experienceSection!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, {
      root: document.querySelector('.overflow-y-scroll'),
      threshold: 0.2
    });

    if (this.experienceSection) {
      observer.observe(this.experienceSection.nativeElement);
    }
  }
}