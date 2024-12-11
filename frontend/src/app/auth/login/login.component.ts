import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  role: string | null = 'admin'; // Default role
  username = '';
  password = '';
  isLoading = false;
  successMessage = '';
  errorMessage = '';
  enrollmentNumber = ''

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.role = this.route.snapshot.paramMap.get('role');
  }


  setRole(selectedRole: 'admin' | 'teacher' | 'student') {
    this.role = selectedRole;
    this.resetForm();
  }

  // Reset form inputs
  resetForm() {
    this.username = '';
    this.password = '';
    this.successMessage = '';
    this.errorMessage = '';
  }

  // Simulate login process
  async login() {
    this.isLoading = true;

    // Simulate API call
      this.isLoading = false;
      if (this.role) {
        const paylaod = {
          username: this.username,
          password: this.password
        }
        const res:any = await this.authService.login(this.role,paylaod)
        if(res){
          this.successMessage = `Login successful as ${this.role}`;
          this.errorMessage = '';
          const redirectUrl = this.role === 'admin' ? 
                              "/admin/dashboard" : 
                              this.role === 'teacher' ? '/teacher/dashboard' : '/student/me'
          this.router.navigate([redirectUrl])
        }
      } else{
        this.errorMessage = 'Invalid credentials';
        this.successMessage = '';
      }
  }

  clearForm() {
    this.username = '';
    this.password = '';
  }
}
