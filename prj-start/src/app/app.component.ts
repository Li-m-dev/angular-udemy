import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBv5cYOpgsC-DPY00ils6-zIL3-Qn02xAg",
      authDomain: "ng-recipe-book-e2977.firebaseapp.com"
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
