import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Permission } from './permission.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-intruder',
  imports: [TitleCasePipe],
  templateUrl: `app-user.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntruderComponent implements Permission {
  type = input.required<string>();
  permissions = input.required<string[]>();
  name = input('N/A');

  getGreeting(): string {
    return `I am an ${this.type()} and my name is ${this.name()}.`;
  }
}
