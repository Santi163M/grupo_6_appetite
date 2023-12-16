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
(10, 'Pizza Margarita', 'Deliciosa pizza con tomate, mozzarella y albahaca', 13, 1, 1, '/img/products/product-1702757305702.jpg'),
(11, 'Pizza Pepperoni', 'Pizza clásica con pepperoni y queso derretido', 15, NULL, 1, '/img/products/product-1702757424396.jpeg'),
(12, 'Pizza Vegetariana', 'Pizza saludable con una variedad de vegetales frescos', 14, 1, 1, NULL),
(13, 'Refresco Cola', 'Bebida refrescante con burbujas y sabor a cola', 3, NULL, 3, NULL),
(14, 'Jugo de Naranja', 'Jugo natural de naranjas recién exprimidas', 3, 1, 3, NULL),
(15, 'Agua Mineral', 'Agua purificada y mineral', 2, NULL, 3, NULL),
(16, 'Hamburguesa Clásica', 'Hamburguesa jugosa con carne de res, lechuga y tomate', 6, 1, 2, NULL),
(17, 'Hamburguesa con Queso', 'Hamburguesa con queso fundido y ingredientes frescos', 6, NULL, 2, NULL),
(18, 'Hamburguesa Vegetariana', 'Hamburguesa saludable con hamburguesa de vegetales', 8, 1, 2, NULL),
(19, 'Papas Fritas', 'Papas fritas crujientes y saladas', 2, NULL, 4, NULL),
(20, 'Palomitas de Maíz', 'Palomitas de maíz recién hechas', 2, 1, 4, NULL),
(21, 'Nachos con Queso', 'Nachos cubiertos con queso derretido y salsa', 4, NULL, 4, NULL),
(22, 'Pancho Clásico', 'Pancho con salchicha, pan y condimentos tradicionales', 4, 1, 5, NULL),
(23, 'Pancho con Queso', 'Pancho con salchicha y queso fundido', 6, NULL, 5, NULL),
(24, 'Pancho Especial', 'Pancho con ingredientes especiales y salsas únicas', 7, 1, 5, NULL);



CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contraseña` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `contraseña`) VALUES
(1, 'Jose', 'Mou', 'josemou12@gmail.com', 'testing123');


ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `categoria_id` (`categoria_id`);


ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);


ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`);
COMMIT;
