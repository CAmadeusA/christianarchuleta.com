import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ChromejumpComponent } from './pages/neat/chromejump/chromejump.component';
import { CubesComponent } from './pages/neat/cubes/cubes.component';
import { NeatComponent } from './pages/neat/neat.component';
import { WorkComponent } from './pages/work/work.component';
import { NimbleComponent } from './pages/neat/nimble/nimble.component';

const routes: Routes = [
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'neat-things', component: NeatComponent, children: [
      { path: 'chromejump', component: ChromejumpComponent },
      { path: 'cubes', component: CubesComponent },
      { path: 'nimble', component: NimbleComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
