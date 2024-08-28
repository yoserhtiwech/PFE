

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common'; 
import { NumberService } from 'src/app/services/services';
import { numberResponse } from 'src/app/services/models/number-response';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    position: 'Web Designer',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low'
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium'
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high'
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical'
  },
];

@Component({
  templateUrl: './number.component.html',
})
export class AppNumberComponent  implements OnInit{
  numberResponse:numberResponse[]
  displayedColumns1: string[] = ['Number', 'Agent', 'Action'];
  dataSource1 : numberResponse[];
  constructor(private numberService:NumberService){}
  ngOnInit(): void {
    this.findAllNumbers();
  }
  private findAllNumbers() {
    this.numberService.findAllNumbers().subscribe({next:(numbers: numberResponse[])=>{
      this.numberResponse=numbers;

       this.dataSource1=this.numberResponse;

    }}
  );
  }  
 
}
