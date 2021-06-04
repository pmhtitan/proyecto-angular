import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public url: string;

  constructor(private _projectService: ProjectService ) { }

  ngOnInit(): void {
      this.getProjects();
      this.url = Global.url;
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.log(error);
      }
    );

    /* this._projectService.getProjects().subscribe(res =>{
      this.projects = res.projects;
    }); */
  }

}
