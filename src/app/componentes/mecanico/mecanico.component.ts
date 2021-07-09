import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { MecanicoService } from './mecanico.service';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html'
})
export class MecanicoComponent implements OnInit {

  formulario: FormGroup;
  submitted = false;

  constructor(private servicio: MecanicoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        tipoDocumento: ['', Validators.required], 
        documento: ['', Validators.required],  
        primerNombre: ['', Validators.required],    
        primerApellido: ['', Validators.required], 
        segundoNombre: ['', Validators.required],   
        segundoApellido: ['', Validators.required],      
        email: ['', [Validators.required, Validators.email]],
        direccion: ['', Validators.required],
        celular: ['', Validators.required]
    });
  }

  get f() { return this.formulario.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.formulario.invalid) {
        return;
    }

    console.log(this.formulario.value);
    let observable: Observable<{ contenido: any, estado: string }>;
    observable = this.servicio.crearMecanico(this.formulario.value)
    observable.subscribe({
        next: resp => {
          if (resp.estado === 'OK') {
            console.log("ok");
         
          } else {
            console.log("error");
          }
        }
      });
    }
}
