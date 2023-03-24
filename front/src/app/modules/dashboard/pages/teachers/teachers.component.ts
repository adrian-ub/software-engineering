import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { GraphqlSDK } from 'src/app/core/services/graphql';

@Component({
  standalone: true,
  templateUrl: 'teachers.component.html',
  imports: [CommonModule],
})
export class TeachersComponent {
  private sdkGraphql = inject(GraphqlSDK);
  protected teachers$ = this.sdkGraphql
    .teachersQuery()
    .pipe(map((data) => data.data.teachers));
}
