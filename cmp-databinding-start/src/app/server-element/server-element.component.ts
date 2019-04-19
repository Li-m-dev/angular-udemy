import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated
  //emulated is default, but you can also choose None or Native. when it is None, it will make the
  // styling of the file.css global
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { type: string; name: string; content: string };
  //binding through alias srvElement

  constructor() {}

  ngOnInit() {}
}
