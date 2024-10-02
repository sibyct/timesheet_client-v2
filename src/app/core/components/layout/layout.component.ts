import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'ts-layout',
  standalone: true,
  imports: [ToolbarComponent, MatSidenavModule, NavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
