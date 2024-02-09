import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './components/repos/repos.component';
import { HeaderComponent } from './components/header/header.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HeaderSkeletonComponent } from './components/header-skeleton/header-skeleton.component';
import { ReposSkeletonComponent } from './components/repos-skeleton/repos-skeleton.component';
import { RepoCardSkeletonComponent } from './components/repo-card-skeleton/repo-card-skeleton.component';
import { shortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [
    shortenPipe,
    AppComponent,
    ReposComponent,
    HeaderComponent,
    RepoCardComponent,
    HeaderSkeletonComponent,
    ReposSkeletonComponent,
    RepoCardSkeletonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, NgxPaginationModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
