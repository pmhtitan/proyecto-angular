import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public projectModel: Project;
  public projectForm2: FormGroup;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    public _formBuilder: FormBuilder,
    private _projectService: ProjectService,
    private _uploadService: UploadService
    ){ 
      this.title = "Crear proyecto";
      this.projectModel = new Project('','','','',2021,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){

    // Guardar los datos
    this._projectService.addProject(this.projectModel).subscribe(
      response => {
        if(response.project){

          // Subir la imagen
          this._uploadService.makeFileRequest(Global.url+"uploadImage/"+response.project._id, [], this.filesToUpload, 'image')
            .then((result:any) => {

              console.log(result);

              this.status = "success";
              form.reset();
          });

        }else{
          this.status = "failed";
        }
        /* this.status = (response.project) ? true : false;  */
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
