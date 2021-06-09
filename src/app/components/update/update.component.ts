import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [ProjectService]
})
export class UpdateComponent implements OnInit {

  public url: string;
  public title: string;
  public status: string;
  public projectModel: Project;
  public project_updated;
  public filesToUpload: Array<File>;
  constructor(
    public _formBuilder: FormBuilder,
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _activatedRoute: ActivatedRoute
    ) { 
      this.title = "Editar proyecto";
      this.url = Global.url;
     
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      let id = params.id;
      this.getProject(id);
    })
  }

  getProject(id){
  	this._projectService.getProject(id).subscribe(
  		response => {
  			this.projectModel = response.project;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  onSubmit(){
    this._projectService.updateProject(this.projectModel).subscribe(
      response => {
          if(response.project){
          
          // Subir la imagen
          if(this.filesToUpload){
              this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
              .then((result:any) => {
                  this.project_updated = result.project;
                  this.status = 'success';
            });
          }else{
              this.project_updated = response.project;
              this.status = 'success';
          }
          
        }else{
          this.status = 'failed';
        }
        },
        error => {
          console.log(<any>error);
        }
      );
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
