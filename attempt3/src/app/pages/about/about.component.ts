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

const PROJECT_DATA: Technology[] = [
  {position: 1, name: 'Angular', category: 'Framework', icon: 'fa-brands fa-angular fa-2x'},
  {position: 2, name: 'React', category: 'Library', icon: 'fa-brands fa-react fa-2x'},
  {position: 2, name: 'Javascript', category: 'Language', icon: 'fa-brands fa-js fa-2x'},
  {position: 2, name: 'C#', category: 'Language', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 2, name: 'Python', category: 'Language', icon: 'fa-brands fa-python fa-2x'},
  {position: 2, name: 'Java', category: 'Language', icon: 'fa-brands fa-java fa-2x'},
  {position: 2, name: 'Linux', category: 'Language', icon: 'fa-brands fa-linux fa-2x'},
  {position: 2, name: 'Ubuntu', category: 'Language', icon: 'fa-brands fa-ubuntu fa-2x'},
  {position: 2, name: 'Github', category: 'Source Control', icon: 'fa-brands fa-github fa-2x'},
  {position: 3, name: 'Azure-204 Developer', category: 'Cloud Certification', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 4, name: 'Azure-900', category: 'Cloud Certification', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 5, name: 'AWS Certified Developer', category: 'Cloud Certification', icon: 'fa-brands fa-aws fa-2x'},
  {position: 6, name: 'AWS Solutions Architect Associate', category: 'Cloud Certification', icon: 'fa-brands fa-aws fa-2x'},
  {position: 7, name: 'AWS Certied Cloud Practitioner', category: 'Cloud Certification', icon: 'fa-brands fa-aws fa-2x'},
  {position: 8, name: 'MS SQL Server', category: 'Database', icon: 'fa-brands fa-microsoft fa-2x'},
  {position: 8, name: 'MY SQL', category: 'Database', icon: 'fa-solid fa-database fa-2x'},
  {position: 8, name: 'Mongo DB', category: 'Database', icon: 'fa-solid fa-database fa-2x'},
  {position: 8, name: 'Material UI', category: 'CSS', icon: 'fa-brands fa-css3-alt fa-2x'},
  {position: 8, name: 'Bootstrap', category: 'CSS', icon: 'fa-brands fa-css3-alt fa-2x'},
  {position: 8, name: 'Prime NG', category: 'CSS', icon: 'fa-brands fa-css3-alt fa-2x'},
  {position: 8, name: 'Styled Components', category: 'CSS', icon: 'fa-brands fa-css3-alt fa-2x'},
  {position: 9, name: 'Docker', category: 'DevOps', icon: 'fa-brands fa-docker fa-2x'},
  {position: 10, name: 'Jenkins', category: 'DevOps', icon: 'fa-brands fa-jenkins fa-2x'},
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
  // below works...
  // dataSource = PROJECT_DATA;

  // length = 100;
  // pageSize = 10;
  // pageSizeOptions: number[] = [5, 10, 25, 100];

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

}










// import {AfterViewInit, Component, ViewChild} from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';

// // plan: eventually make a table (sortable, searchable, paginated) with all technologies, display icons

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   fruit: string;
//   techs: object;
//   // item: string;
//   // type: string;
//   // icon: string;
// }

// /** Constants used to fill up our data base. */
// const FRUITS: string[] = [
//   'pomegranate',
//   'pineapple',
// ];
// const NAMES: string[] = [
//   'Angular',
//   'React',
//   'Azure Developer Associate',
//   'AWS Developer Associate',
//   'AWS Certified Cloud Practicioner',
//   'AWS Solutions Architect Associate',
//   'ASP.NET',
//   'C#',
//   'Material-UI',
//   'Github',
//   'Bootstrap',
//   'MS SQL Server',
//   'MYSQL',
//   'MongoDB',
//   'Node',
// ];

// // interface sample_arr {
// //   data1: <data type>;
// //   data2: <data type>;
// //   }
// //   const array_emp: sample_arr[ ] = [
// //   { data1: “value1”, data2: “value2”, data3: “value3” },
// //   { data1: “value12”, data2: “value22”, data3: “value32” },
// //   ]

// // export interface TECHS {
// //   item: <string>;
// //   type: <string>;
// //   icon: <string>;
// // }


// const BLAH: { name: string; age: number }[] = [
//   { name: 'Alice', age: 27 },
//   { name: 'Bob', age: 28 },
//   { name: 'Carl', age: 29 },
// ];

// const TECHNOLOGIES: { item: string; type: string; icon: string} [] = [
//   {item: 'Angular', type: 'Framework', icon: 'fa-brands fa-angular'},
//   {item: 'React', type: 'Framework', icon: 'fa-brands fa-react'},
//   {item: 'Azure-204 Developer Associate', type: 'Cloud Certification', icon: 'fa-brands fa-react'},
//   {item: 'AWS Developer Associate', type: 'Cloud Certification', icon: 'fa-brands fa-aws'},
//   {item: 'AWS Certified Cloud Practicioner', type: 'Cloud Certification', icon: 'fa-brands fa-aws'},
//   {item: 'AWS Solutions Architect Associate', type: 'Cloud Certification', icon: 'fa-brands fa-aws'},
//   {item: 'Azure-900', type: 'Cloud Certification', icon: 'fa-brands fa-react'},
//   {item: 'ASP.NET', type: 'Certification', icon: 'fa-brands fa-react'},
//   {item: 'Material-UI', type: 'CSS', icon: 'fa-brands fa-react'},
//   {item: 'MYSQL', type: 'Database', icon: 'fa-brands fa-react'},
//   {item: 'MS SQL Server', type: 'Database', icon: 'fa-brands fa-react'},
//   {item: 'MongoDB', type: 'Database', icon: 'fa-brands fa-react'},
//   {item: 'Github', type: 'Source-control', icon: 'fa-brands fa-github'},
//   {item: 'Bootstrap', type: 'CSS', icon: 'fa-brands fa-bootstrap'},
//   {item: 'Python', type: 'Language', icon: 'fa-brands fa-python'},
//   {item: 'Java', type: 'Language', icon: 'fa-brands fa-java'},
//   {item: 'Jenkins', type: 'DevOps', icon: 'fa-brands fa-jenkins'},
//   {item: 'Docker', type: 'DevOps', icon: 'fa-brands fa-docker'},
//   {item: 'MongoDB', type: 'Database', icon: 'fa-brands fa-react'},
//   {item: 'MongoDB', type: 'Database', icon: 'fa-brands fa-react'},
//   {item: 'Node', type: 'Server-side', icon: 'fa-brands fa-node'},
//   {item: 'Azure-900', type: 'Certification', icon: 'fa-brands fa-react'},
//   {item: 'Azure-900', type: 'Certification', icon: 'fa-brands fa-react'},
//   {item: 'Azure-900', type: 'Certification', icon: 'fa-brands fa-react'}
// ];

// @Component({
//   selector: 'about',
//   styleUrls: ['about.component.css'],
//   templateUrl: 'about.component.html',
// })
// export class AboutComponent implements AfterViewInit {
//   displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
//   dataSource: MatTableDataSource<UserData>;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor() {
//     // Create 100 users
//     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

//     // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource(users);
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }

// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//     techs: TECHNOLOGIES,
//   };
// }
