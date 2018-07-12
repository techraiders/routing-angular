import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent}
  ] },
  { path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ] },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'} // redirects unknown routes to not-found route. CAUTION: This always has to be the last route else you will always be redirected to not-found route.
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  
  /* Exports : From this module, If I were to add this module to the import of another module, what should be accessible of this module to the module that imports it */
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}