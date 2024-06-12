import { Routes } from '@angular/router';
import { AppDialerComponent } from './dialer.component';
export const DialerRoutes: Routes=[
    {
        path: '',
        component: AppDialerComponent,
        data: {
          title: 'Dialer',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Dialer' },
          ],
        },
      },
];