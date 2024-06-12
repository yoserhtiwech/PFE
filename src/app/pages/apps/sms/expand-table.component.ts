import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

const ELEMENT_DATA: PeriodicElement[] = [
  
  {
    Id: 10,
    Cost: 'Account Executive',
    Number: '06 51 05 46 25',
    Agent: 'SEO Debate',
    Date: 'Ne',
    Content: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    Id: 10,
    Cost: 'Account Executive',
    Number: '06 51 05 46 25',
    Agent: 'SEO Debate',
    Date: 'Ne',
    Content: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    Id: 10,
    Cost: 'Account Executive',
    Number: '06 51 05 46 25',
    Agent: 'SEO Debate',
    Date: 'Ne',
    Content: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    Id: 10,
    Cost: 'Account Executive',
    Number: '06 51 05 46 25',
    Agent: 'SEO Debate',
    Date: 'Ne',
    Content: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
]; 
export const messages = [
  {
    from: 'James Johnson',
    photo: 'assets/images/profile/user-1.jpg',
    subject: 'Hey, how are you?',
    chat: [
      {
        type: 'odd',
        msg: 'Hi Luke.',
        date: new Date('2016-01-05'),
      },
      {
        type: 'odd',
        msg: 'How are you my friend?',
        date: new Date('2016-01-06'),
      },]}]

@Component({
  selector: 'app-expand-table',
  standalone: true,
  imports:[MaterialModule, CommonModule],
  templateUrl: './expand-table.component.html',
  styleUrls: ['./expand-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
}) 




export class AppExpandTableComponentSms implements OnInit { 
  
  // tslint:disable-next-line - Disables all
  // messages: Object[] = messages;

  
    
  
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Id', 'Number', 'Agent', 'Date', 'Cost'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;
  selected: Date | null;
  selected1: Date | null;
  constructor() { }

  ngOnInit(): void {} 
  openDialog(action: string, obj: any): void {
    obj.action = action;
    
  } 
  deleteRowData(row_obj:PeriodicElement ): boolean | any {
    
  }
  showFilter: boolean=false;
 
  toggleFilter():void{
      this.showFilter=!this.showFilter;
    }
}

export interface PeriodicElement {
  Number: string;
  Cost: string;
  Id: number;
  Agent: string;
  Date: string;
  Content: string;
}
