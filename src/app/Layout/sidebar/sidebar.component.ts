import { Component, computed, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { LayoutService } from '../layout.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NzLayoutModule, CommonModule, RouterLink, RouterOutlet,
    NzMenuModule, NzGridModule, NzIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() isCollapsed: boolean | undefined;

  menuCollapse: boolean = true;
  
  title = computed(this.layout.appTitle);

  listItems = computed(this.layout.sidebarListItems);

  constructor(
    private layout: LayoutService
  ) {}

}
