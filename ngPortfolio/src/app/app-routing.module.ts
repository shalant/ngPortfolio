import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", redirectTo: 'welcome', pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "question", component: QuestionComponent },
  { path: "portfolio", component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
