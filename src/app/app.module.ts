import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';
import { MecanicoComponent } from './componentes/mecanico/mecanico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MecanicoService } from './componentes/mecanico/mecanico.service';
import { HttpClientModule } from '@angular/common/http';
import { MantenimientoMecanicoComponent } from './componentes/mantenimiento/mantenimiento-mecanico/mantenimiento-mecanico.component';
import { MantenimientoVehiculoComponent } from './componentes/mantenimiento/mantenimiento-vehiculo/mantenimiento-vehiculo.component';
import { MantenimientoServiciosComponent } from './componentes/mantenimiento/mantenimiento-servicios/mantenimiento-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    MantenimientoComponent,
    MecanicoComponent,
    MantenimientoMecanicoComponent,
    MantenimientoVehiculoComponent,
    MantenimientoServiciosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MecanicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
