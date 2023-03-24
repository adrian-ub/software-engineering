import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';

import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, ResponsiveHelperComponent],
  selector: 'front-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public themeService = inject(ThemeService);
}
