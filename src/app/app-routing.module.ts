import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'header', component: HeaderComponent },
  {
    path: 'main',
    loadChildren: () =>
      import(`./modules/main-module/main-module.module`).then(
        (m) => m.MainModuleModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
