import { Routes } from '@angular/router';

// dashboards
import { AppDashboard1Component } from './dashboard1/dashboard1.component';
import { AppDashboard2Component } from './dashboard2/dashboard2.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calls',
        component: AppDashboard1Component,
        data: {
          title: 'Statistiques d\'Appels',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Statistiques d\'Appels' },
          ],
        },
      },
      {
        path: 'sms',
        component: AppDashboard2Component,
        data: {
          title: 'Statistiques ds SMS',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Statistiques ds SMS' },
          ],
        },
      },
    ],
  },
];
