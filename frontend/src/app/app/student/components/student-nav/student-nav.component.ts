import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-student-nav',
  imports: [RouterLink],
  templateUrl: './student-nav.component.html',
  styleUrl: './student-nav.component.css'
})
export class StudentNavComponent {


  constructor(
    private authService:AuthService,
    private router:Router
  ) {}

  logout(){
    this.authService.logout();
    this.router.navigate(['onboarding/'])
  }
}
