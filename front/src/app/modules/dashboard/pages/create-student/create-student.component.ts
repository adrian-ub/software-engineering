import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  standalone: true,
  templateUrl: 'create-student.component.html',
  imports: [ReactiveFormsModule],
})
export class CreateStudentComponent {
  private fb = new FormBuilder();
  private http = inject(HttpClient);
  private toastr = inject(ToastrService);
  private router = inject(Router);
  photo!: File;
  protected form = this.fb.nonNullable.group({
    birthdate: ['', Validators.required],
    document: ['', Validators.required],
    firstName: ['', Validators.required],
    secondName: ['', Validators.required],
    lastName: ['', Validators.required],
    lastNameTwo: ['', Validators.required],
  });

  protected processFile(event: any) {
    this.photo = event.target.files[0];
  }

  protected onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();

    const operations = {
      query: `
        mutation (
            $photoUrl: Upload!
            $birthdate: String!
            $document: String!
            $firstName: String!
            $lastName: String!
            $lastNameTwo: String!
            $secondName: String!
        ) {
            createStudent(createStudentInput: {
                birthdate: $birthdate
                document: $document
                firstName: $firstName
                lastName: $lastName
                lastNameTwo: $lastNameTwo
                secondName: $secondName
                photoUrl: $photoUrl
            }
            ) {
                birthdate
                document
                firstName
                id
                lastName
                lastNameTwo
                photoUrl
                secondName
            }
        }
        `,
      variables: value,
    };

    const _map = {
      photoUrl: ['variables.photoUrl'],
    };

    const fd = new FormData();
    fd.append('operations', JSON.stringify(operations));
    fd.append('map', JSON.stringify(_map));
    fd.append('photoUrl', this.photo, this.photo.name);

    const studentSubscription = this.http
      .post(environment.graphqlEndpoint, fd, {
        headers: {
          'Apollo-Require-Preflight': 'true',
        },
      })
      .subscribe({
        next: (data) => {
          this.toastr.success('Estudiante creado correctamente');
          this.router.navigate(['/dashboard/students']);
        },
        complete: () => {
          studentSubscription.unsubscribe();
        },
        error: (error) => {
          this.toastr.error(error.message);
        },
      });
  }
}
