import 'package:flutter/material.dart';
import 'package:flutter_application/widgets/nav-drawer.dart';
import 'package:flutter_application/slalom/profile.dart';
import 'package:flutter_application/slalom/detailed_profile.dart';
import 'package:flutter_application/confronto/profile_confronto.dart';
import 'package:flutter_application/confronto/profile_confronto_envio.dart';
import 'package:flutter_application/confronto/detailed_profile_confronto.dart';
import 'package:flutter_application/confronto/detailed_profile_confronto_envio.dart';
import 'package:flutter_application/confronto/profile_confronto_sucesso.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Competição de carrinho',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: {
        '/': (context) => MyHomePage(),
        '/profile': (context) => Profile(),
        '/profile_confronto': (context) => ProfileConfronto(),
        '/profile_confronto_envio': (context) => ProfileConfrontoEnvio(),
        '/profile_confronto_sucesso': (context) =>
            ProfileConfrontoEnvioSucesso()
      },
      onGenerateRoute: (settings) {
        if (settings.name == '/detailed-profile') {
          ProfileArguments args = settings.arguments as ProfileArguments;
          return MaterialPageRoute(
              builder: (context) => DetailedProfile(
                    name: args.name,
                    email: args.email,
                  ));
        }
        return null;
      },
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: NavDrawer(),
      appBar: AppBar(
        title: Text('Corrida de carrinhos'),
      ),
      body: Center(
        child: (Image.network(
          'https://i.imgur.com/J0Cd4fF.jpg',
        )),
      ),
    );
  }
}
