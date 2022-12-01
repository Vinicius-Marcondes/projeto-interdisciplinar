import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_application/confronto/Confronto.dart';
import 'package:flutter_application/confronto/confronto_envio.dart';

String? equipeUm;
String? equipeDois;
String? rodada;
String? competicacao;

Future<Confronto>? _futureConfronto;
final TextEditingController _controller = TextEditingController();

class ProfileConfrontoEnvioSucesso extends StatefulWidget {
  const ProfileConfrontoEnvioSucesso({Key? key}) : super(key: key);
  @override
  ProfileConfrontoEnvioSucessoState createState() =>
      ProfileConfrontoEnvioSucessoState();
}

class ProfileConfrontoEnvioSucessoState
    extends State<ProfileConfrontoEnvioSucesso> {
  // Initial Selected Value
  String? equipeUm;
  String? equipeDois;

  // List of items in our dropdown menu

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Corrida de Carrinhos"),
        ),
        body: Center(
          child: Center(
            child: Text('Informações enviadas com sucesso!!!'),
          ),
        ));
  }
}

class DialogExample extends StatelessWidget {
  const DialogExample({super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () => showDialog<String>(
        context: context,
        builder: (BuildContext context) => AlertDialog(
          title: const Text('AlertDialog Title'),
          content: const Text('AlertDialog description'),
          actions: <Widget>[
            TextButton(
              onPressed: () => Navigator.pop(context, 'Cancel'),
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () => Navigator.pop(context, 'OK'),
              child: const Text('OK'),
            ),
          ],
        ),
      ),
      child: const Text('Show Dialog'),
    );
  }
}
