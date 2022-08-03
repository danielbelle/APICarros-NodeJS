CREATE DATABASE dbApiCarros;

USE dbApiCarros;

CREATE TABLE carros(
codigo INT PRIMARY KEY AUTO_INCREMENT,
modelo VARCHAR(30),
placa VARCHAR(7)
);

INSERT INTO carros (modelo,placa) VALUES ('Toyota Corolla', 'EMO4929');
INSERT INTO carros (modelo,placa) VALUES ('Honda Civic', 'ELV1590');

SELECT * FROM carros