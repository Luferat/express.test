DROP DATABASE IF EXISTS things;
CREATE DATABASE things CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE things;

CREATE TABLE users (
    uid INT PRIMARY KEY AUTO_INCREMENT,
    udate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    uname VARCHAR(255),
    uemail VARCHAR(255),
    upassword VARCHAR(127),
    uavatar VARCHAR(255),
    ubirth DATE,
    ustatus ENUM('on', 'off', 'del') DEFAULT 'on'
);

CREATE TABLE things (
    tid INT PRIMARY KEY AUTO_INCREMENT,
    tdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tuser INT,
    tname VARCHAR(255),
    tphoto VARCHAR(255),
    tdescription TEXT,
    tlocation VARCHAR(127),
    toptions TEXT,
    tstatus ENUM('on', 'off', 'del') DEFAULT 'on',
    FOREIGN KEY (tuser) REFERENCES users (uid)
);

INSERT INTO users VALUES 
( '1', '2022-08-14 12:13:45', 'Joca da Silva', 'jocasilva@gmail.com', SHA1('Senha_123'), 'https://randomuser.me/api/portraits/men/12.jpg', '2000-12-04', 'on' ),
( '2', '2022-11-21 19:18:37', 'Marineuza Siriliano', 'marineuza@gamil.com', SHA1('Senha_123'), 'https://randomuser.me/api/portraits/women/12.jpg', '2005-01-14', 'on' ),
( '3', '2023-01-04 16:45:38', 'Setembrino trocatapas', 'setbrino@gmail.com', SHA1('Senha_123'), 'https://randomuser.me/api/portraits/men/17.jpg', '1988-07-24', 'on' );

INSERT INTO things VALUES
(
    '1',
    '2020-05-18 14:34:44',
    '1',
    'Bicicleta',
    'https://picsum.photos/200',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed imperdiet tellus. Suspendisse congue euismod tincidunt.',
    'Garagem',
    '{"estado": "péssimo", "cor": "vermelha", "marca": "Monark"}',
    'on'
), (
    '2',
    '2020-05-20 11:22:33',
    '1',
    'Barbeador',
    'https://picsum.photos/201',
    'Curabitur et turpis sodales libero consectetur congue vel nec felis. Suspendisse a metus ac turpis gravida efficitur eget varius tortor.',
    'Gaveta',
    '{"estado": "barulhento", "cor": "preto/prata", "marca": "Chinguelingue"}',
    'on'
), (
    '3',
    '2020-07-14 21:22:23',
    '1',
    'Perna do Falcon',
    'https://picsum.photos/202',
    'Sed volutpat tristique euismod. Duis et urna porta, varius dolor eget, dignissim ex. Morbi nec tortor aliquet, feugiat neque eu, sagittis est.',
    'Sob a cama',
    '{"estado": "arranhado", "cor": "bege", "marca": "ToyKoyCool"}',
    'on'
), (
    '4',
    '2020-10-22 23:22:21',
    '1',
    'Bigode de gato',
    'https://picsum.photos/203',
    'Nulla ultrices aliquet arcu, nec vehicula libero ornare ac. Aenean finibus lectus in dolor mollis, eget lacinia sapien pharetra.',
    'Cama do gato',
    '{"estado": "ausente", "cor": "branco", "marca": "SRD"}',
    'on'
);