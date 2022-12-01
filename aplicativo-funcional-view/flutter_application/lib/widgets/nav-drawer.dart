import 'package:flutter/material.dart';

import 'package:flutter_application/slalom/profile.dart';
import 'package:flutter_application/confronto/profile_confronto.dart';

class NavDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            child: Text(
              'Competição',
              style: TextStyle(color: Colors.white, fontSize: 25),
            ),
            decoration: BoxDecoration(
                color: Colors.green,
                image: DecorationImage(
                    fit: BoxFit.fill,
                    image: AssetImage('assets/images/cover.jpg'))),
          ),
          ListTile(
            leading: Icon(Icons.speed),
            title: Text('Confronto'),
            onTap: () {
              Navigator.pop(context);
              Navigator.pushNamed(context, '/profile_confronto');
            },
          ),
          ListTile(
            leading: Icon(Icons.traffic),
            title: Text('Slalom'),
            onTap: () {
              Navigator.pop(context);
              Navigator.pushNamed(context, '/profile');
            },
          ),
        ],
      ),
    );
  }
}
