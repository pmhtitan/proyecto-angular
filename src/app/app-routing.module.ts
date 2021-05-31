import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// rutas
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'proyectos' },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'crear-proyecto', component: CreateComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'contacto', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
