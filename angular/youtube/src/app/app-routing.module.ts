import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './youtube/song-list/song-list.component';
import { AddSongComponent } from './youtube/add-song/add-song.component';
import { FavoritesComponent } from './youtube/favorites/favorites.component';
import { CategoriesComponent } from './youtube/categories/categories.component';
import { AboutUsComponent } from './youtube/about-us/about-us.component';
import { Page404Component } from './youtube/page404/page404.component';
import { SingleSongComponent } from './youtube/single-song/single-song.component';
import { PropsComponent } from './pages/props/props.component';

const routes: Routes = [
    { path: "", component: SongListComponent },
    { path: "addSong", component: AddSongComponent },
    { path: "fav", component: FavoritesComponent },
    { path: "cat", component: CategoriesComponent },
    { path: "about", component: AboutUsComponent },
    { path: "song/:id", component: SingleSongComponent },
    { path: "props", component: PropsComponent },
    { path: "**", component: Page404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
