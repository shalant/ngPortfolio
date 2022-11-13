import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

// plan: eventually make a table (sortable, searchable, paginated) with all technologies, display icons

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  techs: object;
  // item: string;
  // type: string;
  // icon: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Angular',
  'React',
  'Azure Developer Associate',
  'AWS Developer Associate',
  'AWS Certified Cloud Practicioner',
  'AWS Solutions Architect Associate',
  'ASP.NET',
  'C#',
  'Material-UI',
  'Github',
  'Bootstrap',
  'MS SQL Server',
  'MYSQL',
  'MongoDB',
  'Node',
];

// interface sample_arr {
//   data1: <data type>;
//   data2: <data type>;
//   }
//   const array_emp: sample_arr[ ] = [
//   { data1: “value1”, data2: “value2”, data3: “value3” },
//   { data1: “value12”, data2: “value22”, data3: “value32” },
//   ]

// export interface TECHS {
//   item: <string>;
//   type: <string>;
//   icon: <string>;
// }


const BLAH: { name: string; age: number }[] = [
  { name: 'Alice', age: 27 },
  { name: 'Bob', age: 28 },
  { name: 'Carl', age: 29 },
];

const TECHNOLOGIES: { item: string; type: string; icon: string} [] = [
  {item: 'Angular', type: 'Framework', icon: 'fa-brands fa-angular'},
  {item: 'React', type: 'Framework', icon: 'fa-brands fa-react'},
  {item: 'Azure-204 Developer Associate', type: 'Cloud Certification', icon: 'fa-brands fa-react'},
  {item: 'AWS Developer Associate', type: 'Cloud Certification', icon: 'fa-brands fa-aws'},
  {item: 'AWS Certified Cloud Practicioner', type: 'Cloud Certification', icon: 'fa-brands fa-aws'},
  {item: 'AWS Solutions Architect Associate', type: 'Cloud Certification', icon: 'fa-brands fa-aws'},
  {item: 'Azure-900', type: 'Cloud Certification', icon: 'fa-brands fa-react'},
  {item: 'ASP.NET', type: 'Certification', icon: 'fa-brands fa-react'},
  {item: 'Material-UI', type: 'CSS', icon: 'fa-brands fa-react'},
  {item: 'MYSQL', type: 'Database', icon: 'fa-brands fa-react'},
  {item: 'MS SQL Server', type: 'Database', icon: 'fa-brands fa-react'},
  {item: 'MongoDB', type: 'Database', icon: 'fa-brands fa-react'},
  {item: 'Github', type: 'Source-control', icon: 'fa-brands fa-github'},
  {item: 'Bootstrap', type: 'CSS', icon: 'fa-brands fa-bootstrap'},
  {item: 'Python', type: 'Language', icon: 'fa-brands fa-python'},
  {item: 'Java', type: 'Language', icon: 'fa-brands fa-java'},
  {item: 'Jenkins', type: 'DevOps', icon: 'fa-brands fa-jenkins'},
  {item: 'Docker', type: 'DevOps', icon: 'fa-brands fa-docker'},
  {item: 'MongoDB', type: 'Database', icon: 'fa-brands fa-react'},
  {item: 'MongoDB', type: 'Database', icon: 'fa-brands fa-react'},
  {item: 'Node', type: 'Server-side', icon: 'fa-brands fa-node'},
  {item: 'Azure-900', type: 'Certification', icon: 'fa-brands fa-react'},
  {item: 'Azure-900', type: 'Certification', icon: 'fa-brands fa-react'},
  {item: 'Azure-900', type: 'Certification', icon: 'fa-brands fa-react'}
];

@Component({
  selector: 'about',
  styleUrls: ['about.component.css'],
  templateUrl: 'about.component.html',
})
export class AboutComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    techs: TECHNOLOGIES,
  };
}
