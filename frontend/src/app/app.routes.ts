import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './gaurds/auth.gaurd';
import { AdminGaurd } from './gaurds/admin.gaurds';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './auth/onboarding/onboarding.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { StudentFormComponent } from './admin/students/components/student-form/student-form.component';
import { TeacherGaurd } from './gaurds/teacher.gaurd';
import { StudentGaurd } from './gaurds/student.garuds';
import { StudentDetailsComponent } from './app/student/student-details/student-details.component';
import { StudentListComponent } from './admin/students/components/student-list/student-list.component';
import { TeacherListComponent } from './admin/teacher/components/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './admin/teacher/components/teacher-form/teacher-form.component';
import { TeacherDetailsComponent } from './app/teacher/teacher-details/teacher-details.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { ClassComponent } from './admin/schedule/class/class.component';
import { RoomComponent } from './admin/schedule/room/room.component';
import { StudentComponent } from './app/student/student.component';
import { TeacherComponent } from './app/teacher/teacher.component';
import { TeacherDashboardComponent } from './app/teacher/teacher-dashboard/teacher-dashboard.component';
import { MarkAttendanceComponent } from './app/teacher/mark-attendance/mark-attendance.component';
import { CourseFormComponent } from './admin/course/course-form/course-form.component';
import { CourseListComponent } from './admin/course/course-list/course-list.component';
import { GradesComponent } from './admin/teacher/components/grades/grades.component';
import { ClassDetailsComponent } from './app/teacher/class-details/class-details.component';
import { StudentGradeComponent } from './app/student/student-grade/student-grade.component';
import { ReportComponent } from './admin/report/report.component';
import { ExamComponent } from './admin/exam/exam.component';
import { StudentAttendanceComponent } from './app/student/student-attendance/student-attendance.component';

export const routes: Routes = [
    {path: 'onboarding',component: OnboardingComponent},
    {path: 'login/:role',component: LoginComponent},
    {path: 'register',component: RegisterComponent},

    {path:'student',
        component: StudentComponent,
        children: [
            {path:'me',component:StudentDetailsComponent},
            {path:'grades',component:StudentGradeComponent},
            {path:'attendance-view',component:StudentAttendanceComponent},

        ],
        canActivate: [AuthGaurd,StudentGaurd]
    },

    {path:'teacher',
        component: TeacherComponent,
        children: [
            {path:'settings',component:TeacherDetailsComponent},
            {path:'dashboard',component:TeacherDashboardComponent},
            {path:'mark-attendance/:classId',component:MarkAttendanceComponent},
            {path:'class/:classId',component:ClassDetailsComponent},
            {path:'student/:studentId/grade',component:GradesComponent},
        ],
        canActivate: [AuthGaurd,TeacherGaurd]
    },

    // admin routes
    {path:'admin',
        component: AdminComponent,
        canActivate: [AuthGaurd,AdminGaurd],
        children: [
            {path:'dashboard',component:DashboardComponent},

            {path:'class',component:ClassComponent},
            {path:'room',component:RoomComponent},



            {path:'students/student-list',component:StudentListComponent},
            {path:'students/student-form',component:StudentFormComponent},
            {path:'students/student-form/:studentId',component:StudentFormComponent},


            {path:'teachers/teacher-list',component:TeacherListComponent},
            {path:'teachers/teacher-form',component:TeacherFormComponent},
            {path:'teachers/teacher-form/:teacherId',component:TeacherFormComponent},

            {path:'schedule',component:ScheduleComponent},

            {path:'courses/course-form',component:CourseFormComponent},
            {path:'courses/course-list',component:CourseListComponent},
            
            {path:'reports',component:ReportComponent},

            {path:'exams',component:ExamComponent},

        ]
    },


    {path: '**',redirectTo: 'onboarding',pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes),BrowserModule],
    exports: [RouterModule],
    providers: [NgModel]
})
export class AppRoutingModule {}
