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
          this.router.navigate(['/']);
        },
        complete: () => {
          subscribeCreateTeacher.unsubscribe();
        },
      });
  }
}
