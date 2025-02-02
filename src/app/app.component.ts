import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MastheadComponent } from "./masthead/masthead.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from "./copyright/copyright.component";
import { PortfolioModalsComponent } from "./portfolio-modals/portfolio-modals.component";
import { MoviesComponent } from "./movies/movies.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MastheadComponent, PortfolioComponent, AboutComponent, ContactComponent, FooterComponent, CopyrightComponent, PortfolioModalsComponent, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
