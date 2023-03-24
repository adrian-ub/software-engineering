import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AttendancesComponent } from './pages/attendances/attendances.component';
import { CreateAttendanceComponent } from './pages/create-attendance/create-attendance.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { NftComponent } from './pages/nft/nft.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: 'nfts', component: NftComponent },
      { path: 'create-student', component: CreateStudentComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'create-attendance', component: CreateAttendanceComponent },
      { path: 'attendances', component: AttendancesComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];
