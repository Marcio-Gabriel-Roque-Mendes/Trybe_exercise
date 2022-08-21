CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE Animais(
Id_animal INT AUTO_INCREMENT PRIMARY KEY,
Nome VARCHAR(50) NOT NULL,
Espécie VARCHAR(50) NOT NULL,
Sexo VARCHAR(50) NOT NULL,
Idade VARCHAR(50) NOT NULL,
Localização VARCHAR(50) NOT NULL
) engine=InnoDB;

CREATE TABLE Gerentes(
Id_gerente INT AUTO_INCREMENT PRIMARY KEY,
Nome VARCHAR(50) NOT NULL
) engine=InnoDB;

CREATE TABLE Cuidadores(
Id_cuidador INT AUTO_INCREMENT PRIMARY KEY,
Nome VARCHAR(50) NOT NULL,
Id_gerente INTEGER NOT NULL,
FOREIGN KEY(Id_animal) REFERENCES Gerentes(Id_animal),
FOREIGN KEY(Id_gerente) REFERENCES Animais(Id_gerente)
) engine=InnoDB;

CREATE TABLE animal_cuidador(
Id_animal INTEGER,
Id_cuidador INTEGER,
CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
FOREIGN KEY (Id_animal) REFERENCES Animais (Id_animal),
FOREIGN KEY (Id_cuidador) REFERENCES Cuidadores (Id_cuidador)
);