import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimientoComponent } from './componentes/mantenimiento/mantenimiento.component';
import { MecanicoComponent } from './componentes/mecanico/mecanico.component';


const routes: Routes = [
  { path: 'administracion/mecanico', component: MecanicoComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
