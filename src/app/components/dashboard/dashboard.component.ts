import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public applications: any[] = [
    {
      title: 'Order',
      icon: '/assets/icons/order.svg',
      component: null
    },
    {
      title: 'Washing',
      icon: '/assets/icons/washing.svg',
      component: null
    },
    {
      title: 'Taking',
      icon: '/assets/icons/taking.svg',
      component: null
    },
    {
      title: 'Customer',
      icon: '/assets/icons/customer.svg',
      component: null
    },
    {
      title: 'Services',
      icon: '/assets/icons/service.svg',
      component: null
    },
    {
      title: 'Shopkeeper',
      icon: '/assets/icons/cashier.svg',
      component: null
    },
    {
      title: 'Expenses',
      icon: '/assets/icons/expenses.svg',
      component: null
    },
    {
      title: 'Reporting',
      icon: '/assets/icons/reporting.svg',
      component: null
    },
    {
      title: 'My Shop',
      icon: '/assets/icons/myshop.svg',
      component: null
    },
    {
      title: 'My Profile',
      icon: '/assets/icons/myprofile.svg',
      component: null
    },
    {
      title: 'Logout',
      icon: '/assets/icons/logout.svg',
      component: null
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
