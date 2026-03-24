import { Component } from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  icons = { ChevronLeft, ChevronRight };
}
