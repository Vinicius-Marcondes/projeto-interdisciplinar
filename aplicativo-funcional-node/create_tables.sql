create table competicao
(
    id     int primary key auto_increment,
    titulo varchar(256) not null
);

create table participante
(
    id   int primary key auto_increment,
    nome varchar(255) NOT NULL
);

create table equipe
(
    id         int primary key auto_increment,
    nome       varchar(255) not null,
    icone      text,
    numero varchar(3),
    penalidade float DEFAULT NULL
);



create table confronto
(
    id        int primary key auto_increment,
    competicao_id       int not null,
    id_equipe_1                int not null,
    id_equipe_2                int not null,
    tempo_equipe_1      int,
    tempo_equipe_2      int,
    velocidade_equipe_1 float,
    velocidade_equipe_2 float,
    rodada              int,
    foreign key (competicao_id) references competicao (id)
);

create table slalon
(
    id            int primary key auto_increment,
    competicao_id int not null,
    equipe_id     int,
    tempo         int,
    penalidade    int,
    foreign key (competicao_id) references competicao (id),
    foreign key (equipe_id) references equipe (id)
);

create table participante_equipe
(
    equipe_id       int DEFAULT NULL,
    participante_id int NOT NULL,
    foreign key (equipe_id) references equipe (id),
    foreign key (participante_id) references participante (id)
);

create table equipe_competicao
(
    equipe_id     int not null,
    competicao_id int not null,
    foreign key (equipe_id) references equipe (id),
    foreign key (competicao_id) references competicao (id)
);
