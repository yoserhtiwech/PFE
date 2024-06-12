import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { NgxPermissionsModule } from 'ngx-permissions';

import { NgxPaginationModule } from 'ngx-pagination';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { InvoiceRoutes } from './invoice.routing';


// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons'; 
import { AppInvoiceListComponent } from './invoice-list/invoice-list.component';
import { AppInvoiceViewComponent } from './invoice-view/invoice-view.component';
import { AppAddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AppEditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { OkDialogComponent } from './edit-invoice/ok-dialog/ok-dialog.component';
import { AddedDialogComponent } from './add-invoice/added-dialog/added-dialog.component'; 
@NgModule({
    imports: [
        RouterModule.forChild(InvoiceRoutes),
        NgScrollbarModule, 
        TablerIconsModule.pick(TablerIcons),
        DragDropModule,
        AngularEditorModule,
        CommonModule,
        NgxPermissionsModule,
        NgxPaginationModule,
        NgApexchartsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule

    ],exports: [TablerIconsModule],
declarations:[AddedDialogComponent,
    OkDialogComponent,
    AppAddInvoiceComponent,
    AppEditInvoiceComponent,
    AppAddInvoiceComponent,
    AppInvoiceListComponent,
    AppInvoiceViewComponent,]
,providers:[DatePipe]})
        export class InvoiceModule{}