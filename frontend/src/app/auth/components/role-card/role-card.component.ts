import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-card',
  imports: [],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.css'
})
export class RoleCardComponent {

  @Input() role:string =''
  @Input() description:string = '';
  @Input() imageUrl:string = ''

  constructor(
    private router:Router
  ) {}

  navigateToRole(role:string){
    role = role.toLowerCase()
    this.router.navigate([`/login/${role}`])
  }
}
