import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodComponent} from "./food/food.component";
import {RecipeSubmitComponent} from "./recipe-submit/recipe-submit.component";


const routes: Routes = [{path: 'recipes', component:FoodComponent}, {path: 'submit', component:RecipeSubmitComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
