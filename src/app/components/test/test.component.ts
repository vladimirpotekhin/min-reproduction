import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
  host: {
    '[attr.data-size]': '"l"',
  },
})
export class TestComponent {}
