import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { GraphqlSDK } from 'src/app/core/services/graphql';

@Component({
  standalone: true,
  templateUrl: 'students.component.html',
  imports: [CommonModule],
})
export class StudentsComponent {
  private sdkGraphql = inject(GraphqlSDK);

  protected students$ = this.sdkGraphql
    .studentsQuery()
    .pipe(map((data) => data.data.students));
}
