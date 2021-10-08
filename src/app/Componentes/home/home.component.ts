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
    
    let prom = this.service.ReadRopas();

    prom.then((res) => {
      this.ropa = res;
    }, (err) =>{
      this.ropa = null;
    });

  }

  //Metodo para eliminar un registro de la vista y del backEnd
  eliminar(id: number){

    let prom = this.service.DeleteRopa(id);
    prom.then((res)=>{
      console.log(res);
      this.MostarRopa(); //Metodo para refrescar la lista cuando se elimine un registro
    });
    
  }
}
