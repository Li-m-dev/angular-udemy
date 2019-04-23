import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"]
  // providers: [UsersService]
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  onSetToInactive(id: number) {
    console.log("here");
    this.usersService.onSwitchToInactive(id);
  }
}
