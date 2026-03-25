import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { LandingComponent } from "../../components/landing/landing.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, LandingComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: '../../../styles.css'
})
export class HomeComponent {}