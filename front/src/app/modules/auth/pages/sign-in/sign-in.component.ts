import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ToastrService } from 'ngx-toastr';
import { GraphqlSDK } from 'src/app/core/services/graphql';

@Component({
  selector: 'front-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    NgClass,
    NgIf,
  ],
})
export class SignInComponent {
  private _formBuilder = new FormBuilder();
  private _router = inject(Router);
  private graphqlSdk = inject(GraphqlSDK);
  private toastr = inject(ToastrService);
  protected form = this._formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  passwordTextType!: boolean;

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();
    const subscribeLogin = this.graphqlSdk
      .loginMutation({
        createLoginInput: value,
      })
      .subscribe({
        next: (data) => {
          this.toastr.success('¡Bienvenido!');
          this._router.navigate(['/']);
        },
        complete: () => {
          subscribeLogin.unsubscribe();
        },
        error: (error) => {
          this.toastr.error(error.message, 'Error');
        },
      });
  }
}
