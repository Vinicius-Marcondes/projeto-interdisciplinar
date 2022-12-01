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

class ProfileConfrontoEnvio extends StatefulWidget {
  const ProfileConfrontoEnvio({Key? key}) : super(key: key);
  @override
  ProfileConfrontoEnvioState createState() => ProfileConfrontoEnvioState();
}

class ProfileConfrontoEnvioState extends State<ProfileConfrontoEnvio> {
  // Initial Selected Value
  String? equipeUm;
  String? equipeDois;

  // List of items in our dropdown menu
  var items = [
    'Relampago marquinhos',
    'HotWheels',
    'Run to the hills',
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Confronto"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            DropdownButton(
              // Initial Value
              value: equipeUm,
              hint: Text(
                'Escolha a primeira equipe',
                style: TextStyle(
                  fontSize: 14,
                ),
              ),
              // Down Arrow Icon
              icon: const Icon(Icons.keyboard_arrow_down),

              // Array list of items
              items: items.map((String items) {
                return DropdownMenuItem(
                  value: items,
                  child: Text(items),
                );
              }).toList(),
              // After selecting the desired option,it will
              // change button value to selected value
              onChanged: (String? newValue) {
                setState(() {
                  equipeUm = newValue!;
                });
              },
            ),
            DropdownButton(
              // Initial Value
              value: equipeDois,
              hint: Text(
                'Escolha a segunda equipe',
                style: TextStyle(
                  fontSize: 14,
                ),
              ),
              // Down Arrow Icon
              icon: const Icon(Icons.keyboard_arrow_down),

              // Array list of items
              items: items.map((String items) {
                return DropdownMenuItem(
                  value: items,
                  child: Text(items),
                );
              }).toList(),
              // After selecting the desired option,it will
              // change button value to selected value
              onChanged: (String? newValue) {
                setState(() {
                  equipeDois = newValue!;
                });
              },
            ),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  /*
                  _futureConfronto =
                      createConfronto(_controller.text, equipeUm!);
                      */
                  AlertDialog(
                    title: Text("Sucesso!"),
                    content: Text("Informações enviadas com sucesso"),
                    actions: [
                      FloatingActionButton(
                        onPressed: () {
                          Navigator.pop(context);
                          Navigator.pushNamed(context, '/profile_confronto');
                        },
                      ),
                    ],
                  );
                });
              },
              child: const Text('Enviar informações'),
            ),
          ],
        ),
      ),
    );
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
