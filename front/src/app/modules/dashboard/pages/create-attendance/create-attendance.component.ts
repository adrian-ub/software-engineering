import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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

    this.sdkGraphql
      .checkAttendanceMutation({
        id: Number(student),
        attendance: {
          dateAttendance: date,
          idTeacher: Number(teacher),
        },
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
