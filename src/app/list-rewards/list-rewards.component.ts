import { Component, OnInit } from '@angular/core';
import { RewardsDataService } from '../service/data/rewards-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../model/classes';


@Component({
  selector: 'app-list-rewards',
  templateUrl: './list-rewards.component.html',
  styleUrls: ['./list-rewards.component.css']
})
export class ListRewardsComponent implements OnInit {

  id: number
  customer: Customer

  constructor(
    private rewardsService:RewardsDataService,
    private route: ActivatedRoute,  //para poder acceder a los parametros del request
    private router: Router   //para poder acceder a las rutas de los componentes que hemos creado
  ) { }

  ngOnInit() {
    this.customer = new Customer(0, '', [], 0, 0);
    this.refreshCustomer();
  }

  refreshCustomer() {
    this.id = this.route.snapshot.params['id'];   //obtiene parametro de la URL
    this.rewardsService.retrieveCustomer(this.id).subscribe(
      response => {
        console.log(response);
        this.customer = response;
      }
    )
  }

  refreshCustomers() {
    this.router.navigate(['customers']);
  }

}
