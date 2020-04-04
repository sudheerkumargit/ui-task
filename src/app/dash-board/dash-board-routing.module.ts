import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';
import { SideBarComponent } from './side-bar/side-bar.component';


const routes: Routes = [
  {path:'',component:DashBoardComponent,
  children:[
    {path: '', redirectTo: 'menu_one',  pathMatch: 'full'},
    {path:'menu_one',component:MenuOneComponent},
    {path:'menu_two',component:MenuTwoComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
