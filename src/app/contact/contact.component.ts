import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userNameLabelDisplayClass:string = "d-none";
  ageLabelDisplayClass:string = "d-none";
  emailLabelDisplayClass:string = "d-none";
  passwordLabelDisplayClass:string = "d-none";
}
