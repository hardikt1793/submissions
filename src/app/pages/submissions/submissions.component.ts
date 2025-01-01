import { Component } from "@angular/core";
import { Card } from "./models/card.model";
import { Marker } from "./models/marker.model";

@Component({
  selector: "app-submissions",
  templateUrl: "./submissions.component.html",
  styleUrls: ["./submissions.component.scss"],
})
export class SubmissionsComponent {
  // latitude representing map location
  latitude = 48.75606;

  // longitude representing map location
  longitude = -118.859;

  // markers used for positioning markers on the map
  markers: Marker[] = [
    { latitude: 22.33159, longitude: 105.63233, alpha: 1 },
    { latitude: 7.92658, longitude: -12.05228, alpha: 1 },
    { latitude: 48.75606, longitude: -118.859, alpha: 1 },
    { latitude: 5.19334, longitude: -67.03352, alpha: 1 },
    { latitude: 12.09407, longitude: 26.31618, alpha: 1 },
    { latitude: 47.92393, longitude: 78.58339, alpha: 1 },
  ];

  // List of cards
  cardList: Card[] = [
    {
      title: "Requires Location",
      action: "incomplete",
      actionType: "warning",
      from: "denisgordiyenya@gmail.com",
      to: "denisgordiyenya@gmail.com",
      dueDate: "06 December",
    },
    {
      title: "Requires Location",
      action: "Low Risk",
      actionType: "success",
      from: "denisgordiyenya@gmail.com",
      to: "denisgordiyenya@gmail.com",
      dueDate: "06 December",
    },
    {
      title: "Requires Location",
      action: "incomplete",
      actionType: "warning",
      from: "denisgordiyenya@gmail.com",
      to: "denisgordiyenya@gmail.com",
      dueDate: "06 December",
    },
    {
      title: "Requires Location",
      action: "Needs Review",
      actionType: "disable",
      from: "denisgordiyenya@gmail.com",
      to: "denisgordiyenya@gmail.com",
      dueDate: "06 December",
    },
    {
      title: "Requires Location",
      action: "Low Risk",
      actionType: "success",
      from: "denisgordiyenya@gmail.com",
      to: "denisgordiyenya@gmail.com",
      dueDate: "06 December",
    },
  ];
}
