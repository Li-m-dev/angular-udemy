import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  activeUsers = ["Max", "Anna", "Li"];
  inactiveUsers = ["Chris", "Manu", "Logan"];

  constructor(private counterService: CounterService) {}

  onSwitchToInactive(id: number) {
    console.log("user server: ", id);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.onActiveToInactive();
  }

  onSwitchToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.onInactiveToActive();
  }
}
