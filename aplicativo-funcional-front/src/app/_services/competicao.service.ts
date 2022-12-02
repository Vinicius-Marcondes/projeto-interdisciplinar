import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { AdnTournament } from '@adonsio/adn-tournament/lib/declarations/interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const baseUrl = `${environment.apiUrl}/competicao`;

@Injectable({ providedIn: 'root' })
export class CompeticaoService {
  constructor(private http: HttpClient) {}

  getByCompeticaoId(id: string): Observable<AdnTournament> {
    return this.http
      .get<any[]>(`${baseUrl}/chaves/${id}`)
      .pipe(map(this.transformJsonToChaves));
  }

  transformJsonToChaves(json: any): AdnTournament {
    return {
      rounds: json.rounds,
    };
  }
}
