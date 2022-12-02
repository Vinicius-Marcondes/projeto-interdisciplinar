import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { Role } from '@app/_models';

// array mantido no localstorage do browser
const usersKey = 'utp-crud-equipes';
const usersJSON = localStorage.getItem(usersKey);
let users: any[] = usersJSON
  ? JSON.parse(usersJSON)
  : [
      {
        id: 1,
        title: 'Mr',
        firstName: 'Joe',
        lastName: 'Bloggs',
        email: 'joe@bloggs.com',
        role: Role.User,
        password: 'joe123',
      },
    ];

const participantesKey = 'utp-crud-participantes';
const participantesJSON = localStorage.getItem(participantesKey);
let participantes: any[] = participantesJSON
  ? JSON.parse(participantesJSON)
  : [
      {
        id: 1,
        id_equipe: 1,
        nome: 'Mr',
      },
    ];

const equipesKey = 'utp-crud-equipes';
const equipesJSON = localStorage.getItem(equipesKey);
let equipes: any[] = equipesJSON
  ? JSON.parse(equipesJSON)
  : [
      {
        id: 1,
        nome: 'Velozes anônimos',
        icone: '',
        numero: '',
        penalidade: 0,
      },
    ];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        // Equipes
        // case url.endsWith('/equipe') && method === 'GET':
        //   return getEquipes();
        // case url.match(/\/equipe\/\d+$/) && method === 'GET':
        //   return getEquipeById();
        // case url.endsWith('/equipe') && method === 'POST':
        //   return createEquipe();
        // case url.match(/\/equipe\/\d+$/) && method === 'PUT':
        //   return updateEquipe();
        // case url.match(/\/equipe\/\d+$/) && method === 'DELETE':
        //   return deleteEquipe();
        // // Participantes
        // case url.endsWith('/participante') && method === 'GET':
        //   return getParticipantes();
        // case url.match(/\/participante\/equipe\/\d+$/) && method === 'GET':
        //   return getParticipanteByEquipeId();
        // case url.match(/\/participante\/\d+$/) && method === 'GET':
        //   return getParticipanteById();
        // case url.endsWith('/participante') && method === 'POST':
        //   return createParticipante();
        // case url.match(/\/participante\/\d+$/) && method === 'PUT':
        //   return updateParticipante();
        // case url.match(/\/participante\/\d+$/) && method === 'DELETE':
        //   return deleteParticipante();
        // Usuários
        // case url.endsWith('/users') && method === 'GET':
        //   return getUsers();
        // case url.match(/\/users\/\d+$/) && method === 'GET':
        //   return getUserById();
        // case url.endsWith('/users') && method === 'POST':
        //   return createUser();
        // case url.match(/\/users\/\d+$/) && method === 'PUT':
        //   return updateUser();
        // case url.match(/\/users\/\d+$/) && method === 'DELETE':
        //   return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // rotas
    // Equipes
    function getEquipes() {
      return ok(equipes.map((x) => basicEquipeDetails(x)));
    }

    function getEquipeById() {
      const equipe = equipes.find((x) => x.id === idFromUrl());
      return ok(basicEquipeDetails(equipe));
    }

    function createEquipe() {
      const equipe = body;

      if (equipes.find((x) => x.nome === equipe.nome)) {
        return error(`Equipe com o nome ${equipe.nome} já existe`);
      }

      equipe.id = newEquipeId();
      equipes.push(equipe);
      localStorage.setItem(equipesKey, JSON.stringify(equipes));

      return ok();
    }

    function updateEquipe() {
      let params = body;
      let equipe = equipes.find((x) => x.id === idFromUrl());

      if (
        params.nome !== equipe.nome &&
        equipes.find((x) => x.nome === params.nome)
      ) {
        return error(`Equipe com o nome ${params.nome} já existe`);
      }

      // atualizar o salvar equipe
      Object.assign(equipe, params);
      localStorage.setItem(equipesKey, JSON.stringify(equipes));

      return ok();
    }

    function deleteEquipe() {
      equipes = equipes.filter((x) => x.id !== idFromUrl());
      localStorage.setItem(usersKey, JSON.stringify(equipes));
      return ok();
    }

    // Participantes
    function getParticipantes() {
      return ok(participantes.map((x) => basicParticipanteDetails(x)));
    }

    function getParticipanteById() {
      const participante = participantes.find((x) => x.id === idFromUrl());
      return ok(basicParticipanteDetails(participante));
    }

    function getParticipanteByEquipeId() {
      const _participantes = participantes.filter(
        (f) => f.id_equipe == idFromUrl()
      );

      return ok(_participantes);
    }

    function createParticipante() {
      const participante = body;

      if (
        participantes.find(
          (x) =>
            x.nome === participante.nome &&
            x.id_equipe === participante.id_equipe
        )
      ) {
        return error(`Equipe já contém um membro com esse nome.`);
      }

      participante.id = newParticipanteId();
      participantes.push(participante);
      localStorage.setItem(participantesKey, JSON.stringify(participantes));

      return ok();
    }

    function updateParticipante() {
      let params = body;
      let participante = participantes.find((x) => x.id === idFromUrl());

      if (
        params.nome !== participante.nome &&
        participantes.find(
          (x) => x.nome === params.nome && x.id_equipe == params.id_equipe
        )
      ) {
        return error(`Equipe já contém um membro com esse nome`);
      }

      // atualizar o salvar equipe
      Object.assign(participante, params);
      localStorage.setItem(participantesKey, JSON.stringify(participantes));

      return ok();
    }

    function deleteParticipante() {
      participantes = participantes.filter((x) => x.id !== idFromUrl());
      localStorage.setItem(participantesKey, JSON.stringify(participantes));
      return ok();
    }

    // Usuários
    function getUsers() {
      return ok(users.map((x) => basicDetails(x)));
    }

    function getUserById() {
      const user = users.find((x) => x.id === idFromUrl());
      return ok(basicDetails(user));
    }

    function createUser() {
      const user = body;

      if (users.find((x) => x.email === user.email)) {
        return error(`User with the email ${user.email} already exists`);
      }

      // assign user id and a few other properties then save
      user.id = newUserId();
      delete user.confirmPassword;
      users.push(user);
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok();
    }

    function updateUser() {
      let params = body;
      let user = users.find((x) => x.id === idFromUrl());

      if (
        params.email !== user.email &&
        users.find((x) => x.email === params.email)
      ) {
        return error(`User with the email ${params.email} already exists`);
      }

      // only update password if entered
      if (!params.password) {
        delete params.password;
      }

      // update and save user
      Object.assign(user, params);
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok();
    }

    function deleteUser() {
      users = users.filter((x) => x.id !== idFromUrl());
      localStorage.setItem(usersKey, JSON.stringify(users));
      return ok();
    }

    // helper

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500)); // delay observable to simulate server api call
    }

    function error(message: any) {
      return throwError({ error: { message } }).pipe(
        materialize(),
        delay(500),
        dematerialize()
      ); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }

    function basicDetails(user: any) {
      const { id, title, firstName, lastName, email, role } = user;
      return { id, title, firstName, lastName, email, role };
    }

    function basicEquipeDetails(equipe: any) {
      const { id, nome, icone, penalidade, numero } = equipe;
      return { id, nome, icone, penalidade, numero };
    }

    function basicParticipanteDetails(participante: any) {
      const { id, id_equipe, nome } = participante;
      return { id, id_equipe, nome };
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }

    function newUserId() {
      return users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
    }

    function newEquipeId() {
      return equipes.length ? Math.max(...equipes.map((x) => x.id)) + 1 : 1;
    }

    function newParticipanteId() {
      return participantes.length
        ? Math.max(...participantes.map((x) => x.id)) + 1
        : 1;
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
