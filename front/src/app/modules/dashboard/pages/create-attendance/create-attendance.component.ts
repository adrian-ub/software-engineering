import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { GraphqlSDK } from 'src/app/core/services/graphql';

@Component({
  standalone: true,
  templateUrl: 'create-attendance.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class CreateAttendanceComponent {
  private sdkGraphql = inject(GraphqlSDK);
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private router = inject(Router);
  protected form = this.fb.nonNullable.group({
    student: [''],
    teacher: [''],
    date: [''],
  });

  protected students$ = this.sdkGraphql
    .studentsQuery()
    .pipe(map((data) => data.data.students));

  protected teachers$ = this.sdkGraphql
    .teachersQuery()
    .pipe(map((data) => data.data.teachers));

  protected createAttendance() {
    if (this.form.invalid) {
      return;
    }

    const { date, student, teacher } = this.form.getRawValue();

    console.log(date, student, teacher);

    const attendanceSubscription = this.sdkGraphql
      .checkAttendanceMutation({
        id: Number(student),
        attendance: {
          dateAttendance: date,
          idTeacher: Number(teacher),
        },
      })
      .subscribe({
        next: (data) => {
          this.toastr.success('Asistencia creada correctamente');
          this.router.navigate(['/dashboard/attendances']);
        },
        error: (error) => {
          this.toastr.error(error.message);
        },
        complete: () => {
          attendanceSubscription.unsubscribe();
        },
      });
  }
}
