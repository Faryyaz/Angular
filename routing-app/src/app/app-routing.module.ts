import { NgModule } from "../../node_modules/@angular/core";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Routes, RouterModule } from "../../node_modules/@angular/router";
import { AuthGuardService } from "./auth-guard.service";

const appRoutes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'servers', canActivate: [AuthGuardService], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]},
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}, // pass parameter through the url using colon :
    ]},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'} // should always be last in the array. if url is not found then 404 and redirect to path
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}