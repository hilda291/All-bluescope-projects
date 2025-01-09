import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { InputComponent } from './input/input.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InputListComponent } from './input-list/input-list.component';
import { InputDetailComponent } from './input-detail/input-detail.component';

const routes: Routes = [
  {path:'perform',component:SideBarComponent},
  {path:'create',component:CreateComponent},
  {path:'list',component:ListComponent},
  {path:'detail',component:DetailComponent},
  {path:'CreateformjsonComponent',component:InputComponent},
  {path:'listJson',component:InputListComponent},
  {path:'detailJson',component:InputDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
