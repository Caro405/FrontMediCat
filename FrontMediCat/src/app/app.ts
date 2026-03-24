import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './landing/navbar/navbar';
import { Hero } from './landing/hero/hero';
import { About } from './landing/about/about';
import { Contact } from './landing/contact/contact';
import { Footer } from './landing/footer/footer';
import { Reviews } from './landing/reviews/reviews';
import { Services } from './landing/services/services';

import { Team } from './landing/team/team';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar, 
    Hero,  
    Services,
    About,
    Team,
    Reviews,
    Contact,
    Footer
  ],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FrontMediCat');
}
