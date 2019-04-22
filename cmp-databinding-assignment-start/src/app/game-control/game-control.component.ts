import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  count: number = 0;
  @Output() intervalFired = new EventEmitter<number>();
  ref;
  constructor() {}

  ngOnInit() {}
  onGameStart() {
    this.ref = setInterval(() => {
      this.intervalFired.emit(this.count + 1);
      this.count++;
    }, 1000);
    return this.ref;
  }
  onGameStop() {
    clearInterval(this.ref);
  }
}
