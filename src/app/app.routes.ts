import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: "", redirectTo: "about", pathMatch:"full"},
    {path: "about", component: AboutComponent, title: "about"},
    {path: "portfolio", component: PortfolioComponent, title: "portfolio"},
    {path: "contact", component: ContactComponent, title: "contact"},
    {path: "**", component: AboutComponent},
];
