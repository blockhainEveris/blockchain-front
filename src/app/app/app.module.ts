import { APP_BASE_HREF } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LocationLoader } from './app.location';
import { MainComponent } from './../views/main/main.component';

import { HeaderComponent } from './../sections/header/header.component';
import { FooterComponent } from './../sections/footer/footer.component';
import { LoginComponent } from './../views/login/login.component';
import { VotingComponent } from './../views/voting/voting.component';
import { VoteComponent } from './../views/vote/vote.component';
import { NotFoundComponent} from './../views/notFound/notFound.component';

const routes: Routes  = [
    {path:'', component:LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'voting', component: VotingComponent},
    {path:'voting/:id', component: VoteComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes, { useHash: true }),
        FormsModule
    ],
    declarations: [
        MainComponent,
        FooterComponent,
        HeaderComponent,
        LoginComponent,
        VotingComponent,
        VoteComponent,
        NotFoundComponent
    ],
    providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
    ],
    bootstrap: [
        MainComponent
    ],
})
export class AppModule { }
