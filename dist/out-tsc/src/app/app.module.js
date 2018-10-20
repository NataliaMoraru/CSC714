var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import { SigninComponent } from './components/signin/signin.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                MatButtonModule,
                MatCheckboxModule,
                MatInputModule,
                MatCardModule,
                MatMenuModule,
                BrowserAnimationsModule,
                RouterModule.forRoot([
                    {
                        path: 'contact-us',
                        component: ContactUsComponent
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
                        component: SigninComponent
                    }
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map