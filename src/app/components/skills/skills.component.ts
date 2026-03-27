import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  @ViewChild('track') trackEl!: ElementRef;

  skills = [
    { index: 0, img: "pythonImg.png", title: "Backend Stack", description: "•Back-end Dev \n •Back-end Dev \n •Back-end Dev"},
    { index: 1, img: "pythonImg.png", title: "Frontend Stack", description: "•Front-end Dev \n •Front-end Dev \n •Front-end Dev"},
    { index: 2, img: "pythonImg.png", title: "Frameworks", description: "•Frameworks \n •Frameworks \n •Frameworks"},
    { index: 3, img: "pythonImg.png", title: "Tools", description: "•Tools \n •Tools \n •Tools"},
    { index: 4, img: "pythonImg.png", title: "LLM", description: "•LLM \n •LLM \n •LLM"},
  ];

  displaySkills = [
    this.skills[0],
    this.skills[1],
    this.skills[2],
    this.skills[3],
    this.skills[4]
  ]

  curIndex = 1;
  boxWidth = 416;

  nextIndex() {
    this.curIndex = (this.curIndex + 1) % this.skills.length;
    this.moveTrack();
  }

  prevIndex() {
    this.curIndex = (this.curIndex - 1 + this.skills.length) % this.skills.length;
    this.moveTrack()
  }

  moveTrack() {
    const containerWidth = 1520;
    const cardWidth = 416;

    const centerOffset = (containerWidth - cardWidth) / 2;

    const position = (this.curIndex * cardWidth) - centerOffset;

    this.trackEl.nativeElement.style.transform = `translateX(${-position}px)`;
  }
}
