import 'package:flutter/material.dart';

class DetailedProfile extends StatelessWidget {
  final String name;
  final String email;

  const DetailedProfile({required this.name, required this.email});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Slalom'),
      ),
      body: Container(
          child: ListTile(
        title: Text(name),
        subtitle: Text(email),
      )),
    );
  }
}

class ProfileArguments {
  final String name;
  final String email;

  ProfileArguments({required this.name, required this.email});
}
