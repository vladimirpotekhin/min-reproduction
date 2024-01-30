import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  standalone: true,
  imports: [TestComponent],
  selector: 'app-route-second',
  templateUrl: './route-second.component.html',
  styleUrls: ['./route-second.component.less'],
})
export class RouteSecondComponent {}
