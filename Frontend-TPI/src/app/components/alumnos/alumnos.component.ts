import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Block } from 'src/app/models/block';
import { BlockService } from 'src/app/services/block.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  formFiltro: FormGroup;
  Lista: Block[];

  constructor(public formBuilder: FormBuilder,
    private blockService: BlockService
    ) { }

  ngOnInit(): void {
    this.formFiltro = this.formBuilder.group({
      Legajo: [""],
      anio: [""],
      instancia: ['']      
    });

  }

  buscar(){
    let leg = this.formFiltro.value.legajo;
    let anio = this.formFiltro.value.anio;
    let inst = this.formFiltro.value.instancia;

    this.blockService.get(leg,inst,anio).subscribe((res:any)=>
    this.Lista = res
    )
  }

}
