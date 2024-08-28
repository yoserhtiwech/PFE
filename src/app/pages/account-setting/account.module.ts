import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MatNativeDateModule } from '@angular/material/core';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { AccountSettingRoutes } from './account-setting.routing';

// theme pages
import { AppAccountSettingComponent } from './account-setting.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountSettingRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppAccountSettingComponent,
   
  ],
})
export class AccountSettingModule {}
