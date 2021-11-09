import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  regioes: any[] = [];

  constructor(private pkmServ: PokemonService) {

  }

  ngOnInit() {
    this.pkmServ.buscarRegioes()
    .subscribe(e => {
      this.regioes = e.results;
    })
  }

}
