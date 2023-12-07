CREATE DATABASE appetite
USE appetite;
CREATE TABLE usuarios (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    email TEXT NOT NULL,
    contraseña TEXT NOT NULL
)

INSERT INTO usuarios(id,nombre,apellido,email,contraseña)
VALUES (DEFAULT,"Almeta","Hawthorne","ahawthorne0@storify.com","uC2)boFu%3")
INSERT INTO usuarios(id,nombre,apellido,email,contraseña)
VALUES (DEFAULT,"Kelcie","Wallis","kwallis1@reference.com","wI9{JI")
INSERT INTO usuarios(id,nombre,apellido,email,contraseña)
VALUES (DEFAULT,"Albertina","Fatscher","afatscher2@live.com","qB3&h>")
INSERT INTO usuarios(id,nombre,apellido,email,contraseña)
VALUES (DEFAULT,"Hayley","Ruller","hruller3@nba.com","xT3&Y(s4yt")
INSERT INTO usuarios(id,nombre,apellido,email,contraseña)
VALUES (DEFAULT,"Janenna","Matveyev","jmatveyev4@virginia.edu","lJ8>w")


CREATE TABLE productos (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT,
    precio INT NOT NULL,
    usuario_id INT,
    categoria_id INT
)

INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categora_id)
VALUES (DEFAULT,"pizza","(DESCRIPCION DE PIZZA)",4000,NULL,2)
INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categora_id)
VALUES (DEFAULT,"hamburguesa simple","(DESCRIPCION DE HAMBURGUESA SIMPLE)",3000,NULL,3)
INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categora_id)
VALUES (DEFAULT,"ensalada","(DESCRIPCION DE ENSALADA)",2000,NULL,5)
INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categora_id)
VALUES (DEFAULT,"pancho","(DESCRIPCION DE PANCHO)",1500,NULL,4)
INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categora_id)
VALUES (DEFAULT,"coca-cola","(DESCRIPCION DE COCA-COLA)",1000,NULL,1)

CREATE TABLE categoria (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre TEXT
)

INSERT INTO categoria(id,nombre)
VALUES (DEFAULT,"pizzas")
INSERT INTO categoria(id,nombre)
VALUES (DEFAULT,"hamburguesas")
INSERT INTO categoria(id,nombre)
VALUES (DEFAULT,"bebidas")
INSERT INTO categoria(id,nombre)
VALUES (DEFAULT,"acompañamientos")
INSERT INTO categoria(id,nombre)
VALUES (DEFAULT,"panchos")