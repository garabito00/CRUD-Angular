import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RopaService } from 'src/app/Servicios/ropa.service';
import { Ropa } from 'src/app/Interface/ropa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //Inyeccion por dependencia del servicio, el formBuilder y router para la navegacion
  constructor(private service: RopaService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.CrearForm();
  }

  ropaForm: any;

  //Metodo para crear los campos que captura del formulario
  CrearForm(){
    this.ropaForm = this.fb.group({
      tipo: ['', Validators.required],
      size: ['', Validators.required],
      color: ['', Validators.required]
    })
  }

  //Metodo que de ejecuta cuando se envia el formulario
  onSubmit(){
    let ropa:Ropa = {
      id: 0,
      tipo: this.ropaForm.value.tipo,
      size: this.ropaForm.value.size,
      color: this.ropaForm.value.color,
      estatus: 'A'
    };
    
    let prom = this.service.PostRopa(ropa);
    
    prom.then((res)=>{
      console.log(res);
    });
    
    this.router.navigate(['/home']); //Navegacion al componente Home
  }
}
