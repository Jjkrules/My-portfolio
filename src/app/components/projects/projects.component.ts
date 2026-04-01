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
    {index: 0, title: "My Portfolio!", img:"projImg.png" , git_hub: "https://github.com/Jjkrules/My-portfolio", proj_link: "", description: "description text", isVisible: false},
    {index: 1, title: "My Senior Project!", img:"projImg.png", git_hub: "", proj_link: "", description: "description text", isVisible: false},
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