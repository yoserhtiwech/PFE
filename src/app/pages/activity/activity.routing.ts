import { Routes } from '@angular/router';
import { AppActivityComponent } from './activity.component';
export const ActivityRoutes: Routes=[
    {
        path: '',
        component: AppActivityComponent,
        data: {
          title: 'Activity',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Activity' },
          ],
        },
      },
];