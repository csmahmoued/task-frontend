import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { NumverifyComponent } from './components/numverify/numverify.component';

const routes: Routes = [
  {path:"history",component:HistoryComponent},
  {path:" ",component:NumverifyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
