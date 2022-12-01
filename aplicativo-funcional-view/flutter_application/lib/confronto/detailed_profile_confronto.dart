import 'package:flutter/material.dart';

class DetailedProfileConfronto extends StatelessWidget {
  final String name;
  final String email;

  const DetailedProfileConfronto({required this.name, required this.email});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Confronto'),
      ),
      body: Container(
          child: ListTile(
        title: Text(name),
        subtitle: Text(email),
      )),
    );
  }
}

class ProfileArgumentsConfronto {
  final String name;
  final String email;

  ProfileArgumentsConfronto({required this.name, required this.email});
}
