import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, FormsModule, RouterOutlet],
  providers: [NgModel,NgFor,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() toggleSidebar: () => void = () => {};
  user_first: any | null = null;
  username: string | null = null;
  showDropdown = false;
  isAdmin: boolean = false;
  email: string | null = null;

  // States for collapsible subsections
  expandedSections: { [key: string]: boolean } = {
    students: false,
    teachers: false,
  };

  adminRoutes = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    {
      name: 'Class',
      icon: '📋',
      path: '/admin/class',
    },
    {
      name: 'Rooms',
      icon: '📋',
      path: '/admin/room',
    },
    {
      name: 'Courses',
      icon: '📋',
      children: [
        { name: 'create/view', path: '/admin/courses/course-form' },
      ],
    },
    {
      name: 'Students',
      icon: '📋',
      children: [
        { name: 'Student List', path: '/admin/students/student-list' },
        { name: 'Student Form', path: '/admin/students/student-form' },
      ],
    },
    {
      name: 'Teachers',
      icon: '📝',
      children: [
        { name: 'Teacher List', path: '/admin/teachers/teacher-list' },
        { name: 'Teacher Form', path: '/admin/teachers/teacher-form' },
      ],
    },
    { name: 'Schedule', path: '/admin/schedule', icon: '📝' },
    { name: 'Reports', path: '/admin/reports', icon: '📝' },
    { name: 'Exams', path: '/admin/exams', icon: '📝' },

  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const userDetails = this.authService.currentUser;
    console.log(userDetails);
    this.username = userDetails.username;
    this.user_first = this.username?.charAt(0).toLocaleUpperCase();
    this.isAdmin = userDetails.role === 'ADMIN';
    this.email = userDetails.email;
  }

  toggleSection(section: string): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/onboarding']);
  }
}
