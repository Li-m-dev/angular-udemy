import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../../shared/data-storage.service";
// import { HttpEvent, HttpEventType } from "@angular/common/http";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(
    private dataService: DataStorageService,
    private authService: AuthService
  ) {}
  onSaveData() {
    this.dataService.saveData().subscribe(response => {
      console.log(response);
    });
    // this.dataService.saveData().subscribe((response: HttpEvent<Object>) => {
    //   // console.log( response.type === HttpEventType.Sent);
    // });
  }

  onfetchRecipes() {
    this.dataService.fetchRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
