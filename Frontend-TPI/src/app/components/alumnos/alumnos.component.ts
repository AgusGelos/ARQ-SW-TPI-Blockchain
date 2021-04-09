import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Block } from 'src/app/models/block';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  FormFiltro: FormGroup;
  Lista: Block[];

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.FormFiltro = this.formBuilder.group({
      Legajo: [""],
      anio: [""],
      instancia: ['']      
    });

  }

  buscar(){
    

  }

}
