import { Component, inject } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GraphqlSDK } from 'src/app/core/services/graphql';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'front-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, AngularSvgIconModule, ReactiveFormsModule],
})
export class SignUpComponent {
  private graphqlSdk = inject(GraphqlSDK);
  private fb = new FormBuilder();
  private router = inject(Router);
  private toastr = inject(ToastrService);
  protected form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    confirmationPassword: ['', Validators.required],
    password: ['', Validators.required],
    birthdate: ['', Validators.required],
    document: ['', Validators.required],
    firstName: ['', Validators.required],
    secondName: ['', Validators.required],
    lastName: ['', Validators.required],
    lastNameTwo: ['', Validators.required],
  });

  register() {
    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();

    const subscribeCreateTeacher = this.graphqlSdk
      .createTeacherMutation({
        createTeacherInput: value,
      })
      .subscribe({
        next: (data) => {
          this.toastr.success('Usuario creado correctamente');
          this.router.navigate(['/']);
        },
        complete: () => {
          subscribeCreateTeacher.unsubscribe();
        },
        error: (error) => {
          this.toastr.error(error.message);
        },
      });
  }
}
