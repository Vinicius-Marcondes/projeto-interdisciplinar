import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Participante } from '@app/_models';
import { LinkParticipanteEquipe } from '@app/_models/linkParticipanteEquipe';

const baseUrl = `${environment.apiUrl}/participante`;

@Injectable({ providedIn: 'root' })
export class ParticipantesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Participante[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<Participante>(`${baseUrl}/${id}`);
  }

  getLinkByEquipeId(id: string) {
    return this.http.get<LinkParticipanteEquipe[]>(`${baseUrl}/equipe/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
    params.id = id;
    return this.http.patch(`${baseUrl}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
