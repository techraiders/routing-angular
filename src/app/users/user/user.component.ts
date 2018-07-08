import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /* If we are already on the same route, Angular doesn't change
    the route, so snapshot og params isn't updated. */
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    
    /* Watches changes in params and executes handlers */
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params.id;
          this.user.name = params.name;
        }
      );
  }

  ngOnDestroy () {
    /* This is the observable of angular, angular takes care to unsubscribe
    from this when component is destroyed, it is not essential to unsubscribe
    here manually, but it is super important when you create your own observable.
    */
    this.paramsSubscription.unsubscribe();
  }

}
