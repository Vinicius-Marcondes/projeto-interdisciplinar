class Confronto {
  final String? equipe_um;
  final String? equipe_dois;
  final String? rodada;
  final String? competicao;
  final String? tempo_equipe_um;
  final String? tempo_equipe_dois;

  const Confronto(
      {required this.equipe_um,
      required this.equipe_dois,
      required this.competicao,
      required this.rodada,
      required this.tempo_equipe_dois,
      required this.tempo_equipe_um});

  factory Confronto.fromJson(Map<String, dynamic> json) {
    return Confronto(
        equipe_um: json['equipe_um'],
        equipe_dois: json['equipe_dois'],
        competicao: json['competicao'],
        rodada: json['rodada'],
        tempo_equipe_um: json['tempo_equipe_um'],
        tempo_equipe_dois: json['tempo_equipe_dois']);
  }
}
