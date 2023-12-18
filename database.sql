CREATE DATABASE appetite;

USE appetite;

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `categorias` (`id`, `nombre`, `imagen`) VALUES
(1, 'Pizzas', 'pizza.jpeg'),
(2, 'Hamburguesas', 'hamburguesa.jpeg'),
(3, 'Bebidas', 'bebidas.jpg'),
(4, 'Snacks', 'papas-fritas.jpeg'),
(5, 'Panchos', 'panchos.jpeg');

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `imagen` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `usuario_id`, `categoria_id`, `imagen`) VALUES
(10, 'Pizza Margarita', 'Deliciosa pizza con tomate, mozzarella y albahaca', 3700, 1, 1, '/img/products/product-1702757305702.jpg'),
(11, 'Pizza Pepperoni', 'Pizza clásica con pepperoni y queso derretido', 4100, NULL, 1, '/img/products/product-1702757424396.jpeg'),
(12, 'Pizza Vegetariana', 'Pizza saludable con una variedad de vegetales frescos', 3900, 1, 1, '/img/products/pizza_vegetariana.jpg'),
(13, 'Refresco Cola', 'Bebida refrescante con burbujas y sabor a cola.', 1200, NULL, 3, '/img/products/coca-cola.jpg'),
(14, 'Jugo de Naranja', 'Jugo natural de naranjas recién exprimidas', 900, 1, 3, '/img/products/jugo-de-naranja.jpg'),
(15, 'Agua Mineral', 'Agua purificada y mineral', 510, NULL, 3, '/img/products/agua-mineral.jpg'),
(16, 'Hamburguesa Clásica', 'Hamburguesa jugosa con carne de res, lechuga y tomate', 2700, 1, 2, '/img/products/hamburguesa-simple.jpg'),
(17, 'Hamburguesa con Queso', 'Hamburguesa con queso fundido e ingredientes frescos', 3100, NULL, 2, '/img/products/hamburguesa-con-queso.jpg'),
(18, 'Hamburguesa Vegetariana', 'Hamburguesa saludable con hamburguesa de vegetales', 2800, 1, 2, '/img/products/hamburguesa-vegetariana-de-lentejas.jpg'),
(19, 'Papas Fritas', 'Papas fritas crujientes y saladas', 1900, NULL, 4, '/img/products/papas-fritas.jpg'),
(20, 'Palomitas de Maíz', 'Palomitas de maíz recién hechas', 700, 1, 4, '/img/products/palomitas.jpg'),
(21, 'Nachos con Queso', 'Nachos cubiertos con queso derretido y salsa', 4, NULL, 4, '/img/products/nachos.jpg'),
(22, 'Pancho Clásico', 'Pancho con salchicha, pan y condimentos tradicionales', 4, 1, 5, '/img/products/hot-dog.jpg'),
(23, 'Pancho con Queso', 'Pancho con salchicha y queso fundido', 6, NULL, 5, '/img/products/hot-dog-cheese.jpg'),
(24, 'Pancho Especial', 'Pancho con ingredientes especiales y salsas únicas', 7, 1, 5, '/img/products/hot-dog-especial.jpg');


CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `producto_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `producto_id`) VALUES
(1, 'Jose', 'Mou', 'josemou12@gmail.com', 'testing123', NULL),
(2, 'Juan', 'VILLALOBOS', 'a@gmail.com', '$2b$10$fD1nLUHL1nV3IBTdHfKNJuS6M0bG7rXrzse2jthXGn3fWoCS0jfyq', NULL),
(4, 'Test', 'Test', 'a123@gmail.com', '$2b$10$SSOV2Py/9.vU1UrxFQNrUeOgedBiOxWF7KOwtw879p41ErFxlSqUO', NULL);



CREATE TABLE `usuarios_productos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `usuarios_productos` (`id`, `usuario_id`, `producto_id`) VALUES
(1, 4, 15),
(2, 4, 12);


ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `categoria_id` (`categoria_id`);

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_usuario_producto` (`producto_id`);


ALTER TABLE `usuarios_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `producto_id` (`producto_id`);


ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `usuarios_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`);

ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuario_producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);


ALTER TABLE `usuarios_productos`
  ADD CONSTRAINT `usuarios_productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `usuarios_productos_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);
COMMIT;
