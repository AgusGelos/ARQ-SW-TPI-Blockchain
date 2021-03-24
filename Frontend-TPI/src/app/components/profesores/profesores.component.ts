import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Block } from 'src/app/models/block';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  formNota: FormGroup;
  submitted = false;
  block: Block;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.formNota = this.formBuilder.group({
      nota:['',[Validators.required, Validators.pattern('[0-9]{1}|[10]')]],
      legajo: ['',[Validators.required, Validators.pattern('[0-9]*')]],
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(55) ,Validators.pattern('[a-zA-z ]*')]],
      apellido: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(55), Validators.pattern('[a-zA-z ]*')]],
      anno:['',[Validators.required, Validators.pattern('[0-9]*')]],
      numero:['',[Validators.required, Validators.pattern('[0-9]*')]],
      tipo: ['',[Validators.required,Validators.minLength(4), Validators.maxLength(55), Validators.pattern('[a-zA-z ]*')]]
      
    })
  }

  guardar(){
    this.submitted = true;
    if(this.formNota.invalid){
      return
    }
    this.block = new Block();
    this.block.nombre = this.formNota.value.nombre;
    this.block.apellido = this.formNota.value.apellido;
    this.block.legajo = this.formNota.value.legajo;
    this.block.nota = this.formNota.value.nota;
    this.block.anno = this.formNota.value.anno;
    this.block.numero = this.formNota.value.numero;
    this.block.tipo = this.formNota.value.tipo;


  }
  reiniciar(){}
}
