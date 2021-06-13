import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public textInputAnchura: number;
  public anchuraFinal: number;
  public autor: any;

  constructor() { }

  ngOnInit(): void {

  }

  cargarSlider() {
    this.anchuraFinal = null;
    setTimeout(() => {
      console.log('carga');
      this.anchuraFinal = this.textInputAnchura;
    }, 1);
  }

  getAutor(event){
    this.autor = event;
  }

}
