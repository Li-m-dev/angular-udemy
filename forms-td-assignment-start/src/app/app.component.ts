import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f") userForm: NgForm;
  subscriptionTypes = ["Basic", "Advanced", "Pro"];
  defaultOption = "Advanced";
  user = {
    address: "",
    password: "",
    subscriptionType: ""
  };
  submitted = false;

  onSubmit() {
    console.log("here", this.userForm.value);
    this.submitted = true;
    this.user.address = this.userForm.value.address;
    this.user.password = this.userForm.value.password;
    this.user.subscriptionType = this.userForm.value.subscriptionType;
  }
}
