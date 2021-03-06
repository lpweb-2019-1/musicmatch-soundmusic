import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  search = null

  constructor(private disco: DiscoService) { }

  ngOnInit() {
    this.disco.pesquisar(this.search)

  }

}
