import { Component } from '@angular/core';
import { LucideAngularModule, User, FolderKanban, Briefcase, BadgeCheck } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  icons = { User, FolderKanban, Briefcase, BadgeCheck };
}
