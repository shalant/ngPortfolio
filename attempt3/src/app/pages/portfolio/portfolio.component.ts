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
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'Tiger Phone',
      technologies: 'ASP.NET Web API, Angular, Azure',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'Doug Rosenberg Music',
      technologies: '36',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'AWS Resilient Fault Tolerant Wordpress',
      technologies: '36',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'Dynamic Wines',
      technologies: '36',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'

    },
    {
      name: 'Uday',
      technologies: '36',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'Mayank',
      technologies: '36',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
    {
      name: 'Raju',
      technologies: '36',
      image: '../../../assets/projectScreenshots/ATA.png',
      github: 'https://github.com/shalant/AirlineTravelApp'
    },
  ]

}