import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /* If we are already on the same route, Angular doesn't change
    the route, so snapshot og params isn't updated. */
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    
    /* Watches changes in params and executes handlers */
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params.id;
          this.user.name = params.name;
        }
      );
  }

}
