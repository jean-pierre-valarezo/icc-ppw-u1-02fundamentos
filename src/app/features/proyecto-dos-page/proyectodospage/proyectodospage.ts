import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
@Component({
  selector: 'app-proyectodospage',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './proyectodospage.html',
  styles: [`
    nav {
      background-color: #159;
      padding: 1rem;
      overflow: hidden;
    }
    a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      font-weight: bold;
    }
    a.active {
      color: yellow;
      text-decoration: underline;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proyectodospage { }
