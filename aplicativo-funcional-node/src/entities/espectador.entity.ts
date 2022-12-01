export class Espectador {
    private id: number;
    private nome: string;
    private id_equipe?: number | null;
    private hora_server: Date;
    private hora_client: Date;

    constructor(id: number, nome: string, id_equipe: number | null = null, hora_client: Date) {
        this.id = id;
        this.nome = nome;
        this.id_equipe = id_equipe;
        this.hora_server = new Date();
        this.hora_client = hora_client;
    }
}