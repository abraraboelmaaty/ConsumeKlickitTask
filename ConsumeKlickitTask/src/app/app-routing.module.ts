import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { HomeComponent } from './shared/componantes/home/home.component';
import { SearchComponent } from './shared/componantes/search/search.component';

const routes: Routes = [
  { path: 'index', component:HomeComponent},
  { path: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'Products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'Categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  {path:"login",component:LoginComponent},
  {path:"register/:id",component:RegisterComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:'search/:id',component:SearchComponent},
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
