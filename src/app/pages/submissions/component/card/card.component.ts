import { Component, Input } from "@angular/core";
import { Card } from "../../models/card.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  // card details
  @Input() card: Card = {
    title: "name",
    action: "incomplete",
    actionType: "warning",
    from: "from",
    to: "test",
    dueDate: "test",
  };
}
