export class Confronto {
    private id_confronto: number;
    private competicao_id: number;
    private id_equipe_1: number;
    private id_equipe_2: number;
    private tempo_equipe_1: number;
    private tempo_equipe_2: number;
    private velocidade_equipe_1: number;
    private velocidade_equipe_2: number;
    private rodada: number;

    constructor(id_confronto: number, competicao_id:number, id_equipe_1: number, id_equipe_2: number, tempo_equipe_1: number, tempo_equipe_2: number, velocidade_equipe_1: number, velocidade_equipe_2: number, rodada: number) {
        this.id_confronto = id_confronto;
        this.competicao_id = competicao_id;
        this.id_equipe_1 = id_equipe_1;
        this.id_equipe_2 = id_equipe_2;
        this.tempo_equipe_1 = tempo_equipe_1;
        this.tempo_equipe_2 = tempo_equipe_2;
        this.velocidade_equipe_1 = velocidade_equipe_1;
        this.velocidade_equipe_2 = velocidade_equipe_2;
        this.rodada = rodada;
    }
}