import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MastheadComponent } from './masthead/masthead.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '', component: MastheadComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'portfolio', component: PortfolioComponent, title: 'portfolio'},
    {path: 'contact', component: ContactComponent, title: 'contact'}
];
