import { Injectable } from '@angular/core';
import { Customer } from 'src/app/list-rewards/list-rewards.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RewardsDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveCustomer(customerId) {
    return this.http.get<Customer>(`http://localhost:8080/customer/${customerId}`);
  }
}
