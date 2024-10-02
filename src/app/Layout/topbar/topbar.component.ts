import { Component, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SkeletonModule } from 'primeng/skeleton';
import { LayoutService } from '../layout.service';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    NzLayoutModule, SkeletonModule, MenuModule, AvatarModule, NzIconModule, CommonModule, NzGridModule,
    RouterLink
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  collapsed = output<boolean>();

  isCollapsed = false;

  items: MenuItem[] | undefined;

  user = computed( () => this.layout.authUser());

  constructor(
    private layout: LayoutService
  ) {}

  ngOnInit() {
    this.items = [
      {separator: true},
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' },
      {separator: true},
      { label: 'Logout', icon: 'pi pi-sign-out' }
    ];
    this.getUserDetails();
  }

  onChangeCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsed.emit(this.isCollapsed);
  }

  clickProfile(el: any, event: Event) {
    el.toggle(event);
  }

  loading: boolean = false;
  getUserDetails() {
    this.loading = true;
    this.layout.getUserDetails().subscribe((res:any) => {
      this.loading = false;
      this.layout.authUser.set(res.data);
      // console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
