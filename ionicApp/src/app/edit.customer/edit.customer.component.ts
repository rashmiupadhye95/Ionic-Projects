import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit.customer',
  templateUrl: './edit.customer.component.html',
  styleUrls: ['./edit.customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private router: Router) { }
  id: number;
  private sub: any;
  customer:any;
  ngOnInit() {
    this.customer = {name:'', email:'', address:'', phone:''};
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.customerService.getRemoteCustomerById(this.id).subscribe((customer)=>{this.customer = customer;});
    });
  }

  updateCustomer(){
    this.customerService.updateRemoteCustomer(this.customer).
    subscribe(()=>{this.router.navigate(['/list-customer']);});
    
     //this.customerService.updateCustomer(customer);
     //this.router.navigate(['/list-customer']);
  }
  
}