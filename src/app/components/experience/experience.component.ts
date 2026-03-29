import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
    experience = [
    {index: 0, title: "IT Tech", company: "T-Mobile", duration: "", description: ""},
    {index: 1, title: "Teaching Assistant", company: "Temple", duration: "", description: ""},
    {index: 2, title: "Computer Engineer", company: "GreenXT", duration: "", description: ""}
  ]

  displayExp = [

  ]


}
