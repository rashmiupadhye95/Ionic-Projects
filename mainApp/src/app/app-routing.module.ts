import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ListMoviesComponent } from './list.movies/list.movies.component';
import { AddMovieComponent } from './add.movie/add.movie.component';
import { EditMovieComponent } from './edit.movie/edit.movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path:'movies', component:MoviesComponent
  },
  {
    path:'list-movies', component:ListMoviesComponent
  },
  {
    path:'edit-movies/:id', component:EditMovieComponent
  },
  {
    path:'add-movies', component:AddMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
