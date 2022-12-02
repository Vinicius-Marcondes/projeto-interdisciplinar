import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Equipe } from '@app/_models';

const baseUrl = `${environment.apiUrl}/equipe`;

@Injectable({ providedIn: 'root' })
export class EquipesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Equipe[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<Equipe>(`${baseUrl}/${id}`);
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

  linkarParticipanteComEquipe(params: any) {
    return this.http.post(`${baseUrl}/vinculaParticipanteEquipe`, params);
  }
}
