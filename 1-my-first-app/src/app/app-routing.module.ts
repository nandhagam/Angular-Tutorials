import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{
  path: 'home',
  component: WelcomeComponent
},
{
  path: 'counter/:initialData',
  component: ContentComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
