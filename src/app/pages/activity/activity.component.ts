import { Component, OnInit } from '@angular/core';
import {  ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';

/** Constants used to fill up our data base. */
const COLORS = [
  'primary',
  'warning',
  'accent',
  'error',
  'success',
];
const status=[
  'free',
  'in call',
  'snooze',
  'off'
]

const NAMES = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus'
  
];

// card 1
interface topcards {
  id: number;
  color: string;
  title: string;
  subtitle: string;
}
@Component({
  
    templateUrl:'./activity.component.html',
   
  })
  export class AppActivityComponent  {
    // card 1
  topcards: topcards[] = [
    {
      id: 1,
      color: 'primary',
      title: '2',
      subtitle: 'Free',
    },
    {
      id: 2,
      color: 'warning',
      title: '0',
      subtitle: 'In Call',
    },
    {
      id: 3,
      color: 'accent',
      title: '11',
      subtitle: 'Total',
    },
    {
      id: 4,
      color: 'error',
      title: '0',
      subtitle: 'Snooze',
    },
    {
      id: 5,
      color: 'success',
      title: '9',
      subtitle: 'Off',
    },
    
  ];
  displayedColumns = [ 'name',  'status'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);
  @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      this.displayedColumns = result.matches
        ? ['name',  'status']
        : ['name',  'status'];
    });

    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
      users.push(createNewUser(i));
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }
  /** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
  // tslint:disable-next-line - Disables all
  return {
    name: name,
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    status:'void'
  };
}

export interface UserData {
  
  name: string;
  color: string;
  status:string;
}
    
   
  