import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";
import { AuthService } from "../auth/auth.service";

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
    this.dataService.saveData().subscribe((response: Response) => {
      console.log("response: ", response);
    });
  }

  onfetchRecipes() {
    this.dataService.fetchRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
}
