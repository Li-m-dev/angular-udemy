import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;
  constructor() {}

  onActiveToInactive() {
    this.activeToInactive++;
    console.log("active to inactive count: ", this.activeToInactive);
  }
  onInactiveToActive() {
    this.inactiveToActive++;
    console.log("inactive to active count: ", this.inactiveToActive);
  }
}
