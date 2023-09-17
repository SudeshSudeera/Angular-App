import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './component/all/all.component';
import { FindComponent } from './component/find/find.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';

const routes: Routes = [
  {path:'', redirectTo:'api/users', pathMatch:'full'},
  {path:'api/users', component:AllComponent},
  {path:'api/find', component:FindComponent},
  {path:'api/register', component:RegisterComponent},
  {path:'api/update', component:UpdateComponent},
  {path:'api/delete', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
