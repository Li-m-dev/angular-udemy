import { Component, OnInit } from "@angular/core";

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "test server";
  serverCreated = false;
  servers = ["testServer", "testServer2"];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created, name is ${
      this.serverName
    }`;
  }
  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
