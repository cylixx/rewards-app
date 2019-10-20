import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/classes';

@Injectable({
  providedIn: 'root'
})
export class RewardsDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllCustomers() {
    return this.http.get<Customer[]>(`http://localhost:8080/customers`);
  }

  retrieveCustomer(customerId) {
    return this.http.get<Customer>(`http://localhost:8080/customers/${customerId}`);
  }
}
