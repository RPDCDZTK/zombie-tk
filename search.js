/* ============================================
   ZOMBIE-TK - search.js (Parte 1 de 8)
   Función auxiliar + Primeros 50 libros
   ============================================ */

function getAlphaFile(name, type) {
  const firstChar = name.charAt(0).toUpperCase();
  let range = '';
  
  if (/[0-9]/.test(firstChar)) range = '0-9';
  else if (['A','B'].includes(firstChar)) range = 'A-B';
  else if (['C','D'].includes(firstChar)) range = 'C-D';
  else if (['E','F'].includes(firstChar)) range = 'E-F';
  else if (['G','H'].includes(firstChar)) range = 'G-H';
  else if (['I','J'].includes(firstChar)) range = 'I-J';
  else if (['K','L'].includes(firstChar)) range = 'K-L';
  else if (['M','N'].includes(firstChar)) range = 'M-N';
  else if (['O','P'].includes(firstChar)) range = 'O-P';
  else if (['Q','R'].includes(firstChar)) range = 'Q-R';
  else if (['S','T'].includes(firstChar)) range = 'S-T';
  else if (['U','V'].includes(firstChar)) range = 'U-V';
  else if (['W','X'].includes(firstChar)) range = 'W-X';
  else if (['Y','Z'].includes(firstChar)) range = 'Y-Z';
  
  return `${type}/${range}.html`;
}

const contentDatabase = [
  // 📚 LIBROS (1-50)
  { id: 'b1', title: '#Spanishinfection', type: 'libro', typeLabel: 'Libro', author: 'Tomás Haya', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('#Spanishinfection', 'libros') },
  { id: 'b2', title: '99.Z', type: 'libro', typeLabel: 'Libro', author: 'Jordi Llavoré', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('99.Z', 'libros') },
  { id: 'b3', title: '1936Z. La Guerra Civil zombi', type: 'libro', typeLabel: 'Libro', author: 'Javier Cosnava', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('1936Z', 'libros') },
  { id: 'b4', title: 'Afuera Estan Los Zombies', type: 'libro', typeLabel: 'Libro', author: 'Santiago Repetto', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Afuera', 'libros') },
  { id: 'b5', title: 'Ahora el Silencio', type: 'libro', typeLabel: 'Libro', author: 'Luis Martínez Vallés', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Ahora', 'libros') },
  { id: 'b6', title: 'American Zombie', type: 'libro', typeLabel: 'Libro', author: 'Miguel Barqueros Gonnet', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('American', 'libros') },
  { id: 'b7', title: 'Antidoto', type: 'libro', typeLabel: 'Libro', author: 'Jeff Carlson', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Antidoto', 'libros') },
  { id: 'b8', title: 'Antirresurreccion', type: 'libro', typeLabel: 'Libro', author: 'Juan Ramon Biedma', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Antirresurreccion', 'libros') },
  { id: 'b9', title: 'Antologia Z - Volumen 1', type: 'libro', typeLabel: 'Libro', author: 'Varios autores', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Antologia', 'libros') },
  { id: 'b10', title: 'Antologia Z Somos Leyenda', type: 'libro', typeLabel: 'Libro', author: 'Alvaro Peiro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Antologia', 'libros') },
  { id: 'b11', title: 'Apocalipsis Island I', type: 'libro', typeLabel: 'Libro', author: 'Vicente Garcia', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Apocalipsis', 'libros') },
  { id: 'b12', title: 'Apocalipsis Island II - Origenes', type: 'libro', typeLabel: 'Libro', author: 'J.D.', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Apocalipsis', 'libros') },
  { id: 'b13', title: 'Apocalipsis Island III - Mision Africa', type: 'libro', typeLabel: 'Libro', author: 'Vicente Garcia', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Apocalipsis', 'libros') },
  { id: 'b14', title: 'Apocalipsis Z - Comic', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Apocalipsis', 'libros') },
  { id: 'b15', title: 'Apocalipsis Z - Tomo 1', type: 'libro', typeLabel: 'Libro', author: 'Manel Loureiro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Apocalipsis', 'libros') },
  { id: 'b16', title: 'Apocalipsis Z - Tomo 2 Los Días Oscuros', type: 'libro', typeLabel: 'Libro', author: 'Manel Loureiro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Apocalipsis', 'libros') },
  { id: 'b17', title: 'Apocalipsis Z - Tomo 3 La Ira de los justos', type: 'libro', typeLabel: 'Libro', author: 'Manel Loureiro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Apocalipsis', 'libros') },
  { id: 'b18', title: 'Arena', type: 'libro', typeLabel: 'Libro', author: 'Guillermo Ruiz Buenrostro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Arena', 'libros') },
  { id: 'b19', title: 'Aurora', type: 'libro', typeLabel: 'Libro', author: 'Cesar Blanco Castro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Aurora', 'libros') },
  { id: 'b20', title: 'Autumn 01 - Septiembre Zombi', type: 'libro', typeLabel: 'Libro', author: 'David Moody', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Autumn', 'libros') },
  { id: 'b21', title: 'Autumn 02 - Ciudad Zombie', type: 'libro', typeLabel: 'Libro', author: 'David Moody', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Autumn', 'libros') },
  { id: 'b22', title: 'Autumn 03 - Zona Zombie', type: 'libro', typeLabel: 'Libro', author: 'David Moody', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Autumn', 'libros') },
  { id: 'b23', title: 'Berzerk', type: 'libro', typeLabel: 'Libro', author: 'Tim Lebbon', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Berzerk', 'libros') },
  { id: 'b24', title: 'Boneshaker', type: 'libro', typeLabel: 'Libro', author: 'Cherie Priest', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Boneshaker', 'libros') },
  { id: 'b25', title: 'Buscaré el Océano', type: 'libro', typeLabel: 'Libro', author: 'Carrie Ryan', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Buscaré', 'libros') },
  { id: 'b26', title: 'Cadaveres Chiquititos - Antologia', type: 'libro', typeLabel: 'Libro', author: 'Arg Vidal', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cadaveres', 'libros') },
  { id: 'b27', title: 'Caminarán Sobre la Tierra', type: 'libro', typeLabel: 'Libro', author: 'Miguel Aguerralde', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Caminarán', 'libros') },
  { id: 'b28', title: 'Cell', type: 'libro', typeLabel: 'Libro', author: 'Stephen King', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cell', 'libros') },
  { id: 'b29', title: 'Cenizas', type: 'libro', typeLabel: 'Libro', author: 'Ilsa J. Bick', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cenizas', 'libros') },
  { id: 'b30', title: 'Ciudad Humana', type: 'libro', typeLabel: 'Libro', author: 'Carlos J. Lluch', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Ciudad', 'libros') },
  { id: 'b31', title: 'Ciudad Infernal - Infernal 1', type: 'libro', typeLabel: 'Libro', author: 'Edward Lee', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Ciudad', 'libros') },
  { id: 'b32', title: 'Clementine', type: 'libro', typeLabel: 'Libro', author: 'Cherie Priest', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Clementine', 'libros') },
  { id: 'b33', title: 'Colegio Z - Ala Este', type: 'libro', typeLabel: 'Libro', author: 'Ignacio Mañez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Colegio', 'libros') },
  { id: 'b34', title: 'ComecocoZ', type: 'libro', typeLabel: 'Libro', author: 'Victor Mañez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('ComecocoZ', 'libros') },
  { id: 'b35', title: 'Conducción en tiempo de zombies I', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Conducción', 'libros') },
  { id: 'b36', title: 'Conducción en tiempo de zombies II', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Conducción', 'libros') },
  { id: 'b37', title: 'Conducción en tiempo de zombis III', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Conducción', 'libros') },
  { id: 'b38', title: 'Conducción en tiempo de zombis IV', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Conducción', 'libros') },
  { id: 'b39', title: 'Conducción en tiempo de zombis V', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Conducción', 'libros') },
  { id: 'b40', title: 'Conspiración Zombie', type: 'libro', typeLabel: 'Libro', author: 'Martin Cagliani', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Conspiración', 'libros') },
  { id: 'b41', title: 'Convirtiéndome en Zombi I - Muriendo', type: 'libro', typeLabel: 'Libro', author: 'Kassfinol', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Convirtiéndome', 'libros') },
  { id: 'b42', title: 'Convirtiéndome en Zombi II - Matando Para', type: 'libro', typeLabel: 'Libro', author: 'Kassfinol', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Convirtiéndome', 'libros') },
  { id: 'b43', title: 'Cronica Zombi 00 - Preludios', type: 'libro', typeLabel: 'Libro', author: 'Conesa', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cronica', 'libros') },
  { id: 'b44', title: 'Cronica Zombi 01 - El Lamento', type: 'libro', typeLabel: 'Libro', author: 'Conesa', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cronica', 'libros') },
  { id: 'b45', title: 'Cronica Zombi 02 - Tierra de muertos', type: 'libro', typeLabel: 'Libro', author: 'Conesa', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cronica', 'libros') },
  { id: 'b46', title: 'Cuando Susanah Llora', type: 'libro', typeLabel: 'Libro', author: 'J. J. Castillo', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cuando', 'libros') },
  { id: 'b47', title: 'Cuarentena - La caida de Madrid', type: 'libro', typeLabel: 'Libro', author: 'Jesus Martin', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Cuarentena', 'libros') },
  { id: 'b48', title: 'De Madrid al Zielo (Linea Z)', type: 'libro', typeLabel: 'Libro', author: 'Alfonso Zamora Llorente', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('De', 'libros') },
  { id: 'b49', title: 'Degeneración', type: 'libro', typeLabel: 'Libro', author: 'David Pardo', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Degeneración', 'libros') },
  { id: 'b50', title: 'Descansa en Paz', type: 'libro', typeLabel: 'Libro', author: 'John Ajvide Lindqvist', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Descansa', 'libros') },
   // 📚 LIBROS (51-100)
  { id: 'b51', title: 'Dia de la Z - Volumen 1', type: 'libro', typeLabel: 'Libro', author: 'Mateo Rojas', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Dia', 'libros') },
  { id: 'b52', title: 'Diario de un Zombi', type: 'libro', typeLabel: 'Libro', author: 'Sergi Llauger', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Diario', 'libros') },
  { id: 'b53', title: 'Diario de una Invasión Zombie 01', type: 'libro', typeLabel: 'Libro', author: 'J. L. Bourne', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Diario', 'libros') },
  { id: 'b54', title: 'Diario de una Invasión Zombie 02', type: 'libro', typeLabel: 'Libro', author: 'L. Bourne', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Diario', 'libros') },
  { id: 'b55', title: 'Diario de una Invasión Zombie 03', type: 'libro', typeLabel: 'Libro', author: 'R...L. Bourne', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Diario', 'libros') },
  { id: 'b56', title: 'Érase una veZ', type: 'libro', typeLabel: 'Libro', author: 'Varios Autores', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Érase', 'libros') },
  { id: 'b57', title: 'Earthus, Terrorismo Zombi', type: 'libro', typeLabel: 'Libro', author: 'Jose Manuel Tabares', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Earthus', 'libros') },
  { id: 'b58', title: 'Eden interrumpido', type: 'libro', typeLabel: 'Libro', author: 'Carlos Sisi', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Eden', 'libros') },
  { id: 'b59', title: 'El Alzamiento', type: 'libro', typeLabel: 'Libro', author: 'Brian Keene', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b60', title: 'El Apocalipsis de los Muertos', type: 'libro', typeLabel: 'Libro', author: 'Joe McKinney', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b61', title: 'El camino de la cabra 00 - El Despertar', type: 'libro', typeLabel: 'Libro', author: 'Perez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b62', title: 'El camino de la cabra 01 - Secuestrados', type: 'libro', typeLabel: 'Libro', author: 'Perez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b63', title: 'El camino de la cabra 02 - De Perdidos al Rio', type: 'libro', typeLabel: 'Libro', author: 'Perez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b64', title: 'El camino de la cabra 03 - La Oscura Senda', type: 'libro', typeLabel: 'Libro', author: 'Perez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b65', title: 'El Carnaval de los Muertos', type: 'libro', typeLabel: 'Libro', author: 'Pau Varela', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b66', title: 'El Cuarto Jinete', type: 'libro', typeLabel: 'Libro', author: 'Victor Blazquez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b67', title: 'El Despertar', type: 'libro', typeLabel: 'Libro', author: 'Elio Quiroga', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b68', title: 'El Hombre del Niño Muerto', type: 'libro', typeLabel: 'Libro', author: 'Emilio B. Cordoba', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b69', title: 'El Jardin Impio', type: 'libro', typeLabel: 'Libro', author: 'Juan Miguel Fernandez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b70', title: 'El Lenguaje de los Muertos', type: 'libro', typeLabel: 'Libro', author: 'Brian Lumley', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b71', title: 'El Reino de los Zombis I', type: 'libro', typeLabel: 'Libro', author: 'Len Barnhart', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b72', title: 'El Reino de los Zombis II - El Final', type: 'libro', typeLabel: 'Libro', author: 'Barnhart', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b73', title: 'El Ultimo Pasajero', type: 'libro', typeLabel: 'Libro', author: 'Manel Loureiro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('El', 'libros') },
  { id: 'b74', title: 'Epidemia', type: 'libro', typeLabel: 'Libro', author: 'Jeff Carlson', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Epidemia', 'libros') },
  { id: 'b75', title: 'Extinción, El Accidente', type: 'libro', typeLabel: 'Libro', author: 'Ramon Hernandez Periañez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Extinción', 'libros') },
  { id: 'b76', title: 'Extinción, Zona Zero Zombie', type: 'libro', typeLabel: 'Libro', author: 'Martin Rae', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Extinción', 'libros') },
  { id: 'b77', title: 'Feed', type: 'libro', typeLabel: 'Libro', author: 'Mira Grant', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Feed', 'libros') },
  { id: 'b78', title: 'Gangsters Zombies', type: 'libro', typeLabel: 'Libro', author: 'Roberto J. Rodriguez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Gangsters', 'libros') },
  { id: 'b79', title: 'Generación Zombi Hollywood', type: 'libro', typeLabel: 'Libro', author: 'Julia Campo', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Generación', 'libros') },
  { id: 'b80', title: 'Generation Dead 1', type: 'libro', typeLabel: 'Libro', author: 'Waters', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Generation', 'libros') },
  { id: 'b81', title: 'Generation Dead 2 - Beso de Vida', type: 'libro', typeLabel: 'Libro', author: 'Daniel Waters', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Generation', 'libros') },
  { id: 'b82', title: 'Guerra Mundial Z', type: 'libro', typeLabel: 'Libro', author: 'Max Brooks', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Guerra', 'libros') },
  { id: 'b83', title: 'Hallazgo Fatidico', type: 'libro', typeLabel: 'Libro', author: 'Sheri S. Tepper', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hallazgo', 'libros') },
  { id: 'b84', title: 'Hay 666 zombis por persona', type: 'libro', typeLabel: 'Libro', author: 'Boris Dekker', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hay', 'libros') },
  { id: 'b85', title: 'Hay 777 zombis por persona', type: 'libro', typeLabel: 'Libro', author: 'Boris Dekker', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hay', 'libros') },
  { id: 'b86', title: 'Hay 1001 zombis por persona 0', type: 'libro', typeLabel: 'Libro', author: 'Boris Dekker', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hay', 'libros') },
  { id: 'b87', title: 'Hay 1001 zombis por persona 1', type: 'libro', typeLabel: 'Libro', author: 'Boris Dekker', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hay', 'libros') },
  { id: 'b88', title: 'Hay 1001 zombis por persona 2', type: 'libro', typeLabel: 'Libro', author: 'Boris Dekker', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hay', 'libros') },
  { id: 'b89', title: 'Hay 1001 zombis por persona 3', type: 'libro', typeLabel: 'Libro', author: 'Boris Dekker', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hay', 'libros') },
  { id: 'b90', title: 'Hay 1001 zombis por persona 5', type: 'libro', typeLabel: 'Libro', author: 'Boris Dekker', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hay', 'libros') },
  { id: 'b91', title: 'Hollowland', type: 'libro', typeLabel: 'Libro', author: 'Amanda Hocking', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hollowland', 'libros') },
  { id: 'b92', title: 'Hollowmen', type: 'libro', typeLabel: 'Libro', author: 'Amanda Hocking', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Hollowmen', 'libros') },
  { id: 'b93', title: 'I Hispano Antologia Zombie', type: 'libro', typeLabel: 'Libro', author: 'Varios Autores', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('I', 'libros') },
  { id: 'b94', title: 'Infectus', type: 'libro', typeLabel: 'Libro', author: 'Angel Villan', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Infectus', 'libros') },
  { id: 'b95', title: 'Instinto de Superviviente', type: 'libro', typeLabel: 'Libro', author: 'Dario Vilas', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Instinto', 'libros') },
  { id: 'b96', title: 'Jente Aki', type: 'libro', typeLabel: 'Libro', author: 'Antonio Municio', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Jente', 'libros') },
  { id: 'b97', title: 'Julio César', type: 'libro', typeLabel: 'Libro', author: 'Jose y Pablo Rodriguez Vazquez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Julio', 'libros') },
  { id: 'b98', title: 'La Casa de Bernarda Alba zombi', type: 'libro', typeLabel: 'Libro', author: 'Jorge de Barnola', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b99', title: 'La Ciudad de los Muertos', type: 'libro', typeLabel: 'Libro', author: 'Brian Keene', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b100', title: 'La Ciudad Silenciosa', type: 'libro', typeLabel: 'Libro', author: 'Jose Luis Caballero', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
   // 📚 LIBROS (101-150)
  { id: 'b101', title: 'La Hora del Mar', type: 'libro', typeLabel: 'Libro', author: 'Carlos Sisi', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b102', title: 'La Ira de los Angeles', type: 'libro', typeLabel: 'Libro', author: 'Alden Bell', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b103', title: 'La Isla de la Calma', type: 'libro', typeLabel: 'Libro', author: 'Jesus Miguel Saldon Andrades', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b104', title: 'La Isla de los Muertos', type: 'libro', typeLabel: 'Libro', author: 'Roger Zelazny', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b105', title: 'La Isla del Tesoro Z', type: 'libro', typeLabel: 'Libro', author: 'Alejandro De-Bernardi', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b106', title: 'La Marcha Zombi', type: 'libro', typeLabel: 'Libro', author: 'Max Brooks', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b107', title: 'La Muerte Escarlata', type: 'libro', typeLabel: 'Libro', author: 'Antonio Calzado', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b108', title: 'La Muerte Negra - El Triunfo de los No Muertos', type: 'libro', typeLabel: 'Libro', author: 'Gonzalez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b109', title: 'La Noche De Los Trekkies Vivientes', type: 'libro', typeLabel: 'Libro', author: 'Anderson', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b110', title: 'La Plaga', type: 'libro', typeLabel: 'Libro', author: 'Jeff Carlson', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b111', title: 'La Zona', type: 'libro', typeLabel: 'Libro', author: 'Javier Negrete', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('La', 'libros') },
  { id: 'b112', title: 'Lantana, Donde Nace el Instinto', type: 'libro', typeLabel: 'Libro', author: 'Dario Vilas', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Lantana', 'libros') },
  { id: 'b113', title: 'Lazarillo Z', type: 'libro', typeLabel: 'Libro', author: 'Lazaro Gonzalez Perez de Tormes', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Lazarillo', 'libros') },
  { id: 'b114', title: 'Left 4 Dead #1', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Left', 'libros') },
  { id: 'b115', title: 'Left 4 Dead #2', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Left', 'libros') },
  { id: 'b116', title: 'Left 4 Dead #3', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Left', 'libros') },
  { id: 'b117', title: 'Left 4 Dead #4', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Left', 'libros') },
  { id: 'b118', title: 'Legado Zombi', type: 'libro', typeLabel: 'Libro', author: 'Carlos Sueiro', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Legado', 'libros') },
  { id: 'b119', title: 'Lleida Infectada', type: 'libro', typeLabel: 'Libro', author: 'Ivan Noya Cendal', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Lleida', 'libros') },
  { id: 'b120', title: 'Lluvia De Zombis 1', type: 'libro', typeLabel: 'Libro', author: 'Mark Tufo', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Lluvia', 'libros') },
  { id: 'b121', title: 'Lluvia De Zombis 2 - Una Plaga', type: 'libro', typeLabel: 'Libro', author: 'Mark Tufo', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Lluvia', 'libros') },
  { id: 'b122', title: 'Los Caminantes 1', type: 'libro', typeLabel: 'Libro', author: 'Carlos Sisi', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b123', title: 'Los Caminantes 2 - Necropolis', type: 'libro', typeLabel: 'Libro', author: 'Carlos Sisi', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b124', title: 'Los Caminantes 3 - Hades Nebula', type: 'libro', typeLabel: 'Libro', author: 'Carlos Sisi', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b125', title: 'Los Dientes De Los Angeles', type: 'libro', typeLabel: 'Libro', author: 'Jonathan Carroll', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b126', title: 'Los Feos 1 - Traición', type: 'libro', typeLabel: 'Libro', author: 'Scott Westerfeld', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b127', title: 'Los Feos 2 - Perfección', type: 'libro', typeLabel: 'Libro', author: 'Scott Westerfeld', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b128', title: 'Los Feos 3 - Especiales', type: 'libro', typeLabel: 'Libro', author: 'Scott Westerfeld', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b129', title: 'Los Feos 4 - Extras', type: 'libro', typeLabel: 'Libro', author: 'Scott Westerfeld', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b130', title: 'Los Mejores', type: 'libro', typeLabel: 'Libro', author: 'Franscisco Angulo', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b131', title: 'Los Muertos y los Condenados', type: 'libro', typeLabel: 'Libro', author: 'Green', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b132', title: 'Los Primeros Días', type: 'libro', typeLabel: 'Libro', author: 'Rhiannon Frater', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Los', 'libros') },
  { id: 'b133', title: 'Lucifer 113 (Eclipse)', type: 'libro', typeLabel: 'Libro', author: 'Jonathan Maberry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Lucifer', 'libros') },
  { id: 'b134', title: 'Mi Novia es un Zombi', type: 'libro', typeLabel: 'Libro', author: 'Roberto Corro Cuadrado', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Mi', 'libros') },
  { id: 'b135', title: 'Muerta Entre los Vivos, Viva Entre los Muertos', type: 'libro', typeLabel: 'Libro', author: 'Somoza', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Muerta', 'libros') },
  { id: 'b136', title: 'Naturaleza Muerta (Linea Z)', type: 'libro', typeLabel: 'Libro', author: 'Victor Conde', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Naturaleza', 'libros') },
  { id: 'b137', title: 'Noche de Difuntos del 38', type: 'libro', typeLabel: 'Libro', author: 'Manuel Martin Ferreras', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Noche', 'libros') },
  { id: 'b138', title: 'Nueva York Hora Z', type: 'libro', typeLabel: 'Libro', author: 'Craig Dilouie', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Nueva', 'libros') },
  { id: 'b139', title: 'Odio', type: 'libro', typeLabel: 'Libro', author: 'David Moody', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Odio', 'libros') },
  { id: 'b140', title: 'Oh No! ¡Voy a Convertirme en Zombi!', type: 'libro', typeLabel: 'Libro', author: 'Greenfield', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Oh', 'libros') },
  { id: 'b141', title: 'Orgullo y Prejuicio - El Amanecer', type: 'libro', typeLabel: 'Libro', author: 'Smith', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Orgullo', 'libros') },
  { id: 'b142', title: 'Orgullo y Prejuicio y Zombis', type: 'libro', typeLabel: 'Libro', author: 'Seth Grahame-Smith', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Orgullo', 'libros') },
  { id: 'b143', title: 'Orgullo Z', type: 'libro', typeLabel: 'Libro', author: 'Juan Flahn', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Orgullo', 'libros') },
  { id: 'b144', title: 'Paciente Cero - Joe Ledger 1', type: 'libro', typeLabel: 'Libro', author: 'Jonathan Maberry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Paciente', 'libros') },
  { id: 'b145', title: 'Pandemon, Historia de una Extinción', type: 'libro', typeLabel: 'Libro', author: 'Luzón', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Pandemon', 'libros') },
  { id: 'b146', title: 'Paria Z', type: 'libro', typeLabel: 'Libro', author: 'Bob Fingerman', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Paria', 'libros') },
  { id: 'b147', title: 'Península Z', type: 'libro', typeLabel: 'Libro', author: 'Javier Lacomba Tamarit', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Península', 'libros') },
  { id: 'b148', title: 'Peta Z, No Mezclar con Refresco', type: 'libro', typeLabel: 'Libro', author: 'Gonzalez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Peta', 'libros') },
  { id: 'b149', title: 'Quijote Z', type: 'libro', typeLabel: 'Libro', author: 'Hazael G. Gonzalez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Quijote', 'libros') },
  { id: 'b150', title: 'R y Julie - Memorias de un Zombie', type: 'libro', typeLabel: 'Libro', author: 'Marion', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('R', 'libros') },
   // 📚 LIBROS (151-211)
  { id: 'b151', title: 'Recién Muertos - Antología de Relatos', type: 'libro', typeLabel: 'Libro', author: 'Lucas L. Lair', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Recién', 'libros') },
  { id: 'b152', title: 'Reset', type: 'libro', typeLabel: 'Libro', author: 'Raul Valcarcel', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Reset', 'libros') },
  { id: 'b153', title: 'Resident Evil #1', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b154', title: 'Resident Evil #2', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b155', title: 'Resident Evil #3', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b156', title: 'Resident Evil #4', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b157', title: 'Resident Evil #5 Especial', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b158', title: 'Resident Evil 01 - Hora Cero', type: 'libro', typeLabel: 'Libro', author: 'S. D. Perry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b159', title: 'Resident Evil 02 - La Conspiracion', type: 'libro', typeLabel: 'Libro', author: 'S. D. Perry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b160', title: 'Resident Evil 03 - Ensenada Caliban', type: 'libro', typeLabel: 'Libro', author: 'S. D. Perry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b161', title: 'Resident Evil 04 - La Ciudad De Los Muertos', type: 'libro', typeLabel: 'Libro', author: 'S. D. Perry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b162', title: 'Resident Evil 05 - Inframundo', type: 'libro', typeLabel: 'Libro', author: 'S. D. Perry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b163', title: 'Resident Evil 06 - Nemesis', type: 'libro', typeLabel: 'Libro', author: 'S. D. Perry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b164', title: 'Resident Evil 07 - Codigo Veronica', type: 'libro', typeLabel: 'Libro', author: 'S. D. Perry', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Resident', 'libros') },
  { id: 'b165', title: 'Santuario', type: 'libro', typeLabel: 'Libro', author: 'King Sherri L', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Santuario', 'libros') },
  { id: 'b166', title: 'Sherlock Holmes y los zombis', type: 'libro', typeLabel: 'Libro', author: 'Aroca', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Sherlock', 'libros') },
  { id: 'b167', title: 'Show Me The Zombies', type: 'libro', typeLabel: 'Libro', author: 'Varios Autores', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Show', 'libros') },
  { id: 'b168', title: 'Sibmoz', type: 'libro', typeLabel: 'Libro', author: 'Javier Almenar Pulido', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Sibmoz', 'libros') },
  { id: 'b169', title: 'Sobreviviendo en un Mundo Zombie', type: 'libro', typeLabel: 'Libro', author: 'R.D.G.', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Sobreviviendo', 'libros') },
  { id: 'b170', title: 'Solos', type: 'libro', typeLabel: 'Libro', author: 'Adam Baker', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Solos', 'libros') },
  { id: 'b171', title: 'Sopa de Cristales', type: 'libro', typeLabel: 'Libro', author: 'Jonathan Carroll', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Sopa', 'libros') },
  { id: 'b172', title: 'Soy leyenda', type: 'libro', typeLabel: 'Libro', author: 'Richard Matheson', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Soy', 'libros') },
  { id: 'b173', title: 'Star Wars, Las Tropas de la Muerte', type: 'libro', typeLabel: 'Libro', author: 'Joe Schreiber', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Star', 'libros') },
  { id: 'b174', title: 'Superviviente', type: 'libro', typeLabel: 'Libro', author: 'Juan Garcia Hernandez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Superviviente', 'libros') },
  { id: 'b175', title: 'Terror en el Fin del Mundo', type: 'libro', typeLabel: 'Libro', author: 'James Wallestein', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Terror', 'libros') },
  { id: 'b176', title: 'The Walking dead - Woodbury', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b177', title: 'The Walking Dead - El Gobernador', type: 'libro', typeLabel: 'Libro', author: 'Kirkman', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b178', title: 'The Walking Dead - Guia de Supervivientes 1', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b179', title: 'The Walking Dead - Guia de Supervivientes 2', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b180', title: 'The Walking Dead - Guia de Supervivientes 3', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b181', title: 'The Walking Dead - Guia de Supervivientes 4', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b182', title: 'The Walking Dead - La Historia de Michonne', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b183', title: 'The Walking Dead - La Historia de Tyreese', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('The', 'libros') },
  { id: 'b184', title: 'Tom Z Stone', type: 'libro', typeLabel: 'Libro', author: 'Jose E. Álamo Gomez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Tom', 'libros') },
  { id: 'b185', title: 'Tom Z Stone 2 - Let it be', type: 'libro', typeLabel: 'Libro', author: 'Jose E. Álamo Gomez', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Tom', 'libros') },
  { id: 'b186', title: 'Trilogía de la Oscuridad 1 - Nocturna', type: 'libro', typeLabel: 'Libro', author: 'Hogan', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Trilogía', 'libros') },
  { id: 'b187', title: 'TWD 141', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('TWD', 'libros') },
  { id: 'b188', title: 'TWD 142', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('TWD', 'libros') },
  { id: 'b189', title: 'Última Esperanza Zombi - La Radio de Vlad', type: 'libro', typeLabel: 'Libro', author: 'Munoz', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Última', 'libros') },
  { id: 'b190', title: 'Una, Grande y Zombi', type: 'libro', typeLabel: 'Libro', author: 'Hernan Migoya', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Una', 'libros') },
  { id: 'b191', title: 'Undead Much', type: 'libro', typeLabel: 'Libro', author: 'Stacey Jay', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Undead', 'libros') },
  { id: 'b192', title: 'Ventana al Infierno', type: 'libro', typeLabel: 'Libro', author: 'Corral', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Ventana', 'libros') },
  { id: 'b193', title: 'Viviré Mañana I', type: 'libro', typeLabel: 'Libro', author: 'Hector Alonso', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Viviré', 'libros') },
  { id: 'b194', title: 'Viviré Mañana II - El Largo Invierno', type: 'libro', typeLabel: 'Libro', author: 'Hector Alonso', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Viviré', 'libros') },
  { id: 'b195', title: 'XXI', type: 'libro', typeLabel: 'Libro', author: 'Francisco Miguel Espinosa', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('XXI', 'libros') },
  { id: 'b196', title: 'XXXombies - #1', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('XXXombies', 'libros') },
  { id: 'b197', title: 'XXXombies - #2', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('XXXombies', 'libros') },
  { id: 'b198', title: 'XXXombies - #3', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('XXXombies', 'libros') },
  { id: 'b199', title: 'XXXombies - #4', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('XXXombies', 'libros') },
  { id: 'b200', title: 'Y pese a todo', type: 'libro', typeLabel: 'Libro', author: 'Juan de Dios Garduño', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Y', 'libros') },
  { id: 'b201', title: 'Ya Estamos Muertos', type: 'libro', typeLabel: 'Libro', author: 'Charlie Huston', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Ya', 'libros') },
  { id: 'b202', title: 'Yo Vote con un Zombi', type: 'libro', typeLabel: 'Libro', author: 'Publishing', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Yo', 'libros') },
  { id: 'b203', title: 'Z-Sides - Antologia', type: 'libro', typeLabel: 'Libro', author: '-', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Z-Sides', 'libros') },
  { id: 'b204', title: 'Zombi Kindergarten', type: 'libro', typeLabel: 'Libro', author: 'Pedro Escudero Zumel', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zombi', 'libros') },
  { id: 'b205', title: 'Zombie - Guia de supervivencia', type: 'libro', typeLabel: 'Libro', author: 'Max Brooks', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zombie', 'libros') },
  { id: 'b206', title: 'Zombie 1 - Zombie Island', type: 'libro', typeLabel: 'Libro', author: 'David Wellington', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zombie', 'libros') },
  { id: 'b207', title: 'Zombie 2 - Zombie Nation', type: 'libro', typeLabel: 'Libro', author: 'David Wellington', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zombie', 'libros') },
  { id: 'b208', title: 'Zombie 3 - Zombie Planet', type: 'libro', typeLabel: 'Libro', author: 'David Wellington', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zombie', 'libros') },
  { id: 'b209', title: 'Zombis.net', type: 'libro', typeLabel: 'Libro', author: 'James Trebuchet', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zombis', 'libros') },
  { id: 'b210', title: 'Zona Uno', type: 'libro', typeLabel: 'Libro', author: 'Colson Whitehead', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zona', 'libros') },
  { id: 'b211', title: 'Zoombie', type: 'libro', typeLabel: 'Libro', author: 'Alberto Bermudez Ortiz', img: 'img/libros/portada-generica.jpg', url: getAlphaFile('Zoombie', 'libros') },
   // 🎬 PELÍCULAS (1-100)
  { id: 'm1', title: '13 Eerie', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/13 Eerie (2013).jpg', url: getAlphaFile('13', 'peliculas') },
  { id: 'm2', title: '28 Days Later', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/28 Days Later (2002).jpg', url: getAlphaFile('28', 'peliculas') },
  { id: 'm3', title: '28 Weeks Later', type: 'pelicula', typeLabel: 'Película', year: '2007', img: 'img/peliculas/28 Weeks Later (2007).jpg', url: getAlphaFile('28', 'peliculas') },
  { id: 'm4', title: 'Aj Zombies', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Aj Zombies (2017).jpg', url: getAlphaFile('Aj', 'peliculas') },
  { id: 'm5', title: 'An Accidental Zombie', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/An Accidental Zombie (2017).jpg', url: getAlphaFile('An', 'peliculas') },
  { id: 'm6', title: 'Anger Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Anger Of The Dead (2014).jpg', url: getAlphaFile('Anger', 'peliculas') },
  { id: 'm7', title: 'Anna And The Apocalypse', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Anna And The Apocalypse (2018).jpg', url: getAlphaFile('Anna', 'peliculas') },
  { id: 'm8', title: 'Apocalipsis Zombie - Origenes', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Apocalipsis Zombie - Origenes.jpg', url: getAlphaFile('Apocalipsis', 'peliculas') },
  { id: 'm9', title: 'Attack Of The Lederhosen Zombies', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Attack Of The Lederhosen Zombies (2016).jpg', url: getAlphaFile('Attack', 'peliculas') },
  { id: 'm10', title: 'Black Death', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/Black Death (2010).jpg', url: getAlphaFile('Black', 'peliculas') },
  { id: 'm11', title: 'Blood Quantum', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Blood Quantum (2019).jpg', url: getAlphaFile('Blood', 'peliculas') },
  { id: 'm12', title: 'Bombshell Bloodbath', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Bombshell Bloodbath (2014).jpg', url: getAlphaFile('Bombshell', 'peliculas') },
  { id: 'm13', title: 'Braindead', type: 'pelicula', typeLabel: 'Película', year: '1992', img: 'img/peliculas/Braindead (1992).jpg', url: getAlphaFile('Braindead', 'peliculas') },
  { id: 'm14', title: 'Breakdown Lane', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Breakdown Lane (2017).jpg', url: getAlphaFile('Breakdown', 'peliculas') },
  { id: 'm15', title: 'Bunks', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Bunks (2013).jpg', url: getAlphaFile('Bunks', 'peliculas') },
  { id: 'm16', title: 'Burying The Ex', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Burying The Ex (2014).jpg', url: getAlphaFile('Burying', 'peliculas') },
  { id: 'm17', title: 'Cabin Fever', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/Cabin Fever (2002).jpg', url: getAlphaFile('Cabin', 'peliculas') },
  { id: 'm18', title: 'Cabin Fever 2 Spring Fever', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Cabin Fever 2 Spring Fever (2009).jpg', url: getAlphaFile('Cabin', 'peliculas') },
  { id: 'm19', title: 'Cabin Fever 3 Patient Zero', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Cabin Fever 3 Patient Zero (2014).jpg', url: getAlphaFile('Cabin', 'peliculas') },
  { id: 'm20', title: 'Cabin Fever 4', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Cabin Fever 4 (2016).jpg', url: getAlphaFile('Cabin', 'peliculas') },
  { id: 'm21', title: 'Cargo', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Cargo (2017).jpg', url: getAlphaFile('Cargo', 'peliculas') },
  { id: 'm22', title: 'Castores Zombies', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Castores Zombies.jpg', url: getAlphaFile('Castores', 'peliculas') },
  { id: 'm23', title: 'Cell', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Cell (2016).jpg', url: getAlphaFile('Cell', 'peliculas') },
  { id: 'm24', title: 'Chernobyl Diaries', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Chernobyl Diaries (2012).jpg', url: getAlphaFile('Chernobyl', 'peliculas') },
  { id: 'm25', title: 'Chrysalis', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Chrysalis (2014).jpg', url: getAlphaFile('Chrysalis', 'peliculas') },
  { id: 'm26', title: 'Code Red', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Code Red (2013).jpg', url: getAlphaFile('Code', 'peliculas') },
  { id: 'm27', title: 'Contracted', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Contracted (2013).jpg', url: getAlphaFile('Contracted', 'peliculas') },
  { id: 'm28', title: 'Contracted Phase II', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Contracted Phase II (2015).jpg', url: getAlphaFile('Contracted', 'peliculas') },
  { id: 'm29', title: 'Curas Zombies en Azul', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Curas Zombies en Azul.jpg', url: getAlphaFile('Curas', 'peliculas') },
  { id: 'm30', title: 'Dance Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2008', img: 'img/peliculas/Dance Of The Dead (2008).jpg', url: getAlphaFile('Dance', 'peliculas') },
  { id: 'm31', title: 'Darkest Day', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Darkest Day (2015).jpg', url: getAlphaFile('Darkest', 'peliculas') },
  { id: 'm32', title: 'Dawn Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '1978', img: 'img/peliculas/Dawn Of The Dead (1978).jpg', url: getAlphaFile('Dawn', 'peliculas') },
  { id: 'm33', title: 'Dawn Of The Dead Remake', type: 'pelicula', typeLabel: 'Película', year: '2004', img: 'img/peliculas/Dawn Of The Dead Remake (2004).jpg', url: getAlphaFile('Dawn', 'peliculas') },
  { id: 'm34', title: 'Day Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '1985', img: 'img/peliculas/Day Of The Dead (1985).jpg', url: getAlphaFile('Day', 'peliculas') },
  { id: 'm35', title: 'Day Of The Dead Bloodline Remake', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Day Of The Dead Bloodline Remake (2018).jpg', url: getAlphaFile('Day', 'peliculas') },
  { id: 'm36', title: 'Daylights End', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Daylights End (2016).jpg', url: getAlphaFile('Daylights', 'peliculas') },
  { id: 'm37', title: 'Dead 7', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Dead 7 (2016).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm38', title: 'Dead Before Dawn', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Dead Before Dawn (2012).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm39', title: 'Dead Heat', type: 'pelicula', typeLabel: 'Película', year: '1998', img: 'img/peliculas/Dead Heat (1998).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm40', title: 'Dead Rising 1 Watchtower', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Dead Rising 1 Watchtower (2015).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm41', title: 'Dead Rising 2 Endgame', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Dead Rising 2 Endgame (2016).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm42', title: 'Dead Shack', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Dead Shack (2017).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm43', title: 'Dead Snow 1', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Dead Snow 1 (2009).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm44', title: 'Dead Snow 2', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Dead Snow 2 (2014).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm45', title: 'Dead Trigger', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Dead Trigger (2017).jpg', url: getAlphaFile('Dead', 'peliculas') },
  { id: 'm46', title: 'Deadgirl', type: 'pelicula', typeLabel: 'Película', year: '2008', img: 'img/peliculas/Deadgirl (2008).jpg', url: getAlphaFile('Deadgirl', 'peliculas') },
  { id: 'm47', title: 'DeadHeads', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/DeadHeads (2011).jpg', url: getAlphaFile('DeadHeads', 'peliculas') },
  { id: 'm48', title: 'Deadsight', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Deadsight (2018).jpg', url: getAlphaFile('Deadsight', 'peliculas') },
  { id: 'm49', title: 'Demoni', type: 'pelicula', typeLabel: 'Película', year: '1985', img: 'img/peliculas/Demoni (1985).jpg', url: getAlphaFile('Demoni', 'peliculas') },
  { id: 'm50', title: 'Demoni 2 Lincubo Ritorna', type: 'pelicula', typeLabel: 'Película', year: '1986', img: 'img/peliculas/Demoni 2 Lincubo Ritorna (1986).jpg', url: getAlphaFile('Demoni', 'peliculas') },
  { id: 'm51', title: 'Demoni 3 Black Demons', type: 'pelicula', typeLabel: 'Película', year: '1991', img: 'img/peliculas/Demoni 3 Black Demons (1991).jpg', url: getAlphaFile('Demoni', 'peliculas') },
  { id: 'm52', title: 'Devils Tower', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Devils Tower (2014).jpg', url: getAlphaFile('Devils', 'peliculas') },
  { id: 'm53', title: 'Diary Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2007', img: 'img/peliculas/Diary Of The Dead (2007).jpg', url: getAlphaFile('Diary', 'peliculas') },
  { id: 'm54', title: 'Disaster LA', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Disaster LA (2014).jpg', url: getAlphaFile('Disaster', 'peliculas') },
  { id: 'm55', title: 'Dixie And The Zombi Rebellion', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Dixie And The Zombi Rebellion (2014).jpg', url: getAlphaFile('Dixie', 'peliculas') },
  { id: 'm56', title: 'Dont Grow Up', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Dont Grow Up (2015).jpg', url: getAlphaFile('Dont', 'peliculas') },
  { id: 'm57', title: 'El dia de los muertos', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/El dia de los muertos.jpg', url: getAlphaFile('El', 'peliculas') },
  { id: 'm58', title: 'Endzeit Ever After', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Endzeit Ever After (2018).jpg', url: getAlphaFile('Endzeit', 'peliculas') },
  { id: 'm59', title: 'Estado de Emergencia', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Estado de Emergencia.jpg', url: getAlphaFile('Estado', 'peliculas') },
  { id: 'm60', title: 'Evil Dead 1', type: 'pelicula', typeLabel: 'Película', year: '1981', img: 'img/peliculas/Evil Dead 1 (1981).jpg', url: getAlphaFile('Evil', 'peliculas') },
  { id: 'm61', title: 'Evil Dead 2', type: 'pelicula', typeLabel: 'Película', year: '1987', img: 'img/peliculas/Evil Dead 2 (1987).jpg', url: getAlphaFile('Evil', 'peliculas') },
  { id: 'm62', title: 'Evil Dead 3', type: 'pelicula', typeLabel: 'Película', year: '1992', img: 'img/peliculas/Evil Dead 3 (1992).jpg', url: getAlphaFile('Evil', 'peliculas') },
  { id: 'm63', title: 'Evil Dead Remake', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Evil Dead Remake (2013).jpg', url: getAlphaFile('Evil', 'peliculas') },
  { id: 'm64', title: 'Exit Humanity', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Exit Humanity (2011).jpg', url: getAlphaFile('Exit', 'peliculas') },
  { id: 'm65', title: 'Extincion', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Extincion (2015).jpg', url: getAlphaFile('Extincion', 'peliculas') },
  { id: 'm66', title: 'Feral', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Feral (2018).jpg', url: getAlphaFile('Feral', 'peliculas') },
  { id: 'm67', title: 'Freaks Of Nature', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Freaks Of Nature (2015).jpg', url: getAlphaFile('Freaks', 'peliculas') },
  { id: 'm68', title: 'GallowWalkers', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/GallowWalkers (2013).jpg', url: getAlphaFile('GallowWalkers', 'peliculas') },
  { id: 'm69', title: 'Generation Z', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Generation Z (2015).jpg', url: getAlphaFile('Generation', 'peliculas') },
  { id: 'm70', title: 'Goal Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Goal Of The Dead (2014).jpg', url: getAlphaFile('Goal', 'peliculas') },
  { id: 'm71', title: 'Halley', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Halley (2012).jpg', url: getAlphaFile('Halley', 'peliculas') },
  { id: 'm72', title: 'Hard Line Dead Rush', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Hard Line Dead Rush (2016).jpg', url: getAlphaFile('Hard', 'peliculas') },
  { id: 'm73', title: 'Here Alone', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Here Alone (2016).jpg', url: getAlphaFile('Here', 'peliculas') },
  { id: 'm74', title: 'House Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2003', img: 'img/peliculas/House Of The Dead (2003).jpg', url: getAlphaFile('House', 'peliculas') },
  { id: 'm75', title: 'House Of The Dead 2', type: 'pelicula', typeLabel: 'Película', year: '2005', img: 'img/peliculas/House Of The Dead 2 (2005).jpg', url: getAlphaFile('House', 'peliculas') },
  { id: 'm76', title: 'In Un Giorno La Fine', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/In Un Giorno La Fine (2017).jpg', url: getAlphaFile('In', 'peliculas') },
  { id: 'm77', title: 'Infección', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Infección (2019).jpg', url: getAlphaFile('Infección', 'peliculas') },
  { id: 'm78', title: 'Isle Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Isle Of The Dead (2016).jpg', url: getAlphaFile('Isle', 'peliculas') },
  { id: 'm79', title: 'It Stains The Sands Red', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/It Stains The Sands Red (2016).jpg', url: getAlphaFile('It', 'peliculas') },
  { id: 'm80', title: 'JeruZalem', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/JeruZalem (2015).jpg', url: getAlphaFile('JeruZalem', 'peliculas') },
  { id: 'm81', title: 'Juan De Los Muertos', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Juan De Los Muertos (2011).jpg', url: getAlphaFile('Juan', 'peliculas') },
  { id: 'm82', title: 'La Horda', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/La Horda (2009).jpg', url: getAlphaFile('La', 'peliculas') },
  { id: 'm83', title: 'La Nuit A Devore Le Monde', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/La Nuit A Devore Le Monde (2018).jpg', url: getAlphaFile('La', 'peliculas') },
  { id: 'm84', title: 'Ladronas De Almas', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Ladronas De Almas (2015).jpg', url: getAlphaFile('Ladronas', 'peliculas') },
  { id: 'm85', title: 'Land Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2005', img: 'img/peliculas/Land Of The Dead (2005).jpg', url: getAlphaFile('Land', 'peliculas') },
  { id: 'm86', title: 'Last Ones Out', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Last Ones Out (2016).jpg', url: getAlphaFile('Last', 'peliculas') },
  { id: 'm87', title: 'Les Affames', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Les Affames (2017).jpg', url: getAlphaFile('Les', 'peliculas') },
  { id: 'm88', title: 'Let There Be Zombies', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Let There Be Zombies (2014).jpg', url: getAlphaFile('Let', 'peliculas') },
  { id: 'm89', title: 'Life After Beth', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Life After Beth (2014).jpg', url: getAlphaFile('Life', 'peliculas') },
  { id: 'm90', title: 'Little Monsters', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Little Monsters (2019).jpg', url: getAlphaFile('Little', 'peliculas') },
  { id: 'm91', title: 'Navy Seals VS Zombies', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Navy Seals VS Zombies (2015).jpg', url: getAlphaFile('Navy', 'peliculas') },
  { id: 'm92', title: 'Night Of Something Strange', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Night Of Something Strange (2015).jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm93', title: 'Night Of The Creeps', type: 'pelicula', typeLabel: 'Película', year: '1986', img: 'img/peliculas/Night Of The Creeps (1986).jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm94', title: 'Night Of The Living Dead', type: 'pelicula', typeLabel: 'Película', year: '1968', img: 'img/peliculas/Night Of The Living Dead (1968).jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm95', title: 'Night Of The Living Deb', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Night Of The Living Deb (2015).jpg', url: getAlphaFile('Night', 'peliculas') },
  { id: 'm96', title: 'Office Uprising', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Office Uprising (2018).jpg', url: getAlphaFile('Office', 'peliculas') },
  { id: 'm97', title: 'Opstandelsen', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/Opstandelsen (2010).jpg', url: getAlphaFile('Opstandelsen', 'peliculas') },
  { id: 'm98', title: 'Pandemic', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Pandemic (2016).jpg', url: getAlphaFile('Pandemic', 'peliculas') },
  { id: 'm99', title: 'Papa Soy Una Zombi', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Papa Soy Una Zombi (2011).jpg', url: getAlphaFile('Papa', 'peliculas') },
  { id: 'm100', title: 'Patients Of A Saint', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Patients Of A Saint (2019).jpg', url: getAlphaFile('Patients', 'peliculas') },
   // 🎬 PELÍCULAS (101-188)
  { id: 'm101', title: 'Peelers', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Peelers (2016).jpg', url: getAlphaFile('Peelers', 'peliculas') },
  { id: 'm102', title: 'Pet Graveyard', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Pet Graveyard (2019).jpg', url: getAlphaFile('Pet', 'peliculas') },
  { id: 'm103', title: 'Pet Sematary', type: 'pelicula', typeLabel: 'Película', year: '1989', img: 'img/peliculas/Pet Sematary (1989).jpg', url: getAlphaFile('Pet', 'peliculas') },
  { id: 'm104', title: 'Pet Sematary 2', type: 'pelicula', typeLabel: 'Película', year: '1992', img: 'img/peliculas/Pet Sematary 2 (1992).jpg', url: getAlphaFile('Pet', 'peliculas') },
  { id: 'm105', title: 'Pet Sematary Remake', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Pet Sematary Remake (2019).jpg', url: getAlphaFile('Pet', 'peliculas') },
  { id: 'm106', title: 'Plague', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Plague (2014).jpg', url: getAlphaFile('Plague', 'peliculas') },
  { id: 'm107', title: 'Plan 9', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Plan 9 (2015).jpg', url: getAlphaFile('Plan', 'peliculas') },
  { id: 'm108', title: 'Planet Terror', type: 'pelicula', typeLabel: 'Película', year: '2007', img: 'img/peliculas/Planet Terror (2007).jpg', url: getAlphaFile('Planet', 'peliculas') },
  { id: 'm109', title: 'Pride And Prejudice And Zombies', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Pride And Prejudice And Zombies (2016).jpg', url: getAlphaFile('Pride', 'peliculas') },
  { id: 'm110', title: 'Quarantine', type: 'pelicula', typeLabel: 'Película', year: '2008', img: 'img/peliculas/Quarantine (2008).jpg', url: getAlphaFile('Quarantine', 'peliculas') },
  { id: 'm111', title: 'Quarantine 2 Terminal', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Quarantine 2 Terminal (2011).jpg', url: getAlphaFile('Quarantine', 'peliculas') },
  { id: 'm112', title: 'Rampant', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Rampant (2018).jpg', url: getAlphaFile('Rampant', 'peliculas') },
  { id: 'm113', title: 'Range 15', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Range 15 (2016).jpg', url: getAlphaFile('Range', 'peliculas') },
  { id: 'm114', title: 'Rec 1', type: 'pelicula', typeLabel: 'Película', year: '2007', img: 'img/peliculas/Rec 1 (2007).jpg', url: getAlphaFile('Rec', 'peliculas') },
  { id: 'm115', title: 'Rec 2', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Rec 2 (2009).jpg', url: getAlphaFile('Rec', 'peliculas') },
  { id: 'm116', title: 'Rec 3', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Rec 3 (2012).jpg', url: getAlphaFile('Rec', 'peliculas') },
  { id: 'm117', title: 'Rec 4', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Rec 4 (2014).jpg', url: getAlphaFile('Rec', 'peliculas') },
  { id: 'm118', title: 'Redcon 1', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Redcon 1 (2018).jpg', url: getAlphaFile('Redcon', 'peliculas') },
  { id: 'm119', title: 'Remains', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Remains (2011).jpg', url: getAlphaFile('Remains', 'peliculas') },
  { id: 'm120', title: 'Resident Evil 1 El Huésped Maldito', type: 'pelicula', typeLabel: 'Película', year: '2002', img: 'img/peliculas/Resident Evil 1 El Huésped Maldito (2002).jpg', url: getAlphaFile('Resident', 'peliculas') },
  { id: 'm121', title: 'Resident Evil 2 Apocalipsis', type: 'pelicula', typeLabel: 'Película', year: '2004', img: 'img/peliculas/Resident Evil 2 Apocalipsis (2004).jpg', url: getAlphaFile('Resident', 'peliculas') },
  { id: 'm122', title: 'Resident Evil 3 Extincion', type: 'pelicula', typeLabel: 'Película', year: '2007', img: 'img/peliculas/Resident Evil 3 Extincion (2007).jpg', url: getAlphaFile('Resident', 'peliculas') },
  { id: 'm123', title: 'Resident Evil 4 Ultratumba', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/Resident Evil 4 Ultratumba (2010).jpg', url: getAlphaFile('Resident', 'peliculas') },
  { id: 'm124', title: 'Resident Evil 5 Venganza', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Resident Evil 5 Venganza (2012).jpg', url: getAlphaFile('Resident', 'peliculas') },
  { id: 'm125', title: 'Resident Evil 6 Capítulo Final', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Resident Evil 6 Capítulo Final (2017).jpg', url: getAlphaFile('Resident', 'peliculas') },
  { id: 'm126', title: 'Resident Evil 7 Vendetta', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Resident Evil 7 Vendetta (2017).jpg', url: getAlphaFile('Resident', 'peliculas') },
  { id: 'm127', title: 'Return Of The Living Dead 1', type: 'pelicula', typeLabel: 'Película', year: '1985', img: 'img/peliculas/Return Of The Living Dead 1 (1985).jpg', url: getAlphaFile('Return', 'peliculas') },
  { id: 'm128', title: 'Return Of The Living Dead 2', type: 'pelicula', typeLabel: 'Película', year: '1988', img: 'img/peliculas/Return Of The Living Dead 2 (1988).jpg', url: getAlphaFile('Return', 'peliculas') },
  { id: 'm129', title: 'Return Of The Living Dead 3', type: 'pelicula', typeLabel: 'Película', year: '1993', img: 'img/peliculas/Return Of The Living Dead 3 (1993).jpg', url: getAlphaFile('Return', 'peliculas') },
  { id: 'm130', title: 'Return Of The Living Dead 4', type: 'pelicula', typeLabel: 'Película', year: '2005', img: 'img/peliculas/Return Of The Living Dead 4 (2005).jpg', url: getAlphaFile('Return', 'peliculas') },
  { id: 'm131', title: 'Return Of The Living Dead 5', type: 'pelicula', typeLabel: 'Película', year: '2005', img: 'img/peliculas/Return Of The Living Dead 5 (2005).jpg', url: getAlphaFile('Return', 'peliculas') },
  { id: 'm132', title: 'Rise Of The Zombies', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Rise Of The Zombies (2012).jpg', url: getAlphaFile('Rise', 'peliculas') },
  { id: 'm133', title: 'Scouts Guide To The Zombie Apocalypse', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Scouts Guide To The Zombie Apocalypse (2015).jpg', url: getAlphaFile('Scouts', 'peliculas') },
  { id: 'm134', title: 'Seoul Station', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Seoul Station (2016).jpg', url: getAlphaFile('Seoul', 'peliculas') },
  { id: 'm135', title: 'Shaun Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2004', img: 'img/peliculas/Shaun Of The Dead (2004).jpg', url: getAlphaFile('Shaun', 'peliculas') },
  { id: 'm136', title: 'Siege Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/Siege Of The Dead (2010).jpg', url: getAlphaFile('Siege', 'peliculas') },
  { id: 'm137', title: 'Skeleton Key 3 The Organ Trail', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/Skeleton Key 3 The Organ Trail (2011).jpg', url: getAlphaFile('Skeleton', 'peliculas') },
  { id: 'm138', title: 'Slither La Plaga', type: 'pelicula', typeLabel: 'Película', year: '2006', img: 'img/peliculas/Slither La Plaga (2006).jpg', url: getAlphaFile('Slither', 'peliculas') },
  { id: 'm139', title: 'State Of Emergency', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/State Of Emergency (2010).jpg', url: getAlphaFile('State', 'peliculas') },
  { id: 'm140', title: 'Summer Camp', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Summer Camp (2015).jpg', url: getAlphaFile('Summer', 'peliculas') },
  { id: 'm141', title: 'Survival Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Survival Of The Dead (2009).jpg', url: getAlphaFile('Survival', 'peliculas') },
  { id: 'm142', title: 'Swiss Army Man', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Swiss Army Man (2016).jpg', url: getAlphaFile('Swiss', 'peliculas') },
  { id: 'm143', title: 'Thanatomorphose', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/Thanatomorphose (2012).jpg', url: getAlphaFile('Thanatomorphose', 'peliculas') },
  { id: 'm144', title: 'The Battery', type: 'pelicula', typeLabel: 'Película', year: '2012', img: 'img/peliculas/The Battery (2012).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm145', title: 'The Black Death', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/The Black Death (2015).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm146', title: 'The Burning Dead', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/The Burning Dead (2015).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm147', title: 'The Crazies', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/The Crazies (2010).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm148', title: 'The Cured', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/The Cured (2017).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm149', title: 'The Dead', type: 'pelicula', typeLabel: 'Película', year: '2010', img: 'img/peliculas/The Dead (2010).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm150', title: 'The Dead 2 India', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/The Dead 2 India (2013).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm151', title: 'The Demented', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/The Demented (2013).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm152', title: 'The Girl With All The Gifts', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/The Girl With All The Gifts (2016).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm153', title: 'The Hive', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/The Hive (2015).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm154', title: 'The Last Days On Mars', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/The Last Days On Mars (2013).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm155', title: 'The Revenant', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/The Revenant (2009).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm156', title: 'The Serpent And The Rainbow', type: 'pelicula', typeLabel: 'Película', year: '1988', img: 'img/peliculas/The Serpent And The Rainbow (1988).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm157', title: 'The Walking Deceased', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/The Walking Deceased (2015).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm158', title: 'The Zombie King', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/The Zombie King (2013).jpg', url: getAlphaFile('The', 'peliculas') },
  { id: 'm159', title: 'Tokyo Living Dead Idol', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Tokyo Living Dead Idol (2018).jpg', url: getAlphaFile('Tokyo', 'peliculas') },
  { id: 'm160', title: 'Train To Busan', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Train To Busan (2016).jpg', url: getAlphaFile('Train', 'peliculas') },
  { id: 'm161', title: 'Train To Busan 2 Peninsula', type: 'pelicula', typeLabel: 'Película', year: '2020', img: 'img/peliculas/Train To Busan 2 Peninsula (2020).jpg', url: getAlphaFile('Train', 'peliculas') },
  { id: 'm162', title: 'Undead', type: 'pelicula', typeLabel: 'Película', year: '2003', img: 'img/peliculas/Undead (2003).jpg', url: getAlphaFile('Undead', 'peliculas') },
  { id: 'm163', title: 'Virus', type: 'pelicula', typeLabel: 'Película', year: '1980', img: 'img/peliculas/Virus (1980).jpg', url: getAlphaFile('Virus', 'peliculas') },
  { id: 'm164', title: 'Walking Dead In The West', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Walking Dead In The West (2016).jpg', url: getAlphaFile('Walking', 'peliculas') },
  { id: 'm165', title: 'War Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2011', img: 'img/peliculas/War Of The Dead (2011).jpg', url: getAlphaFile('War', 'peliculas') },
  { id: 'm166', title: 'Warm Bodies', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Warm Bodies (2013).jpg', url: getAlphaFile('Warm', 'peliculas') },
  { id: 'm167', title: 'Wasteland', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Wasteland (2015).jpg', url: getAlphaFile('Wasteland', 'peliculas') },
  { id: 'm168', title: 'We All Fall Down', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/We All Fall Down (2016).jpg', url: getAlphaFile('We', 'peliculas') },
  { id: 'm169', title: 'World War Z', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/World War Z (2013).jpg', url: getAlphaFile('World', 'peliculas') },
  { id: 'm170', title: 'Yummy', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Yummy (2019).jpg', url: getAlphaFile('Yummy', 'peliculas') },
  { id: 'm171', title: 'Zombeavers', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Zombeavers (2014).jpg', url: getAlphaFile('Zombeavers', 'peliculas') },
  { id: 'm172', title: 'Zombi Child', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Zombi Child (2019).jpg', url: getAlphaFile('Zombi', 'peliculas') },
  { id: 'm173', title: 'Zombie At 17', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Zombie At 17 (2018).jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm174', title: 'Zombie Fight Club', type: 'pelicula', typeLabel: 'Película', year: '2014', img: 'img/peliculas/Zombie Fight Club (2014).jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm175', title: 'Zombie Hunter', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Zombie Hunter (2013).jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm176', title: 'Zombie Massacre', type: 'pelicula', typeLabel: 'Película', year: '2013', img: 'img/peliculas/Zombie Massacre (2013).jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm177', title: 'Zombie Massacre 2 Reich Of The Dead', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Zombie Massacre 2 Reich Of The Dead (2015).jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm178', title: 'Zombie Ninjas VS Black Ops', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Zombie Ninjas VS Black Ops (2015).jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm179', title: 'Zombie Party', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Zombie Party.jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm180', title: 'Zombie Town', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Zombie Town.jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm181', title: 'Zombie World 2', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Zombie World 2 (2018).jpg', url: getAlphaFile('Zombie', 'peliculas') },
  { id: 'm182', title: 'Zombieland', type: 'pelicula', typeLabel: 'Película', year: '2009', img: 'img/peliculas/Zombieland (2009).jpg', url: getAlphaFile('Zombieland', 'peliculas') },
  { id: 'm183', title: 'Zombieland Double Tap', type: 'pelicula', typeLabel: 'Película', year: '2019', img: 'img/peliculas/Zombieland Double Tap (2019).jpg', url: getAlphaFile('Zombieland', 'peliculas') },
  { id: 'm184', title: 'Zombies', type: 'pelicula', typeLabel: 'Película', year: '2017', img: 'img/peliculas/Zombies (2017).jpg', url: getAlphaFile('Zombies', 'peliculas') },
  { id: 'm185', title: 'Zombies of Mass Destruction', type: 'pelicula', typeLabel: 'Película', year: '-', img: 'img/peliculas/Zombies of Mass Destruction.jpg', url: getAlphaFile('Zombies', 'peliculas') },
  { id: 'm186', title: 'Zombieworld', type: 'pelicula', typeLabel: 'Película', year: '2015', img: 'img/peliculas/Zombieworld (2015).jpg', url: getAlphaFile('Zombieworld', 'peliculas') },
  { id: 'm187', title: 'Zoo', type: 'pelicula', typeLabel: 'Película', year: '2018', img: 'img/peliculas/Zoo (2018).jpg', url: getAlphaFile('Zoo', 'peliculas') },
  { id: 'm188', title: 'Zoombies', type: 'pelicula', typeLabel: 'Película', year: '2016', img: 'img/peliculas/Zoombies (2016).jpg', url: getAlphaFile('Zoombies', 'peliculas') },

  // 📺 SERIES
  { id: 's1', title: 'Black Summer', type: 'serie', typeLabel: 'Serie', img: 'img/series/Black Summer.jpg', url: 'series/Black-Summer.html' },
  { id: 's2', title: 'Daybreak', type: 'serie', typeLabel: 'Serie', img: 'img/series/Daybreak.png', url: 'series/Daybreak.html' },
  { id: 's3', title: 'Dead Set', type: 'serie', typeLabel: 'Serie', img: 'img/series/Dead-Set.jpg', url: 'series/Dead-Set.html' },
  { id: 's4', title: 'I Zombie', type: 'serie', typeLabel: 'Serie', img: 'img/series/I-Zombie.jpg', url: 'series/I-Zombie.html' },
  { id: 's5', title: 'Kingdom', type: 'serie', typeLabel: 'Serie', img: 'img/series/kingdom.jpg', url: 'series/Kingdom.html' },
  { id: 's6', title: 'Plantas Vs Zombies', type: 'serie', typeLabel: 'Serie', img: 'img/series/Plantas-Vs-Zombies.png', url: 'series/Plantas-Vs-Zombies.html' },
  { id: 's7', title: 'Reality Z', type: 'serie', typeLabel: 'Serie', img: 'img/series/Reality-Z.png', url: 'series/Reality-Z.html' },
  { id: 's8', title: 'The Walking Dead', type: 'serie', typeLabel: 'Serie', img: 'img/series/The-Walking-Dead.jpg', url: 'series/The-Walking-Dead.html' },
  { id: 's9', title: 'Z Nation', type: 'serie', typeLabel: 'Serie', img: 'img/series/Z-Nation.png', url: 'series/Z-Nation.html' },

  // 🎌 ANIMES
  { id: 'a1', title: 'Gakkou Gurashi!', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Gakkou-Gurashi.png', url: 'animes/Gakkou-Gurashi.html' },
  { id: 'a2', title: 'Highschool of the Dead', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Highschool-of-the-Dead.png', url: 'animes/Highschool-of-the-Dead.html' },
  { id: 'a3', title: 'Kore wa Zombie Desu ka?', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Kore-wa-Zombie-Desu-ka.png', url: 'animes/Kore-wa-Zombie-Desu-ka.html' },
  { id: 'a4', title: 'Koutetsujou no Kabaneri', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Koutetsujou-no-Kabaneri.png', url: 'animes/Koutetsujou-no-Kabaneri.html' },
  { id: 'a5', title: 'Shikabane Hime: Aka', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Shikabane-Hime-Aka.png', url: 'animes/Shikabane-Hime-Aka.html' },
  { id: 'a6', title: 'Zombieland Saga', type: 'anime', typeLabel: 'Anime', img: 'img/animes/Zombieland-Saga.png', url: 'animes/Zombieland-Saga.html' },

  // 💥 CÓMICS
  { id: 'c1', title: 'The Walking Dead', type: 'comic', typeLabel: 'Cómic', img: 'img/comics/The-Walking-Dead.jpg', url: 'comics/The-Walking-Dead-Comic.html' },

  // 🎬 CORTOMETRAJES
  { id: 'co1', title: 'Cargo', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/c71d5fb6-6e04-4b90-bbdc-57ebb12857e1.jpg', url: 'cortometrajes/Cargo.html' },
  { id: 'co2', title: 'Hope', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://i.ytimg.com/vi_webp/bUTJC7UdMy4/maxresdefault.webp', url: 'cortometrajes/Hope.html' },
  { id: 'co3', title: 'Make It Until Morning', type: 'cortometraje', typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/33b29291-5e94-4360-96db-d877f8dd0d5e.jpg', url: 'cortometrajes/Make-It-Until-Morning.html' },
  { id: 'co4', title: 'Soy un Zombie', type: 'cortometraje' , typeLabel: 'Cortometraje', img: 'https://video.maga.host/static/thumbnails/33b29291-5e94-4360-96db-d877f8dd0d5e.jpg', url: 'cortometrajes/Soy-Un-Zombie.html' },

   /* ============================================
   ZOMBIE-TK - search.js (Parte 7 de 8)
   Funciones de búsqueda (primera mitad)
   ============================================ */

let currentFilter = 'all';
let currentQuery = '';

function handleScroll() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  if (window.scrollY > 300) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMenu() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  const menu = document.getElementById('hamburgerMenu');
  const overlay = document.getElementById('menuOverlay');
  if (menu) menu.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function setFilter(filter, button) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (button) button.classList.add('active');
  renderResults();
}

function quickSearch(query) {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = query;
    input.focus();
    performSearch();
  }
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  currentQuery = '';
  renderResults();
}

function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function performSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearBtn');
  if (!input) return;
  currentQuery = input.value.trim().toLowerCase();
  if (clearBtn) clearBtn.style.display = currentQuery ? 'flex' : 'none';
  renderResults();
}

/* ============================================
   ZOMBIE-TK - search.js (Parte 8 de 8)
   Funciones de renderizado e inicialización
   ============================================ */

function renderResults() {
  const grid = document.getElementById('resultsGrid');
  const emptyEl = document.getElementById('searchEmpty');
  const noResultsEl = document.getElementById('noResults');
  const countEl = document.getElementById('searchCount');
  const noResultsText = document.getElementById('noResultsText');
  
  if (!grid) return;
  
  let filtered = contentDatabase;
  if (currentFilter !== 'all') {
    filtered = filtered.filter(item => item.type === currentFilter);
  }
  
  if (currentQuery) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(currentQuery) ||
      (item.author && item.author.toLowerCase().includes(currentQuery))
    );
  }
  
  updateFilterCounts();
  
  if (countEl) {
    const total = currentQuery ? filtered.length : contentDatabase.length;
    countEl.textContent = `📊 ${total} resultado${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;
  }
  
  grid.innerHTML = '';
  
  if (!currentQuery && currentFilter === 'all') {
    if (emptyEl) emptyEl.style.display = 'block';
    if (noResultsEl) noResultsEl.style.display = 'none';
    grid.style.display = 'none';
    return;
  }
  
  if (emptyEl) emptyEl.style.display = 'none';
  
  if (filtered.length === 0) {
    if (noResultsEl) noResultsEl.style.display = 'block';
    if (noResultsText) {
      noResultsText.textContent = `No se encontró "${currentQuery}" en ${currentFilter === 'all' ? 'ninguna sección' : 'la sección de ' + currentFilter + 's'}`;
    }
    grid.style.display = 'none';
    return;
  }
  
  if (noResultsEl) noResultsEl.style.display = 'none';
  grid.style.display = 'grid';
  
  filtered.forEach((item, index) => {
    const card = document.createElement('a');
    card.className = 'result-card';
    card.href = item.url;
    card.style.animationDelay = `${index * 0.03}s`;
    
    const extraInfo = item.author ? ` • ${item.author}` : (item.year ? ` (${item.year})` : '');
    
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="result-card-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23FFD700%22>🧟</text></svg>'">
      <div class="result-card-overlay"></div>
      <div class="result-card-content">
        <div class="result-card-title">${highlightText(item.title, currentQuery)}${highlightText(extraInfo, currentQuery)}</div>
        <div class="result-card-type">${item.typeLabel}</div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function updateFilterCounts() {
  const types = ['libro', 'pelicula', 'serie', 'anime', 'comic', 'cortometraje', 'relato', 'juego'];
  
  let totalFiltered = contentDatabase;
  if (currentQuery) {
    totalFiltered = totalFiltered.filter(item => 
      item.title.toLowerCase().includes(currentQuery) ||
      (item.author && item.author.toLowerCase().includes(currentQuery))
    );
  }
  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = totalFiltered.length;
  
  types.forEach(type => {
    let filtered = contentDatabase.filter(item => item.type === type);
    if (currentQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(currentQuery) ||
        (item.author && item.author.toLowerCase().includes(currentQuery))
      );
    }
    const countEl = document.getElementById(`count-${type}`);
    if (countEl) countEl.textContent = filtered.length;
  });
}

function init() {
  window.addEventListener('scroll', handleScroll);
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', performSearch);
  }
  
  updateFilterCounts();
  renderResults();
  
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
  
  console.log('🔍 Página de Búsqueda Zombie-TK cargada');
  console.log('📊 Total de ítems:', contentDatabase.length);
  console.log('📚 Libros:', contentDatabase.filter(i => i.type === 'libro').length);
  console.log('🎬 Películas:', contentDatabase.filter(i => i.type === 'pelicula').length);
  console.log('📺 Series:', contentDatabase.filter(i => i.type === 'serie').length);
  console.log('🎌 Animes:', contentDatabase.filter(i => i.type === 'anime').length);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
