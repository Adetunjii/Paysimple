import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from 'src/app/models/INavItem';
import { NavItems } from '../nav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navItems: INavItem[] = NavItems;
  hidden = true;

  constructor(private router: Router) {}

  log() {
    console.log(this.router.url);
  }

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
  Orders;
  ngOnInit(): void {}
}
