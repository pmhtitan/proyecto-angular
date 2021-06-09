import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Global } from '../../services/global';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  projectID: any;
  projectSelected: Project;
  url: string;
  public confirm: boolean;


  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _projectService: ProjectService,
    private _router: Router
  ) {
    this.url = Global.url;
    this.projectID = _activatedRoute.snapshot.paramMap.get('id');
    this.confirm = false;

    this._projectService.getProject(this.projectID).subscribe(res=>{
      console.log(res);
      this.projectSelected = res.project;
      console.log(this.projectSelected);
    });
   }

  ngOnInit(): void {
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  removeProject(id){
    this._projectService.removeProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['/proyectos']);
        }
      }, 
      error => {
        console.log(<any>error);
      }
    );
  }
}
