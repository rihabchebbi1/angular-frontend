import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { AjouterProduitComponent } from './components/ajouter-produit/ajouter-produit.component';  // Assurez-vous que ce composant existe
import { AjouterMarqueComponent } from './components/ajouter-marque/ajouter-marque.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'produits', component: ProduitListComponent },
  { path: 'produits/:id', component: ProduitDetailComponent },
  { path: 'ajouterproduit', component: AjouterProduitComponent },
  { path: 'ajouter-marque', component: AjouterMarqueComponent }, // Assurez-vous que cette route est correcte
  { path: '', redirectTo: '/produits', pathMatch: 'full' },
  { path: '**', redirectTo: '/produits' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutes: Routes = routes;
