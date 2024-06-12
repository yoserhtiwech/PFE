import { Component, OnInit ,} from '@angular/core'; 
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd, ActivatedRoute, Data } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { TablerIconsModule } from 'angular-tabler-icons'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule, TablerIconsModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: [],
}) 

export class AppBreadcrumbComponent {
  // @Input() layout;
  pageInfo: Data | any = Object.create(null);
  myurl: any = this.router.url.slice(1).split('/');
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      // tslint:disable-next-line - Disables all
      .subscribe((event) => {
        // tslint:disable-next-line - Disables all
        this.titleService.setTitle(event['title'] + ' - Angular 17');
        this.pageInfo = event;
      });
  } 
  phoneNumber: string = '';



  addToPhoneNumber(number: string) {
    this.phoneNumber += number;
  }

  call() {
    console.log('Calling ' + this.phoneNumber);
    // Add your call functionality here
  }

  snooze() {
    console.log('Snoozing call');
    // Add your snooze functionality here
  }

  device() {
    console.log('Using device');
    // Add your device functionality here
  }
}