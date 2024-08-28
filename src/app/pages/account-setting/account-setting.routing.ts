import { Routes } from '@angular/router';
import {  AppAccountSettingComponent} from './account-setting.component';
export const AccountSettingRoutes: Routes=[
    {
        path: '',
        component: AppAccountSettingComponent,
        data: {
          title: 'Account Setting',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Account Setting' },
          ],
        },
      },
]; 
