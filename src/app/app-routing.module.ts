import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'download', loadChildren: './download/download.module#DownloadModule' },
  { path: 'home', component: HomeComponent },
  { path: 'hulp', loadChildren: './support/support.module#SupportModule' },
  { path: 'lijst', loadChildren: './list/list.module#ListModule', canLoad: [AuthGuard] },
  { path: 'recepten', loadChildren: './recipe/recipe.module#RecipeModule', canLoad: [AuthGuard] },
  { path: 'referenties', loadChildren: './references/references.module#ReferencesModule' },
  { path: 'winkels', loadChildren: './shop/shop.module#ShopModule', canLoad: [AuthGuard] },
  { path: '404-page', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
