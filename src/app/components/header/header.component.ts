import { Component } from '@angular/core';
import { LucideAngularModule, Code } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  icons = { Code };
}
