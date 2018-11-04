import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'download', loadChildren: './download/download.module#DownloadModule' },
  { path: 'home', component: HomeComponent },
  { path: 'hulp', loadChildren: './support/support.module#SupportModule' },
  { path: 'lijst', loadChildren: './list/list.module#ListModule' },
  { path: 'recepten', loadChildren: './recipe/recipe.module#RecipeModule' },
  { path: 'referenties', loadChildren: './references/references.module#ReferencesModule' },
  { path: 'winkels', loadChildren: './shop/shop.module#ShopModule' },
  { path: '404-page', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
