import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  display: boolean = false;
  clicksArray: any[] = [];

  toggleDisplay() {
    this.display = !this.display;
    // this.clicksArray.push(this.clicksArray.length + 1);
    this.clicksArray.push(new Date());
    console.log("clicksArray: ", this.clicksArray);
  }
  // getColor() {
  //   return this.clicksArray[this.clicksArray.length - 1] > 4
  //     ? "blue"
  //     : "transparent";
  // }
}
