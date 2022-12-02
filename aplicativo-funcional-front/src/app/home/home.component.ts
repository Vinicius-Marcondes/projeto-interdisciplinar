import { AdnTournament } from '@adonsio/adn-tournament/lib/declarations/interfaces';
import { Component, OnInit } from '@angular/core';
import { CompeticaoService } from '@app/_services/competicao.service';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  constructor(private competicaoService: CompeticaoService) {}

  ngOnInit(): void {
    this.competicaoService
      .getByCompeticaoId('1')
      .pipe(first())
      .subscribe((chave) => {
        // chave.rounds.forEach((element) => {
        //   this.chaveamento.rounds.push(element);
        // });
        // console.log('asa');
        // console.log(JSON.stringify(this.chaveamento));
      });
  }

  chaveamento: AdnTournament = {
    rounds: [
      {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [
              {
                name: 'equipe_2',
                velocidade: 11.2,
                score: 45000,
                id_equipe: 2,
              },
            ],
          },
          {
            teams: [
              {
                name: 'equipe_2',
                velocidade: 11.2,
                score: 45000,
                id_equipe: 2,
              },
            ],
          },
        ],
      },
      {
        type: 'Final',
        matches: [
          {
            teams: [
              {
                name: 'equipe_1',
                velocidade: 12.2,
                score: 40000,
                id_equipe: 1,
              },
            ],
          },
        ],
      },
    ],
  };

  public handleClickEvent(name: string) {
    console.log('Team name clicked: ', name);
  }
}
