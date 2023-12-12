CREATE DATABASE appetite;

USE appetite;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contraseña TEXT NOT NULL
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT,
    precio INT NOT NULL,
    usuario_id INT,
    categoria_id INT
);

CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre TEXT
);

ALTER TABLE productos
ADD FOREIGN KEY (categoria_id) REFERENCES categoria(id);

ALTER TABLE productos
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(id);

INSERT INTO categoria(nombre) VALUES ('pizzas');
INSERT INTO categoria(nombre) VALUES ('hamburguesas');
INSERT INTO categoria(nombre) VALUES ('bebidas');
INSERT INTO categoria(nombre) VALUES ('acompañamientos');
INSERT INTO categoria(nombre) VALUES ('panchos');

INSERT INTO usuarios(nombre, apellido, email, contraseña) VALUES ('Almeta', 'Hawthorne', 'ahawthorne0@storify.com', 'uC2)boFu%3');
INSERT INTO usuarios(nombre, apellido, email, contraseña) VALUES ('Kelcie', 'Wallis', 'kwallis1@reference.com', 'wI9{JI');
INSERT INTO usuarios(nombre, apellido, email, contraseña) VALUES ('Albertina', 'Fatscher', 'afatscher2@live.com', 'qB3&h>');
INSERT INTO usuarios(nombre, apellido, email, contraseña) VALUES ('Hayley', 'Ruller', 'hruller3@nba.com', 'xT3&Y(s4yt');
INSERT INTO usuarios(nombre, apellido, email, contraseña) VALUES ('Janenna', 'Matveyev', 'jmatveyev4@virginia.edu', 'lJ8>w');

INSERT INTO productos(nombre, descripcion, precio, usuario_id, categoria_id) VALUES ('pizza', '(DESCRIPCION DE PIZZA)', 4000, NULL, 1);
INSERT INTO productos(nombre, descripcion, precio, usuario_id, categoria_id) VALUES ('hamburguesa simple', '(DESCRIPCION DE HAMBURGUESA SIMPLE)', 3000, NULL, 2);
INSERT INTO productos(nombre, descripcion, precio, usuario_id, categoria_id) VALUES ('ensalada', '(DESCRIPCION DE ENSALADA)', 2000, NULL, 5);
INSERT INTO productos(nombre, descripcion, precio, usuario_id, categoria_id) VALUES ('pancho', '(DESCRIPCION DE PANCHO)', 1500, NULL, 4);
INSERT INTO productos(nombre, descripcion, precio, usuario_id, categoria_id) VALUES ('coca-cola', '(DESCRIPCION DE COCA-COLA)', 1000, NULL, 3);
