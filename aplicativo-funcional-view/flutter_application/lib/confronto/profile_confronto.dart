import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:async';
import 'package:flutter_application/confronto/Confronto.dart';
import 'package:flutter_application/count_up_timer_page.dart';
import 'package:flutter_application/slalom/profile.dart';

Future<Confronto>? _futureConfronto;
final TextEditingController _controller = TextEditingController();

// TODO: Adicionar endpoint pra pegar equipes
var items = [
  'teste1',
  'teste2',
  'teste5',
  'teste3',
];

TextEditingController rodadaController = new TextEditingController();
TextEditingController competicacaoController = new TextEditingController();
String? equipeUmPassar;
String? equipeDoisPassar;
String rodadaPassar = "";
String competicacaoPassar = "";

class ProfileConfronto extends StatefulWidget {
  @override
  ProfileConfrontoState createState() => ProfileConfrontoState();
}

class ProfileConfrontoState extends State<ProfileConfronto> {
  // Initial Selected Value

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
              value: equipeUmPassar,
              hint: const Text(
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
                  equipeUmPassar = newValue!;
                });
              },
            ),
            DropdownButton(
              // Initial Value
              value: equipeDoisPassar,
              hint: const Text(
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
                  equipeDoisPassar = newValue!;
                });
              },
            ),
            const SizedBox(
              height: 15, // <-- SEE HERE
            ),
            TextField(
                controller: rodadaController,
                maxLength: 2,
                keyboardType: TextInputType.number,
                inputFormatters: <TextInputFormatter>[
                  FilteringTextInputFormatter.digitsOnly
                ],
                decoration: const InputDecoration(
                  border: UnderlineInputBorder(),
                  labelText: 'Digite qual rodada é',
                )),
            const SizedBox(
              height: 15, // <-- SEE HERE
            ),
            TextField(
                maxLength: 2,
                keyboardType: TextInputType.number,
                controller: competicacaoController,
                inputFormatters: <TextInputFormatter>[
                  FilteringTextInputFormatter.digitsOnly
                ],
                decoration: const InputDecoration(
                  border: UnderlineInputBorder(),
                  labelText: 'Digite qual competição é',
                )),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  rodadaPassar = rodadaController.text;
                  competicacaoPassar = competicacaoController.text;
                });
                // ignore: unnecessary_new
                /*
                var route = new MaterialPageRoute(
                    // ignore: unnecessary_new
                    builder: (BuildContext context) => new CountUpTimerPage(
                          competicacaoRecebido: competicacaoController.text,
                          equipeUmRecebido: equipeUmPassar!,
                          equipeDoisRecebido: equipeDoisPassar!,
                          rodadaRecebido: rodadaController.text,
                        ));
                Navigator.of(context).push(route);
                */
                CountUpTimerPage.navigatorPush(context);
              },
              child: const Text('Enviar informações'),
            ),
          ],
        ),
      ),
    );
  }
}
