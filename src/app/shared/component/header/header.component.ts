import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navigation: {
    name: string,
    iconName: string,
    link: string
  }[] = [
    {
      name: 'Forms',
      iconName: 'view_list',
      link: 'forms'
    },
    {
      name: 'Customers',
      iconName: 'people',
      link: 'customers'
    },
    {
      name: 'Submissions',
      iconName: 'graphic_eq',
      link: 'submissions'
    },
    {
      name: 'History',
      iconName: 'history',
      link: 'history'
    },
    {
      name: 'Reports',
      iconName: 'assessment',
      link: 'reports'
    },
    {
      name: 'Workflow',
      iconName: 'assessment',
      link: 'workflow'
    }
  ]

  constructor() { }
}
