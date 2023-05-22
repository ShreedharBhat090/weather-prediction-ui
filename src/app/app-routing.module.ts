import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PredictionComponent} from "./prediction/prediction.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: 'prediction', component: PredictionComponent},
  {path: '', redirectTo: '/prediction', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

}
