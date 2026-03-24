import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  glowColor = 'rgba(255, 255, 255, 1)';
  fadeToColor = 'rgba(0, 0, 0, 1)';

  my_pfp = '/assets/pfp.png';
}
