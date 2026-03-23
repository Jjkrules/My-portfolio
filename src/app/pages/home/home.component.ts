import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { LandingComponent } from "../../components/landing/landing.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, LandingComponent],
  templateUrl: './home.component.html',
  styleUrl: '../../../styles.css'
})
export class HomeComponent {}