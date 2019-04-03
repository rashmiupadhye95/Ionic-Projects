import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  customers = [];
  private customerUrl = 'http://192.168.0.93:3000/api/customers';

	constructor(private http: HttpClient) { 
    var defaultCustomers = [
     
      ];

      if(localStorage.getItem('customers') == null){
        this.customers = defaultCustomers;
        this.setLocalStorageCustomers(this.customers);
    }
    else{
      this.getLocalStorageCustomers();
    }
  }
	
  /*customers = [
  {id:1, name:'Rashmi', email:'rashmi@gmail.com', address:'Belgaum', phone:'8989961763'},
  {id:2, name:'Ramya', email:'ramya@gmail.com', address:'Belgaum', phone:'87862789287'},
  {id:3, name:'Anuja', email:'anuja@gmail.com', address:'Belgaum', phone:'87862789122'},
  {id:4, name:'Keerti', email:'keerti@gmail.com', address:'Belgaum', phone:'8786278988'},
  ];*/
getLocalStorageCustomers(){
  this.customers = JSON.parse(localStorage.getItem('customers'));
}
setLocalStorageCustomers(list){
  localStorage.setItem('customers', JSON.stringify(list));
}
getRemoteCustomers(): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
 }



addRemoteCustomer(customer): Observable<any>{
  return this.http.post(this.customerUrl, customer);
}
deleteRemoteCustomer(customer){
  return this.http.delete(this.customerUrl+'/'+customer.id); 		
}

updateRemoteCustomer(customer):Observable<any>{
  return this.http.put(this.customerUrl + "/"+customer.id,customer);
}

getRemoteCustomerById(id):Observable<any>{
 return this.http.get<[]>(this.customerUrl + "/"+id);
}



  getCustomers(){
  	return this.customers;
  }
  	getCustomerById(id){
		for(var i = 0;i<this.customers.length;i++){
			if(id == this.customers[i].id){
				return this.customers[i];
			}
		}
		return null;
	}

  updateCustomer(customer){
    for(var i = 0;i<this.customers.length;i++){
    	if(customer.id == this.customers[i].id){
    		this.customers[i] = customer;
    	}
      this.setLocalStorageCustomers(this.customers);
    }
}

  addCustomer(customer){
  	customer.id = Math.round(Math.random()*100000);
    	this.customers.push(customer);
      this.setLocalStorageCustomers(this.customers);

  }

   deleteCustomer(customer){
    for(var i = 0;i<this.customers.length;i++){
      if(customer.id == this.customers[i].id){
        this.customers.splice(i,1);
        this.setLocalStorageCustomers(this.customers);
      }
    }

  }
}

