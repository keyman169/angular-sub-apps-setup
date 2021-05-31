import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {
    path: 'app2', component: MainComponent,
    children: [
      {path: 'one', component: View1Component},
      {path: 'two', component: View2Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
