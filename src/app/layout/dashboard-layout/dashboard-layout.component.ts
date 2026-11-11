import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSidebarComponent } from '../../features/dashboard/components/nav-sidebar/nav-sidebar.component';
import { DialogComponent } from '../../features/dashboard/components/dialog/dialog.component';
import { ConfirmService } from '../../features/dashboard/services/confirm.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, NavSidebarComponent, DialogComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
  host: { class: 'dash' },
})
export class DashboardLayoutComponent {
  readonly confirm = inject(ConfirmService);
}
