const allBooks = [
  {
    "id": 1,
    "titulo": "El Señor de los Anillos",
    "autor": "J.R.R. Tolkien",
    "genero": "fantasia",
    "sinopsis": "Una épica aventura a través de la Tierra Media para destruir un anillo de poder y derrotar al Señor Oscuro, Sauron."
  },
  {
    "id": 2,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 3,
    "titulo": "Fundación",
    "autor": "Isaac Asimov",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una saga sobre la caída de un imperio galáctico y los esfuerzos de un grupo de científicos para preservar el conocimiento humano y acortar la edad oscura que se avecina."
  },
  {
    "id": 4,
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez",
    "genero": "novela-historica",
    "sinopsis": "La historia de la familia Buendía en el pueblo mítico de Macondo, un clásico del realismo mágico que abarca un siglo de tragedias y amores."
  },
  {
    "id": 5,
    "titulo": "Asesinato en el Orient Express",
    "autor": "Agatha Christie",
    "genero": "misterio",
    "sinopsis": "El detective Hércules Poirot debe resolver un asesinato a bordo de un tren de lujo que queda varado en la nieve, con todos los pasajeros como posibles sospechosos."
  },
  {
    "id": 6,
    "titulo": "Orgullo y Prejuicio",
    "autor": "Jane Austen",
    "genero": "romance",
    "sinopsis": "La historia de amor y malentendidos entre la vivaz Elizabeth Bennet y el orgulloso Sr. Darcy en la Inglaterra del siglo XIX."
  },
  {
    "id": 7,
    "titulo": "El Hobbit",
    "autor": "J.R.R. Tolkien",
    "genero": "fantasia",
    "sinopsis": "Bilbo Bolsón, un hobbit hogareño, se embarca en una aventura inesperada con un grupo de enanos para recuperar un tesoro robado por el dragón Smaug."
  },
  {
    "id": 8,
    "titulo": "Un Gato Callejero Llamado Bob",
    "autor": "James Bowen",
    "genero": "biografia",
    "sinopsis": "La conmovedora historia real de la amistad entre un músico callejero en recuperación y un gato herido que lo ayudó a cambiar su vida."
  },
  {
    "id": 9,
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "distopia",
    "sinopsis": "En un futuro opresivo, el protagonista Winston Smith intenta rebelarse contra un régimen totalitario que controla cada aspecto de la vida de sus ciudadanos, con el 'Gran Hermano' vigilando cada movimiento."
  },
  {
    "id": 10,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 11,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 12,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 13,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 14,
    "titulo": "La chica del tren",
    "autor": "Paula Hawkins",
    "genero": "thriller",
    "sinopsis": "Una mujer alcohólica, que viaja en tren todos los días, ve algo que podría ser la clave para un misterio de desaparición, pero sus recuerdos no son confiables."
  },
  {
    "id": 15,
    "titulo": "Un Gato Callejero Llamado Bob",
    "autor": "James Bowen",
    "genero": "biografia",
    "sinopsis": "La conmovedora historia real de la amistad entre un músico callejero en recuperación y un gato herido que lo ayudó a cambiar su vida."
  },
  {
    "id": 16,
    "titulo": "Jurassic Park",
    "autor": "Michael Crichton",
    "genero": "ciencia-ficcion",
    "sinopsis": "Científicos logran clonar dinosaurios para un parque temático, pero el control se pierde y las criaturas prehistóricas desatan el caos en la isla."
  },
  {
    "id": 17,
    "titulo": "El Conde de Montecristo",
    "autor": "Alexandre Dumas",
    "genero": "clasicos",
    "sinopsis": "Un joven es injustamente encarcelado y, tras escapar, se dedica a buscar venganza contra quienes lo traicionaron, usando una enorme fortuna que ha adquirido."
  },
  {
    "id": 18,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "genero": "clasicos",
    "sinopsis": "Un hidalgo de La Mancha enloquece de tanto leer libros de caballería y decide convertirse en caballero andante, embarcándose en una serie de aventuras cómicas y trágicas."
  },
  {
    "id": 19,
    "titulo": "Ready Player One",
    "autor": "Ernest Cline",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro distópico, un adolescente se embarca en la búsqueda de un 'huevo de pascua' virtual en un mundo de realidad virtual, con la esperanza de heredar una gran fortuna."
  },
  {
    "id": 20,
    "titulo": "El nombre del viento",
    "autor": "Patrick Rothfuss",
    "genero": "fantasia",
    "sinopsis": "La historia de Kvothe, un legendario arcanista, músico y asesino, contada por él mismo. Relata su infancia, sus estudios en la universidad y sus heroicas hazañas."
  },
  {
    "id": 21,
    "titulo": "El Psicoanalista",
    "autor": "John Katzenbach",
    "genero": "thriller",
    "sinopsis": "Un psicoanalista recibe un anónimo con un ultimátum: o descubre la identidad del autor de la carta o uno de sus familiares morirá. Debe usar todo su ingenio para sobrevivir."
  },
  {
    "id": 22,
    "titulo": "La Odisea",
    "autor": "Homero",
    "genero": "clasicos",
    "sinopsis": "La épica aventura del héroe griego Odiseo en su viaje de diez años para regresar a casa, a Ítaca, después de la guerra de Troya."
  },
  {
    "id": 23,
    "titulo": "El gran Gatsby",
    "autor": "F. Scott Fitzgerald",
    "genero": "romance",
    "sinopsis": "Un misterioso millonario, Jay Gatsby, obsesionado con una mujer casada que vive al otro lado de la bahía, organiza lujosas fiestas con la esperanza de recuperarla."
  },
  {
    "id": 24,
    "titulo": "Los Pilares de la Tierra",
    "autor": "Ken Follett",
    "genero": "novela-historica",
    "sinopsis": "Una apasionante historia de amor, intriga y guerra que sigue la construcción de una catedral en la Inglaterra del siglo XII."
  },
  {
    "id": 25,
    "titulo": "Sherlock Holmes",
    "autor": "Arthur Conan Doyle",
    "genero": "misterio",
    "sinopsis": "Colección de relatos sobre el legendario detective Sherlock Holmes y su fiel amigo, el Dr. Watson, que resuelven los crímenes más enigmáticos de Londres."
  }
  {
    "id": 1,
    "titulo": "El Señor de los Anillos",
    "autor": "J.R.R. Tolkien",
    "genero": "fantasia",
    "sinopsis": "Una épica aventura a través de la Tierra Media para destruir un anillo de poder y derrotar al Señor Oscuro, Sauron."
  },
  {
    "id": 2,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 3,
    "titulo": "Fundación",
    "autor": "Isaac Asimov",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una saga sobre la caída de un imperio galáctico y los esfuerzos de un grupo de científicos para preservar el conocimiento humano y acortar la edad oscura que se avecina."
  },
  {
    "id": 4,
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez",
    "genero": "novela-historica",
    "sinopsis": "La historia de la familia Buendía en el pueblo mítico de Macondo, un clásico del realismo mágico que abarca un siglo de tragedias y amores."
  },
  {
    "id": 5,
    "titulo": "Asesinato en el Orient Express",
    "autor": "Agatha Christie",
    "genero": "misterio",
    "sinopsis": "El detective Hércules Poirot debe resolver un asesinato a bordo de un tren de lujo que queda varado en la nieve, con todos los pasajeros como posibles sospechosos."
  },
  {
    "id": 6,
    "titulo": "Orgullo y Prejuicio",
    "autor": "Jane Austen",
    "genero": "romance",
    "sinopsis": "La historia de amor y malentendidos entre la vivaz Elizabeth Bennet y el orgulloso Sr. Darcy en la Inglaterra del siglo XIX."
  },
  {
    "id": 7,
    "titulo": "El Hobbit",
    "autor": "J.R.R. Tolkien",
    "genero": "fantasia",
    "sinopsis": "Bilbo Bolsón, un hobbit hogareño, se embarca en una aventura inesperada con un grupo de enanos para recuperar un tesoro robado por el dragón Smaug."
  },
  {
    "id": 8,
    "titulo": "Un Gato Callejero Llamado Bob",
    "autor": "James Bowen",
    "genero": "biografia",
    "sinopsis": "La conmovedora historia real de la amistad entre un músico callejero en recuperación y un gato herido que lo ayudó a cambiar su vida."
  },
  {
    "id": 9,
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "distopia",
    "sinopsis": "En un futuro opresivo, el protagonista Winston Smith intenta rebelarse contra un régimen totalitario que controla cada aspecto de la vida de sus ciudadanos, con el 'Gran Hermano' vigilando cada movimiento."
  },
  {
    "id": 10,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 11,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 12,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 13,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 14,
    "titulo": "La chica del tren",
    "autor": "Paula Hawkins",
    "genero": "thriller",
    "sinopsis": "Una mujer alcohólica, que viaja en tren todos los días, ve algo que podría ser la clave para un misterio de desaparición, pero sus recuerdos no son confiables."
  },
  {
    "id": 15,
    "titulo": "Un Gato Callejero Llamado Bob",
    "autor": "James Bowen",
    "genero": "biografia",
    "sinopsis": "La conmovedora historia real de la amistad entre un músico callejero en recuperación y un gato herido que lo ayudó a cambiar su vida."
  },
  {
    "id": 16,
    "titulo": "Jurassic Park",
    "autor": "Michael Crichton",
    "genero": "ciencia-ficcion",
    "sinopsis": "Científicos logran clonar dinosaurios para un parque temático, pero el control se pierde y las criaturas prehistóricas desatan el caos en la isla."
  },
  {
    "id": 17,
    "titulo": "El Conde de Montecristo",
    "autor": "Alexandre Dumas",
    "genero": "clasicos",
    "sinopsis": "Un joven es injustamente encarcelado y, tras escapar, se dedica a buscar venganza contra quienes lo traicionaron, usando una enorme fortuna que ha adquirido."
  },
  {
    "id": 18,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "genero": "clasicos",
    "sinopsis": "Un hidalgo de La Mancha enloquece de tanto leer libros de caballería y decide convertirse en caballero andante, embarcándose en una serie de aventuras cómicas y trágicas."
  },
  {
    "id": 19,
    "titulo": "Ready Player One",
    "autor": "Ernest Cline",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro distópico, un adolescente se embarca en la búsqueda de un 'huevo de pascua' virtual en un mundo de realidad virtual, con la esperanza de heredar una gran fortuna."
  },
  {
    "id": 20,
    "titulo": "El nombre del viento",
    "autor": "Patrick Rothfuss",
    "genero": "fantasia",
    "sinopsis": "La historia de Kvothe, un legendario arcanista, músico y asesino, contada por él mismo. Relata su infancia, sus estudios en la universidad y sus heroicas hazañas."
  },
  {
    "id": 21,
    "titulo": "El Psicoanalista",
    "autor": "John Katzenbach",
    "genero": "thriller",
    "sinopsis": "Un psicoanalista recibe un anónimo con un ultimátum: o descubre la identidad del autor de la carta o uno de sus familiares morirá. Debe usar todo su ingenio para sobrevivir."
  },
  {
    "id": 22,
    "titulo": "La Odisea",
    "autor": "Homero",
    "genero": "clasicos",
    "sinopsis": "La épica aventura del héroe griego Odiseo en su viaje de diez años para regresar a casa, a Ítaca, después de la guerra de Troya."
  },
  {
    "id": 23,
    "titulo": "El gran Gatsby",
    "autor": "F. Scott Fitzgerald",
    "genero": "romance",
    "sinopsis": "Un misterioso millonario, Jay Gatsby, obsesionado con una mujer casada que vive al otro lado de la bahía, organiza lujosas fiestas con la esperanza de recuperarla."
  },
  {
    "id": 24,
    "titulo": "Los Pilares de la Tierra",
    "autor": "Ken Follett",
    "genero": "novela-historica",
    "sinopsis": "Una apasionante historia de amor, intriga y guerra que sigue la construcción de una catedral en la Inglaterra del siglo XII."
  },
  {
    "id": 25,
    "titulo": "Sherlock Holmes",
    "autor": "Arthur Conan Doyle",
    "genero": "misterio",
    "sinopsis": "Colección de relatos sobre el legendario detective Sherlock Holmes y su fiel amigo, el Dr. Watson, que resuelven los crímenes más enigmáticos de Londres."
  },
  {
    "id": 26,
    "titulo": "El Silencio de los Corderos",
    "autor": "Thomas Harris",
    "genero": "thriller-psicologico",
    "sinopsis": "Una joven cadete del FBI debe entrevistar a un brillante pero peligroso asesino en serie encarcelado, el Dr. Hannibal Lecter, para atrapar a otro asesino en libertad."
  },
  {
    "id": 27,
    "titulo": "El Problema de los Tres Cuerpos",
    "autor": "Cixin Liu",
    "genero": "ciencia-ficcion-dura",
    "sinopsis": "Un astrofísico chino, una sociedad secreta y una misteriosa civilización alienígena se encuentran en una trama que desafía los límites de la física y la humanidad."
  },
  {
    "id": 28,
    "titulo": "Canción de Hielo y Fuego",
    "autor": "George R.R. Martin",
    "genero": "fantasia",
    "sinopsis": "En un mundo de magia, dragones y nobles rivales, varias familias luchan por el control del Trono de Hierro, el poder supremo de los Siete Reinos."
  },
  {
    "id": 29,
    "titulo": "La sombra del viento",
    "autor": "Carlos Ruiz Zafón",
    "genero": "misterio",
    "sinopsis": "En la Barcelona de la posguerra, un joven encuentra un misterioso libro en el 'Cementerio de los Libros Olvidados' que lo arrastra a una trama de secretos, amor y venganza."
  },
  {
    "id": 30,
    "titulo": "El Misterio de la Cripta Embrujada",
    "autor": "Eduardo Mendoza",
    "genero": "novela-negra",
    "sinopsis": "Un detective privado poco convencional, recién salido de un manicomio, debe resolver la desaparición de una joven en un internado de monjas."
  },
  {
    "id": 31,
    "titulo": "Saga Crepúsculo",
    "autor": "Stephenie Meyer",
    "genero": "romance",
    "sinopsis": "Una adolescente se enamora de un misterioso compañero de clase que resulta ser un vampiro, y su relación se vuelve un peligro constante."
  },
  {
    "id": 32,
    "titulo": "El Mar de los Monstruos",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven semidiós, emprende un viaje épico para recuperar el vellocino de oro y salvar a su amigo y el campamento de semidioses."
  },
  {
    "id": 33,
    "titulo": "El Archivo de las Tormentas",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "Un mundo azotado por tormentas eternas, donde nobles guerreros luchan por el honor y la supervivencia, mientras se revelan antiguos secretos y profecías."
  },
  {
    "id": 34,
    "titulo": "La Caricia de la Oscuridad",
    "autor": "Cassandra Clare",
    "genero": "fantasia-urbana",
    "sinopsis": "Un adolescente descubre que pertenece a un grupo de cazadores de sombras, guerreros que protegen el mundo de los demonios, en la ciudad de Nueva York."
  },
  {
    "id": 35,
    "titulo": "El Sol también es una Estrella",
    "autor": "Nicola Yoon",
    "genero": "romance",
    "sinopsis": "Dos jóvenes se conocen en la ciudad de Nueva York y se enamoran en un solo día, mientras uno de ellos enfrenta la inminente deportación de su familia."
  },
  {
    "id": 36,
    "titulo": "El Hilo Dorado",
    "autor": "Silvia Moreno-Garcia",
    "genero": "misterio-historico",
    "sinopsis": "Una joven de la alta sociedad mexicana investiga la desaparición de su prima en una remota mansión de la campiña, desenterrando secretos oscuros y sobrenaturales."
  },
  {
    "id": 37,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 38,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 39,
    "titulo": "Rebelión en la Granja",
    "autor": "George Orwell",
    "genero": "distopia",
    "sinopsis": "Los animales de una granja se rebelan contra sus dueños para crear una sociedad igualitaria, pero el poder corrompe y la utopía se convierte en una opresión aún mayor."
  },
  {
    "id": 40,
    "titulo": "El Corazón de las Tinieblas",
    "autor": "Joseph Conrad",
    "genero": "clasicos",
    "sinopsis": "Un marinero viaja al interior de África para encontrar a un enigmático agente de comercio de marfil, confrontando la oscuridad del alma humana."
  }
  {
    "id": 1,
    "titulo": "El Señor de los Anillos",
    "autor": "J.R.R. Tolkien",
    "genero": "fantasia",
    "sinopsis": "Una épica aventura a través de la Tierra Media para destruir un anillo de poder y derrotar al Señor Oscuro, Sauron."
  },
  {
    "id": 2,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 3,
    "titulo": "Fundación",
    "autor": "Isaac Asimov",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una saga sobre la caída de un imperio galáctico y los esfuerzos de un grupo de científicos para preservar el conocimiento humano y acortar la edad oscura que se avecina."
  },
  {
    "id": 4,
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez",
    "genero": "novela-historica",
    "sinopsis": "La historia de la familia Buendía en el pueblo mítico de Macondo, un clásico del realismo mágico que abarca un siglo de tragedias y amores."
  },
  {
    "id": 5,
    "titulo": "Asesinato en el Orient Express",
    "autor": "Agatha Christie",
    "genero": "misterio",
    "sinopsis": "El detective Hércules Poirot debe resolver un asesinato a bordo de un tren de lujo que queda varado en la nieve, con todos los pasajeros como posibles sospechosos."
  },
  {
    "id": 6,
    "titulo": "Orgullo y Prejuicio",
    "autor": "Jane Austen",
    "genero": "romance",
    "sinopsis": "La historia de amor y malentendidos entre la vivaz Elizabeth Bennet y el orgulloso Sr. Darcy en la Inglaterra del siglo XIX."
  },
  {
    "id": 7,
    "titulo": "El Hobbit",
    "autor": "J.R.R. Tolkien",
    "genero": "fantasia",
    "sinopsis": "Bilbo Bolsón, un hobbit hogareño, se embarca en una aventura inesperada con un grupo de enanos para recuperar un tesoro robado por el dragón Smaug."
  },
  {
    "id": 8,
    "titulo": "Un Gato Callejero Llamado Bob",
    "autor": "James Bowen",
    "genero": "biografia",
    "sinopsis": "La conmovedora historia real de la amistad entre un músico callejero en recuperación y un gato herido que lo ayudó a cambiar su vida."
  },
  {
    "id": 9,
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "distopia",
    "sinopsis": "En un futuro opresivo, el protagonista Winston Smith intenta rebelarse contra un régimen totalitario que controla cada aspecto de la vida de sus ciudadanos, con el 'Gran Hermano' vigilando cada movimiento."
  },
  {
    "id": 10,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 11,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 12,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 13,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 14,
    "titulo": "La chica del tren",
    "autor": "Paula Hawkins",
    "genero": "thriller",
    "sinopsis": "Una mujer alcohólica, que viaja en tren todos los días, ve algo que podría ser la clave para un misterio de desaparición, pero sus recuerdos no son confiables."
  },
  {
    "id": 15,
    "titulo": "Un Gato Callejero Llamado Bob",
    "autor": "James Bowen",
    "genero": "biografia",
    "sinopsis": "La conmovedora historia real de la amistad entre un músico callejero en recuperación y un gato herido que lo ayudó a cambiar su vida."
  },
  {
    "id": 16,
    "titulo": "Jurassic Park",
    "autor": "Michael Crichton",
    "genero": "ciencia-ficcion",
    "sinopsis": "Científicos logran clonar dinosaurios para un parque temático, pero el control se pierde y las criaturas prehistóricas desatan el caos en la isla."
  },
  {
    "id": 17,
    "titulo": "El Conde de Montecristo",
    "autor": "Alexandre Dumas",
    "genero": "clasicos",
    "sinopsis": "Un joven es injustamente encarcelado y, tras escapar, se dedica a buscar venganza contra quienes lo traicionaron, usando una enorme fortuna que ha adquirido."
  },
  {
    "id": 18,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "genero": "clasicos",
    "sinopsis": "Un hidalgo de La Mancha enloquece de tanto leer libros de caballería y decide convertirse en caballero andante, embarcándose en una serie de aventuras cómicas y trágicas."
  },
  {
    "id": 19,
    "titulo": "Ready Player One",
    "autor": "Ernest Cline",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro distópico, un adolescente se embarca en la búsqueda de un 'huevo de pascua' virtual en un mundo de realidad virtual, con la esperanza de heredar una gran fortuna."
  },
  {
    "id": 20,
    "titulo": "El nombre del viento",
    "autor": "Patrick Rothfuss",
    "genero": "fantasia",
    "sinopsis": "La historia de Kvothe, un legendario arcanista, músico y asesino, contada por él mismo. Relata su infancia, sus estudios en la universidad y sus heroicas hazañas."
  },
  {
    "id": 21,
    "titulo": "El Psicoanalista",
    "autor": "John Katzenbach",
    "genero": "thriller",
    "sinopsis": "Un psicoanalista recibe un anónimo con un ultimátum: o descubre la identidad del autor de la carta o uno de sus familiares morirá. Debe usar todo su ingenio para sobrevivir."
  },
  {
    "id": 22,
    "titulo": "La Odisea",
    "autor": "Homero",
    "genero": "clasicos",
    "sinopsis": "La épica aventura del héroe griego Odiseo en su viaje de diez años para regresar a casa, a Ítaca, después de la guerra de Troya."
  },
  {
    "id": 23,
    "titulo": "El gran Gatsby",
    "autor": "F. Scott Fitzgerald",
    "genero": "romance",
    "sinopsis": "Un misterioso millonario, Jay Gatsby, obsesionado con una mujer casada que vive al otro lado de la bahía, organiza lujosas fiestas con la esperanza de recuperarla."
  },
  {
    "id": 24,
    "titulo": "Los Pilares de la Tierra",
    "autor": "Ken Follett",
    "genero": "novela-historica",
    "sinopsis": "Una apasionante historia de amor, intriga y guerra que sigue la construcción de una catedral en la Inglaterra del siglo XII."
  },
  {
    "id": 25,
    "titulo": "Sherlock Holmes",
    "autor": "Arthur Conan Doyle",
    "genero": "misterio",
    "sinopsis": "Colección de relatos sobre el legendario detective Sherlock Holmes y su fiel amigo, el Dr. Watson, que resuelven los crímenes más enigmáticos de Londres."
  },
  {
    "id": 26,
    "titulo": "El Silencio de los Corderos",
    "autor": "Thomas Harris",
    "genero": "thriller-psicologico",
    "sinopsis": "Una joven cadete del FBI debe entrevistar a un brillante pero peligroso asesino en serie encarcelado, el Dr. Hannibal Lecter, para atrapar a otro asesino en libertad."
  },
  {
    "id": 27,
    "titulo": "El Problema de los Tres Cuerpos",
    "autor": "Cixin Liu",
    "genero": "ciencia-ficcion-dura",
    "sinopsis": "Un astrofísico chino, una sociedad secreta y una misteriosa civilización alienígena se encuentran en una trama que desafía los límites de la física y la humanidad."
  },
  {
    "id": 28,
    "titulo": "Canción de Hielo y Fuego",
    "autor": "George R.R. Martin",
    "genero": "fantasia",
    "sinopsis": "En un mundo de magia, dragones y nobles rivales, varias familias luchan por el control del Trono de Hierro, el poder supremo de los Siete Reinos."
  },
  {
    "id": 29,
    "titulo": "La sombra del viento",
    "autor": "Carlos Ruiz Zafón",
    "genero": "misterio",
    "sinopsis": "En la Barcelona de la posguerra, un joven encuentra un misterioso libro en el 'Cementerio de los Libros Olvidados' que lo arrastra a una trama de secretos, amor y venganza."
  },
  {
    "id": 30,
    "titulo": "El Misterio de la Cripta Embrujada",
    "autor": "Eduardo Mendoza",
    "genero": "novela-negra",
    "sinopsis": "Un detective privado poco convencional, recién salido de un manicomio, debe resolver la desaparición de una joven en un internado de monjas."
  },
  {
    "id": 31,
    "titulo": "Saga Crepúsculo",
    "autor": "Stephenie Meyer",
    "genero": "romance",
    "sinopsis": "Una adolescente se enamora de un misterioso compañero de clase que resulta ser un vampiro, y su relación se vuelve un peligro constante."
  },
  {
    "id": 32,
    "titulo": "El Mar de los Monstruos",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven semidiós, emprende un viaje épico para recuperar el vellocino de oro y salvar a su amigo y el campamento de semidioses."
  },
  {
    "id": 33,
    "titulo": "El Archivo de las Tormentas",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "Un mundo azotado por tormentas eternas, donde nobles guerreros luchan por el honor y la supervivencia, mientras se revelan antiguos secretos y profecías."
  },
  {
    "id": 34,
    "titulo": "La Caricia de la Oscuridad",
    "autor": "Cassandra Clare",
    "genero": "fantasia-urbana",
    "sinopsis": "Un adolescente descubre que pertenece a un grupo de cazadores de sombras, guerreros que protegen el mundo de los demonios, en la ciudad de Nueva York."
  },
  {
    "id": 35,
    "titulo": "El Sol también es una Estrella",
    "autor": "Nicola Yoon",
    "genero": "romance",
    "sinopsis": "Dos jóvenes se conocen en la ciudad de Nueva York y se enamoran en un solo día, mientras uno de ellos enfrenta la inminente deportación de su familia."
  },
  {
    "id": 36,
    "titulo": "El Hilo Dorado",
    "autor": "Silvia Moreno-Garcia",
    "genero": "misterio-historico",
    "sinopsis": "Una joven de la alta sociedad mexicana investiga la desaparición de su prima en una remota mansión de la campiña, desenterrando secretos oscuros y sobrenaturales."
  },
  {
    "id": 37,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 38,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 39,
    "titulo": "Rebelión en la Granja",
    "autor": "George Orwell",
    "genero": "distopia",
    "sinopsis": "Los animales de una granja se rebelan contra sus dueños para crear una sociedad igualitaria, pero el poder corrompe y la utopía se convierte en una opresión aún mayor."
  },
  {
    "id": 40,
    "titulo": "El Corazón de las Tinieblas",
    "autor": "Joseph Conrad",
    "genero": "clasicos",
    "sinopsis": "Un marinero viaja al interior de África para encontrar a un enigmático agente de comercio de marfil, confrontando la oscuridad del alma humana."
  },
  {
    "id": 41,
    "titulo": "Muerte en la Vicaría",
    "autor": "Agatha Christie",
    "genero": "misterio",
    "sinopsis": "La primera aparición de Miss Marple. Un coronel es asesinado en la casa del vicario, y la anciana debe usar su agudo ingenio para descubrir al culpable entre los sospechosos."
  },
  {
    "id": 42,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "no-ficcion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 43,
    "titulo": "El Ladrón del Rayo",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven que descubre ser un semidiós, se ve envuelto en una misión para encontrar el rayo maestro de Zeus, robado del Olimpo, y evitar una guerra entre los dioses."
  },
  {
    "id": 44,
    "titulo": "El Hilo Invisible",
    "autor": "Francesc Miralles y Héctor García",
    "genero": "ficcion-contemporanea",
    "sinopsis": "Un joven japonés viaja a Barcelona para reconciliarse con su pasado, descubriendo el 'ikigai' (la razón de ser) a través de una conexión inesperada con una joven."
  },
  {
    "id": 45,
    "titulo": "El Asesino Ciego",
    "autor": "Margaret Atwood",
    "genero": "novela-historica",
    "sinopsis": "Una mujer anciana desvela los secretos de su familia, su hermana fallecida y una novela de ciencia ficción que contiene una clave misteriosa, todo entrelazado con eventos históricos del siglo XX."
  },
  {
    "id": 46,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo caminan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza en un mundo sin civilización."
  },
  {
    "id": 47,
    "titulo": "Moby Dick",
    "autor": "Herman Melville",
    "genero": "clasicos",
    "sinopsis": "La obsesión del Capitán Ahab por cazar a Moby Dick, la ballena blanca que le arrebató una pierna, en una épica historia de venganza y locura en alta mar."
  },
  {
    "id": 48,
    "titulo": "El Laberinto de los Espíritus",
    "autor": "Carlos Ruiz Zafón",
    "genero": "misterio",
    "sinopsis": "El último libro de la saga del 'Cementerio de los Libros Olvidados', donde Daniel Sempere debe enfrentar a su mayor enemigo para desenterrar los últimos secretos de su pasado y su familia."
  },
  {
    "id": 49,
    "titulo": "La Sombra de Ender",
    "autor": "Orson Scott Card",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una historia paralela a 'El juego de Ender', contada desde la perspectiva de Bean, un genio estratega que lucha por sobrevivir y encontrar su lugar en el mundo."
  },
  {
    "id": 50,
    "titulo": "El Hombre que Confundió a su Mujer con un Sombrero",
    "autor": "Oliver Sacks",
    "genero": "no-ficcion",
    "sinopsis": "Una colección de historias reales de pacientes con trastornos neurológicos, donde el Dr. Sacks explora la naturaleza de la mente, la identidad y la enfermedad."
  },
  {
    "id": 51,
    "titulo": "Proyecto Hail Mary",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion-dura",
    "sinopsis": "Un astronauta se despierta en una nave espacial sin recordar su identidad o misión, y debe usar su ingenio científico para salvar a la humanidad de una catástrofe."
  },
  {
    "id": 52,
    "titulo": "El Gato con Botas",
    "autor": "Charles Perrault",
    "genero": "infantil",
    "sinopsis": "Un joven hereda un gato, pero resulta ser un animal astuto y parlanchín que lo ayuda a convertirse en un hombre rico, usando la astucia y el engaño."
  },
  {
    "id": 53,
    "titulo": "El Príncipe",
    "autor": "Nicolás Maquiavelo",
    "genero": "politica",
    "sinopsis": "Un tratado político del siglo XVI que ofrece consejos a los gobernantes para mantener el poder y gobernar con astucia, sin importar los medios que se utilicen."
  },
  {
    "id": 54,
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "fabula",
    "sinopsis": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le cuenta sus viajes, ofreciendo profundas reflexiones sobre la vida, el amor y la amistad."
  },
  {
    "id": 55,
    "titulo": "El Alquimista",
    "autor": "Paulo Coelho",
    "genero": "ficcion-contemporanea",
    "sinopsis": "Un joven pastor andaluz viaja a las pirámides de Egipto en busca de un tesoro, aprendiendo valiosas lecciones sobre el destino, el amor y la importancia de seguir los sueños."
  }
  {
    "id": 56,
    "titulo": "El Cuento de la Criada",
    "autor": "Margaret Atwood",
    "genero": "distopia",
    "sinopsis": "En una sociedad teocrática totalitaria, una mujer vive como concubina para procrear hijos para la élite, luchando por su libertad e identidad."
  },
  {
    "id": 57,
    "titulo": "El Mago de Oz",
    "autor": "L. Frank Baum",
    "genero": "fantasia-juvenil",
    "sinopsis": "Una niña llamada Dorothy es arrastrada por un tornado a la mágica tierra de Oz, donde emprende una aventura para encontrar al mago y volver a casa."
  },
  {
    "id": 58,
    "titulo": "Fahrenheit 451",
    "autor": "Ray Bradbury",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un bombero que se dedica a quemar libros en una sociedad futurista donde la lectura está prohibida comienza a cuestionar su trabajo y el mundo en el que vive."
  },
  {
    "id": 59,
    "titulo": "El Viaje al Centro de la Tierra",
    "autor": "Julio Verne",
    "genero": "aventura",
    "sinopsis": "Un profesor, su sobrino y un guía islandés emprenden una expedición para explorar el interior de la Tierra, encontrando mundos prehistóricos y paisajes asombrosos."
  },
  {
    "id": 60,
    "titulo": "Carrie",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Una adolescente marginada y maltratada descubre que tiene poderes telequinéticos, desatando una terrible venganza en su baile de graduación."
  },
  {
    "id": 61,
    "titulo": "La Metamorfosis",
    "autor": "Franz Kafka",
    "genero": "clasicos",
    "sinopsis": "Un comerciante llamado Gregor Samsa se despierta un día transformado en un monstruoso insecto, y debe enfrentarse a la reacción de su familia y la sociedad."
  },
  {
    "id": 62,
    "titulo": "Los Tres Mosqueteros",
    "autor": "Alexandre Dumas",
    "genero": "aventura",
    "sinopsis": "Las aventuras de D'Artagnan, un joven que viaja a París para unirse a los Mosqueteros de la Guardia, y sus tres amigos, Athos, Porthos y Aramis."
  },
  {
    "id": 63,
    "titulo": "El Extranjero",
    "autor": "Albert Camus",
    "genero": "filosofia",
    "sinopsis": "Un hombre llamado Meursault vive una vida sin significado, y tras cometer un asesinato, es juzgado no por sus acciones, sino por su indiferencia ante la vida."
  },
  {
    "id": 64,
    "titulo": "La Sombra del Dragón",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "Un joven esclavo con poderes místicos debe unirse a un grupo de revolucionarios para luchar contra un imperio opresor y liberar a su pueblo."
  },
  {
    "id": 65,
    "titulo": "El Huesped",
    "autor": "Stephenie Meyer",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una raza alienígena invade la Tierra, tomando el control de los cuerpos humanos. Una mujer, con su mente todavía intacta, se une a la lucha por la supervivencia."
  },
  {
    "id": 66,
    "titulo": "El Lector",
    "autor": "Bernhard Schlink",
    "genero": "romance",
    "sinopsis": "Un joven estudiante tiene una relación secreta con una mujer mucho mayor, pero años después la encuentra en un juicio por crímenes de guerra, revelando su oscuro pasado."
  },
  {
    "id": 67,
    "titulo": "Las Crónicas de Narnia",
    "autor": "C.S. Lewis",
    "genero": "fantasia-juvenil",
    "sinopsis": "Un grupo de hermanos viaja a un mundo mágico a través de un armario, donde deben unirse a un león parlante para salvar el reino de una bruja malvada."
  },
  {
    "id": 68,
    "titulo": "El Ladrón de Historias",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 69,
    "titulo": "El Resplandor",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Un escritor alcohólico y su familia son contratados para cuidar un hotel aislado durante el invierno, donde fuerzas malignas y la locura comienzan a atormentarlos."
  },
  {
    "id": 70,
    "titulo": "Los Desposeídos",
    "autor": "Ursula K. Le Guin",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un físico de un planeta anarquista viaja a un mundo capitalista para unificar sus sociedades, pero se encuentra con un conflicto de ideologías."
  },
  {
    "id": 71,
    "titulo": "El Perfume",
    "autor": "Patrick Süskind",
    "genero": "thriller",
    "sinopsis": "En el siglo XVIII en Francia, un asesino en serie con un extraordinario sentido del olfato busca el aroma perfecto para crear el perfume definitivo, cueste lo que cueste."
  },
  {
    "id": 72,
    "titulo": "Un Mundo Feliz",
    "autor": "Aldous Huxley",
    "genero": "distopia",
    "sinopsis": "En un futuro donde la felicidad está garantizada por una droga llamada 'soma', un hombre 'salvaje' de una reserva se enfrenta a los ideales de la sociedad perfecta."
  },
  {
    "id": 73,
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "fabula",
    "sinopsis": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le cuenta sus viajes, ofreciendo profundas reflexiones sobre la vida, el amor y la amistad."
  },
  {
    "id": 74,
    "titulo": "El Padrino",
    "autor": "Mario Puzo",
    "genero": "novela-negra",
    "sinopsis": "Un joven se ve obligado a tomar las riendas del imperio criminal de su familia en Nueva York, sumergiéndose en un mundo de violencia, lealtad y traición."
  },
  {
    "id": 75,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia",
    "sinopsis": "Una colección de reflexiones personales escritas por el emperador romano, donde explora la sabiduría del estoicismo y la búsqueda de la virtud y la serenidad en la vida."
  },
  {
    "id": 76,
    "titulo": "El Hombre de la Sombra",
    "autor": "Lee Child",
    "genero": "thriller-accion",
    "sinopsis": "Jack Reacher, un ex militar solitario, se ve envuelto en una trama de conspiración y violencia al ser falsamente acusado de un crimen en una pequeña ciudad."
  },
  {
    "id": 77,
    "titulo": "La Bóveda de Acero",
    "autor": "Isaac Asimov",
    "genero": "ciencia-ficcion",
    "sinopsis": "En una futura Tierra superpoblada, un detective de la ciudad se une a un robot humanoide para resolver el asesinato de un extraterrestre, en una sociedad que rechaza a los robots."
  },
  {
    "id": 78,
    "titulo": "Saga Nácar",
    "autor": "Jay Kristoff",
    "genero": "fantasia-urbana",
    "sinopsis": "Una vampira de Tokyo y su socio samurai cazarrecompensas luchan contra criaturas de la noche y demonios en una metrópolis que mezcla la tecnología con la magia."
  },
  {
    "id": 79,
    "titulo": "El Laberinto del Fauno",
    "autor": "Guillermo del Toro",
    "genero": "fantasia",
    "sinopsis": "Una joven que vive en la España de la posguerra, escapa de una realidad brutal a través de un mundo de fantasía lleno de criaturas mágicas y misterios."
  },
  {
    "id": 80,
    "titulo": "El Gato Negro",
    "autor": "Edgar Allan Poe",
    "genero": "terror",
    "sinopsis": "Un hombre atormentado por su alcoholismo y la violencia, relata cómo su vida se desmorona tras asesinar a su gato, llevándolo a una espiral de locura y crimen."
  }
  {
    "id": 81,
    "titulo": "Persepolis",
    "autor": "Marjane Satrapi",
    "genero": "novela-grafica",
    "sinopsis": "Una autobiografía en formato de cómic que narra la infancia de la autora en Irán durante la Revolución Islámica y la guerra contra Irak."
  },
  {
    "id": 82,
    "titulo": "Siddhartha",
    "autor": "Hermann Hesse",
    "genero": "filosofia",
    "sinopsis": "La búsqueda espiritual de un joven que deja su cómoda vida para encontrar el sentido de la existencia a través de diferentes experiencias."
  },
  {
    "id": 83,
    "titulo": "De ratones y hombres",
    "autor": "John Steinbeck",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La trágica historia de dos amigos, uno de ellos con una discapacidad mental, que sueñan con tener su propia granja durante la Gran Depresión."
  },
  {
    "id": 84,
    "titulo": "Frankenstein",
    "autor": "Mary Shelley",
    "genero": "terror",
    "sinopsis": "Un científico ambicioso crea una criatura a partir de partes de cadáveres, pero el monstruo cobra vida y lo atormenta, explorando temas de ambición y moralidad."
  },
  {
    "id": 85,
    "titulo": "2001: Una odisea del espacio",
    "autor": "Arthur C. Clarke",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una novela que explora el origen de la humanidad y el futuro del espacio a través de un monolito misterioso que guía la evolución humana."
  },
  {
    "id": 86,
    "titulo": "Matar a un ruiseñor",
    "autor": "Harper Lee",
    "genero": "clasicos",
    "sinopsis": "En el sur de Estados Unidos, un abogado defiende a un hombre negro acusado de violar a una mujer blanca, en una conmovedora historia sobre la justicia y el prejuicio."
  },
  {
    "id": 87,
    "titulo": "Drácula",
    "autor": "Bram Stoker",
    "genero": "terror",
    "sinopsis": "Un abogado viaja a Transilvania para visitar a un noble misterioso, que resulta ser un vampiro con sed de sangre y que se muda a Londres para sembrar el terror."
  },
  {
    "id": 88,
    "titulo": "Saga de la Luna Roja",
    "autor": "Pierce Brown",
    "genero": "ciencia-ficcion",
    "sinopsis": "En una sociedad jerárquica, un joven minero se infiltra en las filas de la élite de Marte para desatar una rebelión contra un sistema opresivo."
  },
  {
    "id": 89,
    "titulo": "El Diario de Anna Frank",
    "autor": "Anne Frank",
    "genero": "biografia",
    "sinopsis": "El conmovedor diario de una adolescente judía que se escondió con su familia en un ático de Amsterdam durante la ocupación nazi, narrando su vida y pensamientos."
  },
  {
    "id": 90,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza."
  },
  {
    "id": 91,
    "titulo": "El Despertar",
    "autor": "Kate Chopin",
    "genero": "clasicos",
    "sinopsis": "La historia de Edna Pontellier, una mujer casada que busca su propia identidad y libertad en una sociedad del siglo XIX que la oprime."
  },
  {
    "id": 92,
    "titulo": "El Cementerio de Praga",
    "autor": "Umberto Eco",
    "genero": "misterio-historico",
    "sinopsis": "Un misterioso narrador, que dice haber escrito los falsos Protocolos de los Sabios de Sion, revela una historia de conspiraciones, falsificaciones y crímenes."
  },
  {
    "id": 93,
    "titulo": "El Fin de la Infancia",
    "autor": "Arthur C. Clarke",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una raza alienígena llega a la Tierra con una misión benévola, pero su presencia transforma la sociedad humana de manera irreversible."
  },
  {
    "id": 94,
    "titulo": "Flores para Algernon",
    "autor": "Daniel Keyes",
    "genero": "ficcion-contemporanea",
    "sinopsis": "Un hombre con discapacidad mental se somete a un experimento para aumentar su inteligencia, documentando su crecimiento y el posterior deterioro en su diario."
  },
  {
    "id": 95,
    "titulo": "El Dios de las Pequeñas Cosas",
    "autor": "Arundhati Roy",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La trágica historia de una familia en la India y las consecuencias de un romance prohibido, explorando las complejidades de la sociedad y la tradición."
  },
  {
    "id": 96,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 97,
    "titulo": "Cosmos",
    "autor": "Carl Sagan",
    "genero": "divulgacion-cientifica",
    "sinopsis": "Un viaje a través del universo que explica de manera accesible la historia del cosmos, la ciencia y la humanidad, con bellas reflexiones sobre nuestro lugar en el universo."
  },
  {
    "id": 98,
    "titulo": "Cartas a un Joven Poeta",
    "autor": "Rainer Maria Rilke",
    "genero": "epistolar",
    "sinopsis": "Una colección de diez cartas que un poeta veterano escribe a un joven aspirante, ofreciendo sabios consejos sobre el arte, la vida y la soledad del artista."
  },
  {
    "id": 99,
    "titulo": "Ficciones",
    "autor": "Jorge Luis Borges",
    "genero": "cuentos",
    "sinopsis": "Una colección de cuentos breves que exploran temas de laberintos, bibliotecas infinitas y realidades alternativas, desafiando la noción del tiempo y el espacio."
  },
  {
    "id": 100,
    "titulo": "El Retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "genero": "clasicos",
    "sinopsis": "Un joven llamado Dorian Gray desea que un retrato envejezca en su lugar, mientras él se mantiene eternamente joven. Sin embargo, su alma se vuelve corrupta y el retrato muestra su verdadera decadencia."
  }
  {
    "id": 101,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza en un mundo sin civilización."
  },
  {
    "id": 102,
    "titulo": "El Corazón de las Tinieblas",
    "autor": "Joseph Conrad",
    "genero": "clasicos",
    "sinopsis": "Un marinero viaja al interior de África para encontrar a un enigmático agente de comercio de marfil, confrontando la oscuridad del alma humana."
  },
  {
    "id": 103,
    "titulo": "Persepolis",
    "autor": "Marjane Satrapi",
    "genero": "novela-grafica",
    "sinopsis": "Una autobiografía en formato de cómic que narra la infancia de la autora en Irán durante la Revolución Islámica y la guerra contra Irak."
  },
  {
    "id": 104,
    "titulo": "Siddhartha",
    "autor": "Hermann Hesse",
    "genero": "filosofia",
    "sinopsis": "La búsqueda espiritual de un joven que deja su cómoda vida para encontrar el sentido de la existencia a través de diferentes experiencias."
  },
  {
    "id": 105,
    "titulo": "De ratones y hombres",
    "autor": "John Steinbeck",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La trágica historia de dos amigos, uno de ellos con una discapacidad mental, que sueñan con tener su propia granja durante la Gran Depresión."
  },
  {
    "id": 106,
    "titulo": "Frankenstein",
    "autor": "Mary Shelley",
    "genero": "terror",
    "sinopsis": "Un científico ambicioso crea una criatura a partir de partes de cadáveres, pero el monstruo cobra vida y lo atormenta, explorando temas de ambición y moralidad."
  },
  {
    "id": 107,
    "titulo": "2001: Una odisea del espacio",
    "autor": "Arthur C. Clarke",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una novela que explora el origen de la humanidad y el futuro del espacio a través de un monolito misterioso que guía la evolución humana."
  },
  {
    "id": 108,
    "titulo": "Matar a un ruiseñor",
    "autor": "Harper Lee",
    "genero": "clasicos",
    "sinopsis": "En el sur de Estados Unidos, un abogado defiende a un hombre negro acusado de violar a una mujer blanca, en una conmovedora historia sobre la justicia y el prejuicio."
  },
  {
    "id": 109,
    "titulo": "Drácula",
    "autor": "Bram Stoker",
    "genero": "terror",
    "sinopsis": "Un abogado viaja a Transilvania para visitar a un noble misterioso, que resulta ser un vampiro con sed de sangre y que se muda a Londres para sembrar el terror."
  },
  {
    "id": 110,
    "titulo": "Saga de la Luna Roja",
    "autor": "Pierce Brown",
    "genero": "ciencia-ficcion",
    "sinopsis": "En una sociedad jerárquica, un joven minero se infiltra en las filas de la élite de Marte para desatar una rebelión contra un sistema opresivo."
  },
  {
    "id": 111,
    "titulo": "El Diario de Anna Frank",
    "autor": "Anne Frank",
    "genero": "biografia",
    "sinopsis": "El conmovedor diario de una adolescente judía que se escondió con su familia en un ático de Amsterdam durante la ocupación nazi, narrando su vida y pensamientos."
  },
  {
    "id": 112,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza."
  },
  {
    "id": 113,
    "titulo": "El Despertar",
    "autor": "Kate Chopin",
    "genero": "clasicos",
    "sinopsis": "La historia de Edna Pontellier, una mujer casada que busca su propia identidad y libertad en una sociedad del siglo XIX que la oprime."
  },
  {
    "id": 114,
    "titulo": "El Cementerio de Praga",
    "autor": "Umberto Eco",
    "genero": "misterio-historico",
    "sinopsis": "Un misterioso narrador, que dice haber escrito los falsos Protocolos de los Sabios de Sion, revela una historia de conspiraciones, falsificaciones y crímenes."
  },
  {
    "id": 115,
    "titulo": "El Fin de la Infancia",
    "autor": "Arthur C. Clarke",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una raza alienígena llega a la Tierra con una misión benévola, pero su presencia transforma la sociedad humana de manera irreversible."
  },
  {
    "id": 116,
    "titulo": "Flores para Algernon",
    "autor": "Daniel Keyes",
    "genero": "ficcion-contemporanea",
    "sinopsis": "Un hombre con discapacidad mental se somete a un experimento para aumentar su inteligencia, documentando su crecimiento y el posterior deterioro en su diario."
  },
  {
    "id": 117,
    "titulo": "El Dios de las Pequeñas Cosas",
    "autor": "Arundhati Roy",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La trágica historia de una familia en la India y las consecuencias de un romance prohibido, explorando las complejidades de la sociedad y la tradición."
  },
  {
    "id": 118,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 119,
    "titulo": "Cosmos",
    "autor": "Carl Sagan",
    "genero": "divulgacion",
    "sinopsis": "Un viaje a través del universo que explica de manera accesible la historia del cosmos, la ciencia y la humanidad, con bellas reflexiones sobre nuestro lugar en el universo."
  },
  {
    "id": 120,
    "titulo": "Cartas a un Joven Poeta",
    "autor": "Rainer Maria Rilke",
    "genero": "epistolar",
    "sinopsis": "Una colección de diez cartas que un poeta veterano escribe a un joven aspirante, ofreciendo sabios consejos sobre el arte, la vida y la soledad del artista."
  },
  {
    "id": 121,
    "titulo": "Ficciones",
    "autor": "Jorge Luis Borges",
    "genero": "cuentos",
    "sinopsis": "Una colección de cuentos breves que exploran temas de laberintos, bibliotecas infinitas y realidades alternativas, desafiando la noción del tiempo y el espacio."
  },
  {
    "id": 122,
    "titulo": "El Retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "genero": "clasicos",
    "sinopsis": "Un joven llamado Dorian Gray desea que un retrato envejezca en su lugar, mientras él se mantiene eternamente joven. Sin embargo, su alma se vuelve corrupta y el retrato muestra su verdadera decadencia."
  },
  {
    "id": 123,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 124,
    "titulo": "Steve Jobs",
    "autor": "Walter Isaacson",
    "genero": "biografia",
    "sinopsis": "La biografía autorizada del cofundador de Apple, basada en más de cuarenta entrevistas, que explora su vida, su personalidad y su legado en la tecnología."
  },
  {
    "id": 125,
    "titulo": "El Padrino",
    "autor": "Mario Puzo",
    "genero": "novela-negra",
    "sinopsis": "Un joven se ve obligado a tomar las riendas del imperio criminal de su familia en Nueva York, sumergiéndose en un mundo de violencia, lealtad y traición."
  }
  {
    "id": 126,
    "titulo": "El viejo y el mar",
    "autor": "Ernest Hemingway",
    "genero": "clasicos",
    "sinopsis": "La historia de Santiago, un viejo pescador cubano que lucha incansablemente por atrapar un pez espada gigante, su mayor desafío y su mayor triunfo."
  },
  {
    "id": 127,
    "titulo": "El retrato de un asesino",
    "autor": "Thomas Harris",
    "genero": "thriller-psicologico",
    "sinopsis": "Una joven detective del FBI debe atrapar a un asesino en serie, con la ayuda de un brillante y peligroso psicópata que se encuentra en prisión."
  },
  {
    "id": 128,
    "titulo": "La guía del autoestopista galáctico",
    "autor": "Douglas Adams",
    "genero": "ciencia-ficcion-comedia",
    "sinopsis": "Arthur Dent, un hombre que es rescatado por un amigo alienígena, viaja por el espacio y vive una serie de disparatadas aventuras tras la destrucción de la Tierra."
  },
  {
    "id": 129,
    "titulo": "Blade Runner: ¿Sueñan los androides con ovejas eléctricas?",
    "autor": "Philip K. Dick",
    "genero": "ciberpunk",
    "sinopsis": "En un futuro post-apocalíptico, un cazarrecompensas es contratado para 'retirar' a un grupo de androides rebeldes y casi indistinguibles de los humanos."
  },
  {
    "id": 130,
    "titulo": "Los miserables",
    "autor": "Victor Hugo",
    "genero": "clasicos",
    "sinopsis": "La épica historia de Jean Valjean, un hombre que huye de la justicia tras robar pan, y su incansable búsqueda de la redención en la Francia del siglo XIX."
  },
  {
    "id": 131,
    "titulo": "La ladrona de libros",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 132,
    "titulo": "Crónica de una muerte anunciada",
    "autor": "Gabriel García Márquez",
    "genero": "realismo-magico",
    "sinopsis": "La narración de los eventos que llevaron al asesinato de Santiago Nasar, con un narrador que reconstruye el crimen a través de los testimonios de quienes lo presenciaron."
  },
  {
    "id": 133,
    "titulo": "El misterio de la cripta embrujada",
    "autor": "Eduardo Mendoza",
    "genero": "novela-negra",
    "sinopsis": "Un detective privado, poco convencional y recién salido de un manicomio, debe resolver la desaparición de una joven en un internado de monjas."
  },
  {
    "id": 134,
    "titulo": "Yo, robot",
    "autor": "Isaac Asimov",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una serie de cuentos interconectados que exploran las tres leyes de la robótica y cómo los robots se convierten en parte de la sociedad humana."
  },
  {
    "id": 135,
    "titulo": "El principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "fabula",
    "sinopsis": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le cuenta sus viajes, ofreciendo profundas reflexiones sobre la vida, el amor y la amistad."
  },
  {
    "id": 136,
    "titulo": "Cumbres Borrascosas",
    "autor": "Emily Brontë",
    "genero": "romance",
    "sinopsis": "Una oscura y apasionada historia de amor y venganza entre el atormentado Heathcliff y la caprichosa Catherine, en las salvajes llanuras de Yorkshire."
  },
  {
    "id": 137,
    "titulo": "El retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "genero": "clasicos",
    "sinopsis": "Un joven llamado Dorian Gray desea que un retrato envejezca en su lugar, mientras él se mantiene eternamente joven, pero su alma se corrompe y el retrato muestra su decadencia."
  },
  {
    "id": 138,
    "titulo": "La peste",
    "autor": "Albert Camus",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La vida en la ciudad de Orán se ve alterada por una misteriosa plaga que obliga a sus ciudadanos a vivir en un estado de cuarentena y aislamiento."
  },
  {
    "id": 139,
    "titulo": "Drácula",
    "autor": "Bram Stoker",
    "genero": "terror",
    "sinopsis": "Un abogado viaja a Transilvania para visitar a un noble misterioso que resulta ser un vampiro con sed de sangre y que se muda a Londres para sembrar el terror."
  },
  {
    "id": 140,
    "titulo": "La casa de los espíritus",
    "autor": "Isabel Allende",
    "genero": "realismo-magico",
    "sinopsis": "La historia de la familia Trueba a lo largo de varias generaciones, en un país latinoamericano que experimenta grandes cambios políticos y sociales."
  },
  {
    "id": 141,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 142,
    "titulo": "El Hilo Dorado",
    "autor": "Silvia Moreno-Garcia",
    "genero": "misterio-historico",
    "sinopsis": "Una joven de la alta sociedad mexicana investiga la desaparición de su prima en una remota mansión de la campiña, desenterrando secretos oscuros y sobrenaturales."
  },
  {
    "id": 143,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciberpunk",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 144,
    "titulo": "El hombre que no amaba a las mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 145,
    "titulo": "Rebelión en la granja",
    "autor": "George Orwell",
    "genero": "distopia",
    "sinopsis": "Los animales de una granja se rebelan contra sus dueños para crear una sociedad igualitaria, pero el poder corrompe y la utopía se convierte en una opresión aún mayor."
  },
  {
    "id": 146,
    "titulo": "El Corazón de las Tinieblas",
    "autor": "Joseph Conrad",
    "genero": "clasicos",
    "sinopsis": "Un marinero viaja al interior de África para encontrar a un enigmático agente de comercio de marfil, confrontando la oscuridad del alma humana."
  },
  {
    "id": 147,
    "titulo": "El Fin de la Infancia",
    "autor": "Arthur C. Clarke",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una raza alienígena llega a la Tierra con una misión benévola, pero su presencia transforma la sociedad humana de manera irreversible."
  },
  {
    "id": 148,
    "titulo": "Flores para Algernon",
    "autor": "Daniel Keyes",
    "genero": "ficcion-contemporanea",
    "sinopsis": "Un hombre con discapacidad mental se somete a un experimento para aumentar su inteligencia, documentando su crecimiento y el posterior deterioro en su diario."
  },
  {
    "id": 149,
    "titulo": "El Dios de las Pequeñas Cosas",
    "autor": "Arundhati Roy",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La trágica historia de una familia en la India y las consecuencias de un romance prohibido, explorando las complejidades de la sociedad y la tradición."
  },
  {
    "id": 150,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  }
  {
    "id": 151,
    "titulo": "Saga 'Alas de Sangre' (Saga completa)",
    "autor": "Rebecca Yarros",
    "genero": "fantasia-romantica",
    "sinopsis": "La saga que ha revolucionado el género. Una joven con un cuerpo frágil se ve obligada a unirse a un colegio de jinetes de dragones, donde debe luchar por sobrevivir y se ve envuelta en un romance inesperado."
  },
  {
    "id": 152,
    "titulo": "Saga 'Corte de Rosas y Espinas' (Saga completa)",
    "autor": "Sarah J. Maas",
    "genero": "fantasia-romantica",
    "sinopsis": "Una adaptación de 'La Bella y la Bestia'. Una cazadora humana mata a una criatura mágica y es llevada a una tierra de hadas, donde se enamora de su captor y se ve envuelta en una guerra por el poder."
  },
  {
    "id": 153,
    "titulo": "Saga 'Una Canción de Hielo y Fuego' (Saga completa)",
    "autor": "George R.R. Martin",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo de magia, dragones y nobles rivales, varias familias luchan por el control del Trono de Hierro, el poder supremo de los Siete Reinos. Una saga de intrigas políticas y batallas épicas."
  },
  {
    "id": 154,
    "titulo": "Saga 'Una Vida de Mentiras' (Saga completa)",
    "autor": "Leigh Bardugo",
    "genero": "fantasia-juvenil",
    "sinopsis": "En un mundo de magia oscura, una joven huérfana descubre que tiene un poder extraordinario que podría cambiar el destino de su país. Una saga de aventuras, intrigas y amistad."
  },
  {
    "id": 155,
    "titulo": "Saga 'Sombra y Hueso' (Saga completa)",
    "autor": "Leigh Bardugo",
    "genero": "fantasia",
    "sinopsis": "En un mundo dividido por una franja de oscuridad, una joven soldado descubre que tiene un poder para invocar la luz. Se ve arrastrada a un mundo de magia y secretos, luchando por el destino de su país."
  },
  {
    "id": 156,
    "titulo": "Saga 'Nevernight' (Saga completa)",
    "autor": "Jay Kristoff",
    "genero": "fantasia-oscura",
    "sinopsis": "Una joven que ha visto a su familia ser asesinada se une a una escuela de asesinos, buscando venganza por los crímenes cometidos contra su familia. Una saga de magia, sangre y violencia."
  },
  {
    "id": 157,
    "titulo": "El Libro de los Secretos de las Sombras",
    "autor": "V.E. Schwab",
    "genero": "fantasia-oscura",
    "sinopsis": "En un Londres de fantasía con múltiples mundos paralelos, un joven mago con una habilidad única para viajar entre ellos, debe luchar por su supervivencia y el destino de los mundos."
  },
  {
    "id": 158,
    "titulo": "El Lector del Metro",
    "autor": "Jean-Paul Didierlaurent",
    "genero": "ficcion-contemporanea",
    "sinopsis": "Un lector empedernido que lee en el metro, se ve obligado a compartir sus lecturas con los demás, descubriendo historias que lo conectan con desconocidos de la ciudad."
  },
  {
    "id": 159,
    "titulo": "El Secreto de la Familia O'Malley",
    "autor": "Colleen Hoover",
    "genero": "romance",
    "sinopsis": "Una joven se enamora de un apuesto extraño, pero pronto descubre que su familia guarda un oscuro secreto que amenaza su relación y su felicidad."
  },
  {
    "id": 160,
    "titulo": "Saga 'El Viaje de Gwendy' (Saga completa)",
    "autor": "Stephen King y Richard Chizmar",
    "genero": "terror",
    "sinopsis": "Una niña llamada Gwendy recibe una misteriosa caja con botones que le da poderes, pero también le hace preguntas morales sobre el poder y la responsabilidad."
  }
  {
    "id": 161,
    "titulo": "Cómo ser un estoico",
    "autor": "Massimo Pigliucci",
    "genero": "filosofia",
    "sinopsis": "Un libro moderno que explora las enseñanzas de los grandes filósofos estoicos y ofrece una guía práctica para aplicar su sabiduría en el siglo XXI."
  },
  {
    "id": 162,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 163,
    "titulo": "Cartas a Lucilio",
    "autor": "Séneca",
    "genero": "filosofia-clasica",
    "sinopsis": "Una colección de 124 cartas escritas por el filósofo Séneca, en las que aborda temas como la amistad, la muerte, la felicidad y la forma de vivir una vida significativa."
  },
  {
    "id": 164,
    "titulo": "El Manual de Epicteto",
    "autor": "Epicteto",
    "genero": "filosofia-clasica",
    "sinopsis": "Una guía concisa para la vida estoica, escrita por uno de los filósofos más influyentes de la antigua Grecia. Ofrece principios para el autocontrol y la paz interior."
  },
  {
    "id": 165,
    "titulo": "El Obstáculo es el Camino",
    "autor": "Ryan Holiday",
    "genero": "autoayuda",
    "sinopsis": "Un libro que enseña a aplicar la filosofía estoica para superar los desafíos y convertir los problemas en oportunidades. Un bestseller del estoicismo moderno."
  },
  {
    "id": 166,
    "titulo": "El Ego es el Enemigo",
    "autor": "Ryan Holiday",
    "genero": "autoayuda",
    "sinopsis": "Explora cómo el ego puede sabotear nuestra vida y cómo la humildad y la disciplina, pilares del estoicismo, son esenciales para el éxito y el crecimiento personal."
  },
  {
    "id": 167,
    "titulo": "Diario para Estoicos",
    "autor": "Ryan Holiday y Stephen Hanselman",
    "genero": "filosofia",
    "sinopsis": "Una guía diaria que ofrece una meditación estoica para cada día del año, con citas de Marco Aurelio, Séneca y otros filósofos para reflexionar sobre la vida."
  },
  {
    "id": 168,
    "titulo": "Una Guía para la Vida Buena",
    "autor": "William B. Irvine",
    "genero": "filosofia",
    "sinopsis": "Un libro que reinterpreta las enseñanzas de los estoicos para el lector moderno. Ofrece una hoja de ruta para alcanzar la felicidad y la tranquilidad en la vida."
  },
  {
    "id": 169,
    "titulo": "El Manual para la Felicidad",
    "autor": "Séneca",
    "genero": "filosofia-clasica",
    "sinopsis": "Una colección de ensayos de Séneca que exploran la naturaleza de la felicidad, el vicio, la virtud y la ira, con lecciones atemporales para una vida plena."
  },
  {
    "id": 170,
    "titulo": "La Sabiduría de los Estoicos",
    "autor": "Donald Robertson",
    "genero": "filosofia",
    "sinopsis": "Un libro que explora la vida y las ideas de los principales estoicos. El autor, un psicoterapeuta, analiza cómo sus enseñanzas son relevantes para la psicología moderna."
  },
  {
    "id": 171,
    "titulo": "El Cerebro del Estoico",
    "autor": "Donald Robertson",
    "genero": "psicologia-filosofia",
    "sinopsis": "Una biografía novelada de Epicteto que explora la relación entre la filosofía estoica y la terapia cognitiva, mostrando cómo las ideas antiguas pueden ayudar con los problemas modernos."
  },
  {
    "id": 172,
    "titulo": "El Pensamiento de Marco Aurelio",
    "autor": "Pietro Citati",
    "genero": "biografia-filosofica",
    "sinopsis": "Un profundo análisis de la vida y la obra de Marco Aurelio, que explora su faceta como emperador, filósofo y ser humano en busca de la verdad."
  },
  {
    "id": 173,
    "titulo": "Las 48 Leyes del Poder",
    "autor": "Robert Greene",
    "genero": "autoayuda",
    "sinopsis": "Aunque no es un libro estoico, comparte la filosofía de la disciplina, el autocontrol y la estrategia para alcanzar el poder, con lecciones extraídas de la historia."
  },
  {
    "id": 174,
    "titulo": "Diario de un Emprendedor",
    "autor": "Ryan Holiday",
    "genero": "negocios-autoayuda",
    "sinopsis": "Ryan Holiday aplica principios estoicos y de marketing para ayudar a los emprendedores a enfrentar los desafíos del mundo de los negocios con sabiduría y resiliencia."
  },
  {
    "id": 175,
    "titulo": "El arte de la felicidad",
    "autor": "Dalai Lama y Howard C. Cutler",
    "genero": "filosofia",
    "sinopsis": "Aunque no es estoico, este libro comparte las ideas de la búsqueda de la felicidad a través de la compasión, la autoconciencia y el control mental."
  },
  {
    "id": 176,
    "titulo": "El Arte de la Guerra",
    "autor": "Sun Tzu",
    "genero": "filosofia-clasica",
    "sinopsis": "Un antiguo tratado chino sobre estrategia militar que ofrece principios aplicables a la vida diaria, el liderazgo y la resolución de conflictos."
  },
  {
    "id": 177,
    "titulo": "Pensar Rápido, Pensar Despacio",
    "autor": "Daniel Kahneman",
    "genero": "psicologia",
    "sinopsis": "Un libro que explora las dos formas en que la mente toma decisiones: una rápida e intuitiva, y otra lenta y reflexiva. Esencial para entender y controlar nuestros juicios."
  },
  {
    "id": 178,
    "titulo": "El Poder del Ahora",
    "autor": "Eckhart Tolle",
    "genero": "espiritualidad",
    "sinopsis": "Un libro que, aunque no es estoico, promueve la idea de vivir en el presente y liberarse de los pensamientos del pasado y el futuro, un concepto clave en el estoicismo."
  },
  {
    "id": 179,
    "titulo": "En Busca del Sentido",
    "autor": "Viktor Frankl",
    "genero": "biografia-psicologia",
    "sinopsis": "Un psiquiatra judío narra su experiencia en campos de concentración nazis y concluye que el ser humano puede encontrar un propósito incluso en el sufrimiento."
  },
  {
    "id": 180,
    "titulo": "La Vía del Samurai",
    "autor": "Miyamoto Musashi",
    "genero": "filosofia-oriental",
    "sinopsis": "Un tratado de artes marciales y estrategia que se enfoca en la autodisciplina, el dominio de uno mismo y la preparación para la adversidad. Similar en espíritu a las enseñanzas estoicas."
  }
  {
    "id": 181,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 182,
    "titulo": "Una brevísima historia de casi todo",
    "autor": "Bill Bryson",
    "genero": "ciencia",
    "sinopsis": "Un libro de divulgación científica que explica de manera sencilla la historia de la ciencia y la formación del universo, con capítulos sobre biología y genética."
  },
  {
    "id": 183,
    "titulo": "La vida inmortal de Henrietta Lacks",
    "autor": "Rebecca Skloot",
    "genero": "biotecnologia-etica",
    "sinopsis": "La historia real de las células de una mujer afroamericana que fueron tomadas sin su consentimiento para investigación científica, lo que plantea preguntas éticas sobre la bioética y el consentimiento informado."
  },
  {
    "id": 184,
    "titulo": "Cracking the Coding Interview",
    "autor": "Gayle Laakmann McDowell",
    "genero": "programacion",
    "sinopsis": "Una guía imprescindible para prepararse para entrevistas de programación. Contiene 189 preguntas y respuestas detalladas sobre algoritmos, estructuras de datos y lógica."
  },
  {
    "id": 185,
    "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro fundamental que enseña a escribir código limpio y legible, mejorando la calidad y el mantenimiento del software. Un clásico para cualquier programador profesional."
  },
  {
    "id": 186,
    "titulo": "The Pragmatic Programmer",
    "autor": "Andrew Hunt y David Thomas",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Una colección de consejos para mejorar las habilidades de programación y la productividad. Cubre temas como la resolución de problemas, el aprendizaje de nuevas tecnologías y el diseño de software."
  },
  {
    "id": 187,
    "titulo": "Automate the Boring Stuff with Python",
    "autor": "Al Sweigart",
    "genero": "programacion-python",
    "sinopsis": "Un libro práctico para principiantes que enseña a usar Python para automatizar tareas cotidianas, como procesar archivos, extraer datos de la web y enviar correos electrónicos."
  },
  {
    "id": 188,
    "titulo": "Eloquent JavaScript",
    "autor": "Marijn Haverbeke",
    "genero": "programacion-javascript",
    "sinopsis": "Una introducción completa a JavaScript y la programación, desde los conceptos básicos hasta el desarrollo de aplicaciones web y la manipulación del DOM."
  },
  {
    "id": 189,
    "titulo": "Introducción a los algoritmos",
    "autor": "Thomas H. Cormen et al.",
    "genero": "programacion-algoritmos",
    "sinopsis": "Un libro de texto de referencia que cubre en profundidad los principales algoritmos y estructuras de datos, ideal para estudiantes de informática y profesionales."
  },
  {
    "id": 190,
    "titulo": "La Doble Hélice",
    "autor": "James D. Watson",
    "genero": "biotecnologia-genetica",
    "sinopsis": "La historia personal y controvertida de los descubrimientos que llevaron a la comprensión de la estructura del ADN, contada por uno de sus protagonistas."
  },
  {
    "id": 191,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "historia-ciencia",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, con capítulos dedicados a la revolución biotecnológica."
  },
  {
    "id": 192,
    "titulo": "El código de la vida",
    "autor": "Walter Isaacson",
    "genero": "biotecnologia-genetica",
    "sinopsis": "La biografía de Jennifer Doudna, una de las pioneras en la tecnología CRISPR, que explora su vida, su investigación y las implicaciones éticas de la edición genética."
  },
  {
    "id": 193,
    "titulo": "Clean Architecture",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro que explora los principios de la arquitectura de software, ayudando a los desarrolladores a diseñar sistemas flexibles y fáciles de mantener, sin importar el lenguaje de programación."
  },
  {
    "id": 194,
    "titulo": "You Don't Know JS Yet",
    "autor": "Kyle Simpson",
    "genero": "programacion-javascript",
    "sinopsis": "Una serie de libros que explora los fundamentos de JavaScript en profundidad. Es un recurso esencial para entender por qué JavaScript funciona de la manera en que lo hace."
  },
  {
    "id": 195,
    "titulo": "Python Crash Course",
    "autor": "Eric Matthes",
    "genero": "programacion-python",
    "sinopsis": "Un libro para principiantes que enseña los fundamentos de Python a través de proyectos prácticos, como el desarrollo de juegos, visualización de datos y aplicaciones web."
  },
  {
    "id": 196,
    "titulo": "El Mono Desnudo",
    "autor": "Desmond Morris",
    "genero": "antropologia-biologia",
    "sinopsis": "Aunque no es un libro de biotecnología, explora el comportamiento humano desde una perspectiva biológica, comparando a los humanos con otros primates."
  },
  {
    "id": 197,
    "titulo": "Grokking Algorithms",
    "autor": "Aditya Bhargava",
    "genero": "programacion-algoritmos",
    "sinopsis": "Una introducción muy visual y amigable a los algoritmos y estructuras de datos, con ilustraciones que facilitan la comprensión de conceptos complejos."
  },
  {
    "id": 198,
    "titulo": "Diseño de bases de datos relacionales",
    "autor": "Varios autores",
    "genero": "programacion-bases-de-datos",
    "sinopsis": "Un libro técnico que enseña a diseñar bases de datos relacionales de manera eficiente, optimizando la integridad y el rendimiento de los datos."
  },
  {
    "id": 199,
    "titulo": "Effective Java",
    "autor": "Joshua Bloch",
    "genero": "programacion-java",
    "sinopsis": "Un libro de referencia para desarrolladores de Java, que ofrece consejos y buenas prácticas para escribir código más limpio, eficiente y robusto."
  },
  {
    "id": 200,
    "titulo": "Genoma: La autobiografía de una especie en 23 capítulos",
    "autor": "Matt Ridley",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Explora la historia humana a través de los 23 pares de cromosomas, con reflexiones sobre la evolución, la genética y la naturaleza de la vida."
  }
  {
    "id": 201,
    "titulo": "Saga 'Mistborn' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo donde las cenizas caen del cielo, una ladrona y un misterioso líder se unen para derrocar a un imperio opresor usando la magia de la alomancia, que otorga poderes al quemar metales."
  },
  {
    "id": 202,
    "titulo": "El color de la magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 203,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un astronauta queda varado en Marte y debe usar su ingenio y conocimientos de botánica e ingeniería para sobrevivir y encontrar una manera de enviar una señal a la Tierra."
  },
  {
    "id": 204,
    "titulo": "Saga 'Canción de Aquiles'",
    "autor": "Madeline Miller",
    "genero": "novela-historica",
    "sinopsis": "Una emotiva y trágica historia de amor y guerra entre Aquiles, el héroe griego, y Patroclo, su amigo y compañero, durante la guerra de Troya."
  },
  {
    "id": 205,
    "titulo": "Circe",
    "autor": "Madeline Miller",
    "genero": "mitologia",
    "sinopsis": "La historia de la poderosa bruja Circe, hija del dios del Sol, que es exiliada a una isla solitaria donde debe usar su magia para protegerse de los hombres y los dioses."
  },
  {
    "id": 206,
    "titulo": "La sombra del águila",
    "autor": "Arturo Pérez-Reverte",
    "genero": "ficcion-historica",
    "sinopsis": "Una aventura de intriga y acción ambientada en la guerra de la Independencia española, siguiendo a un grupo de españoles que luchan en las filas del ejército de Napoleón."
  },
  {
    "id": 207,
    "titulo": "Saga 'Silo' (Saga completa)",
    "autor": "Hugh Howey",
    "genero": "distopia",
    "sinopsis": "En un futuro lejano, la humanidad vive bajo tierra en un silo gigante para protegerse de un mundo exterior tóxico. Una saga de secretos, conspiraciones y rebelión."
  },
  {
    "id": 208,
    "titulo": "La ladrona de libros",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 209,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un mundo donde los nazis han ganado la Segunda Guerra Mundial, un misterioso escritor publica una novela sobre un mundo donde los Aliados ganaron la guerra, lo que desata una serie de eventos."
  },
  {
    "id": 210,
    "titulo": "El retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "genero": "clasicos",
    "sinopsis": "Un joven llamado Dorian Gray desea que un retrato envejezca en su lugar, mientras él se mantiene eternamente joven. Su alma se corrompe y el retrato muestra su verdadera decadencia."
  },
  {
    "id": 211,
    "titulo": "Matar a un ruiseñor",
    "autor": "Harper Lee",
    "genero": "clasicos",
    "sinopsis": "En el sur de Estados Unidos, un abogado defiende a un hombre negro acusado de violar a una mujer blanca, en una conmovedora historia sobre la justicia y el prejuicio."
  },
  {
    "id": 212,
    "titulo": "El Psicoanalista",
    "autor": "John Katzenbach",
    "genero": "thriller",
    "sinopsis": "Un psicoanalista recibe un anónimo con un ultimátum: o descubre la identidad del autor de la carta o uno de sus familiares morirá. Debe usar todo su ingenio para sobrevivir."
  },
  {
    "id": 213,
    "titulo": "El Hobbit",
    "autor": "J.R.R. Tolkien",
    "genero": "fantasia",
    "sinopsis": "Bilbo Bolsón, un hobbit hogareño, se embarca en una aventura inesperada con un grupo de enanos para recuperar un tesoro robado por el dragón Smaug."
  },
  {
    "id": 214,
    "titulo": "Cumbres Borrascosas",
    "autor": "Emily Brontë",
    "genero": "romance",
    "sinopsis": "Una oscura y apasionada historia de amor y venganza entre el atormentado Heathcliff y la caprichosa Catherine, en las salvajes llanuras de Yorkshire."
  },
  {
    "id": 215,
    "titulo": "Saga 'El Archivo de las Tormentas' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "Un mundo azotado por tormentas eternas, donde nobles guerreros luchan por el honor y la supervivencia, mientras se revelan antiguos secretos y profecías."
  },
  {
    "id": 216,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza."
  },
  {
    "id": 217,
    "titulo": "El nombre del viento",
    "autor": "Patrick Rothfuss",
    "genero": "fantasia",
    "sinopsis": "La historia de Kvothe, un legendario arcanista, músico y asesino, contada por él mismo. Relata su infancia, sus estudios en la universidad y sus heroicas hazañas."
  },
  {
    "id": 218,
    "titulo": "Los Tres Mosqueteros",
    "autor": "Alexandre Dumas",
    "genero": "aventura",
    "sinopsis": "Las aventuras de D'Artagnan, un joven que viaja a París para unirse a los Mosqueteros de la Guardia, y sus tres amigos, Athos, Porthos y Aramis."
  },
  {
    "id": 219,
    "titulo": "El Conde de Montecristo",
    "autor": "Alexandre Dumas",
    "genero": "clasicos",
    "sinopsis": "Un joven es injustamente encarcelado y, tras escapar, se dedica a buscar venganza contra quienes lo traicionaron, usando una enorme fortuna que ha adquirido."
  },
  {
    "id": 220,
    "titulo": "El Psicoanalista",
    "autor": "John Katzenbach",
    "genero": "thriller",
    "sinopsis": "Un psicoanalista recibe un anónimo con un ultimátum: o descubre la identidad del autor de la carta o uno de sus familiares morirá. Debe usar todo su ingenio para sobrevivir."
  },
  {
    "id": 221,
    "titulo": "Un mundo feliz",
    "autor": "Aldous Huxley",
    "genero": "distopia",
    "sinopsis": "En un futuro donde la felicidad está garantizada por una droga llamada 'soma', un hombre 'salvaje' de una reserva se enfrenta a los ideales de la sociedad perfecta."
  },
  {
    "id": 222,
    "titulo": "Saga 'Corte de Rosas y Espinas' (Saga completa)",
    "autor": "Sarah J. Maas",
    "genero": "fantasia-romantica",
    "sinopsis": "Una adaptación de 'La Bella y la Bestia'. Una cazadora humana mata a una criatura mágica y es llevada a una tierra de hadas, donde se enamora de su captor y se ve envuelta en una guerra por el poder."
  },
  {
    "id": 223,
    "titulo": "El Cementerio de Praga",
    "autor": "Umberto Eco",
    "genero": "misterio-historico",
    "sinopsis": "Un misterioso narrador, que dice haber escrito los falsos Protocolos de los Sabios de Sion, revela una historia de conspiraciones, falsificaciones y crímenes."
  },
  {
    "id": 224,
    "titulo": "El Silencio de los Corderos",
    "autor": "Thomas Harris",
    "genero": "thriller-psicologico",
    "sinopsis": "Una joven cadete del FBI debe entrevistar a un brillante pero peligroso asesino en serie encarcelado, el Dr. Hannibal Lecter, para atrapar a otro asesino en libertad."
  },
  {
    "id": 225,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza en un mundo sin civilización."
  },
  {
    "id": 226,
    "titulo": "La Odisea",
    "autor": "Homero",
    "genero": "clasicos",
    "sinopsis": "La épica aventura del héroe griego Odiseo en su viaje de diez años para regresar a casa, a Ítaca, después de la guerra de Troya."
  },
  {
    "id": 227,
    "titulo": "Un Gato Callejero Llamado Bob",
    "autor": "James Bowen",
    "genero": "biografia",
    "sinopsis": "La conmovedora historia real de la amistad entre un músico callejero en recuperación y un gato herido que lo ayudó a cambiar su vida."
  },
  {
    "id": 228,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 229,
    "titulo": "El Gran Gatsby",
    "autor": "F. Scott Fitzgerald",
    "genero": "romance",
    "sinopsis": "Un misterioso millonario, Jay Gatsby, obsesionado con una mujer casada que vive al otro lado de la bahía, organiza lujosas fiestas con la esperanza de recuperarla."
  },
  {
    "id": 230,
    "titulo": "Las 48 Leyes del Poder",
    "autor": "Robert Greene",
    "genero": "autoayuda",
    "sinopsis": "Un libro que enseña a aplicar la filosofía estoica para superar los desafíos y convertir los problemas en oportunidades. Un bestseller del estoicismo moderno."
  },
  {
    "id": 231,
    "titulo": "El Obstáculo es el Camino",
    "autor": "Ryan Holiday",
    "genero": "autoayuda",
    "sinopsis": "Un libro que enseña a aplicar la filosofía estoica para superar los desafíos y convertir los problemas en oportunidades. Un bestseller del estoicismo moderno."
  },
  {
    "id": 232,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 233,
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez",
    "genero": "novela-historica",
    "sinopsis": "La historia de la familia Buendía en el pueblo mítico de Macondo, un clásico del realismo mágico que abarca un siglo de tragedias y amores."
  },
  {
    "id": 234,
    "titulo": "El Hobbit",
    "autor": "J.R.R. Tolkien",
    "genero": "fantasia",
    "sinopsis": "Bilbo Bolsón, un hobbit hogareño, se embarca en una aventura inesperada con un grupo de enanos para recuperar un tesoro robado por el dragón Smaug."
  },
  {
    "id": 235,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 236,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 237,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 238,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 239,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciberpunk",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 240,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 241,
    "titulo": "El arte de la felicidad",
    "autor": "Dalai Lama y Howard C. Cutler",
    "genero": "filosofia",
    "sinopsis": "Aunque no es estoico, este libro comparte las ideas de la búsqueda de la felicidad a través de la compasión, la autoconciencia y el control mental."
  },
  {
    "id": 242,
    "titulo": "La vida inmortal de Henrietta Lacks",
    "autor": "Rebecca Skloot",
    "genero": "biotecnologia-etica",
    "sinopsis": "La historia real de las células de una mujer afroamericana que fueron tomadas sin su consentimiento para investigación científica, lo que plantea preguntas éticas sobre la bioética y el consentimiento informado."
  },
  {
    "id": 243,
    "titulo": "El Poder del Ahora",
    "autor": "Eckhart Tolle",
    "genero": "espiritualidad",
    "sinopsis": "Un libro que promueve la idea de vivir en el presente y liberarse de los pensamientos del pasado y el futuro, un concepto clave en el estoicismo."
  },
  {
    "id": 244,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 245,
    "titulo": "El Resplandor",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Un escritor alcohólico y su familia son contratados para cuidar un hotel aislado durante el invierno, donde fuerzas malignas y la locura comienzan a atormentarlos."
  },
  {
    "id": 246,
    "titulo": "El Ladrón de Historias",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 247,
    "titulo": "La Peste",
    "autor": "Albert Camus",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La vida en la ciudad de Orán se ve alterada por una misteriosa plaga que obliga a sus ciudadanos a vivir en un estado de cuarentena y aislamiento."
  },
  {
    "id": 248,
    "titulo": "El Ladrón del Rayo",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven que descubre ser un semidiós, se ve envuelto en una misión para encontrar el rayo maestro de Zeus, robado del Olimpo, y evitar una guerra entre los dioses."
  },
  {
    "id": 249,
    "titulo": "La Metamorfosis",
    "autor": "Franz Kafka",
    "genero": "clasicos",
    "sinopsis": "Un comerciante llamado Gregor Samsa se despierta un día transformado en un monstruoso insecto, y debe enfrentarse a la reacción de su familia y la sociedad."
  },
  {
    "id": 250,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 251,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza en un mundo sin civilización."
  },
  {
    "id": 252,
    "titulo": "El Retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "genero": "clasicos",
    "sinopsis": "Un joven llamado Dorian Gray desea que un retrato envejezca en su lugar, mientras él se mantiene eternamente joven. Sin embargo, su alma se vuelve corrupta y el retrato muestra su verdadera decadencia."
  },
  {
    "id": 253,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 254,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 255,
    "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro fundamental que enseña a escribir código limpio y legible, mejorando la calidad y el mantenimiento del software. Un clásico para cualquier programador profesional."
  },
  {
    "id": 256,
    "titulo": "Saga 'Mistborn' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo donde las cenizas caen del cielo, una ladrona y un misterioso líder se unen para derrocar a un imperio opresor usando la magia de la alomancia, que otorga poderes al quemar metales."
  },
  {
    "id": 257,
    "titulo": "El color de la magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 258,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un astronauta queda varado en Marte y debe usar su ingenio y conocimientos de botánica e ingeniería para sobrevivir y encontrar una manera de enviar una señal a la Tierra."
  },
  {
    "id": 259,
    "titulo": "Saga 'Canción de Aquiles'",
    "autor": "Madeline Miller",
    "genero": "novela-historica",
    "sinopsis": "Una emotiva y trágica historia de amor y guerra entre Aquiles, el héroe griego, y Patroclo, su amigo y compañero, durante la guerra de Troya."
  },
  {
    "id": 260,
    "titulo": "Circe",
    "autor": "Madeline Miller",
    "genero": "mitologia",
    "sinopsis": "La historia de la poderosa bruja Circe, hija del dios del Sol, que es exiliada a una isla solitaria donde debe usar su magia para protegerse de los hombres y los dioses."
  },
  {
    "id": 261,
    "titulo": "La sombra del águila",
    "autor": "Arturo Pérez-Reverte",
    "genero": "ficcion-historica",
    "sinopsis": "Una aventura de intriga y acción ambientada en la guerra de la Independencia española, siguiendo a un grupo de españoles que luchan en las filas del ejército de Napoleón."
  },
  {
    "id": 262,
    "titulo": "Saga 'Silo' (Saga completa)",
    "autor": "Hugh Howey",
    "genero": "distopia",
    "sinopsis": "En un futuro lejano, la humanidad vive bajo tierra en un silo gigante para protegerse de un mundo exterior tóxico. Una saga de secretos, conspiraciones y rebelión."
  },
  {
    "id": 263,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un mundo donde los nazis han ganado la Segunda Guerra Mundial, un misterioso escritor publica una novela sobre un mundo donde los Aliados ganaron la guerra, lo que desata una serie de eventos."
  },
  {
    "id": 264,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 265,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 266,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 267,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 268,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 269,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 270,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciberpunk",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 271,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 272,
    "titulo": "El arte de la felicidad",
    "autor": "Dalai Lama y Howard C. Cutler",
    "genero": "filosofia",
    "sinopsis": "Aunque no es estoico, este libro comparte las ideas de la búsqueda de la felicidad a través de la compasión, la autoconciencia y el control mental."
  },
  {
    "id": 273,
    "titulo": "La vida inmortal de Henrietta Lacks",
    "autor": "Rebecca Skloot",
    "genero": "biotecnologia-etica",
    "sinopsis": "La historia real de las células de una mujer afroamericana que fueron tomadas sin su consentimiento para investigación científica, lo que plantea preguntas éticas sobre la bioética y el consentimiento informado."
  },
  {
    "id": 274,
    "titulo": "El Poder del Ahora",
    "autor": "Eckhart Tolle",
    "genero": "espiritualidad",
    "sinopsis": "Un libro que promueve la idea de vivir en el presente y liberarse de los pensamientos del pasado y el futuro, un concepto clave en el estoicismo."
  },
  {
    "id": 275,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 276,
    "titulo": "El Resplandor",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Un escritor alcohólico y su familia son contratados para cuidar un hotel aislado durante el invierno, donde fuerzas malignas y la locura comienzan a atormentarlos."
  },
  {
    "id": 277,
    "titulo": "El Ladrón de Historias",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 278,
    "titulo": "La Peste",
    "autor": "Albert Camus",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La vida en la ciudad de Orán se ve alterada por una misteriosa plaga que obliga a sus ciudadanos a vivir en un estado de cuarentena y aislamiento."
  },
  {
    "id": 279,
    "titulo": "El Ladrón del Rayo",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven que descubre ser un semidiós, se ve envuelto en una misión para encontrar el rayo maestro de Zeus, robado del Olimpo, y evitar una guerra entre los dioses."
  },
  {
    "id": 280,
    "titulo": "La Metamorfosis",
    "autor": "Franz Kafka",
    "genero": "clasicos",
    "sinopsis": "Un comerciante llamado Gregor Samsa se despierta un día transformado en un monstruoso insecto, y debe enfrentarse a la reacción de su familia y la sociedad."
  },
  {
    "id": 281,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 282,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza en un mundo sin civilización."
  },
  {
    "id": 283,
    "titulo": "El Retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "genero": "clasicos",
    "sinopsis": "Un joven llamado Dorian Gray desea que un retrato envejezca en su lugar, mientras él se mantiene eternamente joven. Sin embargo, su alma se vuelve corrupta y el retrato muestra su verdadera decadencia."
  },
  {
    "id": 284,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 285,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 286,
    "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro fundamental que enseña a escribir código limpio y legible, mejorando la calidad y el mantenimiento del software. Un clásico para cualquier programador profesional."
  },
  {
    "id": 287,
    "titulo": "El Viaje al Centro de la Tierra",
    "autor": "Julio Verne",
    "genero": "aventura",
    "sinopsis": "Un profesor, su sobrino y un guía islandés emprenden una expedición para explorar el interior de la Tierra, encontrando mundos prehistóricos y paisajes asombrosos."
  },
  {
    "id": 288,
    "titulo": "Donde las almas de las aves se unen",
    "autor": "José Saramago",
    "genero": "realismo-magico",
    "sinopsis": "Una pareja de ancianos se ve obligada a huir de su hogar para encontrar la felicidad, mientras descubren el poder de la imaginación y la importancia de los sueños."
  },
  {
    "id": 289,
    "titulo": "El Lector del Metro",
    "autor": "Jean-Paul Didierlaurent",
    "genero": "ficcion-contemporanea",
    "sinopsis": "Un lector empedernido que lee en el metro, se ve obligado a compartir sus lecturas con los demás, descubriendo historias que lo conectan con desconocidos de la ciudad."
  },
  {
    "id": 290,
    "titulo": "El Secreto de la Familia O'Malley",
    "autor": "Colleen Hoover",
    "genero": "romance",
    "sinopsis": "Una joven se enamora de un apuesto extraño, pero pronto descubre que su familia guarda un oscuro secreto que amenaza su relación y su felicidad."
  },
  {
    "id": 291,
    "titulo": "Saga 'El Viaje de Gwendy' (Saga completa)",
    "autor": "Stephen King y Richard Chizmar",
    "genero": "terror",
    "sinopsis": "Una niña llamada Gwendy recibe una misteriosa caja con botones que le da poderes, pero también le hace preguntas morales sobre el poder y la responsabilidad."
  },
  {
    "id": 292,
    "titulo": "Persepolis",
    "autor": "Marjane Satrapi",
    "genero": "novela-grafica",
    "sinopsis": "Una autobiografía en formato de cómic que narra la infancia de la autora en Irán durante la Revolución Islámica y la guerra contra Irak."
  },
  {
    "id": 293,
    "titulo": "El cementerio de Praga",
    "autor": "Umberto Eco",
    "genero": "misterio-historico",
    "sinopsis": "Un misterioso narrador, que dice haber escrito los falsos Protocolos de los Sabios de Sion, revela una historia de conspiraciones, falsificaciones y crímenes."
  },
  {
    "id": 294,
    "titulo": "El Fin de la Infancia",
    "autor": "Arthur C. Clarke",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una raza alienígena llega a la Tierra con una misión benévola, pero su presencia transforma la sociedad humana de manera irreversible."
  },
  {
    "id": 295,
    "titulo": "Flores para Algernon",
    "autor": "Daniel Keyes",
    "genero": "ficcion-contemporanea",
    "sinopsis": "Un hombre con discapacidad mental se somete a un experimento para aumentar su inteligencia, documentando su crecimiento y el posterior deterioro en su diario."
  },
  {
    "id": 296,
    "titulo": "El Dios de las Pequeñas Cosas",
    "autor": "Arundhati Roy",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La trágica historia de una familia en la India y las consecuencias de un romance prohibido, explorando las complejidades de la sociedad y la tradición."
  },
  {
    "id": 297,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 298,
    "titulo": "Cosmos",
    "autor": "Carl Sagan",
    "genero": "divulgacion",
    "sinopsis": "Un viaje a través del universo que explica de manera accesible la historia del cosmos, la ciencia y la humanidad, con bellas reflexiones sobre nuestro lugar en el universo."
  },
  {
    "id": 299,
    "titulo": "Cartas a un Joven Poeta",
    "autor": "Rainer Maria Rilke",
    "genero": "epistolar",
    "sinopsis": "Una colección de diez cartas que un poeta veterano escribe a un joven aspirante, ofreciendo sabios consejos sobre el arte, la vida y la soledad del artista."
  },
  {
    "id": 300,
    "titulo": "Ficciones",
    "autor": "Jorge Luis Borges",
    "genero": "cuentos",
    "sinopsis": "Una colección de cuentos breves que exploran temas de laberintos, bibliotecas infinitas y realidades alternativas, desafiando la noción del tiempo y el espacio."
  }
  {
    "id": 301,
    "titulo": "Neverwhere",
    "autor": "Neil Gaiman",
    "genero": "fantasia-urbana",
    "sinopsis": "Un joven de Londres se ve arrastrado a un mundo mágico y secreto que existe bajo la ciudad, donde debe luchar por sobrevivir y regresar a su vida normal."
  },
  {
    "id": 302,
    "titulo": "Saga 'El Ojo del Mundo' (Saga completa)",
    "autor": "Robert Jordan",
    "genero": "fantasia-epica",
    "sinopsis": "Un mundo de magia y mitología, donde un joven de una aldea remota debe unirse a una poderosa hechicera para luchar contra el mal que amenaza con destruir el mundo."
  },
  {
    "id": 303,
    "titulo": "Saga 'La Materia Oscura' (Saga completa)",
    "autor": "Philip Pullman",
    "genero": "fantasia-juvenil",
    "sinopsis": "Una joven huérfana de un mundo mágico se embarca en un viaje para salvar a sus amigos y desentrañar un misterio cósmico que involucra a múltiples universos."
  },
  {
    "id": 304,
    "titulo": "El Círculo",
    "autor": "Dave Eggers",
    "genero": "distopia",
    "sinopsis": "Una joven consigue un trabajo en la compañía de tecnología más poderosa del mundo, pero pronto descubre que la empresa tiene un oscuro plan para la privacidad y la libertad."
  },
  {
    "id": 305,
    "titulo": "Saga 'Divergente' (Saga completa)",
    "autor": "Veronica Roth",
    "genero": "distopia-juvenil",
    "sinopsis": "En una sociedad dividida en facciones, una joven descubre que no encaja en ninguna de ellas y se ve obligada a luchar por su vida y su libertad."
  },
  {
    "id": 306,
    "titulo": "El Silencio de las Estrellas",
    "autor": "Arthur C. Clarke",
    "genero": "ciencia-ficcion",
    "sinopsis": "En el futuro, un astronauta solitario viaja a los confines del espacio, buscando vida alienígena en una misteriosa señal de radio que podría cambiar la humanidad."
  },
  {
    "id": 307,
    "titulo": "El Héroe de las Mil Caras",
    "autor": "Joseph Campbell",
    "genero": "no-ficcion-mitologia",
    "sinopsis": "Un estudio sobre la estructura de los mitos y los héroes, que explora cómo los mitos de diferentes culturas comparten un patrón universal llamado 'el viaje del héroe'."
  },
  {
    "id": 308,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza en un mundo sin civilización."
  },
  {
    "id": 309,
    "titulo": "Saga 'El Exorcista' (Saga completa)",
    "autor": "William Peter Blatty",
    "genero": "terror",
    "sinopsis": "Un sacerdote se enfrenta a un demonio que ha poseído a una niña, en una épica batalla entre el bien y el mal que ha aterrorizado a generaciones de lectores."
  },
  {
    "id": 310,
    "titulo": "El Color de la Magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 311,
    "titulo": "El Asesino de la Autopista",
    "autor": "Lee Child",
    "genero": "thriller-accion",
    "sinopsis": "Jack Reacher, un ex militar solitario, se ve envuelto en una trama de conspiración y violencia al ser falsamente acusado de un crimen en una pequeña ciudad."
  },
  {
    "id": 312,
    "titulo": "Saga 'Fundación' (Saga completa)",
    "autor": "Isaac Asimov",
    "genero": "ciencia-ficcion",
    "sinopsis": "Una saga sobre la caída de un imperio galáctico y los esfuerzos de un grupo de científicos para preservar el conocimiento humano y acortar la edad oscura que se avecina."
  },
  {
    "id": 313,
    "titulo": "Blade Runner: ¿Sueñan los androides con ovejas eléctricas?",
    "autor": "Philip K. Dick",
    "genero": "ciberpunk",
    "sinopsis": "En un futuro post-apocalíptico, un cazarrecompensas es contratado para 'retirar' a un grupo de androides rebeldes y casi indistinguibles de los humanos."
  },
  {
    "id": 314,
    "titulo": "Los Tres Mosqueteros",
    "autor": "Alexandre Dumas",
    "genero": "aventura",
    "sinopsis": "Las aventuras de D'Artagnan, un joven que viaja a París para unirse a los Mosqueteros de la Guardia, y sus tres amigos, Athos, Porthos y Aramis."
  },
  {
    "id": 315,
    "titulo": "El Conde de Montecristo",
    "autor": "Alexandre Dumas",
    "genero": "clasicos",
    "sinopsis": "Un joven es injustamente encarcelado y, tras escapar, se dedica a buscar venganza contra quienes lo traicionaron, usando una enorme fortuna que ha adquirido."
  },
  {
    "id": 316,
    "titulo": "El retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "genero": "clasicos",
    "sinopsis": "Un joven llamado Dorian Gray desea que un retrato envejezca en su lugar, mientras él se mantiene eternamente joven. Sin embargo, su alma se vuelve corrupta y el retrato muestra su verdadera decadencia."
  },
  {
    "id": 317,
    "titulo": "La Carretera",
    "autor": "Cormac McCarthy",
    "genero": "distopia",
    "sinopsis": "Un padre y su hijo viajan a través de un paisaje post-apocalíptico desolado, buscando un lugar seguro mientras luchan por la supervivencia y la esperanza en un mundo sin civilización."
  },
  {
    "id": 318,
    "titulo": "El nombre del viento",
    "autor": "Patrick Rothfuss",
    "genero": "fantasia",
    "sinopsis": "La historia de Kvothe, un legendario arcanista, músico y asesino, contada por él mismo. Relata su infancia, sus estudios en la universidad y sus heroicas hazañas."
  },
  {
    "id": 319,
    "titulo": "Cumbres Borrascosas",
    "autor": "Emily Brontë",
    "genero": "romance",
    "sinopsis": "Una oscura y apasionada historia de amor y venganza entre el atormentado Heathcliff y la caprichosa Catherine, en las salvajes llanuras de Yorkshire."
  },
  {
    "id": 320,
    "titulo": "Saga 'Mistborn' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo donde las cenizas caen del cielo, una ladrona y un misterioso líder se unen para derrocar a un imperio opresor usando la magia de la alomancia, que otorga poderes al quemar metales."
  },
  {
    "id": 321,
    "titulo": "El color de la magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 322,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un astronauta queda varado en Marte y debe usar su ingenio y conocimientos de botánica e ingeniería para sobrevivir y encontrar una manera de enviar una señal a la Tierra."
  },
  {
    "id": 323,
    "titulo": "Saga 'Canción de Aquiles'",
    "autor": "Madeline Miller",
    "genero": "novela-historica",
    "sinopsis": "Una emotiva y trágica historia de amor y guerra entre Aquiles, el héroe griego, y Patroclo, su amigo y compañero, durante la guerra de Troya."
  },
  {
    "id": 324,
    "titulo": "Circe",
    "autor": "Madeline Miller",
    "genero": "mitologia",
    "sinopsis": "La historia de la poderosa bruja Circe, hija del dios del Sol, que es exiliada a una isla solitaria donde debe usar su magia para protegerse de los hombres y los dioses."
  },
  {
    "id": 325,
    "titulo": "La sombra del águila",
    "autor": "Arturo Pérez-Reverte",
    "genero": "ficcion-historica",
    "sinopsis": "Una aventura de intriga y acción ambientada en la guerra de la Independencia española, siguiendo a un grupo de españoles que luchan en las filas del ejército de Napoleón."
  },
  {
    "id": 326,
    "titulo": "Saga 'Silo' (Saga completa)",
    "autor": "Hugh Howey",
    "genero": "distopia",
    "sinopsis": "En un futuro lejano, la humanidad vive bajo tierra en un silo gigante para protegerse de un mundo exterior tóxico. Una saga de secretos, conspiraciones y rebelión."
  },
  {
    "id": 327,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un mundo donde los nazis han ganado la Segunda Guerra Mundial, un misterioso escritor publica una novela sobre un mundo donde los Aliados ganaron la guerra, lo que desata una serie de eventos."
  },
  {
    "id": 328,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 329,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 330,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 331,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 332,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 333,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 334,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciberpunk",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 335,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 336,
    "titulo": "El arte de la felicidad",
    "autor": "Dalai Lama y Howard C. Cutler",
    "genero": "filosofia",
    "sinopsis": "Aunque no es estoico, este libro comparte las ideas de la búsqueda de la felicidad a través de la compasión, la autoconciencia y el control mental."
  },
  {
    "id": 337,
    "titulo": "La vida inmortal de Henrietta Lacks",
    "autor": "Rebecca Skloot",
    "genero": "biotecnologia-etica",
    "sinopsis": "La historia real de las células de una mujer afroamericana que fueron tomadas sin su consentimiento para investigación científica, lo que plantea preguntas éticas sobre la bioética y el consentimiento informado."
  },
  {
    "id": 338,
    "titulo": "El Poder del Ahora",
    "autor": "Eckhart Tolle",
    "genero": "espiritualidad",
    "sinopsis": "Un libro que promueve la idea de vivir en el presente y liberarse de los pensamientos del pasado y el futuro, un concepto clave en el estoicismo."
  },
  {
    "id": 339,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 340,
    "titulo": "El Resplandor",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Un escritor alcohólico y su familia son contratados para cuidar un hotel aislado durante el invierno, donde fuerzas malignas y la locura comienzan a atormentarlos."
  },
  {
    "id": 341,
    "titulo": "El Ladrón de Historias",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 342,
    "titulo": "La Peste",
    "autor": "Albert Camus",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La vida en la ciudad de Orán se ve alterada por una misteriosa plaga que obliga a sus ciudadanos a vivir en un estado de cuarentena y aislamiento."
  },
  {
    "id": 343,
    "titulo": "El Ladrón del Rayo",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven que descubre ser un semidiós, se ve envuelto en una misión para encontrar el rayo maestro de Zeus, robado del Olimpo, y evitar una guerra entre los dioses."
  },
  {
    "id": 344,
    "titulo": "La Metamorfosis",
    "autor": "Franz Kafka",
    "genero": "clasicos",
    "sinopsis": "Un comerciante llamado Gregor Samsa se despierta un día transformado en un monstruoso insecto, y debe enfrentarse a la reacción de su familia y la sociedad."
  },
  {
    "id": 345,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 346,
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "fabula",
    "sinopsis": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le cuenta sus viajes, ofreciendo profundas reflexiones sobre la vida, el amor y la amistad."
  },
  {
    "id": 347,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 348,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 349,
    "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro fundamental que enseña a escribir código limpio y legible, mejorando la calidad y el mantenimiento del software. Un clásico para cualquier programador profesional."
  },
  {
    "id": 350,
    "titulo": "Saga 'Mistborn' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo donde las cenizas caen del cielo, una ladrona y un misterioso líder se unen para derrocar a un imperio opresor usando la magia de la alomancia, que otorga poderes al quemar metales."
  },
  {
    "id": 351,
    "titulo": "El color de la magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 352,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un astronauta queda varado en Marte y debe usar su ingenio y conocimientos de botánica e ingeniería para sobrevivir y encontrar una manera de enviar una señal a la Tierra."
  },
  {
    "id": 353,
    "titulo": "Saga 'Canción de Aquiles'",
    "autor": "Madeline Miller",
    "genero": "novela-historica",
    "sinopsis": "Una emotiva y trágica historia de amor y guerra entre Aquiles, el héroe griego, y Patroclo, su amigo y compañero, durante la guerra de Troya."
  },
  {
    "id": 354,
    "titulo": "Circe",
    "autor": "Madeline Miller",
    "genero": "mitologia",
    "sinopsis": "La historia de la poderosa bruja Circe, hija del dios del Sol, que es exiliada a una isla solitaria donde debe usar su magia para protegerse de los hombres y los dioses."
  },
  {
    "id": 355,
    "titulo": "La sombra del águila",
    "autor": "Arturo Pérez-Reverte",
    "genero": "ficcion-historica",
    "sinopsis": "Una aventura de intriga y acción ambientada en la guerra de la Independencia española, siguiendo a un grupo de españoles que luchan en las filas del ejército de Napoleón."
  },
  {
    "id": 356,
    "titulo": "Saga 'Silo' (Saga completa)",
    "autor": "Hugh Howey",
    "genero": "distopia",
    "sinopsis": "En un futuro lejano, la humanidad vive bajo tierra en un silo gigante para protegerse de un mundo exterior tóxico. Una saga de secretos, conspiraciones y rebelión."
  },
  {
    "id": 357,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un mundo donde los nazis han ganado la Segunda Guerra Mundial, un misterioso escritor publica una novela sobre un mundo donde los Aliados ganaron la guerra, lo que desata una serie de eventos."
  },
  {
    "id": 358,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 359,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 360,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 361,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 362,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 363,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 364,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciberpunk",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 365,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 366,
    "titulo": "El arte de la felicidad",
    "autor": "Dalai Lama y Howard C. Cutler",
    "genero": "filosofia",
    "sinopsis": "Aunque no es estoico, este libro comparte las ideas de la búsqueda de la felicidad a través de la compasión, la autoconciencia y el control mental."
  },
  {
    "id": 367,
    "titulo": "La vida inmortal de Henrietta Lacks",
    "autor": "Rebecca Skloot",
    "genero": "biotecnologia-etica",
    "sinopsis": "La historia real de las células de una mujer afroamericana que fueron tomadas sin su consentimiento para investigación científica, lo que plantea preguntas éticas sobre la bioética y el consentimiento informado."
  },
  {
    "id": 368,
    "titulo": "El Poder del Ahora",
    "autor": "Eckhart Tolle",
    "genero": "espiritualidad",
    "sinopsis": "Un libro que promueve la idea de vivir en el presente y liberarse de los pensamientos del pasado y el futuro, un concepto clave en el estoicismo."
  },
  {
    "id": 369,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 370,
    "titulo": "El Resplandor",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Un escritor alcohólico y su familia son contratados para cuidar un hotel aislado durante el invierno, donde fuerzas malignas y la locura comienzan a atormentarlos."
  },
  {
    "id": 371,
    "titulo": "El Ladrón de Historias",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 372,
    "titulo": "La Peste",
    "autor": "Albert Camus",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La vida en la ciudad de Orán se ve alterada por una misteriosa plaga que obliga a sus ciudadanos a vivir en un estado de cuarentena y aislamiento."
  },
  {
    "id": 373,
    "titulo": "El Ladrón del Rayo",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven que descubre ser un semidiós, se ve envuelto en una misión para encontrar el rayo maestro de Zeus, robado del Olimpo, y evitar una guerra entre los dioses."
  },
  {
    "id": 374,
    "titulo": "La Metamorfosis",
    "autor": "Franz Kafka",
    "genero": "clasicos",
    "sinopsis": "Un comerciante llamado Gregor Samsa se despierta un día transformado en un monstruoso insecto, y debe enfrentarse a la reacción de su familia y la sociedad."
  },
  {
    "id": 375,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 376,
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "fabula",
    "sinopsis": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le cuenta sus viajes, ofreciendo profundas reflexiones sobre la vida, el amor y la amistad."
  },
  {
    "id": 377,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 378,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 379,
    "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro fundamental que enseña a escribir código limpio y legible, mejorando la calidad y el mantenimiento del software. Un clásico para cualquier programador profesional."
  },
  {
    "id": 380,
    "titulo": "Saga 'Mistborn' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo donde las cenizas caen del cielo, una ladrona y un misterioso líder se unen para derrocar a un imperio opresor usando la magia de la alomancia, que otorga poderes al quemar metales."
  },
  {
    "id": 381,
    "titulo": "El color de la magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 382,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un astronauta queda varado en Marte y debe usar su ingenio y conocimientos de botánica e ingeniería para sobrevivir y encontrar una manera de enviar una señal a la Tierra."
  },
  {
    "id": 383,
    "titulo": "Saga 'Canción de Aquiles'",
    "autor": "Madeline Miller",
    "genero": "novela-historica",
    "sinopsis": "Una emotiva y trágica historia de amor y guerra entre Aquiles, el héroe griego, y Patroclo, su amigo y compañero, durante la guerra de Troya."
  },
  {
    "id": 384,
    "titulo": "Circe",
    "autor": "Madeline Miller",
    "genero": "mitologia",
    "sinopsis": "La historia de la poderosa bruja Circe, hija del dios del Sol, que es exiliada a una isla solitaria donde debe usar su magia para protegerse de los hombres y los dioses."
  },
  {
    "id": 385,
    "titulo": "La sombra del águila",
    "autor": "Arturo Pérez-Reverte",
    "genero": "ficcion-historica",
    "sinopsis": "Una aventura de intriga y acción ambientada en la guerra de la Independencia española, siguiendo a un grupo de españoles que luchan en las filas del ejército de Napoleón."
  },
  {
    "id": 386,
    "titulo": "Saga 'Silo' (Saga completa)",
    "autor": "Hugh Howey",
    "genero": "distopia",
    "sinopsis": "En un futuro lejano, la humanidad vive bajo tierra en un silo gigante para protegerse de un mundo exterior tóxico. Una saga de secretos, conspiraciones y rebelión."
  },
  {
    "id": 387,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un mundo donde los nazis han ganado la Segunda Guerra Mundial, un misterioso escritor publica una novela sobre un mundo donde los Aliados ganaron la guerra, lo que desata una serie de eventos."
  },
  {
    "id": 388,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 389,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 390,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 391,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 392,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 393,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 394,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciberpunk",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 395,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 396,
    "titulo": "El arte de la felicidad",
    "autor": "Dalai Lama y Howard C. Cutler",
    "genero": "filosofia",
    "sinopsis": "Aunque no es estoico, este libro comparte las ideas de la búsqueda de la felicidad a través de la compasión, la autoconciencia y el control mental."
  },
  {
    "id": 397,
    "titulo": "La vida inmortal de Henrietta Lacks",
    "autor": "Rebecca Skloot",
    "genero": "biotecnologia-etica",
    "sinopsis": "La historia real de las células de una mujer afroamericana que fueron tomadas sin su consentimiento para investigación científica, lo que plantea preguntas éticas sobre la bioética y el consentimiento informado."
  },
  {
    "id": 398,
    "titulo": "El Poder del Ahora",
    "autor": "Eckhart Tolle",
    "genero": "espiritualidad",
    "sinopsis": "Un libro que promueve la idea de vivir en el presente y liberarse de los pensamientos del pasado y el futuro, un concepto clave en el estoicismo."
  },
  {
    "id": 399,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 400,
    "titulo": "El Resplandor",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Un escritor alcohólico y su familia son contratados para cuidar un hotel aislado durante el invierno, donde fuerzas malignas y la locura comienzan a atormentarlos."
  },
  {
    "id": 401,
    "titulo": "El Ladrón de Historias",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 402,
    "titulo": "La Peste",
    "autor": "Albert Camus",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La vida en la ciudad de Orán se ve alterada por una misteriosa plaga que obliga a sus ciudadanos a vivir en un estado de cuarentena y aislamiento."
  },
  {
    "id": 403,
    "titulo": "El Ladrón del Rayo",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven que descubre ser un semidiós, se ve envuelto en una misión para encontrar el rayo maestro de Zeus, robado del Olimpo, y evitar una guerra entre los dioses."
  },
  {
    "id": 404,
    "titulo": "La Metamorfosis",
    "autor": "Franz Kafka",
    "genero": "clasicos",
    "sinopsis": "Un comerciante llamado Gregor Samsa se despierta un día transformado en un monstruoso insecto, y debe enfrentarse a la reacción de su familia y la sociedad."
  },
  {
    "id": 405,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 406,
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "fabula",
    "sinopsis": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le cuenta sus viajes, ofreciendo profundas reflexiones sobre la vida, el amor y la amistad."
  },
  {
    "id": 407,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 408,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 409,
    "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro fundamental que enseña a escribir código limpio y legible, mejorando la calidad y el mantenimiento del software. Un clásico para cualquier programador profesional."
  },
  {
    "id": 410,
    "titulo": "Saga 'Mistborn' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo donde las cenizas caen del cielo, una ladrona y un misterioso líder se unen para derrocar a un imperio opresor usando la magia de la alomancia, que otorga poderes al quemar metales."
  },
  {
    "id": 411,
    "titulo": "El color de la magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 412,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un astronauta queda varado en Marte y debe usar su ingenio y conocimientos de botánica e ingeniería para sobrevivir y encontrar una manera de enviar una señal a la Tierra."
  },
  {
    "id": 413,
    "titulo": "Saga 'Canción de Aquiles'",
    "autor": "Madeline Miller",
    "genero": "novela-historica",
    "sinopsis": "Una emotiva y trágica historia de amor y guerra entre Aquiles, el héroe griego, y Patroclo, su amigo y compañero, durante la guerra de Troya."
  },
  {
    "id": 414,
    "titulo": "Circe",
    "autor": "Madeline Miller",
    "genero": "mitologia",
    "sinopsis": "La historia de la poderosa bruja Circe, hija del dios del Sol, que es exiliada a una isla solitaria donde debe usar su magia para protegerse de los hombres y los dioses."
  },
  {
    "id": 415,
    "titulo": "La sombra del águila",
    "autor": "Arturo Pérez-Reverte",
    "genero": "ficcion-historica",
    "sinopsis": "Una aventura de intriga y acción ambientada en la guerra de la Independencia española, siguiendo a un grupo de españoles que luchan en las filas del ejército de Napoleón."
  },
  {
    "id": 416,
    "titulo": "Saga 'Silo' (Saga completa)",
    "autor": "Hugh Howey",
    "genero": "distopia",
    "sinopsis": "En un futuro lejano, la humanidad vive bajo tierra en un silo gigante para protegerse de un mundo exterior tóxico. Una saga de secretos, conspiraciones y rebelión."
  },
  {
    "id": 417,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un mundo donde los nazis han ganado la Segunda Guerra Mundial, un misterioso escritor publica una novela sobre un mundo donde los Aliados ganaron la guerra, lo que desata una serie de eventos."
  },
  {
    "id": 418,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 419,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 420,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 421,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
    "id": 422,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 423,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 424,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciberpunk",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 425,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 426,
    "titulo": "El arte de la felicidad",
    "autor": "Dalai Lama y Howard C. Cutler",
    "genero": "filosofia",
    "sinopsis": "Aunque no es estoico, este libro comparte las ideas de la búsqueda de la felicidad a través de la compasión, la autoconciencia y el control mental."
  },
  {
    "id": 427,
    "titulo": "La vida inmortal de Henrietta Lacks",
    "autor": "Rebecca Skloot",
    "genero": "biotecnologia-etica",
    "sinopsis": "La historia real de las células de una mujer afroamericana que fueron tomadas sin su consentimiento para investigación científica, lo que plantea preguntas éticas sobre la bioética y el consentimiento informado."
  },
  {
    "id": 428,
    "titulo": "El Poder del Ahora",
    "autor": "Eckhart Tolle",
    "genero": "espiritualidad",
    "sinopsis": "Un libro que promueve la idea de vivir en el presente y liberarse de los pensamientos del pasado y el futuro, un concepto clave en el estoicismo."
  },
  {
    "id": 429,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 430,
    "titulo": "El Resplandor",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Un escritor alcohólico y su familia son contratados para cuidar un hotel aislado durante el invierno, donde fuerzas malignas y la locura comienzan a atormentarlos."
  },
  {
    "id": 431,
    "titulo": "El Ladrón de Historias",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 432,
    "titulo": "La Peste",
    "autor": "Albert Camus",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La vida en la ciudad de Orán se ve alterada por una misteriosa plaga que obliga a sus ciudadanos a vivir en un estado de cuarentena y aislamiento."
  },
  {
    "id": 433,
    "titulo": "El Ladrón del Rayo",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven que descubre ser un semidiós, se ve envuelto en una misión para encontrar el rayo maestro de Zeus, robado del Olimpo, y evitar una guerra entre los dioses."
  },
  {
    "id": 434,
    "titulo": "La Metamorfosis",
    "autor": "Franz Kafka",
    "genero": "clasicos",
    "sinopsis": "Un comerciante llamado Gregor Samsa se despierta un día transformado en un monstruoso insecto, y debe enfrentarse a la reacción de su familia y la sociedad."
  },
  {
    "id": 435,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 436,
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "fabula",
    "sinopsis": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le cuenta sus viajes, ofreciendo profundas reflexiones sobre la vida, el amor y la amistad."
  },
  {
    "id": 437,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 438,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 439,
    "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro fundamental que enseña a escribir código limpio y legible, mejorando la calidad y el mantenimiento del software. Un clásico para cualquier programador profesional."
  },
  {
    "id": 440,
    "titulo": "Saga 'Mistborn' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo donde las cenizas caen del cielo, una ladrona y un misterioso líder se unen para derrocar a un imperio opresor usando la magia de la alomancia, que otorga poderes al quemar metales."
  },
  {
    "id": 441,
    "titulo": "El color de la magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 442,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un astronauta queda varado en Marte y debe usar su ingenio y conocimientos de botánica e ingeniería para sobrevivir y encontrar una manera de enviar una señal a la Tierra."
  },
  {
    "id": 443,
    "titulo": "Saga 'Canción de Aquiles'",
    "autor": "Madeline Miller",
    "genero": "novela-historica",
    "sinopsis": "Una emotiva y trágica historia de amor y guerra entre Aquiles, el héroe griego, y Patroclo, su amigo y compañero, durante la guerra de Troya."
  },
  {
    "id": 444,
    "titulo": "Circe",
    "autor": "Madeline Miller",
    "genero": "mitologia",
    "sinopsis": "La historia de la poderosa bruja Circe, hija del dios del Sol, que es exiliada a una isla solitaria donde debe usar su magia para protegerse de los hombres y los dioses."
  },
  {
    "id": 445,
    "titulo": "La sombra del águila",
    "autor": "Arturo Pérez-Reverte",
    "genero": "ficcion-historica",
    "sinopsis": "Una aventura de intriga y acción ambientada en la guerra de la Independencia española, siguiendo a un grupo de españoles que luchan en las filas del ejército de Napoleón."
  },
  {
    "id": 446,
    "titulo": "Saga 'Silo' (Saga completa)",
    "autor": "Hugh Howey",
    "genero": "distopia",
    "sinopsis": "En un futuro lejano, la humanidad vive bajo tierra en un silo gigante para protegerse de un mundo exterior tóxico. Una saga de secretos, conspiraciones y rebelión."
  },
  {
    "id": 447,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un mundo donde los nazis han ganado la Segunda Guerra Mundial, un misterioso escritor publica una novela sobre un mundo donde los Aliados ganaron la guerra, lo que desata una serie de eventos."
  },
  {
    "id": 448,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 449,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 450,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  },
  {
    "id": 451,
    "titulo": "Sapiens: De animales a dioses",
    "autor": "Yuval Noah Harari",
    "genero": "divulgacion",
    "sinopsis": "Un fascinante recorrido por la historia de la humanidad, desde la aparición de los primeros Homo sapiens hasta la era actual, explorando cómo se formaron las sociedades y las culturas."
  },
  {
       "id": 452,
    "titulo": "El Código Da Vinci",
    "autor": "Dan Brown",
    "genero": "misterio",
    "sinopsis": "Un simbólogo de Harvard se ve envuelto en un misterio de asesinato en el Louvre y una conspiración de siglos que podría desvelar uno de los mayores secretos de la historia del cristianismo."
  },
  {
    "id": 453,
    "titulo": "Harry Potter y la Piedra Filosofal",
    "autor": "J.K. Rowling",
    "genero": "fantasia",
    "sinopsis": "Harry Potter, un niño huérfano, descubre que es un mago y comienza su primer año en el Colegio Hogwarts de Magia y Hechicería, enfrentando su pasado y un mal inminente."
  },
  {
    "id": 454,
    "titulo": "Neuromante",
    "autor": "William Gibson",
    "genero": "ciberpunk",
    "sinopsis": "Un ciber-ladrón es contratado para realizar un último trabajo que lo lleva a un submundo de alta tecnología y conspiraciones en el ciberespacio."
  },
  {
    "id": 455,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 456,
    "titulo": "El arte de la felicidad",
    "autor": "Dalai Lama y Howard C. Cutler",
    "genero": "filosofia",
    "sinopsis": "Aunque no es estoico, este libro comparte las ideas de la búsqueda de la felicidad a través de la compasión, la autoconciencia y el control mental."
  },
  {
    "id": 457,
    "titulo": "La vida inmortal de Henrietta Lacks",
    "autor": "Rebecca Skloot",
    "genero": "biotecnologia-etica",
    "sinopsis": "La historia real de las células de una mujer afroamericana que fueron tomadas sin su consentimiento para investigación científica, lo que plantea preguntas éticas sobre la bioética y el consentimiento informado."
  },
  {
    "id": 458,
    "titulo": "El Poder del Ahora",
    "autor": "Eckhart Tolle",
    "genero": "espiritualidad",
    "sinopsis": "Un libro que promueve la idea de vivir en el presente y liberarse de los pensamientos del pasado y el futuro, un concepto clave en el estoicismo."
  },
  {
    "id": 459,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un futuro lejano, las casas nobles luchan por el control de Arrakis, el único planeta que produce la 'especia', una droga que extiende la vida."
  },
  {
    "id": 460,
    "titulo": "El Resplandor",
    "autor": "Stephen King",
    "genero": "terror",
    "sinopsis": "Un escritor alcohólico y su familia son contratados para cuidar un hotel aislado durante el invierno, donde fuerzas malignas y la locura comienzan a atormentarlos."
  },
  {
    "id": 461,
    "titulo": "El Ladrón de Historias",
    "autor": "Markus Zusak",
    "genero": "novela-historica",
    "sinopsis": "En la Alemania nazi, una niña huérfana roba libros para aprender a leer, mientras su familia esconde a un judío en el sótano, y la Muerte cuenta su historia."
  },
  {
    "id": 462,
    "titulo": "La Peste",
    "autor": "Albert Camus",
    "genero": "ficcion-contemporanea",
    "sinopsis": "La vida en la ciudad de Orán se ve alterada por una misteriosa plaga que obliga a sus ciudadanos a vivir en un estado de cuarentena y aislamiento."
  },
  {
    "id": 463,
    "titulo": "El Ladrón del Rayo",
    "autor": "Rick Riordan",
    "genero": "fantasia-juvenil",
    "sinopsis": "Percy Jackson, un joven que descubre ser un semidiós, se ve envuelto en una misión para encontrar el rayo maestro de Zeus, robado del Olimpo, y evitar una guerra entre los dioses."
  },
  {
    "id": 464,
    "titulo": "La Metamorfosis",
    "autor": "Franz Kafka",
    "genero": "clasicos",
    "sinopsis": "Un comerciante llamado Gregor Samsa se despierta un día transformado en un monstruoso insecto, y debe enfrentarse a la reacción de su familia y la sociedad."
  },
  {
    "id": 465,
    "titulo": "Los Hombres que no Amaban a las Mujeres",
    "autor": "Stieg Larsson",
    "genero": "novela-negra",
    "sinopsis": "Un periodista y una hacker socialmente inadaptada se unen para resolver la desaparición de una mujer ocurrida hace 40 años, destapando una red de corrupción."
  },
  {
    "id": 466,
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "fabula",
    "sinopsis": "Un piloto varado en el desierto se encuentra con un pequeño príncipe de otro planeta que le cuenta sus viajes, ofreciendo profundas reflexiones sobre la vida, el amor y la amistad."
  },
  {
    "id": 467,
    "titulo": "El Monje que Vendió su Ferrari",
    "autor": "Robin Sharma",
    "genero": "autoayuda",
    "sinopsis": "Un exitoso abogado sufre un infarto y decide vender todas sus posesiones para viajar a los Himalayas, donde aprende valiosas lecciones de vida."
  },
  {
    "id": 468,
    "titulo": "El Gen: Una historia íntima",
    "autor": "Siddhartha Mukherjee",
    "genero": "biotecnologia-genetica",
    "sinopsis": "Un fascinante recorrido por la historia de la genética, desde los descubrimientos de Mendel hasta la era moderna del CRISPR, con reflexiones sobre el futuro de la ingeniería genética."
  },
  {
    "id": 469,
    "titulo": "Clean Code: A Handbook of Agile Software Craftsmanship",
    "autor": "Robert C. Martin",
    "genero": "programacion-ingenieria-software",
    "sinopsis": "Un libro fundamental que enseña a escribir código limpio y legible, mejorando la calidad y el mantenimiento del software. Un clásico para cualquier programador profesional."
  },
  {
    "id": 470,
    "titulo": "Saga 'Mistborn' (Saga completa)",
    "autor": "Brandon Sanderson",
    "genero": "fantasia-epica",
    "sinopsis": "En un mundo donde las cenizas caen del cielo, una ladrona y un misterioso líder se unen para derrocar a un imperio opresor usando la magia de la alomancia, que otorga poderes al quemar metales."
  },
  {
    "id": 471,
    "titulo": "El color de la magia",
    "autor": "Terry Pratchett",
    "genero": "fantasia-comedia",
    "sinopsis": "La hilarante historia de Rincewind, un mago incompetente, y su turista Twoflower, en su viaje por el mundo plano de Discworld. Una sátira de la fantasía clásica."
  },
  {
    "id": 472,
    "titulo": "El marciano",
    "autor": "Andy Weir",
    "genero": "ciencia-ficcion",
    "sinopsis": "Un astronauta queda varado en Marte y debe usar su ingenio y conocimientos de botánica e ingeniería para sobrevivir y encontrar una manera de enviar una señal a la Tierra."
  },
  {
    "id": 473,
    "titulo": "Saga 'Canción de Aquiles'",
    "autor": "Madeline Miller",
    "genero": "novela-historica",
    "sinopsis": "Una emotiva y trágica historia de amor y guerra entre Aquiles, el héroe griego, y Patroclo, su amigo y compañero, durante la guerra de Troya."
  },
  {
    "id": 474,
    "titulo": "Circe",
    "autor": "Madeline Miller",
    "genero": "mitologia",
    "sinopsis": "La historia de la poderosa bruja Circe, hija del dios del Sol, que es exiliada a una isla solitaria donde debe usar su magia para protegerse de los hombres y los dioses."
  },
  {
    "id": 475,
    "titulo": "La sombra del águila",
    "autor": "Arturo Pérez-Reverte",
    "genero": "ficcion-historica",
    "sinopsis": "Una aventura de intriga y acción ambientada en la guerra de la Independencia española, siguiendo a un grupo de españoles que luchan en las filas del ejército de Napoleón."
  },
  {
    "id": 476,
    "titulo": "Saga 'Silo' (Saga completa)",
    "autor": "Hugh Howey",
    "genero": "distopia",
    "sinopsis": "En un futuro lejano, la humanidad vive bajo tierra en un silo gigante para protegerse de un mundo exterior tóxico. Una saga de secretos, conspiraciones y rebelión."
  },
  {
    "id": 477,
    "titulo": "El hombre en el castillo",
    "autor": "Philip K. Dick",
    "genero": "ciencia-ficcion",
    "sinopsis": "En un mundo donde los nazis han ganado la Segunda Guerra Mundial, un misterioso escritor publica una novela sobre un mundo donde los Aliados ganaron la guerra, lo que desata una serie de eventos."
  },
  {
    "id": 478,
    "titulo": "Meditaciones",
    "autor": "Marco Aurelio",
    "genero": "filosofia-clasica",
    "sinopsis": "El diario personal del emperador romano, donde reflexiona sobre la ética, la virtud y la aceptación de los desafíos de la vida. Una de las obras más importantes del estoicismo."
  },
  {
    "id": 479,
    "titulo": "Crimen y Castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "clasicos",
    "sinopsis": "Un estudiante en San Petersburgo comete un asesinato y luego lidia con las devastadoras consecuencias mentales y psicológicas, explorando temas de moralidad y redención."
  },
  {
    "id": 480,
    "titulo": "Los Juegos del Hambre",
    "autor": "Suzanne Collins",
    "genero": "distopia",
    "sinopsis": "En una sociedad post-apocalíptica, un chico y una chica son elegidos para participar en un brutal reality show televisado en el que deben luchar a muerte contra otros participantes."
  }
];
