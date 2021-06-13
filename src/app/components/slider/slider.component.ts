import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;
  @Output() conseguirAutor = new EventEmitter();
  public autor: any;

  constructor() {

    this.autor = {
      nombre: 'Pablo Moras',
      website: 'Noxdar',
      youtube: 'pablomprogram'
    };

   }

  ngOnInit(): void {
    
    $('.galeria').bxSlider({
      mode:'fade',
      captions: false,
      slideWidth: this.anchura
    });
  }

  lanzar(event){
    console.log(event);
    this.conseguirAutor.emit(this.autor);
   
  }

}
