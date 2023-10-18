import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TitleComponent } from './components/title/title.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesBigComponent } from './components/articles/articles-big/articles-big.component';
import { ArticlesSmallComponent } from './components/articles/articles-small/articles-small.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TitleComponent,
    ArticlesComponent,
    ArticlesBigComponent,
    ArticlesSmallComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
