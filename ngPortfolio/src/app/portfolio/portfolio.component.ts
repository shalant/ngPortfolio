import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public name: string = "";
  public projectList: any = [];
  public currentProject: number = 0;
  public points: number = 0;
  counter = 60;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.projectService.getProjectJson()
      .subscribe(res => {
        this.projectList = res.projects;
      })
  }

  nextQuestion() {
    this.currentProject++;
  }

  previousQuestion() {
    this.currentProject--;
  }
}
