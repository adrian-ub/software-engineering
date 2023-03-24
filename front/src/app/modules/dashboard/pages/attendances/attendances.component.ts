import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { GraphqlSDK } from 'src/app/core/services/graphql';

@Component({
  standalone: true,
  templateUrl: 'attendances.component.html',
  imports: [CommonModule],
})
export class AttendancesComponent {
  private sdkGraphql = inject(GraphqlSDK);
  protected attendances$ = this.sdkGraphql
    .attendancesQuery()
    .pipe(map((data) => data.data.attendances));
}
