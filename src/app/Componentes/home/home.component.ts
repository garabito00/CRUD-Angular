import { Component, OnInit } from '@angular/core';
import { RopaService } from 'src/app/Servicios/ropa.service';
import { Ropa } from 'src/app/Interface/ropa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Inyectamos por dependencia el servicio
  constructor(private service: RopaService) { }

  ngOnInit(): void {
    this.MostarRopa();
  }

  ngAfterViewInit(){
    this.MostarRopa(); //Llamar al BackEnd para refrescar la lista
  }

  ropa: Ropa | any;

  //Metodo que muestra la lista de Ropas que viene del BackEnd
  MostarRopa(){  
    this.service.ReadRopas().subscribe((data: Ropa)=> {
      this.ropa = data;
    }); //Llamada al metodo en el servicio para traer las ropas y pasarlas a la vista
  }

  //Metodo para eliminar un registro de la vista y del backEnd
  eliminar(id: number){
    this.service.DeleteRopa(id).subscribe(() => { 
      this.ropa = null;
      this.MostarRopa(); //Metodo para refrescar la lista cuando se elimine un registro
    }); //llamara al metodo del servicio para eliminar un registro del BackEnd
  }
}
