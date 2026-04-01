import { Component } from '@angular/core';
import { LucideAngularModule, ChevronsDown, Mail } from 'lucide-angular';
@Component({
  selector: 'app-landing',
  imports: [LucideAngularModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  socialsVisible = false;
  socialContainer = document.querySelector("socialContainer");

  appearSocials() {
    this.socialsVisible = !this.socialsVisible;
  }

  glowColor = 'rgba(255, 255, 255, 1)';
  fadeToColor = 'rgba(0, 0, 0, 1)';

  icons = { ChevronsDown, Mail };
}
