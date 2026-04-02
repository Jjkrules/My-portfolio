import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-skills',
  imports: [CommonModule ,LucideAngularModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  @ViewChild('track') trackEl!: ElementRef;

  icons = { ChevronLeft, ChevronRight };

  /* ADD SKILLS HERE */
  skills = [
    { index: 0, img: "back-end-img.png", title: "Backend Stack", description: "• Java v26 \n • Python v3.14 \n • C v23 \n • C++ v23 \n •C # v14"},
    { index: 1, img: "front-end-img.png", title: "Frontend Stack", description: "• Javascript / HTML5 / CSS \n • Tailwind CSS v4 \n • Typescript v6"},
    { index: 2, img: "frameworks-img.png", title: "Frameworks", description: "• Angular v21\n • React v19 \n • Spring Boot v4"},
    { index: 3, img: "tools-img.png", title: "Tools", description: "• VS Code \n • AWS \n • IntelliJ \n • Github \n • Jupyter Notebooks"},
    { index: 4, img: "llm-img.png", title: "LLMs", description: "• ChatGPT 5.3 \n • Gemini 1.5 Flash \n • Claude 3 Sonnet \n • DeepSeek-V3"},
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
