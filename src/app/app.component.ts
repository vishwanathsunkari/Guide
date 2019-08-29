import { Component, OnInit } from "@angular/core";
import { AdalService } from "adal-angular4";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
import { map } from "rxjs/operators";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cognizant";
  private adalConfiguration = {
    tenant: "6197edc2-01c0-4b24-8919-8f827d5c4dfa",
    clientId: "f22dba80-7de2-4e18-b91b-6741a47097ee",
    redirectUri: "https://localhost:4200/",
    source: "6197edc2-01c0-4b24-8919-8f827d5c4dfa",
    postLogoutRedirectUri: "https://localhost:4200/logout",
    endpoints: {
      "https://localhost:4200/": "f22dba80-7de2-4e18-b91b-6741a47097ee"
    }
  };

  constructor(private adal: AdalService) {
    this.adal.init(this.adalConfiguration);
    console.log(this.adal);
    this.adal.acquireToken(this.adalConfiguration.source).pipe(map((token) => {
      console.log(token);
    }));
  }
}
