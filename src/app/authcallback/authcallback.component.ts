import { Component, OnInit, NgZone } from "@angular/core";
import { AdalService } from "adal-angular4";
import { Router } from "@angular/router";

@Component({
  selector: "app-authcallback",
  templateUrl: "./authcallback.component.html",
  styleUrls: ["./authcallback.component.css"]
})
export class AuthcallbackComponent implements OnInit {

  constructor(private router: Router, private adal: AdalService, private zone: NgZone) { }

  ngOnInit() {
    this.adal.handleWindowCallback();
    console.log(this.adal);
    setTimeout(() => {
      this.zone.run(
        () => this.router.navigate(["/"])
      );
    }, 200);
  }

}
