import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router, NavigationEnd  } from '@angular/router';



@Component({
  selector: 'app-list.customer',
  templateUrl: './list.customer.component.html',
  styleUrls: ['./list.customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private router:Router) { 
    this.routeEvent(this.router);
  }
  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;}); 
  }

  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        console.log(e)
        if(e.urlAfterRedirects == '/list-customer'){
          this.customerService.getRemoteCustomers().subscribe((r) => {this.customers = r;});
        }
      }
    });
  }

  customers = this.customerService.getCustomers();

  deleteCustomer(customer){
    this.customerService.deleteRemoteCustomer(customer).subscribe((e) => {
      this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
    //this.customerService.deleteCustomer(customer);
    //customer = this.customerService.getCustomers();
  });
}
  editCustomer(customer){
    this.router.navigate(['/edit-customer/'+customer.id]);
  }

}
   

























