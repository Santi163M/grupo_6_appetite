CREATE DATABASE appetite;
 
USE appetite;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    email TEXT NOT NULL,
    contraseña TEXT NOT NULL,
);



CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT,
    precio INT NOT NULL,
    usuario_id INT,
    categoria_id INT
);

CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    nombre TEXT
);


ALTER TABLE productos
ADD FOREIGN KEY (categoria_id) REFERENCES categoria(id);

INSERT INTO categoria(id,nombre)
VALUES (1,"pizzas");
INSERT INTO categoria(id,nombre)
VALUES (2,"hamburguesas");
INSERT INTO categoria(id,nombre)
VALUES (3,"bebidas");
INSERT INTO categoria(id,nombre)
VALUES (4,"acompañamientos");
INSERT INTO categoria(id,nombre)
VALUES (5,"panchos");

INSERT INTO usuarios(id,nombre,apellido,email, contraseña)
VALUES (1,"Almeta","Hawthorne","ahawthorne0@storify.com","uC2)boFu%3");
INSERT INTO usuarios(id,nombre,apellido,email, contraseña)
VALUES (2,"Kelcie","Wallis","kwallis1@reference.com","wI9{JI");
INSERT INTO usuarios(id,nombre,apellido,email, contraseña)
VALUES (3,"Albertina","Fatscher","afatscher2@live.com","qB3&h>");
INSERT INTO usuarios(id,nombre,apellido,email, contraseña)
VALUES (4,"Hayley","Ruller","hruller3@nba.com","xT3&Y(s4yt");
INSERT INTO usuarios(id,nombre,apellido,email, contraseña)
VALUES (5,"Janenna","Matveyev","jmatveyev4@virginia.edu","lJ8>w");

INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categoria_id)
VALUES (1,"pizza","(DESCRIPCION DE PIZZA)",4000,NULL,2);
INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categoria_id)
VALUES (2,"hamburguesa simple","(DESCRIPCION DE HAMBURGUESA SIMPLE)",3000,NULL,3);
INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categoria_id)
VALUES (3,"ensalada","(DESCRIPCION DE ENSALADA)",2000,NULL,5);
INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categoria_id)
VALUES (4,"pancho","(DESCRIPCION DE PANCHO)",1500,NULL,4);
INSERT INTO productos(id,nombre,descripcion,precio,usuario_id,categoria_id)
VALUES (5,"coca-cola","(DESCRIPCION DE COCA-COLA)",1000,NULL,1);
