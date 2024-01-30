import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  standalone: true,
  imports: [TestComponent],
  selector: 'app-route-first',
  templateUrl: './route-first.component.html',
  styleUrls: ['./route-first.component.less'],
})
export class RouteFirstComponent {}
