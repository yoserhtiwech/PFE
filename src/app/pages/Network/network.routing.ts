import { Routes } from '@angular/router';
import { AppNetworkComponent } from './network.component';
export const NetworkRoutes: Routes=[
    {
        path: '',
        component: AppNetworkComponent,
        data: {
          title: 'Network',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Network' },
          ],
        },
      },
];