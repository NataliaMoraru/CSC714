import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import { SigninComponent } from './components/signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    ChapterComponent,
    AssignmentComponent,
    HomepageComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'contact-us',
        component:ContactUsComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'chapter',
        component: ChapterComponent
      },
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'signin',
        component:SigninComponent
      }
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
