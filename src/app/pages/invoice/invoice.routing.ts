import { Routes } from '@angular/router';

import { AppInvoiceListComponent } from './invoice-list/invoice-list.component';
import { AppAddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AppInvoiceViewComponent } from './invoice-view/invoice-view.component';
import { AppEditInvoiceComponent } from './edit-invoice/edit-invoice.component';

export const InvoiceRoutes: Routes = [
  {
    path: '',
    component: AppInvoiceListComponent,
    data: {
      title: 'Invoice List',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Invoice List' },
      ],
    },
  },
  {
    path: 'addInvoice',
    component: AppAddInvoiceComponent,
    data: {
      title: 'Add Invoice',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Add Invoice' },
      ],
    },
  },
  {
    path: 'viewInvoice/:id',
    component: AppInvoiceViewComponent,
    data: {
      title: 'View Invoice',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'View Invoice' },
      ],
    },
  },
  {
    path: 'editInvoice/:id',
    component: AppEditInvoiceComponent,
    data: {
      title: 'Edit Invoice',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Edit Invoice' },
      ],
    },
  },
];
