import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


export interface Technology {
  name: string;
  position: number;
  category: string;
  icon: string;
}

// for SVG icons:
  // <mat-icon svgIcon="thumbs-up" aria-hidden="false" aria-label="Example thumbs up SVG icon"></mat-icon>

const PROJECT_DATA: Technology[] = [
  {position: 1, name: 'Angular', category: 'Framework', icon: 'fa-brands fa-angular fa-2x'},
  {position: 1, name: 'ASP.NET', category: 'Framework', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 3, name: 'Azure-204 Developer', category: 'Cloud Certification', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 5, name: 'AWS Certified Developer', category: 'Cloud Certification', icon: 'fa-brands fa-aws fa-2x'},
  {position: 9, name: 'Docker', category: 'DevOps', icon: 'fa-brands fa-docker fa-2x'},
  {position: 2, name: 'React', category: 'Library', icon: 'fa-brands fa-react fa-2x'},
  {position: 2, name: 'Javascript', category: 'Language', icon: 'fa-brands fa-js fa-2x'},
  {position: 2, name: 'C#', category: 'Language', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 2, name: 'Python', category: 'Language', icon: 'fa-brands fa-python fa-2x'},
  {position: 2, name: 'Java', category: 'Language', icon: 'fa-brands fa-java fa-2x'},
  {position: 2, name: 'Linux', category: 'Language', icon: 'fa-brands fa-linux fa-2x'},
  {position: 2, name: 'Ubuntu', category: 'Language', icon: 'fa-brands fa-ubuntu fa-2x'},
  {position: 2, name: 'Github', category: 'Source Control', icon: 'fa-brands fa-github fa-2x'},
  {position: 4, name: 'Azure-900', category: 'Cloud Certification', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 6, name: 'AWS Solutions Architect Associate', category: 'Cloud Certification', icon: 'fa-brands fa-aws fa-2x'},
  {position: 7, name: 'AWS Certied Cloud Practitioner', category: 'Cloud Certification', icon: 'fa-brands fa-aws fa-2x'},
  {position: 8, name: 'MS SQL Server', category: 'Database', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 8, name: 'MY SQL', category: 'Database', icon: 'fa-solid fa-database fa-2x'},
  {position: 8, name: 'Mongo DB', category: 'Database', icon: 'fa-solid fa-database fa-2x'},
  {position: 8, name: 'Material UI', category: 'CSS', icon: 'fa-brands fa-css3-alt fa-2x'},
  {position: 8, name: 'Bootstrap', category: 'CSS', icon: 'fa-brands fa-css3-alt fa-2x'},
  {position: 8, name: 'Prime NG', category: 'CSS', icon: 'fa-brands fa-css3-alt fa-2x'},
  {position: 8, name: 'Styled Components', category: 'CSS', icon: 'fa-brands fa-css3-alt fa-2x'},
  {position: 10, name: 'Jenkins', category: 'DevOps', icon: 'fa-brands fa-jenkins fa-2x'},
  {position: 10, name: 'Terraform', category: 'DevOps', icon: 'fa-solid fa-cloud fa-2x'},
  {position: 10, name: 'Kubernetes', category: 'DevOps', icon: 'fa-solid fa-cloud fa-2x'},
  {position: 10, name: 'Razor Pages', category: 'Framework', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 10, name: 'Blazor Web Assembly', category: 'Framework', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 10, name: 'ASP.NET MVC', category: 'Framework', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 10, name: 'JWT', category: 'Security', icon: 'fa-sharp fa-solid fa-lock fa-2x'},
  {position: 10, name: 'Okta', category: 'Security', icon: 'fa-sharp fa-solid fa-lock fa-2x'},
  {position: 10, name: 'Auth0', category: 'Security', icon: 'fa-sharp fa-solid fa-lock fa-2x'},
];

@Component({
  selector: 'app-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  title = 'MT';
  displayedColumns: string[] = ['position', 'name', 'category', 'icon'];
  dataSource = new MatTableDataSource<Technology>(PROJECT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}


  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
