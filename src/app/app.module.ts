import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugDetailComponent } from './bug-detail/bug-detail.component';
import { BugBoardComponent } from './bug-board/bug-board.component';


const appRoutes: Routes = [
  { path: 'bug-list', component: BugListComponent },
  { path: 'bug-list/:searchItem', component: BugListComponent },
  { path: 'bug-detail', component: BugDetailComponent },
  { path: 'bug-detail/:id', component: BugDetailComponent },
  {
    path: '',
    redirectTo: '/bugBoard',
    pathMatch: 'full'
  },
  { path: '**', component: BugBoardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BugListComponent,
    BugDetailComponent,
    BugBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
