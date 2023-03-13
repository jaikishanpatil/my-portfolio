import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './sub-pages/main/main.component';
import { NotFoundComponent } from './sub-pages/not-found/not-found.component';
import { TestComponent } from './sub-pages/test/test.component';

const routes: Routes = [
  { path: ``, component: MainComponent },
  { path: `test`, component: TestComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainModuleRoutingModule {}
