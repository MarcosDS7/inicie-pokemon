import { SidebarService } from './../../../services/sidebar/sidebar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public sidebarService: SidebarService) {}

  changeSidebar(): void {
    this.sidebarService.changeSidebar(this.sidebarService.pokemon);
  }
}
