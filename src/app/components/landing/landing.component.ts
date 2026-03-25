import { Component } from '@angular/core';
import { LucideAngularModule, ChevronsDown } from 'lucide-angular';
@Component({
  selector: 'app-landing',
  imports: [LucideAngularModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  glowColor = 'rgba(255, 255, 255, 1)';
  fadeToColor = 'rgba(0, 0, 0, 1)';

  icons = { ChevronsDown };
}
