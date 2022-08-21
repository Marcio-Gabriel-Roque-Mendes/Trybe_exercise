USE normalization;

CREATE TABLE Funcionario(
Funcionario_id INT AUTO_INCREMENT PRIMARY KEY,
Nome VARCHAR(100) NOT NULL,
Sobrenome VARCHAR(100) NOT NULL,
Email VARCHAR(100),
Contato VARCHAR(100),
DataCadastro VARCHAR(100)
) engine=InnoDB;

CREATE TABLE Setor(
setor_id INT AUTO_INCREMENT PRIMARY KEY,
Nome VARCHAR(100) NOT NULL
) engine=InnoDB;

CREATE TABLE funcionarios_setor(
Funcionario_id INTEGER,
setor_id INT,
FOREIGN KEY(Funcionario_id) REFERENCES Funcionario (Funcionario_id),
FOREIGN KEY(setor_id) REFERENCES Setor(setor_id)
) engine=InnoDB;