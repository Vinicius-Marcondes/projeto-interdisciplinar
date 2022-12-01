import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_application/confronto/Confronto.dart';

Future<Confronto> createConfronto(
    String equipeUm,
    String equipeDois,
    String rodada,
    String competicao,
    String tempo_equipe_1,
    String tempo_equipe_2) async {
  final response = await http.post(
    //Uri.parse('https://jsonplaceholder.typicode.com/albums'),
    //Uri.parse('http://aplicativo-funcional-node.brazilsouth.cloudapp.azure.com:6080/espectador'),
    Uri.parse('http://191.235.126.189:6080/confronto'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: jsonEncode(<String, String>{
      'id_equipe_1': equipeUm,
      'id_equipe_2': equipeDois,
      'competicao_id': competicao,
      'tempo_equipe_1': tempo_equipe_1,
      'tempo_equipe_2': tempo_equipe_2,
      'velocidade_equipe_1': "1.2",
      'velocidade_equipe_2': "1.2",
      'rodada': rodada
    }),
  );

  if (response.statusCode == 201) {
    // If the server did return a 201 CREATED response,
    // then parse the JSON.
    return Confronto.fromJson(jsonDecode(response.body));
  } else {
    // If the server did not return a 201 CREATED response,
    // then throw an exception.
    throw Exception('Deu ruim.');
  }
}
