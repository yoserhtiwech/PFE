import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ServiceinvoiceService } from '../serviceinvoice.service';
import { InvoiceList } from '../invoice';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

interface friendcards {
  id: number;
  imgSrc: string;
  title: string;}
  
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html'
})
export class AppInvoiceListComponent implements AfterViewInit {
  allComplete: boolean = false;

  invoiceList: MatTableDataSource<InvoiceList>;
  invoiceList2: MatTableDataSource<InvoiceList>;

  displayedColumns: string[] = ['billFrom', 'billTo', 'totalCost','action'];
  displayedColumns2: string[] = ['billFrom', 'billTo', 'totalCost','status','action'];
  

  @ViewChild(MatSort) sort: MatSort = Object.create(null);
  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null);

  constructor(private invoiceService: ServiceinvoiceService) {
    const invoiceListData = this.invoiceService.getInvoiceList();
    this.invoiceList = new MatTableDataSource(invoiceListData);
    const invoiceListData2 = this.invoiceService.getInvoiceList();
    this.invoiceList2 = new MatTableDataSource(invoiceListData2);
  }

  ngAfterViewInit(): void {
    this.invoiceList2.paginator = this.paginator;
    this.invoiceList2.sort = this.sort;
    this.invoiceList.paginator = this.paginator;
    this.invoiceList.sort = this.sort;
    
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  updateAllComplete(): void {
    this.allComplete = this.invoiceList != null && this.invoiceList.data.every((t) => t.completed);
  }
  someComplete(): any {
    return this.invoiceList.data.filter((t) => t.completed).length > 0 && !this.allComplete;
  }
  setAll(completed: boolean): void {
    this.allComplete = completed;
    this.invoiceList.data.forEach((t) => (t.completed = completed));
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  filter(filterValue: string): void {
    this.invoiceList.filter = filterValue.trim().toLowerCase();
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  deleteInvoice(row: number): void {
    if (confirm('Are you sure you want to delete this record ?')) {
      this.invoiceService.deleteInvoice(row);
      this.invoiceList.data = this.invoiceList.data.filter((invoice) => invoice.id !== row);
    }
  }
  friendcards: friendcards[] = [
    {
      id: 1,
      imgSrc: '/assets/images/profile/user-1.jpg',
      title: 'L aveyronaise d assurance',
    },
  ]
}
