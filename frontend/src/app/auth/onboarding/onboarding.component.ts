import { Component } from '@angular/core';
import { RoleCardComponent } from '../components/role-card/role-card.component';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-onboarding',
  imports: [RoleCardComponent,NgFor],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {

  constructor(
    private router:Router
  ) {}

  roles:any[] = [
    {
      role: 'Admin',
      description: 'Manage users and system settings',
      imageUrl: '/assets/admin-onboarding-logo.jpg'
    },
    {
      role: 'Teacher',
      description: 'Manage classes and grades',
      imageUrl: '/assets/teacher-onboarding-logo.jpg'
    },
    {
      role: 'Student',
      description: 'View courses and grades',
      imageUrl: '/assets/student-onboarding-logo.jpg'
    },
  ]

  navigateToRole(role:string){
    this.router.navigate([`/login/${role}`])
  }
}
