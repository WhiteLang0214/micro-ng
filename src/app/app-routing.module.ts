import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from '../views/login/login.component';
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/microEmbpWeb" // 设置 history 模式路由的 base
    }
  ]
})
export class AppRoutingModule { }
