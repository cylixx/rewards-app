import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/classes';
import { RewardsDataService } from '../service/data/rewards-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers: Customer[]

  constructor(
    private rewardsService: RewardsDataService,
    private router: Router   //para poder acceder a las rutas de los componentes que hemos creado
  ) { }

  ngOnInit() {
    this.refreshAllCustomers();
  }

  refreshAllCustomers() {
    this.rewardsService.retrieveAllCustomers().subscribe(
      response => {
        console.log(response);
        this.customers = response;
      }
    )
  }

  customerTransactions(id) {
    console.log(`Customer <${id}> detail transactions.`);
    this.router.navigate(['rewards', id]);
  }

}
