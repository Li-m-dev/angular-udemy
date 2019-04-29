import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Observer, Subscription, interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    const myNumbers = interval(1000).pipe(
      map((data: number) => {
        return data * 2;
      })
    );
    this.numbersObsSubscription = myNumbers.subscribe((number: Number) => {
      console.log("number: ", number);
    });
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("first package");
      }, 2000);
      setTimeout(() => {
        observer.next("second package");
      }, 4000);
      setTimeout(() => {
        // observer.error("this does not work");
        observer.complete();
      }, 5000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log("data: ", data);
      },
      (error: string) => {
        console.log("error: ", error);
      },
      () => {
        console.log("complete");
      }
    );
  }
  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
