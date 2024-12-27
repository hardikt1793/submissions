import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: {
    title: string,
    action: string,
    actionType: string,
    from: string,
    to: string,
    dueDate: string,
  } = {
    title: 'name',
    action: 'incomplete',
    actionType: 'warning',
    from: 'from',
    to: 'test',
    dueDate: "test"
  };

  constructor() { }
}
