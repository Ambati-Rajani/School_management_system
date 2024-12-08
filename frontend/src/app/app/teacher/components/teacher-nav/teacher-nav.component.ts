import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-teacher-nav',
  imports: [NgFor,RouterLink,NgIf],
  templateUrl: './teacher-nav.component.html',
  styleUrl: './teacher-nav.component.css'
})
export class TeacherNavComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
    private teacherService:TeacherService,
  ) {}

  ngOnInit(): void {
      this.loadTeacherClasses()
  }

  classes:any[] = []

  links = [
    {
      label: 'Dashboard',
      route: '/teacher/dashboard',
      icon: '📊',
      subRoutes: [
        
      ],
    },
    {
      label: 'Classes',
      icon: '📊',
      subRoutes: [
        
      ],
    },
    {
      label: 'Courses',
      route: '/courses',
      icon: '📚',
      subRoutes: [
        { label: 'Enrolled', route: '/courses/enrolled' },
        { label: 'Available', route: '/courses/available' },
      ],
    },
    {
      label: 'Settings',
      route: '/teacher/settings',
      icon: '⚙️',
      subRoutes: [],
    },
  ];

  logout(){
    this.authService.logout();
    this.router.navigate(['/login/teacher'])
  }

  async loadTeacherClasses(){
   try{
    const res:any = await this.teacherService.getAllClassesByTeacher(this.authService.currentUser.userId);
    this.classes = res.data;

    const classesSubRoutes = this.classes.map((classItem: any) => ({
      label:`Class ${classItem.name}`, // Use className as the label
      route: `/teacher/class/${classItem.sclassId}` // Example route structure
    })); 

    // Find and update the "Classes" link in the links array
    const classesLink = this.links.find(link => link.label === 'Classes');
    if (classesLink) {
      classesLink.subRoutes = classesSubRoutes;
    }
   }catch(e){
    console.log(e);
   }
  }
}
