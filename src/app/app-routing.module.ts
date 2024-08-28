import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {authGuard} from '../app/services/guard/auth.guard';
import {roleGuard} from'../app/services/guard/role.guard';
const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/authentication/boxed-login',
        pathMatch: 'full',
      },
      {
        path: 'starter',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('./pages/dashboards/dashboards.module').then(
            (m) => m.DashboardsModule
          ),
          canActivate: [authGuard,roleGuard],
          data:{
            expectedRoles:['Admin','Supervisor']
          }
      },
      {
        path: 'configuration',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
          canActivate: [authGuard,roleGuard],
          data:{
            expectedRoles:['Admin']
          }
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./pages/forms/forms.module').then((m) => m.FormModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./pages/charts/charts.module').then((m) => m.ChartsModule),
      },
      {
        path: 'logs',
        loadChildren: () =>
          import('./pages/apps/apps.module').then((m) => m.AppsModule),
        canActivate: [authGuard,roleGuard],
          data:{
            expectedRoles:['Admin','Supervisor']
          }
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./pages/widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./pages/tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'datatable',
        loadChildren: () =>
          import('./pages/datatable/datatable.module').then((m) => m.DatatableModule),
      },
      {
        path: 'theme-pages',
        loadChildren: () =>
          import('./pages/theme-pages/theme-pages.module').then(
            (m) => m.ThemePagesModule
          ),
      },
      {
        path: 'account-setting',
        loadChildren: () =>
          import('./pages/account-setting/account.module').then(
            (m) => m.AccountSettingModule
          ),canActivate: [authGuard]
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./pages/invoice/invoice.module').then(
            (m) => m.InvoiceModule
          ),
          canActivate: [authGuard,roleGuard],
          data:{
            expectedRoles:['Admin']
          }
      }, 
      {
        path: 'activity',
        loadChildren: () =>
          import('./pages/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
          canActivate: [authGuard,roleGuard],
          data:{
            expectedRoles:['Admin','Supervisor']
          }
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./pages/chat/chat.module').then(
            (m) => m.ChatModule
          ),
          canActivate: [authGuard]
      },
      {
        path: 'journal',
        loadChildren: () =>
          import('./pages/journal/journal.module').then(
            (m) => m.journalModule
          ),
          canActivate: [authGuard]
      },
      {
        path: 'dialer',
        loadChildren: () =>
          import('./pages/dialer/dialer.module').then(
            (m) => m.DialerModule
          ),
          canActivate: [authGuard]
      },
      {
        path: 'network',
        loadChildren: () =>
          import('./pages/Network/network.module').then(
            (m) => m.NetworkModule
          ),
          canActivate: [authGuard]
      },
      
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: 'landingpage',
        loadChildren: () =>
          import('./pages/theme-pages/landingpage/landingpage.module').then(
            (m) => m.LandingPageModule
          ),
      },
    ],
  },
  /* {
    path: '**',
    redirectTo: 'authentication/error',
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
