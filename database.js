/* ============================================
   ZOMBIE-TK - Base de Datos Central (Parte 1 de 3)
   Libros, Películas, Series y Animes
   ============================================ */

const ZOMBIE_DB = {
  
  // ============================================
  // 📚 LIBROS
  // ============================================
  libros: [
// ============================================
  // 📚 LIBROS (211 libros)
  // ============================================
  libros: [
    { id: 'b1', title: '#Spanishinfection', author: 'Tomás Haya', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/0-9.html' },
    { id: 'b2', title: '99.Z', author: 'Jordi Llavoré', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/0-9.html' },
    { id: 'b3', title: '1936Z. La Guerra Civil zombi', author: 'Javier Cosnava', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/0-9.html' },
    { id: 'b4', title: 'Afuera Estan Los Zombies', author: 'Santiago Repetto', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b5', title: 'Ahora el Silencio', author: 'Luis Martínez Vallés', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b6', title: 'American Zombie', author: 'Miguel Barqueros Gonnet', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b7', title: 'Antidoto', author: 'Jeff Carlson', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b8', title: 'Antirresurreccion', author: 'Juan Ramon Biedma', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b9', title: 'Antologia Z - Volumen 1', author: 'Varios autores', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b10', title: 'Antologia Z Somos Leyenda', author: 'Alvaro Peiro', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b11', title: 'Apocalipsis Island I', author: 'Vicente Garcia', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b12', title: 'Apocalipsis Island II - Origenes', author: 'J.D.', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b13', title: 'Apocalipsis Island III - Mision Africa', author: 'Vicente Garcia', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b14', title: 'Apocalipsis Z - Comic', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b15', title: 'Apocalipsis Z - Tomo 1', author: 'Manel Loureiro', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b16', title: 'Apocalipsis Z - Tomo 2 Los Días Oscuros', author: 'Manel Loureiro', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b17', title: 'Apocalipsis Z - Tomo 3 La Ira de los justos', author: 'Manel Loureiro', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b18', title: 'Arena', author: 'Guillermo Ruiz Buenrostro', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b19', title: 'Aurora', author: 'Cesar Blanco Castro', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b20', title: 'Autumn 01 - Septiembre Zombi', author: 'David Moody', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b21', title: 'Autumn 02 - Ciudad Zombie', author: 'David Moody', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b22', title: 'Autumn 03 - Zona Zombie', author: 'David Moody', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b23', title: 'Berzerk', author: 'Tim Lebbon', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b24', title: 'Boneshaker', author: 'Cherie Priest', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b25', title: 'Buscaré el Océano', author: 'Carrie Ryan', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/A-B.html' },
    { id: 'b26', title: 'Cadaveres Chiquititos - Antologia', author: 'Arg Vidal', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b27', title: 'Caminarán Sobre la Tierra', author: 'Miguel Aguerralde', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b28', title: 'Cell', author: 'Stephen King', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b29', title: 'Cenizas', author: 'Ilsa J. Bick', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b30', title: 'Ciudad Humana', author: 'Carlos J. Lluch', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b31', title: 'Ciudad Infernal - Infernal 1', author: 'Edward Lee', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b32', title: 'Clementine', author: 'Cherie Priest', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b33', title: 'Colegio Z - Ala Este', author: 'Ignacio Mañez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b34', title: 'ComecocoZ', author: 'Victor Mañez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b35', title: 'Conducción en tiempo de zombies I', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b36', title: 'Conducción en tiempo de zombies II', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b37', title: 'Conducción en tiempo de zombis III', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b38', title: 'Conducción en tiempo de zombis IV', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b39', title: 'Conducción en tiempo de zombis V', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b40', title: 'Conspiración Zombie', author: 'Martin Cagliani', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b41', title: 'Convirtiéndome en Zombi I - Muriendo', author: 'Kassfinol', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b42', title: 'Convirtiéndome en Zombi II - Matando Para', author: 'Kassfinol', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b43', title: 'Cronica Zombi 00 - Preludios', author: 'Conesa', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b44', title: 'Cronica Zombi 01 - El Lamento', author: 'Conesa', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b45', title: 'Cronica Zombi 02 - Tierra de muertos', author: 'Conesa', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b46', title: 'Cuando Susanah Llora', author: 'J. J. Castillo', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b47', title: 'Cuarentena - La caida de Madrid', author: 'Jesus Martin', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b48', title: 'De Madrid al Zielo (Linea Z)', author: 'Alfonso Zamora Llorente', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b49', title: 'Degeneración', author: 'David Pardo', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b50', title: 'Descansa en Paz', author: 'John Ajvide Lindqvist', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b51', title: 'Dia de la Z - Volumen 1', author: 'Mateo Rojas', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b52', title: 'Diario de un Zombi', author: 'Sergi Llauger', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b53', title: 'Diario de una Invasión Zombie 01', author: 'J. L. Bourne', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b54', title: 'Diario de una Invasión Zombie 02', author: 'L. Bourne', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b55', title: 'Diario de una Invasión Zombie 03', author: 'R. L. Bourne', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/C-D.html' },
    { id: 'b56', title: 'Érase una veZ', author: 'Varios Autores', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b57', title: 'Earthus, Terrorismo Zombi', author: 'Jose Manuel Tabares', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b58', title: 'Eden interrumpido', author: 'Carlos Sisi', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b59', title: 'El Alzamiento', author: 'Brian Keene', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b60', title: 'El Apocalipsis de los Muertos', author: 'Joe McKinney', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b61', title: 'El camino de la cabra 00 - El Despertar', author: 'Perez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b62', title: 'El camino de la cabra 01 - Secuestrados', author: 'Perez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b63', title: 'El camino de la cabra 02 - De Perdidos al Rio', author: 'Perez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b64', title: 'El camino de la cabra 03 - La Oscura Senda', author: 'Perez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b65', title: 'El Carnaval de los Muertos', author: 'Pau Varela', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b66', title: 'El Cuarto Jinete', author: 'Victor Blazquez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b67', title: 'El Despertar', author: 'Elio Quiroga', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b68', title: 'El Hombre del Niño Muerto', author: 'Emilio B. Cordoba', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b69', title: 'El Jardin Impio', author: 'Juan Miguel Fernandez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b70', title: 'El Lenguaje de los Muertos', author: 'Brian Lumley', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b71', title: 'El Reino de los Zombis I', author: 'Len Barnhart', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b72', title: 'El Reino de los Zombis II - El Final', author: 'Barnhart', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b73', title: 'El Ultimo Pasajero', author: 'Manel Loureiro', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b74', title: 'Epidemia', author: 'Jeff Carlson', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b75', title: 'Extinción, El Accidente', author: 'Ramon Hernandez Periañez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b76', title: 'Extinción, Zona Zero Zombie', author: 'Martin Rae', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b77', title: 'Feed', author: 'Mira Grant', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/E-F.html' },
    { id: 'b78', title: 'Gangsters Zombies', author: 'Roberto J. Rodriguez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b79', title: 'Generación Zombi Hollywood', author: 'Julia Campo', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b80', title: 'Generation Dead 1', author: 'Daniel Waters', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b81', title: 'Generation Dead 2 - Beso de Vida', author: 'Daniel Waters', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b82', title: 'Guerra Mundial Z', author: 'Max Brooks', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b83', title: 'Hallazgo Fatidico', author: 'Sheri S. Tepper', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b84', title: 'Hay 666 zombis por persona', author: 'Boris Dekker', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b85', title: 'Hay 777 zombis por persona', author: 'Boris Dekker', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b86', title: 'Hay 1001 zombis por persona 0', author: 'Boris Dekker', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b87', title: 'Hay 1001 zombis por persona 1', author: 'Boris Dekker', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b88', title: 'Hay 1001 zombis por persona 2', author: 'Boris Dekker', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b89', title: 'Hay 1001 zombis por persona 3', author: 'Boris Dekker', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b90', title: 'Hay 1001 zombis por persona 5', author: 'Boris Dekker', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b91', title: 'Hollowland', author: 'Amanda Hocking', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b92', title: 'Hollowmen', author: 'Amanda Hocking', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/G-H.html' },
    { id: 'b93', title: 'I Hispano Antologia Zombie', author: 'Varios Autores', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/I-J.html' },
    { id: 'b94', title: 'Infectus', author: 'Angel Villan', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/I-J.html' },
    { id: 'b95', title: 'Instinto de Superviviente', author: 'Dario Vilas', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/I-J.html' },
    { id: 'b96', title: 'Jente Aki', author: 'Antonio Municio', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/I-J.html' },
    { id: 'b97', title: 'Julio César', author: 'Jose y Pablo Rodriguez Vazquez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/I-J.html' },
    { id: 'b98', title: 'La Casa de Bernarda Alba zombi', author: 'Jorge de Barnola', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b99', title: 'La Ciudad de los Muertos', author: 'Brian Keene', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b100', title: 'La Ciudad Silenciosa', author: 'Jose Luis Caballero', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b101', title: 'La Hora del Mar', author: 'Carlos Sisi', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b102', title: 'La Ira de los Angeles', author: 'Alden Bell', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b103', title: 'La Isla de la Calma', author: 'Jesus Miguel Saldon Andrades', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b104', title: 'La Isla de los Muertos', author: 'Roger Zelazny', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b105', title: 'La Isla del Tesoro Z', author: 'Alejandro De-Bernardi', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b106', title: 'La Marcha Zombi', author: 'Max Brooks', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b107', title: 'La Muerte Escarlata', author: 'Antonio Calzado', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b108', title: 'La Muerte Negra - El Triunfo de los No Muertos', author: 'Gonzalez', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b109', title: 'La Noche De Los Trekkies Vivientes', author: 'Anderson', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b110', title: 'La Plaga', author: 'Jeff Carlson', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b111', title: 'La Zona', author: 'Javier Negrete', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b112', title: 'Lantana, Donde Nace el Instinto', author: 'Dario Vilas', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b113', title: 'Lazarillo Z', author: 'Lazaro Gonzalez Perez de Tormes', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b114', title: 'Left 4 Dead #1', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b115', title: 'Left 4 Dead #2', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b116', title: 'Left 4 Dead #3', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b117', title: 'Left 4 Dead #4', author: '-', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b118', title: 'Legado Zombi', author: 'Carlos Sueiro', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b119', title: 'Lleida Infectada', author: 'Ivan Noya Cendal', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b120', title: 'Lluvia De Zombis 1', author: 'Mark Tufo', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b121', title: 'Lluvia De Zombis 2 - Una Plaga', author: 'Mark Tufo', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b122', title: 'Los Caminantes 1', author: 'Carlos Sisi', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b123', title: 'Los Caminantes 2 - Necropolis', author: 'Carlos Sisi', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b124', title: 'Los Caminantes 3 - Hades Nebula', author: 'Carlos Sisi', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b125', title: 'Los Dientes De Los Angeles', author: 'Jonathan Carroll', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b126', title: 'Los Feos 1 - Traición', author: 'Scott Westerfeld', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b127', title: 'Los Feos 2 - Perfección', author: 'Scott Westerfeld', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b128', title: 'Los Feos 3 - Especiales', author: 'Scott Westerfeld', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b129', title: 'Los Feos 4 - Extras', author: 'Scott Westerfeld', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b130', title: 'Los Mejores', author: 'Franscisco Angulo', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
    { id: 'b131', title: 'Los Muertos y los Condenados', author: 'Green', year: '-', img: 'img/libros/portada-generica.jpg', url: 'libros/K-L.html' },
  ],

  // ============================================
  // 🎬 PELÍCULAS
  // ============================================
  peliculas: [
  { id: 'm1', title: '13 Eerie', year: '2013' },
  { id: 'm2', title: '28 Days Later', year: '2002' },
  { id: 'm3', title: '28 Weeks Later', year: '2007' },
  { id: 'm4', title: 'Aj Zombies', year: '2017' },
  { id: 'm5', title: 'An Accidental Zombie', year: '2017' },
  { id: 'm6', title: 'Anger Of The Dead', year: '2014' },
  { id: 'm7', title: 'Anna And The Apocalypse', year: '2018' },
  { id: 'm8', title: 'Apocalipsis Zombie - Origenes', year: '-' },
  { id: 'm9', title: 'Attack Of The Lederhosen Zombies', year: '2016' },
  { id: 'm10', title: 'Black Death', year: '2010' },
  { id: 'm11', title: 'Blood Quantum', year: '2019' },
  { id: 'm12', title: 'Bombshell Bloodbath', year: '2014' },
  { id: 'm13', title: 'Braindead', year: '1992' },
  { id: 'm14', title: 'Breakdown Lane', year: '2017' },
  { id: 'm15', title: 'Bunks', year: '2013' },
  { id: 'm16', title: 'Burying The Ex', year: '2014' },
  { id: 'm17', title: 'Cabin Fever', year: '2002' },
  { id: 'm18', title: 'Cabin Fever 2 Spring Fever', year: '2009' },
  { id: 'm19', title: 'Cabin Fever 3 Patient Zero', year: '2014' },
  { id: 'm20', title: 'Cabin Fever 4', year: '2016' },
  { id: 'm21', title: 'Cargo', year: '2017' },
  { id: 'm22', title: 'Castores Zombies', year: '-' },
  { id: 'm23', title: 'Cell', year: '2016' },
  { id: 'm24', title: 'Chernobyl Diaries', year: '2012' },
  { id: 'm25', title: 'Chrysalis', year: '2014' },
  { id: 'm26', title: 'Code Red', year: '2013' },
  { id: 'm27', title: 'Contracted', year: '2013' },
  { id: 'm28', title: 'Contracted Phase II', year: '2015' },
  { id: 'm29', title: 'Curas Zombies en Azul', year: '-' },
  { id: 'm30', title: 'Dance Of The Dead', year: '2008' },
  { id: 'm31', title: 'Darkest Day', year: '2015' },
  { id: 'm32', title: 'Dawn Of The Dead', year: '1978' },
  { id: 'm33', title: 'Dawn Of The Dead Remake', year: '2004' },
  { id: 'm34', title: 'Day Of The Dead', year: '1985' },
  { id: 'm35', title: 'Day Of The Dead Bloodline Remake', year: '2018' },
  { id: 'm36', title: 'Daylights End', year: '2016' },
  { id: 'm37', title: 'Dead 7', year: '2016' },
  { id: 'm38', title: 'Dead Before Dawn', year: '2012' },
  { id: 'm39', title: 'Dead Heat', year: '1998' },
  { id: 'm40', title: 'Dead Rising 1 Watchtower', year: '2015' },
  { id: 'm41', title: 'Dead Rising 2 Endgame', year: '2016' },
  { id: 'm42', title: 'Dead Shack', year: '2017' },
  { id: 'm43', title: 'Dead Snow 1', year: '2009' },
  { id: 'm44', title: 'Dead Snow 2', year: '2014' },
  { id: 'm45', title: 'Dead Trigger', year: '2017' },
  { id: 'm46', title: 'Deadgirl', year: '2008' },
  { id: 'm47', title: 'DeadHeads', year: '2011' },
  { id: 'm48', title: 'Deadsight', year: '2018' },
  { id: 'm49', title: 'Demoni', year: '1985' },
  { id: 'm50', title: 'Demoni 2 Lincubo Ritorna', year: '1986' },
  { id: 'm51', title: 'Demoni 3 Black Demons', year: '1991' },
  { id: 'm52', title: 'Devils Tower', year: '2014' },
  { id: 'm53', title: 'Diary Of The Dead', year: '2007' },
  { id: 'm54', title: 'Disaster LA', year: '2014' },
  { id: 'm55', title: 'Dixie And The Zombi Rebellion', year: '2014' },
  { id: 'm56', title: 'Dont Grow Up', year: '2015' },
  { id: 'm57', title: 'El dia de los muertos', year: '-' },
  { id: 'm58', title: 'Endzeit Ever After', year: '2018' },
  { id: 'm59', title: 'Estado de Emergencia', year: '-' },
  { id: 'm60', title: 'Evil Dead 1', year: '1981' },
  { id: 'm61', title: 'Evil Dead 2', year: '1987' },
  { id: 'm62', title: 'Evil Dead 3', year: '1992' },
  { id: 'm63', title: 'Evil Dead Remake', year: '2013' },
  { id: 'm64', title: 'Exit Humanity', year: '2011' },
  { id: 'm65', title: 'Extincion', year: '2015' },
  { id: 'm66', title: 'Feral', year: '2018' },
  { id: 'm67', title: 'Freaks Of Nature', year: '2015' },
  { id: 'm68', title: 'GallowWalkers', year: '2013' },
  { id: 'm69', title: 'Generation Z', year: '2015' },
  { id: 'm70', title: 'Goal Of The Dead', year: '2014' },
  { id: 'm71', title: 'Halley', year: '2012' },
  { id: 'm72', title: 'Hard Line Dead Rush', year: '2016' },
  { id: 'm73', title: 'Here Alone', year: '2016' },
  { id: 'm74', title: 'House Of The Dead', year: '2003' },
  { id: 'm75', title: 'House Of The Dead 2', year: '2005' },
  { id: 'm76', title: 'In Un Giorno La Fine', year: '2017' },
  { id: 'm77', title: 'Infeccion', year: '2019' },
  { id: 'm78', title: 'Isle Of The Dead', year: '2016' },
  { id: 'm79', title: 'It Stains The Sands Red', year: '2016' },
  { id: 'm80', title: 'JeruZalem', year: '2015' },
  { id: 'm81', title: 'Juan De Los Muertos', year: '2011' },
  { id: 'm82', title: 'La Horda', year: '2009' },
  { id: 'm83', title: 'La Nuit A Devore Le Monde', year: '2018' },
  { id: 'm84', title: 'Ladronas De Almas', year: '2015' },
  { id: 'm85', title: 'Land Of The Dead', year: '2005' },
  { id: 'm86', title: 'Last Ones Out', year: '2016' },
  { id: 'm87', title: 'Les Affames', year: '2017' },
  { id: 'm88', title: 'Let There Be Zombies', year: '2014' },
  { id: 'm89', title: 'Life After Beth', year: '2014' },
  { id: 'm90', title: 'Little Monsters', year: '2019' },
  { id: 'm91', title: 'Navy Seals VS Zombies', year: '2015' },
  { id: 'm92', title: 'Night Of Something Strange', year: '2015' },
  { id: 'm93', title: 'Night Of The Creeps', year: '1986' },
  { id: 'm94', title: 'Night Of The Living Dead', year: '1968' },
  { id: 'm95', title: 'Night Of The Living Deb', year: '2015' },
  { id: 'm96', title: 'Office Uprising', year: '2018' },
  { id: 'm97', title: 'Opstandelsen', year: '2010' },
  { id: 'm98', title: 'Pandemic', year: '2016' },
  { id: 'm99', title: 'Papa Soy Una Zombi', year: '2011' },
  { id: 'm100', title: 'Patients Of A Saint', year: '2019' },
  { id: 'm101', title: 'Peelers', year: '2016' },
  { id: 'm102', title: 'Pet Graveyard', year: '2019' },
  { id: 'm103', title: 'Pet Sematary', year: '1989' },
  { id: 'm104', title: 'Pet Sematary 2', year: '1992' },
  { id: 'm105', title: 'Pet Sematary Remake', year: '2019' },
  { id: 'm106', title: 'Plague', year: '2014' },
  { id: 'm107', title: 'Plan 9', year: '2015' },
  { id: 'm108', title: 'Planet Terror', year: '2007' },
  { id: 'm109', title: 'Pride And Prejudice And Zombies', year: '2016' },
  { id: 'm110', title: 'Quarantine', year: '2008' },
  { id: 'm111', title: 'Quarantine 2 Terminal', year: '2011' },
  { id: 'm112', title: 'Rampant', year: '2018' },
  { id: 'm113', title: 'Range 15', year: '2016' },
  { id: 'm114', title: 'Rape Zombie Lust Of The Dead', year: '2012' },
  { id: 'm115', title: 'Rape Zombie Lust Of The Dead 2', year: '2013' },
  { id: 'm116', title: 'Rape Zombie Lust Of The Dead 3', year: '2013' },
  { id: 'm117', title: 'Rec 1', year: '2007' },
  { id: 'm118', title: 'Rec 2', year: '2009' },
  { id: 'm119', title: 'Rec 3', year: '2012' },
  { id: 'm120', title: 'Rec 4', year: '2014' },
  { id: 'm121', title: 'Redcon 1', year: '2018' },
  { id: 'm122', title: 'Remains', year: '2011' },
  { id: 'm123', title: 'Resident Evil 1 El Huesped Maldito', year: '2002' },
  { id: 'm124', title: 'Resident Evil 2 Apocalipsis', year: '2004' },
  { id: 'm125', title: 'Resident Evil 3 Extincion', year: '2007' },
  { id: 'm126', title: 'Resident Evil 4 Ultratumba', year: '2010' },
  { id: 'm127', title: 'Resident Evil 5 Venganza', year: '2012' },
  { id: 'm128', title: 'Resident Evil 6 Capitulo Final', year: '2017' },
  { id: 'm129', title: 'Resident Evil 7 Vendetta', year: '2017' },
  { id: 'm130', title: 'Return Of The Living Dead 1', year: '1985' },
  { id: 'm131', title: 'Return Of The Living Dead 2', year: '1988' },
  { id: 'm132', title: 'Return Of The Living Dead 3', year: '1993' },
  { id: 'm133', title: 'Return Of The Living Dead 4', year: '2005' },
  { id: 'm134', title: 'Return Of The Living Dead 5', year: '2005' },
  { id: 'm135', title: 'Rise Of The Zombies', year: '2012' },
  { id: 'm136', title: 'Scouts Guide To The Zombie Apocalypse', year: '2015' },
  { id: 'm137', title: 'Seoul Station', year: '2016' },
  { id: 'm138', title: 'Shaun Of The Dead', year: '2004' },
  { id: 'm139', title: 'Siege Of The Dead', year: '2010' },
  { id: 'm140', title: 'Skeleton Key 3 The Organ Trail', year: '2011' },
  { id: 'm141', title: 'Slither La Plaga', year: '2006' },
  { id: 'm142', title: 'State Of Emergency', year: '2010' },
  { id: 'm143', title: 'Summer Camp', year: '2015' },
  { id: 'm144', title: 'Survival Of The Dead', year: '2009' },
  { id: 'm145', title: 'Swiss Army Man', year: '2016' },
  { id: 'm146', title: 'Thanatomorphose', year: '2012' },
  { id: 'm147', title: 'The Battery', year: '2012' },
  { id: 'm148', title: 'The Black Death', year: '2015' },
  { id: 'm149', title: 'The Burning Dead', year: '2015' },
  { id: 'm150', title: 'The Crazies', year: '2010' },
  { id: 'm151', title: 'The Cured', year: '2017' },
  { id: 'm152', title: 'The Dead', year: '2010' },
  { id: 'm153', title: 'The Dead 2 India', year: '2013' },
  { id: 'm154', title: 'The Demented', year: '2013' },
  { id: 'm155', title: 'The Girl With All The Gifts', year: '2016' },
  { id: 'm156', title: 'The Hive', year: '2015' },
  { id: 'm157', title: 'The Last Days On Mars', year: '2013' },
  { id: 'm158', title: 'The Revenant', year: '2009' },
  { id: 'm159', title: 'The Serpent And The Rainbow', year: '1988' },
  { id: 'm160', title: 'The Walking Deceased', year: '2015' },
  { id: 'm161', title: 'The Zombie King', year: '2013' },
  { id: 'm162', title: 'Tokyo Living Dead Idol', year: '2018' },
  { id: 'm163', title: 'Train To Busan', year: '2016' },
  { id: 'm164', title: 'Train To Busan 2 Peninsula', year: '2020' },
  { id: 'm165', title: 'Undead', year: '2003' },
  { id: 'm166', title: 'Virus', year: '1980' },
  { id: 'm167', title: 'Walking Dead In The West', year: '2016' },
  { id: 'm168', title: 'War Of The Dead', year: '2011' },
  { id: 'm169', title: 'Warm Bodies', year: '2013' },
  { id: 'm170', title: 'Wasteland', year: '2015' },
  { id: 'm171', title: 'We All Fall Down', year: '2016' },
  { id: 'm172', title: 'World War Z', year: '2013' },
  { id: 'm173', title: 'Yummy', year: '2019' },
  { id: 'm174', title: 'Zombeavers', year: '2014' },
  { id: 'm175', title: 'Zombi Child', year: '2019' },
  { id: 'm176', title: 'Zombie At 17', year: '2018' },
  { id: 'm177', title: 'Zombie Fight Club', year: '2014' },
  { id: 'm178', title: 'Zombie Hunter', year: '2013' },
  { id: 'm179', title: 'Zombie Massacre', year: '2013' },
  { id: 'm180', title: 'Zombie Massacre 2 Reich Of The Dead', year: '2015' },
  { id: 'm181', title: 'Zombie Ninjas VS Black Ops', year: '2015' },
  { id: 'm182', title: 'Zombie Party', year: '-' },
  { id: 'm183', title: 'Zombie Town', year: '-' },
  { id: 'm184', title: 'Zombie World 2', year: '2018' },
  { id: 'm185', title: 'Zombieland', year: '2009' },
  { id: 'm186', title: 'Zombieland Double Tap', year: '2019' },
  { id: 'm187', title: 'Zombies', year: '2017' },
  { id: 'm188', title: 'Zombies of Mass Destruction', year: '-' },
  { id: 'm189', title: 'Zombieworld', year: '2015' },
  { id: 'm190', title: 'Zoo', year: '2018' },
  { id: 'm191', title: 'Zoombies', year: '2016' },
  ],

  // ============================================
  // 📺 SERIES
  // ============================================
  series: [
    { id: 's1', title: 'Black Summer', year: '2019', img: 'img/series/Black-Summer.jpg', url: 'series/Black-Summer.html' },
    { id: 's2', title: 'Daybreak', year: '2019', img: 'img/series/Daybreak.png', url: 'series/Daybreak.html' },
    { id: 's3', title: 'Dead Set', year: '2008', img: 'img/series/Dead-Set.jpg', url: 'series/Dead-Set.html' },
    { id: 's4', title: 'I Zombie', year: '2015', img: 'img/series/I-Zombie.jpg', url: 'series/I-Zombie.html' },
    { id: 's5', title: 'Kingdom', year: '2019', img: 'img/series/kingdom.jpg', url: 'series/Kingdom.html' },
    { id: 's6', title: 'Plantas Vs Zombies', year: '2020', img: 'img/series/Plantas-Vs-Zombies.png', url: 'series/Plantas-Vs-Zombies.html' },
    { id: 's7', title: 'Reality Z', year: '2020', img: 'img/series/Reality-Z.png', url: 'series/Reality-Z.html' },
    { id: 's8', title: 'The Walking Dead', year: '2010', img: 'img/series/The-Walking-Dead.jpg', url: 'series/The-Walking-Dead.html', featured: true },
    { id: 's9', title: 'Z Nation', year: '2014', img: 'img/series/Z-Nation.png', url: 'series/Z-Nation.html' },
    { id: 's10', title: 'All of Us Are Dead', year: '2022', img: 'img/series/All-of-Us-Are-Dead.jpg', url: 'series/All-of-Us-Are-Dead.html' },
    { id: 's11', title: 'Marvel Zombies', year: '2024', img: 'img/series/Marvel-Zombies.jpg', url: 'series/Marvel-Zombies.html' },
    { id: 's12', title: 'Soldados o Zombies', year: '2023', img: 'img/series/Soldados-o-Zombies.jpg', url: 'series/Soldados-o-Zombies.html' },
    { id: 's13', title: 'Santa Clarita Diet', year: '2017', img: 'img/series/Santa-Clarita-Diet.jpg', url: 'series/Santa-Clarita-Diet.html' },
    { id: 's14', title: 'Zombies', year: '2018', img: 'img/series/Zombies.jpg', url: 'series/Zombies.html' },
  ],

  // ============================================
  // 🎌 ANIMES
  // ============================================
  animes: [
    { id: 'a1', title: 'Another', year: '2012', img: 'img/animes/Another.png', url: 'animes/Another.html' },
    { id: 'a2', title: 'Attack on Titan', year: '2013', img: 'img/animes/Attack-on-Titan.png', url: 'animes/Attack-on-Titan.html' },
    { id: 'a3', title: 'Corpse Party', year: '2013', img: 'img/animes/Corpse-Party.png', url: 'animes/Corpse-Party.html' },
    { id: 'a4', title: 'Gakkou Gurashi!', year: '2015', img: 'img/animes/Gakkou-Gurashi.png', url: 'animes/Gakkou-Gurashi.html' },
    { id: 'a5', title: 'Hellsing Ultimate', year: '2006', img: 'img/animes/Hellsing-Ultimate.png', url: 'animes/Hellsing-Ultimate.html' },
    { id: 'a6', title: 'Highschool of the Dead', year: '2010', img: 'img/animes/Highschool-of-the-Dead.png', url: 'animes/Highschool-of-the-Dead.html', featured: true },
    { id: 'a7', title: 'I Am a Hero', year: '2016', img: 'img/animes/I-Am-a-Hero.png', url: 'animes/I-Am-a-Hero.html' },
    { id: 'a8', title: 'Kore wa Zombie Desu ka?', year: '2011', img: 'img/animes/Kore-wa-Zombie-Desu-ka.png', url: 'animes/Kore-wa-Zombie-Desu-ka.html' },
    { id: 'a9', title: 'Koutetsujou no Kabaneri', year: '2016', img: 'img/animes/Koutetsujou-no-Kabaneri.png', url: 'animes/Koutetsujou-no-Kabaneri.html' },
    { id: 'a10', title: 'Parasyte: The Maxim', year: '2014', img: 'img/animes/Parasyte.png', url: 'animes/Parasyte.html' },
    { id: 'a11', title: 'The Promised Neverland', year: '2019', img: 'img/animes/Promised-Neverland.png', url: 'animes/Promised-Neverland.html' },
    { id: 'a12', title: 'Seraph of the End', year: '2015', img: 'img/animes/Seraph-of-the-End.png', url: 'animes/Seraph-of-the-End.html' },
    { id: 'a13', title: 'Shiki', year: '2010', img: 'img/animes/Shiki.png', url: 'animes/Shiki.html' },
    { id: 'a14', title: 'Shikabane Hime: Aka', year: '2008', img: 'img/animes/Shikabane-Hime-Aka.png', url: 'animes/Shikabane-Hime-Aka.html' },
    { id: 'a15', title: 'Tokyo Ghoul', year: '2014', img: 'img/animes/Tokyo-Ghoul.png', url: 'animes/Tokyo-Ghoul.html' },
    { id: 'a16', title: 'Undead Unluck', year: '2023', img: 'img/animes/Undead-Unluck.png', url: 'animes/Undead-Unluck.html' },
    { id: 'a17', title: 'Zom 100: Bucket List of the Dead', year: '2023', img: 'img/animes/Zom-100.png', url: 'animes/Zom-100.html' },
    { id: 'a18', title: 'Zombieland Saga', year: '2018', img: 'img/animes/Zombieland-Saga.png', url: 'animes/Zombieland-Saga.html' },
  ],

// ============================================
  // 💥 CÓMICS
  // ============================================
  comics: [
    { id: 'c1', title: '16-Bit Zombie', publisher: 'Boom! Studios', year: '2014', img: 'img/comics/16-Bit-Zombie.jpg', url: 'comics/16-Bit-Zombie.html' },
    { id: 'c2', title: '28 Days Later', publisher: 'Dark Horse', year: '2009', img: 'img/comics/28-Days-Later.jpg', url: 'comics/28-Days-Later.html' },
    { id: 'c3', title: 'Afterlife with Archie', publisher: 'Archie Horror', year: '2013', img: 'img/comics/Afterlife-with-Archie.jpg', url: 'comics/Afterlife-with-Archie.html' },
    { id: 'c4', title: 'Batman vs. the Undead', publisher: 'DC', year: '2013', img: 'img/comics/Batman-vs-the-Undead.jpg', url: 'comics/Batman-vs-the-Undead.html' },
    { id: 'c5', title: 'Blackest Night', publisher: 'DC', year: '2009', img: 'img/comics/Blackest-Night.jpg', url: 'comics/Blackest-Night.html' },
    { id: 'c6', title: 'DCeased', publisher: 'DC', year: '2019', img: 'img/comics/DCeased.jpg', url: 'comics/DCeased.html' },
    { id: 'c7', title: 'Empire of the Dead', publisher: 'Marvel', year: '2014', img: 'img/comics/Empire-of-the-Dead.jpg', url: 'comics/Empire-of-the-Dead.html' },
    { id: 'c8', title: 'iZombie', publisher: 'Vertigo', year: '2010', img: 'img/comics/iZombie.jpg', url: 'comics/iZombie.html' },
    { id: 'c9', title: 'Marvel Zombies', publisher: 'Marvel', year: '2005', img: 'img/comics/Marvel-Zombies.jpg', url: 'comics/Marvel-Zombies.html' },
    { id: 'c10', title: 'Night of the Living Dead', publisher: 'Avatar Press', year: '2011', img: 'img/comics/Night-of-the-Living-Dead.jpg', url: 'comics/Night-of-the-Living-Dead.html' },
    { id: 'c11', title: 'Star Trek: Infestation', publisher: 'IDW', year: '2011', img: 'img/comics/Star-Trek-Infestation.jpg', url: 'comics/Star-Trek-Infestation.html' },
    { id: 'c12', title: 'The Goon', publisher: 'Dark Horse', year: '2003', img: 'img/comics/The-Goon.jpg', url: 'comics/The-Goon.html' },
    { id: 'c13', title: 'The Walking Dead', publisher: 'Image', year: '2003', img: 'img/comics/The-Walking-Dead.jpg', url: 'comics/The-Walking-Dead-Comic.html', featured: true },
    { id: 'c14', title: 'Zombie Survival Guide', publisher: 'Broadway', year: '2003', img: 'img/comics/Zombie-Survival-Guide.jpg', url: 'comics/Zombie-Survival-Guide.html' },
    { id: 'c15', title: 'Victorian Undead', publisher: 'Dynamite', year: '2010', img: 'img/comics/Victorian-Undead.jpg', url: 'comics/Victorian-Undead.html' },
    { id: 'c16', title: 'ZMD: Zombies of Mass Destruction', publisher: 'IDW', year: '2010', img: 'img/comics/ZMD.jpg', url: 'comics/ZMD-Zombies-of-Mass-Destruction.html' },
    { id: 'c17', title: 'Zombie Tales', publisher: 'Boom! Studios', year: '2005', img: 'img/comics/Zombie-Tales.jpg', url: 'comics/Zombie-Tales.html' },
    { id: 'c18', title: 'Zombie-Loan', publisher: 'Tokyopop', year: '2004', img: 'img/comics/Zombie-Loan.jpg', url: 'comics/Zombie-Loan.html' },
  ],

  // ============================================
  // 🎬 CORTOMETRAJES
  // ============================================
  cortometrajes: [
    { id: 'co1', title: '2 Hours', year: '2012', duration: '25 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1536440136628-849c42c93d0c?w=500&q=80', url: 'cortometrajes/2-Hours.html' },
    { id: 'co2', title: 'Best Friends', year: '2016', duration: '15 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&q=80', url: 'cortometrajes/Best-Friends.html' },
    { id: 'co3', title: 'Cargo', year: '2013', duration: '7 min', lang: 'Subtitulado', img: 'https://video.maga.host/static/thumbnails/c71d5fb6-6e04-4b90-bbdc-57ebb12857e1.jpg', url: 'cortometrajes/Cargo.html', featured: true },
    { id: 'co4', title: 'Hope', year: '2013', duration: '5 min', lang: 'Subtitulado', img: 'https://i.ytimg.com/vi_webp/bUTJC7UdMy4/maxresdefault.webp', url: 'cortometrajes/Hope.html' },
    { id: 'co5', title: 'Make It Until Morning', year: '2014', duration: '10 min', lang: 'Subtitulado', img: 'https://video.maga.host/static/thumbnails/33b29291-5e94-4360-96db-d877f8dd0d5e.jpg', url: 'cortometrajes/Make-It-Until-Morning.html' },
    { id: 'co6', title: 'Rising Up: The Story of the Zombie Rights', year: '2012', duration: '12 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80', url: 'cortometrajes/Rising-Up.html' },
    { id: 'co7', title: 'Scary or Die', year: '2012', duration: '18 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80', url: 'cortometrajes/Scary-or-Die.html' },
    { id: 'co8', title: 'Soy un Zombie', year: '2015', duration: '8 min', lang: 'Latino', img: 'https://i.ytimg.com/vi/IGfdVXkoe_c/maxresdefault.jpg', url: 'cortometrajes/Soy-un-Zombie.html' },
    { id: 'co9', title: 'Still', year: '2014', duration: '11 min', lang: 'Subtitulado', img: 'https://video.maga.host/static/thumbnails/d923e46f-79da-47e4-952a-0c35a8484c27.jpg', url: 'cortometrajes/Still.html' },
    { id: 'co10', title: 'The Gravedigger', year: '2016', duration: '9 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=500&q=80', url: 'cortometrajes/The-Gravedigger.html' },
    { id: 'co11', title: 'Thriller', year: '1983', duration: '14 min', lang: 'Latino', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80', url: 'cortometrajes/Thriller.html' },
    { id: 'co12', title: 'Zombie Day Apocalypse', year: '2017', duration: '13 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&q=80', url: 'cortometrajes/Zombie-Day-Apocalypse.html' },
    { id: 'co13', title: 'Zombie Doom', year: '2015', duration: '10 min', lang: 'Subtitulado', img: 'https://video.maga.host/static/thumbnails/f47aea1f-bb63-448b-9aa2-f62fb14f7703.jpg', url: 'cortometrajes/Zombie-Doom.html' },
    { id: 'co14', title: 'Zombie in a Penguin Suit', year: '2013', duration: '6 min', lang: 'Subtitulado', img: 'https://images.unsplash.com/photo-1550978934-490278542c93?w=500&q=80', url: 'cortometrajes/Zombie-in-a-Penguin-Suit.html' },
  ],

  // ============================================
  // ✍️ RELATOS
  // ============================================
  relatos: [
    { id: 'r1', title: 'Amanecer en la ciudad muerta', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80', url: 'relatos/Amanecer-en-la-ciudad-muerta.html' },
    { id: 'r2', title: 'Diario de un infectado', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80', url: 'relatos/Diario-de-un-infectado.html' },
    { id: 'r3', title: 'El último superviviente', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&q=80', url: 'relatos/El-ultimo-superviviente.html', featured: true },
    { id: 'r4', title: 'El paciente cero', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80', url: 'relatos/El-paciente-cero.html' },
    { id: 'r5', title: 'La cura perdida', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80', url: 'relatos/La-cura-perdida.html' },
    { id: 'r6', title: 'Noche de muertos', author: 'Anónimo', year: '2020', img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80', url: 'relatos/Noche-de-muertos.html' },
  ],

  // ============================================
  // 🎮 JUEGOS
  // ============================================
  juegos: [
    { id: 'g1', title: '7 Days to Die', genre: 'Survival', platforms: 'PC/PS/Xbox', year: '2013', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80', url: 'juegos/7-Days-to-Die.html' },
    { id: 'g2', title: 'Back 4 Blood', genre: 'FPS Co-op', platforms: 'PC/PS/Xbox', year: '2021', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80', url: 'juegos/Back-4-Blood.html' },
    { id: 'g3', title: 'Call of Duty: Zombies', genre: 'FPS', platforms: 'PC/PS/Xbox', year: '2009', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', url: 'juegos/Call-of-Duty-Zombies.html' },
    { id: 'g4', title: 'Days Gone', genre: 'Acción/Aventura', platforms: 'PC/PS', year: '2019', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', url: 'juegos/Days-Gone.html' },
    { id: 'g5', title: 'Dead Island 2', genre: 'RPG/Acción', platforms: 'PC/PS/Xbox', year: '2023', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80', url: 'juegos/Dead-Island-2.html' },
    { id: 'g6', title: 'Dead Rising', genre: 'Mundo abierto', platforms: 'PC/PS/Xbox', year: '2006', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80', url: 'juegos/Dead-Rising.html' },
    { id: 'g7', title: 'Dead Space (Remake)', genre: 'Survival Horror', platforms: 'PC/PS/Xbox', year: '2023', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&q=80', url: 'juegos/Dead-Space.html' },
    { id: 'g8', title: 'Dying Light 2', genre: 'Survival Horror', platforms: 'PC/PS/Xbox', year: '2022', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&q=80', url: 'juegos/Dying-Light-2.html' },
    { id: 'g9', title: 'Killing Floor 2', genre: 'FPS Co-op', platforms: 'PC/PS', year: '2016', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80', url: 'juegos/Killing-Floor-2.html' },
    { id: 'g10', title: 'Left 4 Dead 2', genre: 'FPS Co-op', platforms: 'PC', year: '2009', img: 'https://images.unsplash.com/photo-1550978934-490278542c93?w=400&q=80', url: 'juegos/Left-4-Dead-2.html' },
    { id: 'g11', title: 'No More Room in Hell', genre: 'Survival Horror', platforms: 'PC (Gratis)', year: '2011', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80', url: 'juegos/No-More-Room-in-Hell.html' },
    { id: 'g12', title: 'Plants vs. Zombies', genre: 'Estrategia', platforms: 'Multiplataforma', year: '2009', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80', url: 'juegos/Plants-vs-Zombies.html' },
    { id: 'g13', title: 'Project Zomboid', genre: 'Survival', platforms: 'PC', year: '2013', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80', url: 'juegos/Project-Zomboid.html' },
    { id: 'g14', title: 'Resident Evil Village', genre: 'Survival Horror', platforms: 'PC/PS/Xbox', year: '2021', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80', url: 'juegos/Resident-Evil-Village.html', featured: true },
    { id: 'g15', title: 'State of Decay 2', genre: 'Survival', platforms: 'PC/Xbox', year: '2018', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80', url: 'juegos/State-of-Decay-2.html' },
    { id: 'g16', title: 'The Last of Us Part II', genre: 'Aventura/Narrativo', platforms: 'PS/PC', year: '2020', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80', url: 'juegos/The-Last-of-Us-Part-II.html' },
    { id: 'g17', title: 'They Are Billions', genre: 'Estrategia', platforms: 'PC', year: '2019', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', url: 'juegos/They-Are-Billions.html' },
    { id: 'g18', title: 'Unturned', genre: 'Survival', platforms: 'PC (Gratis)', year: '2017', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80', url: 'juegos/Unturned.html' },
    { id: 'g19', title: 'World War Z', genre: 'FPS Co-op', platforms: 'PC/PS/Xbox', year: '2019', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80', url: 'juegos/World-War-Z.html' },
    { id: 'g20', title: 'Zombie Army 4: Dead War', genre: 'FPS Co-op', platforms: 'PC/PS/Xbox', year: '2020', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80', url: 'juegos/Zombie-Army-4.html' },
    { id: 'g21', title: 'Dead Trigger 2', genre: 'FPS', platforms: 'Android/iOS', year: '2013', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80', url: 'juegos/Dead-Trigger-2.html' },
    { id: 'g22', title: 'Into the Dead 2', genre: 'Runner', platforms: 'Android/iOS', year: '2017', img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80', url: 'juegos/Into-the-Dead-2.html' },
    { id: 'g23', title: 'Last Day on Earth: Survival', genre: 'Survival', platforms: 'Android/iOS', year: '2017', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', url: 'juegos/Last-Day-on-Earth.html' },
    { id: 'g24', title: 'Mini DAYZ', genre: 'Survival', platforms: 'Android/iOS', year: '2017', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80', url: 'juegos/Mini-DAYZ.html' },
    { id: 'g25', title: 'Unkilled', genre: 'FPS', platforms: 'Android/iOS', year: '2015', img: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80', url: 'juegos/Unkilled.html' },
    { id: 'g26', title: 'Zombie Age 3', genre: 'Acción', platforms: 'Android/iOS', year: '2017', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80', url: 'juegos/Zombie-Age-3.html' },
    { id: 'g27', title: 'Zombie Tsunami', genre: 'Casual', platforms: 'Android/iOS', year: '2012', img: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80', url: 'juegos/Zombie-Tsunami.html' },
  ],
};

/* ============================================
   FUNCIONES DE CREACIÓN DE TARJETAS
   ============================================ */

/**
 * Crea una tarjeta HTML para libros/películas/series/animes/cómics/relatos
 */
function createStandardCard(item, typeClass, typeLabel, badgeText) {
  const featuredClass = item.featured ? ' featured' : '';
  const badge = item.featured ? '⭐ Destacado' : (badgeText || typeLabel);
  
  return `
    <a href="${item.url}" class="${typeClass}-card${featuredClass}">
      <img src="${item.img}" alt="${item.title}" class="${typeClass}-card-img" 
           onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
      <div class="${typeClass}-card-overlay"></div>
      <div class="${typeClass}-card-content">
        <div class="${typeClass}-card-title">${item.title}</div>
        <div class="${typeClass}-card-badge">${badge}</div>
      </div>
    </a>
  `;
}

/**
 * Crea una tarjeta para cortometrajes
 */
function createCortoCard(item) {
  const featuredClass = item.featured ? ' featured' : '';
  const badge = item.featured ? '⭐ Destacado' : item.lang;
  const duration = item.duration ? `<span class="corto-card-duration">${item.duration}</span>` : '';
  
  return `
    <a href="${item.url}" class="corto-card${featuredClass}">
      <img src="${item.img}" alt="${item.title}" class="corto-card-img"
           onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
      <div class="corto-card-overlay"></div>
      <div class="corto-card-play">▶</div>
      <div class="corto-card-content">
        <div class="corto-card-title">${item.title} (${item.year})</div>
        <div class="corto-card-meta">
          <span class="corto-card-badge ${item.lang === 'Latino' ? 'latino' : ''}">${badge}</span>
          ${duration}
        </div>
      </div>
    </a>
  `;
}

/**
 * Crea una tarjeta para juegos
 */
function createGameCard(item) {
  const featuredClass = item.featured ? ' featured' : '';
  const badge = item.featured ? '⭐ Destacado' : item.genre;
  
  return `
    <a href="${item.url}" class="game-card${featuredClass}">
      <img src="${item.img}" alt="${item.title}" class="game-card-img"
           onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
      <div class="game-card-overlay"></div>
      <div class="game-card-content">
        <div class="game-card-title">${item.title}</div>
        <div class="game-card-meta">
          <span class="game-card-badge">${badge}</span>
          <span class="game-card-platform">${item.platforms}</span>
        </div>
      </div>
    </a>
  `;
}

/* ============================================
   ZOMBIE-TK - Base de Datos Central (Parte 3 de 3)
   Funciones de Renderizado e Inicialización
   ============================================ */

/**
 * Renderiza la página de libros
 */
function renderLibros(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.libros.map(item => 
    createStandardCard(item, 'libro', 'Libro', 'Libro')
  ).join('');
  
  console.log(`📚 Libros renderizados: ${ZOMBIE_DB.libros.length}`);
}

/**
 * Renderiza la página de películas
 */
function renderPeliculas(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.peliculas.map(item => 
    createStandardCard(item, 'pelicula', 'Película', 'Película')
  ).join('');
  
  console.log(`🎬 Películas renderizadas: ${ZOMBIE_DB.peliculas.length}`);
}

/**
 * Renderiza la página de series
 */
function renderSeries(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.series.map(item => 
    createStandardCard(item, 'serie', 'Serie', 'Serie')
  ).join('');
  
  console.log(`📺 Series renderizadas: ${ZOMBIE_DB.series.length}`);
}

/**
 * Renderiza la página de animes
 */
function renderAnimes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.animes.map(item => 
    createStandardCard(item, 'anime', 'Anime', 'Anime')
  ).join('');
  
  console.log(`🎌 Animes renderizados: ${ZOMBIE_DB.animes.length}`);
}

/**
 * Renderiza la página de cómics
 */
function renderComics(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.comics.map(item => 
    createStandardCard(item, 'comic', 'Cómic', item.publisher)
  ).join('');
  
  console.log(`💥 Cómics renderizados: ${ZOMBIE_DB.comics.length}`);
}

/**
 * Renderiza la página de cortometrajes
 */
function renderCortometrajes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.cortometrajes.map(item => 
    createCortoCard(item)
  ).join('');
  
  console.log(`🎬 Cortometrajes renderizados: ${ZOMBIE_DB.cortometrajes.length}`);
}

/**
 * Renderiza la página de relatos
 */
function renderRelatos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.relatos.map(item => 
    createStandardCard(item, 'relato', 'Relato', 'Relato')
  ).join('');
  
  console.log(`✍️ Relatos renderizados: ${ZOMBIE_DB.relatos.length}`);
}

/**
 * Renderiza la página de juegos
 */
function renderJuegos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = ZOMBIE_DB.juegos.map(item => 
    createGameCard(item)
  ).join('');
  
  console.log(`🎮 Juegos renderizados: ${ZOMBIE_DB.juegos.length}`);
}

/**
 * Actualiza los contadores del menú hamburguesa
 * leyendo la longitud de los arrays en ZOMBIE_DB
 */
function updateMenuCounters() {
  const counters = {
    'menu-count-libros': ZOMBIE_DB.libros ? ZOMBIE_DB.libros.length : 0,
    'menu-count-peliculas': ZOMBIE_DB.peliculas ? ZOMBIE_DB.peliculas.length : 0,
    'menu-count-series': ZOMBIE_DB.series ? ZOMBIE_DB.series.length : 0,
    'menu-count-animes': ZOMBIE_DB.animes ? ZOMBIE_DB.animes.length : 0,
    'menu-count-comics': ZOMBIE_DB.comics ? ZOMBIE_DB.comics.length : 0,
    'menu-count-cortos': ZOMBIE_DB.cortometrajes ? ZOMBIE_DB.cortometrajes.length : 0,
    'menu-count-relatos': ZOMBIE_DB.relatos ? ZOMBIE_DB.relatos.length : 0,
    'menu-count-juegos': ZOMBIE_DB.juegos ? ZOMBIE_DB.juegos.length : 0
  };

  Object.keys(counters).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = counters[id];
    }
  });
  
  console.log('📊 Contadores del menú actualizados desde database.js');
}

/**
 * Inicializa el renderizado según la página actual
 */
function initDatabase() {
  // Actualizar contadores del menú
  updateMenuCounters();
  
  // Detectar qué página estamos y renderizar
  const path = window.location.pathname;
  
  if (path.includes('libros.html')) {
    renderLibros('librosGrid');
  } else if (path.includes('peliculas.html')) {
    renderPeliculas('peliculasGrid');
  } else if (path.includes('series.html')) {
    renderSeries('seriesGrid');
  } else if (path.includes('animes.html')) {
    renderAnimes('animesGrid');
  } else if (path.includes('comics.html')) {
    renderComics('comicsGrid');
  } else if (path.includes('cortometrajes.html')) {
    renderCortometrajes('cortosGrid');
  } else if (path.includes('relatos.html')) {
    renderRelatos('relatosGrid');
  } else if (path.includes('juegos.html')) {
    renderJuegos('juegosGrid');
  }
  
  console.log('🧟 Zombie-TK Database inicializada');
  console.log('📊 Total de ítems:', 
    ZOMBIE_DB.libros.length + ZOMBIE_DB.peliculas.length + 
    ZOMBIE_DB.series.length + ZOMBIE_DB.animes.length + 
    ZOMBIE_DB.comics.length + ZOMBIE_DB.cortometrajes.length + 
    ZOMBIE_DB.relatos.length + ZOMBIE_DB.juegos.length
  );
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDatabase);
} else {
  initDatabase();
}
