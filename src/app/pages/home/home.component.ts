import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { LandingComponent } from "../../components/landing/landing.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { ProjectsComponent } from "../../components/projects/projects.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, LandingComponent, AboutMeComponent, ExperienceComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: '../../../styles.css'
})
export class HomeComponent {}