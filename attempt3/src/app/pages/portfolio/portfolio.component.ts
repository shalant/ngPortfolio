import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  title = 'angular-project';
  
  projectList = [
    {
      name: 'ATA Airlines',
      technologies: 'ASP.NET Web API, Angular, Azure',
      image: '../../../assets/ATA.png'
    },
    {
      name: 'Tiger Phone',
      technologies: 'ASP.NET Web API, Angular, Azure',
    },
    {
      name: 'Doug Rosenberg Music',
      technologies: 36
    },
    {
      name: 'AWS Resilient Fault Tolerant Wordpress',
      technologies: 65
    },
    {
      name: 'Dynamic Wines',
      technologies: 12
    },
    {
      name: 'Uday',
      technologies: 31
    },
    {
      name: 'Mayank',
      technologies: 45
    },
    {
      name: 'Raju',
      technologies: 74
    },
  ]

}