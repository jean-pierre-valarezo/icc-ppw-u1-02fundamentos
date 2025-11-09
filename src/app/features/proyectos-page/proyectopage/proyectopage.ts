import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-proyectos-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Proyectos</h1>

    <section>
      <div>
        <h3>Agregar proyecto</h3>
        <h4>Proyecto a agregar {{ name() }}</h4>
        <input
          type="text"
          placeholder="Nombre del proyecto"
          [value]="name()"
          (input)="changeName(txtName.value)"
          #txtName
        />
        <input
          type="text"
          placeholder="Descripcion del proyecto"
          [value]="description()"
          (input)="changeDescription(txtDescription.value)"
          #txtDescription
        />
        <button (click)="addProyecto()">Agregar</button>
      </div>

      <div>
        <h3>Listado</h3>
        <ul>
          <li *ngFor="let proyecto of proyectos()">{{ proyecto.nombre }} - {{ proyecto.descripcion }}</li>
        </ul>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage { 

  name = signal('');
  description = signal('');
  proyectos = signal<Proyecto[]>([
    { id: 1, nombre: 'Proyecto 1', descripcion: 'Descripción del proyecto 1' }
  ]);

  changeName(value: string) {
    this.name.set(value);
  }
  
  changeDescription(value: string) {
    this.description.set(value);
  }

  addProyecto() {
    const nuevosProyectos = [...this.proyectos()];
    const newProyecto: Proyecto = {
      id: nuevosProyectos.length + 1,
      nombre: this.name(),
      descripcion: this.description()
    };
    nuevosProyectos.push(newProyecto);
    this.proyectos.set(nuevosProyectos);
    this.name.set('');
    this.description.set('');
  }
}