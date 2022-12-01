import 'package:flutter/material.dart';

class DetailedProfileConfrontoEnvio extends StatelessWidget {
  final String? equipeUm;
  final String? equipeDois;
  final String? rodada;

  const DetailedProfileConfrontoEnvio(
      {required this.equipeUm, required this.equipeDois, required this.rodada});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Confronto'),
      ),
      body: Container(
          child: ListTile(
        title: Text(equipeUm!),
        subtitle: Text(equipeUm!),
      )),
    );
  }
}

class ProfileArgumentsConfrontoEnvio {
  final String? equipeUm;
  final String? equipeDois;
  final String? rodada;

  ProfileArgumentsConfrontoEnvio(
      {required this.equipeUm, required this.equipeDois, required this.rodada});
}
