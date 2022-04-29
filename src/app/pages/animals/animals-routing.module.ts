import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from 'src/app/pages/animals/animal-detail/animal-detail.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsListResolver } from './animals-list/animals-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
    resolve: { animals: AnimalsListResolver },
  },
  { path: ':animalId', component: AnimalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
