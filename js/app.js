const dcHeros = [
    {
        "name" : "BATMAN",
        "picture" : "https://majorspoilers.com/wp-content/uploads/2019/12/BATMAN_Cv86-scaled.jpg",
        "about" : {
            "Personaje" : "BATMAN",
            "Nombre Real" : "Bruce Wayne",
            "Universo" : "DC",
            "Categoria" : "Superheroe",
            "Poder" : "Batman es un ser humano sin superpoderes, pero es un detective experto, un estratega brillante, un atleta consumado y tiene acceso a una tecnología avanzada a través de su arsenal de gadgets y vehículos.",
            "Enemigo Principal" : "El Joker",
            "Historia" : "Bruce Wayne se convirtió en Batman después de presenciar el asesinato de sus padres cuando era niño. Decidió dedicar su vida a combatir el crimen en Gotham City, adoptando la identidad de Batman para infundir miedo en los corazones de los criminales."
        }
    },
    {
        "name" : "SUPERMAN",
        "picture" : "https://i.pinimg.com/originals/82/41/5d/82415d90ebfd1b84c348088f6d09e5c2.jpg",
        "about" : {
            "Personaje" : "SUPERMAN",
            "Nombre Real" : "Clark Kent",
            "Universo" : "DC",
            "Categoria" : "Superheroe",
            "Poder" : "Superman es un ser alienígena con una amplia gama de poderes, que incluyen fuerza sobrehumana, vuelo, visión de calor, visión telescópica, súper oído y una invulnerabilidad casi absoluta.",
            "Enemigo Principal" : "Lex Luthor",
            "Historia" : "Superman, también conocido como Kal-El, fue enviado a la Tierra desde el moribundo planeta Krypton. Fue criado como Clark Kent por una familia terrícola y decidió usar sus poderes para proteger al mundo como Superman."
        }
    },
    {
        "name" : "AQUAMAN",
        "picture" : "https://www.comicartcommunity.com/gallery/data/media/242/AQUAMAN_7.jpg",
        "about" : {
            "Personaje" : "AQUAMAN",
            "Nombre Real" : "Arthur Curry",
            "Universo" : "DC",
            "Categoria" : "Superheroe",
            "Poder" : "Aquaman tiene la capacidad de comunicarse con criaturas marinas, así como fuerza sobrehumana, velocidad y resistencia debido a su linaje atlante.",
            "Enemigo Principal" : "Black Manta",
            "Historia" : "Arthur Curry es el hijo de un farero humano y la reina de Atlantis. Después de descubrir su herencia atlante, asume el papel de Aquaman y se convierte en el protector de los océanos y su pueblo."
        }
    },
    {
        "name" : "FLASH",
        "picture" : "https://oyster.ignimgs.com/wordpress/stg.ign.com/2014/04/STK6353251.jpg",
        "about" : {
            "Personaje" : "FLASH",
            "Nombre Real" : "Barry Allen",
            "Universo" : "DC",
            "Categoria" : "Superheroe",
            "Poder" : "Flash posee supervelocidad, lo que le permite moverse a velocidades increíbles, manipular el tiempo y atravesar objetos sólidos.",
            "Enemigo Principal" : "Reverse-Flash",
            "Historia" : "Barry Allen adquirió sus poderes después de ser alcanzado por un rayo y bañado en productos químicos. Se convirtió en Flash para combatir el crimen y proteger Central City como el velocista escarlata."
        }
    },
    {
        "name" : "LINTERNA VERDE",
        "picture" : "https://www.gamespot.com/a/uploads/original/1562/15626911/3079590-hjglc_1_02_color_rev4.jpg",
        "about" : {
            "Personaje" : "LINTERNA VERDE",
            "Nombre Real" : "Hal Jordan",
            "Universo" : "DC",
            "Categoria" : "Superheroe",
            "Poder" : "Los Linternas Verdes reciben anillos de poder que les otorgan la capacidad de crear construcciones de luz sólida basadas en su fuerza de voluntad.",
            "Enemigo Principal" : "Siniestro",
            "Historia" : "Hal Jordan es un piloto de pruebas que fue reclutado por los Guardianes del Universo para unirse a la Tropa de Linternas Verdes. Después de recibir su anillo de poder, se convierte en uno de los protectores del universo."
        }
    },
    {
        "name" : "JOKER",
        "picture" : "https://mascarillasnanocobre.cl/wp-content/uploads/2020/07/dc-marvel-bocas-93-scaled.jpg",
        "about" : {
            "Personaje" : "JOKER",
            "Nombre Real" : "Desconocido (Varias Versiones)",
            "Universo" : "DC",
            "Categoria" : "Villano",
            "Poder" : "El Joker es un genio del crimen, con una mente retorcida y una habilidad para la improvisación. No tiene poderes sobrehumanos, pero es un maestro del caos y la manipulación.",
            "Enemigo Principal" : "Batman",
            "Historia" : "El origen del Joker varía según la interpretación, pero comúnmente se le muestra como un criminal que cayó en un tanque de productos químicos, lo que lo llevó a adoptar su personalidad delictiva y su apariencia distintiva."
        }
    },
    {
        "name" : "DARKSEID",
        "picture" : "https://images7.alphacoders.com/109/1096648.jpg",
        "about" : {
            "Personaje" : "DARKSEID",
            "Nombre Real" : "Uxas",
            "Universo" : "DC",
            "Categoria" : "Villano",
            "Poder" : "Darkseid es un ser cósmico con una fuerza inmensurable, invulnerabilidad, capacidad para manipular la energía y la habilidad de proyectar rayos de omega. También es un estratega brillante y un gobernante tiránico.",
            "Enemigo Principal" : "La liga de la Justicia, especialmente Superman",
            "Historia" : "Darkseid es el gobernante del planeta Apokolips y uno de los villanos más poderosos del universo DC. Su objetivo principal es encontrar la Ecuación Anti-Vida para imponer su voluntad sobre todo el universo."
        }
    },
    {
        "name" : "DEATHSTROKE",
        "picture" : "https://w0.peakpx.com/wallpaper/328/892/HD-wallpaper-deathstroke-slade-dc.jpg",
        "about" : {
            "Personaje" : "DARKSEID",
            "Nombre Real" : "Slade Wilson",
            "Universo" : "DC",
            "Categoria" : "Antiheroe/Villano",
            "Poder" : "Deathstroke es un experto en combate cuerpo a cuerpo, estratega táctico y posee habilidades de regeneración y una mente táctica formidable.",
            "Enemigo Principal" : "Los Jovenes Titanes, especialmente Robin",
            "Historia" : "Slade Wilson era un soldado de élite que recibió un suero experimental que lo convirtió en un super soldado. Adoptó la identidad de Deathstroke y se convirtió en un mercenario temido y respetado."
        }
    },
    {
        "name" : "BLACKADAM",
        "picture" : "https://wallpapercave.com/wp/wp9622782.png",
        "about" : {
            "Personaje" : "BLACKADAM",
            "Nombre Real" : "Teth-Adam",
            "Universo" : "DC",
            "Categoria" : "Antiheroe/Villano",
            "Poder" : "Black Adam posee una fuerza sobrehumana, velocidad, resistencia, agilidad y puede canalizar la magia del dios Shazam.",
            "Enemigo Principal" : "Shazam y la Sociedad de la Justicia de América",
            "Historia" : "Teth-Adam era un antiguo gobernante egipcio que obtuvo sus poderes de los dioses y se convirtió en el campeón de Kahndaq. Sin embargo, su búsqueda de justicia se convirtió en tiranía, lo que lo llevó a ser encarcelado durante siglos hasta que fue liberado en la era moderna."
        }
    },
    {
        "name" : "PEACEMAKER",
        "picture" : "https://e0.pxfuel.com/wallpapers/832/617/desktop-wallpaper-peacemaker-in-2022-dc-comics-superhero-comics.jpg",
        "about" : {
            "Personaje" : "PEACEMAKER",
            "Nombre Real" : "Christopher Smith",
            "Universo" : "DC",
            "Categoria" : "Antiheroe",
            "Poder" : "Peacemaker es un experto en combate mano a mano y armado, así como un estratega táctico.",
            "Enemigo Principal" : "Crimen organizado y otros vigilantes",
            "Historia" : "Christopher Smith es un vigilante que cree en lograr la paz a cualquier costo, incluso si eso significa recurrir a la violencia extrema. Ha luchado tanto como aliado como antagonista de otros héroes y vigilantes."
        }
    },
    {
        "name" : "MUJER MARAVILLA",
        "picture" : "https://wallpapers-clan.com/wp-content/uploads/2023/02/dc-wonder-woman-art-wallpaper.jpg",
        "about" : {
            "Personaje" : "MUJER MARAVILLA",
            "Nombre Real" : "Diana Prince",
            "Universo" : "DC",
            "Categoria" : "Superheroe",
            "Poder" : "Mujer Maravilla posee fuerza sobrehumana, velocidad, resistencia, agilidad, vuelo y habilidades de combate avanzadas.",
            "Enemigo Principal" : "Ares, el dios de la guerra",
            "Historia" : "Diana Prince es una princesa amazona de la isla de Themyscira. Decidió dejar su hogar para luchar por la justicia y la paz en el mundo de los hombres como la heroína conocida como Mujer Maravilla."
        }
    },
    {
        "name" : "CYBORG",
        "picture" : "https://e1.pxfuel.com/desktop-wallpaper/973/977/desktop-wallpaper-pin-on-comics-cyborg-dc-comics.jpg",
        "about" : {
            "Personaje" : "CYBORG",
            "Nombre Real" : "Victor Stone",
            "Universo" : "DC",
            "Categoria" : "Superheroe",
            "Poder" : "Cyborg tiene fuerza sobrehumana, resistencia, velocidad y está equipado con tecnología avanzada que le permite interactuar con máquinas y computadoras.",
            "Enemigo Principal" : "La Rejilla",
            "Historia" : "Victor Stone sufrió un accidente que lo dejó gravemente herido, pero su padre lo salvó utilizando tecnología experimental para reconstruirlo como Cyborg. Ahora lucha como un héroe y un miembro clave de la Liga de la Justicia."
        }
    },
    {
        "name" : "RAVEN",
        "picture" : "https://e0.pxfuel.com/wallpapers/63/524/desktop-wallpaper-raven-dc-raven-dc-comics.jpg",
        "about" : {
            "Personaje" : "RAVEN",
            "Nombre Real" : "Rachel Roth",
            "Universo" : "DC",
            "Categoria" : "Superheroe",
            "Poder" : "Raven tiene habilidades místicas que incluyen la telepatía, telequinesis, proyección astral y la capacidad de manipular las emociones.",
            "Enemigo Principal" : "Trigon",
            "Historia" : "Raven es la hija de Trigon, un demonio interdimensional. A pesar de su linaje oscuro, lucha por controlar sus poderes y utiliza sus habilidades para luchar contra el mal como miembro de los Jóvenes Titanes."
        }
    },
    {
        "name" : "HARLEY QUINN",
        "picture" : "https://c4.wallpaperflare.com/wallpaper/206/333/254/harley-quinn-women-comic-art-comics-dc-comics-hd-wallpaper-preview.jpg",
        "about" : {
            "Personaje" : "RAVEN",
            "Nombre Real" : "Harleen Quinzel",
            "Universo" : "DC",
            "Categoria" : "Villano",
            "Poder" : "Harley Quinn es una acróbata experta, tiene habilidades en el uso de armas improvisadas y es conocida por su astucia y habilidades de manipulación.",
            "Enemigo Principal" : "Batman, y en ocasiones, ella misma",
            "Historia" : "Harleen Quinzel era una psiquiatra que se enamoró del Joker mientras trabajaba en Arkham Asylum. Se convirtió en su compañera y cómplice criminal, adoptando la identidad de Harley Quinn y luchando junto a él contra Batman y otros enemigos."
        }
    }
]

const marvelHeros = [
    {
        "name" : "IRON MAN",
        "picture" : "https://e0.pxfuel.com/wallpapers/716/542/desktop-wallpaper-artstation-ironman-mark-46-egor-rumyantcev-thumbnail.jpg",
        "about" : {
            "Personaje" : "IRON MAN",
            "Nombre Real" : "Tony Stark",
            "Universo" : "Marvel",
            "Categoria" : "Superheroe",
            "Poder" : "Iron Man posee una armadura tecnológicamente avanzada que le otorga fuerza sobrehumana, vuelo, armamento de alta tecnología y sistemas de defensa.",
            "Enemigo Principal" : "Mandarin",
            "Historia" : "Tony Stark es un genio multimillonario, empresario y filántropo que desarrolló la armadura de Iron Man después de sufrir una lesión grave en el pecho. Utiliza su tecnología para luchar contra el crimen y proteger al mundo como Iron Man."
        }
    },
    {
        "name" : "SPIDERMAN",
        "picture" : "https://e0.pxfuel.com/wallpapers/785/111/desktop-wallpaper-the-amazing-spider-man-2-2014-phone-moviemania-spiderman-artwork-amazing-spiderman-movie-marvel-spiderman-art-spider-man-amazing-thumbnail.jpg",
        "about" : {
            "Personaje" : "SPIDERMAN",
            "Nombre Real" : "Peter Parker",
            "Universo" : "Marvel",
            "Categoria" : "Superheroe",
            "Poder" : "Spider-Man tiene fuerza sobrehumana, agilidad, reflejos mejorados, la capacidad de trepar paredes y un sentido arácnido que le advierte del peligro.",
            "Enemigo Principal" : "Duende Verde",
            "Historia" : "Peter Parker adquirió sus poderes arácnidos después de ser mordido por una araña radiactiva. Tras la muerte de su tío Ben, juró usar sus habilidades para proteger a los inocentes como Spider-Man."
        }
    },
    {
        "name" : "HULK",
        "picture" : "https://e0.pxfuel.com/wallpapers/208/947/desktop-wallpaper-hulk-dc-marvel-avengers-thumbnail.jpg",
        "about" : {
            "Personaje" : "HULK",
            "Nombre Real" : "Bruce Banner",
            "Universo" : "Marvel",
            "Categoria" : "Superheroe",
            "Poder" : "Hulk es un ser humanoide con una fuerza descomunal que aumenta con su ira. También posee resistencia a daños físicos y una capacidad de regeneración acelerada.",
            "Enemigo Principal" : "Abominación, General Ross",
            "Historia" : "Bruce Banner se convierte en Hulk después de ser expuesto a la radiación gamma durante un experimento científico. Hulk lucha por controlar su furia mientras lucha contra enemigos y protege a los inocentes."
        }
    },
    {
        "name" : "THOR",
        "picture" : "https://e0.pxfuel.com/wallpapers/291/600/desktop-wallpaper-thor-ideas-thor-the-mighty-thor-marvel-comics-thor-comic-art-thumbnail.jpg",
        "about" : {
            "Personaje" : "THOR",
            "Nombre Real" : "Thor Odinson",
            "Universo" : "Marvel",
            "Categoria" : "Superheroe",
            "Poder" : "Thor es un dios nórdico con fuerza sobrehumana, resistencia, longevidad, y control sobre el clima y los relámpagos.",
            "Enemigo Principal" : "Loki",
            "Historia" : "Thor es el príncipe de Asgard y el dios del trueno. Es el hijo de Odin y lucha para proteger los Nueve Reinos con su martillo encantado, Mjolnir."
        }
    },
    {
        "name" : "PANTERA NEGRA",
        "picture" : "https://e0.pxfuel.com/wallpapers/850/896/desktop-wallpaper-black-panther-in-2020-marvel-comics-black-panther-marvel-black-panther-movie-poster-neon-panther-thumbnail.jpg",
        "about" : {
            "Personaje" : "PANTERA NEGRA",
            "Nombre Real" : "T'Challa",
            "Universo" : "Marvel",
            "Categoria" : "Superheroe",
            "Poder" : "Pantera Negra posee fuerza, velocidad, agilidad y resistencia sobrehumanas. También es un maestro en artes marciales y tiene acceso al Vibranium, un metal especial con propiedades únicas.",
            "Enemigo Principal" : "Erik Killmonger",
            "Historia" : "T'Challa es el rey de Wakanda, un país africano rico en Vibranium. Adopta la identidad de Pantera Negra para proteger a su nación y al mundo de las amenazas internas y externas."
        }
    },
    {
        "name" : "VENOM",
        "picture" : "https://e0.pxfuel.com/wallpapers/369/143/desktop-wallpaper-venom-american-comic-character-thumbnail.jpg",
        "about" : {
            "Personaje" : "VENOM",
            "Nombre Real" : "Eddie Brock",
            "Universo" : "Marvel",
            "Categoria" : "Antiheroe",
            "Poder" : "Venom es un simbionte alienígena que le otorga a su huésped fuerza sobrehumana, habilidades regenerativas y la capacidad de producir telarañas.",
            "Enemigo Principal" : "SpiderMan, Carnage",
            "Historia" : "Venom es el resultado de la unión entre el simbionte alienígena y Eddie Brock, un periodista que odia a Spider-Man. Juntos, luchan contra Spider-Man y otros enemigos, a veces como antagonistas y a veces como héroes."
        }
    },
    {
        "name" : "DOCTOR STRANGE",
        "picture" : "https://e0.pxfuel.com/wallpapers/863/668/desktop-wallpaper-doctor-strange-thor-doctor-strange-comics-avengers-marvel-comicon-thumbnail.jpg",
        "about" : {
            "Personaje" : "DOCTOR STRANGE",
            "Nombre Real" : "Stephen Strange",
            "Universo" : "Marvel",
            "Categoria" : "Superheroe",
            "Poder" : "Doctor Strange es un hechicero maestro en las artes místicas, capaz de manipular la realidad, proyectar energía mística, viajar a través de dimensiones y lanzar hechizos poderosos.",
            "Enemigo Principal" : "Durmammu",
            "Historia" : "Stephen Strange era un neurocirujano brillante que perdió el uso de sus manos en un accidente automovilístico. Después de buscar una cura, se convirtió en el Hechicero Supremo y protector del universo."
        }
    },
    {
        "name" : "THANOS",
        "picture" : "https://e0.pxfuel.com/wallpapers/174/455/desktop-wallpaper-thanos-desenhos-marvel-avengers-and-comics-galactus-thumbnail.jpg",
        "about" : {
            "Personaje" : "THANOS",
            "Nombre Real" : "Thanos",
            "Universo" : "Marvel",
            "Categoria" : "Villano",
            "Poder" : "Thanos es un titán con fuerza sobrehumana, resistencia, longevidad y es un estratega táctico. Además, posee el Guantelete del Infinito, que le otorga control absoluto sobre la realidad.",
            "Enemigo Principal" : "Los Vengadores, Adam Warlock",
            "Historia" : "Thanos es un supervillano obsesionado con el poder y la conquista. Su búsqueda de las Gemas del Infinito lo lleva a enfrentarse a los héroes más poderosos de la Tierra en su intento por dominar el universo."
        }
    },
    {
        "name" : "DEADPOOL",
        "picture" : "https://www.enwallpaper.com/wp-content/uploads/2021/11/www.mobilesmspk.net-deadpool-4419.jpg",
        "about" : {
            "Personaje" : "DEADPOOL",
            "Nombre Real" : "Wade Wilson",
            "Universo" : "Marvel",
            "Categoria" : "Antiheroe",
            "Poder" : "Deadpool posee habilidades de curación acelerada que lo hacen virtualmente inmortal. También es un maestro en combate cuerpo a cuerpo y es conocido por su capacidad para romper la cuarta pared.",
            "Enemigo Principal" : "Ajax, T-Ray",
            "Historia" : "Wade Wilson era un mercenario que se sometió a un experimento para curar su cáncer, lo que lo dejó con poderes regenerativos pero lo volvió mentalmente inestable. Adoptó la identidad de Deadpool y lucha como un mercenario y antihéroe."
        }
    },
    {
        "name" : "CAPITÁN AMÉRICA",
        "picture" : "https://e0.pxfuel.com/wallpapers/554/665/desktop-wallpaper-captain-america-captain-america-super-hero-thumbnail.jpg",
        "about" : {
            "Personaje" : "CAPITÁN AMÉRICA",
            "Nombre Real" : "Steve Rogers",
            "Universo" : "Marvel",
            "Categoria" : "Superheroe",
            "Poder" : "El Capitán América posee fuerza, velocidad, agilidad y resistencia sobrehumanas debido al Suero del Súper Soldado. También es un experto en combate cuerpo a cuerpo y lleva un escudo indestructible hecho de Vibranium.",
            "Enemigo Principal" : "Cráneo Rojo",
            "Historia" : "Steve Rogers era un joven frágil que quería servir a su país durante la Segunda Guerra Mundial. Fue reclutado para el Proyecto del Súper Soldado y se convirtió en el símbolo de la libertad y la justicia conocido como el Capitán América."
        }
    },
    {
        "name" : "WOLVERINE",
        "picture" : "https://e0.pxfuel.com/wallpapers/610/46/desktop-wallpaper-wolverine-comic-art-thumbnail.jpg",
        "about" : {
            "Personaje" : "WOLVERINE",
            "Nombre Real" : "Logan (James Howlett)",
            "Universo" : "Marvel",
            "Categoria" : "Superheroe/Antiheroe",
            "Poder" : "Wolverine tiene un factor de curación acelerada, garras retráctiles de adamantium, sentidos agudos y un esqueleto reforzado de adamantium.",
            "Enemigo Principal" : "Dientes de Sable, Victor Creed",
            "Historia" : "Wolverine es un mutante con un pasado misterioso y violento. Después de ser sometido a un experimento que recubrió su esqueleto con adamantium, se convirtió en un guerrero inmortal que lucha por la justicia y protege a los mutantes."
        }
    },
    {
        "name" : "PUNISHER",
        "picture" : "https://e0.pxfuel.com/wallpapers/599/987/desktop-wallpaper-the-punisher-marvel-the-punisher-comics-thumbnail.jpg",
        "about" : {
            "Personaje" : "PUNISHER",
            "Nombre Real" : "Frank Castle",
            "Universo" : "Marvel",
            "Categoria" : "Antiheroe",
            "Poder" : "Punisher es un experto en combate cuerpo a cuerpo, tácticas militares y armamento avanzado.",
            "Enemigo Principal" : "Kingpin",
            "Historia" : "Frank Castle era un marine que se convirtió en un vigilante después de que su familia fuera asesinada por el crimen organizado. Adoptó la identidad del Punisher y lucha contra el crimen violentamente, persiguiendo a los criminales sin piedad."
        }
    },
    {
        "name" : "DOCTOR DOOM",
        "picture" : "https://e1.pxfuel.com/desktop-wallpaper/52/237/desktop-wallpaper-dr-doom-doctor-doom-marvel-comics-thumbnail.jpg",
        "about" : {
            "Personaje" : "DOCTOR DOOM",
            "Nombre Real" : "Victor von Doom",
            "Universo" : "Marvel",
            "Categoria" : "Villano",
            "Poder" : "Doctor Doom es un genio científico y hechicero con habilidades en ingeniería, manipulación de energía y magia.",
            "Enemigo Principal" : "Los Cuatro Fantásticos",
            "Historia" : "Victor von Doom era un estudiante brillante que se obsesionó con la magia y la ciencia. Después de un accidente, se convirtió en Doctor Doom y juró vengarse de los Cuatro Fantásticos por sus supuestos errores."
        }
    },
    {
        "name" : "DAREDEVIL",
        "picture" : "https://e0.pxfuel.com/wallpapers/863/715/desktop-wallpaper-marco-checchetto-on-twitter-daredevil-comic-marvel-daredevil-marvel-comics-art-daredevil-comics-thumbnail.jpg",
        "about" : {
            "Personaje" : "DAREDEVIL",
            "Nombre Real" : "Matt Murdok",
            "Universo" : "Marvel",
            "Categoria" : "Heroe",
            "Poder" : "Daredevil posee sentidos agudizados, habilidades de combate cuerpo a cuerpo y un radar similar al de los murciélagos que le permite 'ver' su entorno.",
            "Enemigo Principal" : "Kingping, Bullseye",
            "Historia" : "Matt Murdock perdió la vista en un accidente químico cuando era niño, pero sus otros sentidos se agudizaron como resultado. Adoptó la identidad de Daredevil y lucha por la justicia en las calles de Hell's Kitchen, Nueva York."
        }
    }
]


const dcContainer = document.getElementById("dc__heros");

dcHeros.forEach(hero =>{

    //Crear el elemento div que va a contener la tarjeta de cada heroe
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item');

    //Crear el elemento img
    const img = document.createElement('img');
    img.src = hero.picture;
    img.alt = hero.name;

    //Crear el elemento div que contiene el nombre y el boton del heroe
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('grid-item__info')

    //Crear los elementos p para el nombre y el boton
    const nameP = document.createElement('p');
    nameP.textContent = hero.name;

    const botonP = document.createElement('button');
    botonP.classList.add('btn')
    botonP.textContent = 'VER';

    //Agregar los elementos p a infoDiv
    infoDiv.appendChild(nameP);
    infoDiv.appendChild(botonP);

    //Agregar los elementos img e infoDiv a al div grid-item
    gridItem.appendChild(img);
    gridItem.appendChild(infoDiv);

    //Agregar el grid-item a dcContainer 'dc__heros'
    dcContainer.appendChild(gridItem);

    //Creando Ventana Modal
    //Creando elementos de la ventana modal y nombrando sus clases
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.textContent = "Cerrar"

    const clonedImg = img.cloneNode(true);
    //Agrupando los elementos en sus respectivos contenedores
    modalFooter.appendChild(closeButton);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalContainer.appendChild(modalContent);
    dcContainer.appendChild(modalContainer);
    modalContent.style.backgroundImage = `url('${hero.picture}')`;
    //Creando y agregando elementos html segun la pareja llave valor de about de cada heroe
    const about = hero.about;
    for(const[key, value] of Object.entries(about)){
        const h1 = document.createElement('h1');
        const parrafo = document.createElement('p');
        const hr = document.createElement('hr');
        h1.textContent = key;
        parrafo.textContent = value;
        modalBody.appendChild(h1);
        modalBody.appendChild(parrafo);
        modalBody.appendChild(hr);
    }
    botonP.onclick = function() {
        modalContainer.style.display = "block";
    }
    closeButton.onclick = function() {
        modalContainer.style.display = "none"
    }
    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }
})

const marvelContainer = document.getElementById("marvel__heros");

marvelHeros.forEach(hero =>{

    //Crear el elemento div que va a contener la tarjeta de cada heroe
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item');

    //Crear el elemento img
    const img = document.createElement('img');
    img.src = hero.picture;
    img.alt = hero.name;

    //Crear el elemento div que contiene el nombre y el boton del heroe
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('grid-item__info')

    //Crear los elementos p para el nombre y el boton
    const nameP = document.createElement('p');
    nameP.textContent = hero.name;

    const botonP = document.createElement('button');
    botonP.textContent = 'VER';

    //Agregar los elementos p a infoDiv
    infoDiv.appendChild(nameP);
    infoDiv.appendChild(botonP);

    //Agregar los elementos img e infoDiv a al div grid-item
    gridItem.appendChild(img);
    gridItem.appendChild(infoDiv);

    //Agregar el grid-item a dcContainer 'marvel__heros'
    marvelContainer.appendChild(gridItem);
    //Creando Ventana Modal
    //Creando elementos de la ventana modal y nombrando sus clases
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.textContent = "Cerrar"

    const clonedImg = img.cloneNode(true);
    //Agrupando los elementos en sus respectivos contenedores
    modalFooter.appendChild(closeButton);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalContainer.appendChild(modalContent);
    dcContainer.appendChild(modalContainer);
    modalContent.style.backgroundImage = `url('${hero.picture}')`;
    //Creando y agregando elementos html segun la pareja llave valor de about de cada heroe
    const about = hero.about;
    for(const[key, value] of Object.entries(about)){
        const h1 = document.createElement('h1');
        const parrafo = document.createElement('p');
        const hr = document.createElement('hr');
        h1.textContent = key;
        parrafo.textContent = value;
        modalBody.appendChild(h1);
        modalBody.appendChild(parrafo);
        modalBody.appendChild(hr);
    }
    botonP.onclick = function() {
        modalContainer.style.display = "block";
    }
    closeButton.onclick = function() {
        modalContainer.style.display = "none"
    }
    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }
})
