import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { NavList } from '../../types/nav';
import { NAV_LIST } from '../../constants/navlist.constant';

@Component({
  selector: 'ts-nav',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatRippleModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  protected readonly navList: NavList[] = NAV_LIST;

  protected selectedItemIndex = 0;
  protected selectedItem!: NavList;

  protected navListSelection(navItem: NavList, index: number) {
    this.selectedItemIndex = index;
    this.selectedItem = navItem;
  }
}
