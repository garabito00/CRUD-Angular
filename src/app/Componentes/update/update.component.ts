import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RopaService } from 'src/app/Servicios/ropa.service';
import { Ropa } from 'src/app/Interface/ropa';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  //Inyeccion por dependencia del servicio, el formBuilder y router para la navegacion y un route para obtener el valor que se envia por parametro
  constructor(private service: RopaService, private fb: FormBuilder, private router: Router, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActualizarForm();
  }

  ropa: Ropa | any;
  ropaForm: any;

  //Metodo donde se captura el id enviado por parametro y se rellena el formulario con los datos del registro
  ActualizarForm(){
    let id = Number(this.aroute.snapshot.paramMap.get('id')); //Captura del valor enviado por parametro
    this.service.ReadOneRopa(id).subscribe((data)=> {
      this.ropa = data;

      this.ropaForm = this.fb.group({
        tipo: [data.tipo, Validators.required],
        size: [data.size, Validators.required],
        color: [data.color, Validators.required]
      });
    }); //llamada al servicio para buscar el registro que coincide con ese ID y se rellena el formulario con esa data

    this.ropaForm = this.fb.group({
      tipo: ['', Validators.required],
      size: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  //Metodo que se ejecuta cuando se envia el formulario
  onSubmit(){
    this.ropa.tipo = this.ropaForm.value.tipo;
    this.ropa.color = this.ropaForm.value.color;
    this.ropa.size = this.ropaForm.value.size;

    this.service.UpdateRopa(this.ropa.id, this.ropa).subscribe(); //Llamada al servicio para actualizar un registro en el backend
    this.router.navigate(['/home']); //Nos devuelve al componente Home
  }
}
