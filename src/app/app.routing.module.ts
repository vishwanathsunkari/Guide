import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthcallbackComponent } from "./authcallback/authcallback.component";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./authcallback/auth-guard";

const routes: Routes = [
    { path: "", component: AppComponent, canActivate: [AuthGuard] },
    { path: "auth-callback", component: AuthcallbackComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
