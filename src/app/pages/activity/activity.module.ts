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
import { ActivityRoutes } from './activity.routing';


// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons'; 
import { AppActivityComponent } from './activity.component';
@NgModule({
    imports: [
        RouterModule.forChild(ActivityRoutes),
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

    ]
    ,exports: [TablerIconsModule],
    declarations:[AppActivityComponent]
    ,providers:[DatePipe]})
    
export class ActivityModule{}