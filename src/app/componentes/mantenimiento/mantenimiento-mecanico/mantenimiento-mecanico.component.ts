import { Component, OnInit } from '@angular/core';
import { MecanicoService } from '../../mecanico/mecanico.service';

@Component({
  selector: 'app-mantenimiento-mecanico',
  templateUrl: './mantenimiento-mecanico.component.html'
})
export class MantenimientoMecanicoComponent implements OnInit {

  mecanicos: []=[];
  seleccion:any=null;
  constructor(private mecanicoServicio: MecanicoService) { }

  ngOnInit(): void {
    this.mecanicoServicio.consultaMecanicosAsignar().subscribe(resp => this.mecanicos = resp.contenido);
  }

  onSeleccionar(mecanico:any){
    console.log(mecanico);
    this.seleccion= mecanico;
  }
}
