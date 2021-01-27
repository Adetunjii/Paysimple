import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from 'src/app/models/INavItem';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { NavItems } from '../nav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navItems: INavItem[] = NavItems;
  hidden = true;
  salesItems: any[];
  message: any;

  constructor(
    private router: Router,
    private analyticsService: AnalyticsService
  ) {}

  toggle(index) {
    console.log(this.navItems[index]);
    this.navItems[index].isShown = !this.navItems[index].isShown;
  }

  route(url: string) {
    if (url === undefined || url === null) {
      console.log('no route');
    } else {
      this.router.navigateByUrl(url);
    }
  }

  ngOnInit(): void {
 
  }

 
}
