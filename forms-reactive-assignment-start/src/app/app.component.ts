import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  // status: ["Stable", "Critical", "Finished"];

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.forbiddenName.bind(this)
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmail
      ),
      status: new FormControl("critical")
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }
  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (control.value === "test") {
      return { nameIsForbidden: true };
    }
    return null;
  }
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
