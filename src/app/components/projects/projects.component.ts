import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, SquareArrowOutUpRight, ChevronsDown} from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  isBoxDrawn = false;

  icons = { SquareArrowOutUpRight, ChevronsDown };
  
  /* ADD PROJECTS STUFF HERE */
  projects = [
    {index: 0, title: "My Portfolio!", img:"my-portfolio-img.png" , git_hub: "https://github.com/Jjkrules/My-portfolio", proj_link: "", description: "You're looking at it! This website was a lot of work! I'm really proud of some of the results I got, such as the svg animations and the overall aesthetic.", isVisible: false},
    {index: 1, title: "Project 2", img:"projImg.png", git_hub: "", proj_link: "", description: "description text", isVisible: false},
    {index: 2, title: "Project 3", img:"projImg.png", git_hub: "", proj_link: "", description: "description text", isVisible: false}
  ]

  displayProjects = [
    this.projects[0],
    this.projects[1],
    this.projects[2]
  ]

  toggleBox(project: any) {
    this.isBoxDrawn = !this.isBoxDrawn;
  }
}