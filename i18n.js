// ============================================================
// i18n — Simple ES/EN translation engine for the portfolio
// ============================================================
(function () {
  var STORAGE_KEY = 'site-lang';

  var i18n = {
    en: {
      meta: {
        title: 'Mauro Albarracín — Game Designer &amp; Developer',
        description: 'Portfolio of Mauro Albarracín, Game Designer &amp; Developer with a QA background.'
      },
      nav: { projects: 'Projects', skills: 'Skills', about: 'About', contact: 'Contact' },
      common: {
        backHome: '← Back to home',
        engine: 'Engine',
        language: 'Language',
        platform: 'Platform',
        mobile: 'Mobile',
        devTime: 'Development Time',
        teamSize: 'Team Size',
        overview: 'Overview',
        myRole: 'My Role',
        mainContributions: 'Main Contributions',
        keyContributions: 'Key Contributions',
        designDecisions: 'Design Decisions',
        techChallenges: 'Technical Challenges',
        whatLearned: 'What I Learned',
        qaPerspective: 'QA Perspective',
        keyTakeaways: 'Key Takeaways',
        toolsTech: 'Tools &amp; Technologies',
        gallery: 'Gallery',
        nextProject: 'Next project',
        backTo: 'Back to',
        homeStrong: 'Home →',
        viewCaseStudy: 'View full case study →',
        email: 'Email'
      },
      hero: {
        eyebrow: 'Game Designer &amp; Developer',
        line1: 'Designing systems, building',
        line2: 'playable experiences.',
        lead: 'Game Designer and Developer with a QA background. I approach games first as a designer, shaping mechanics and systems, then as a developer bringing them to life through gameplay programming — with quality assurance as the lens that keeps every detail polished.',
        viewProjects: 'View projects'
      },
      projects: {
        heading: 'Featured Projects',
        aychanda: { tag1: 'Unity · Mobile', tag2: 'Final Project', desc: 'Mobile endless runner built as a university final project with an 8-person team under Agile workflow.', role: 'Designer &amp; Gameplay/UI Programmer' },
        purifyingbubble: { tag1: 'Unity', tag2: 'Game Jam · 7 Days', desc: 'Physics puzzle where the player rotates the world to guide a bubble across a desert, avoiding thorns.', role: 'Game/Level Designer &amp; Programmer' },
        gashero: { tag1: 'Unity', tag2: 'Game Jam · 3 Days', desc: 'A humorous platformer: an absurd superhero fights pollution... by polluting. Dash, UI, and Factory pattern.', role: 'Gameplay &amp; UI Programmer' },
        coyaslug: { tag1: 'Construct 3', tag2: 'University Project', desc: 'Retro light gun shooter: a Coya fights aliens with carnival foam, built with OOP principles and coroutines.', role: 'Designer &amp; Gameplay Programmer' },
        pestinvasion: { tag1: 'Unity', tag2: 'University Project', desc: '2D platformer where a shrunken inventor battles a pest swarm using custom enemy behaviors and sine-wave movement.', role: 'Designer &amp; Gameplay Programmer' }
      },
      skills: {
        heading: 'Skills',
        qa: { title: 'QA', p1: 'Manual Testing', p2: 'Regression Testing', p3: 'Test Case Creation', p4: 'Bug Reporting', p5: 'Reproduction Steps', p6: 'Gameplay Analysis', p7: 'Feature Feedback' },
        dev: { title: 'Development', p2: 'Gameplay Programming', p3: 'UI Programming', p4: 'Game Systems', p5: 'Object-Oriented Programming' },
        design: { title: 'Design', p1: 'Game Design', p2: 'Level Design', p3: 'System Design', p4: 'Game Balancing', p5: 'GDD Documentation' },
        tools: { title: 'Tools' }
      },
      about: {
        heading: 'About Me',
        p1: "I'm a Game Designer and Developer with a QA background, which lets me approach games first as a designer shaping the player experience, then as a developer building the systems that bring it to life.",
        p2: 'I graduated as a Technician in Comprehensive Video Game Design from the Universidad Nacional de Jujuy, where I worked on multiple collaborative game projects using Unity and C#, taking on game design and gameplay programming roles.',
        p3: "Throughout my projects, I have led game and level design work, translated design decisions into working gameplay code, and used my QA experience to validate that mechanics actually feel right in the player's hands. This has given me a full view of the development pipeline, from concept to a polished, tested build.",
        p4: 'I enjoy prototyping mechanics, writing GDDs, and balancing systems, then getting hands-on with gameplay programming to bring those designs to life. My QA background adds a final layer of rigor — a habit of playtesting thoroughly and catching issues before players do. I\'m always eager to learn new technologies, collaborate with multidisciplinary teams, and contribute to building polished, enjoyable games.',
        stat1: 'Shipped projects',
        stat2: '+ Dev + QA',
        stat3: 'Engines (Unity, Construct 3)'
      },
      aychanda: {
        tag: 'Endless Runner · Mobile Game · University Final Project',
        devTime: '3 Months',
        teamSize: '8 Developers',
        role: 'Game Designer, Gameplay Programmer &amp; UI Programmer',
        overview: {
          p1: 'Ay Chanda! is a mobile endless runner developed as the final university project for the Video Game Design program. The project was created by a multidisciplinary team over three months, following an Agile workflow to simulate a professional game development environment.',
          p2: 'Beyond building a complete game, the project focused on applying collaborative development practices, project planning, and iterative production from concept to delivery.'
        },
        contrib: {
          intro: "During the project, I was responsible for designing and implementing the game's mobile user interface while developing core gameplay systems. My main responsibilities included:",
          i1: 'Designed and implemented the complete mobile UI.',
          i2: "Developed the player's movement system and touch controls for mobile devices.",
          i3: 'Programmed core gameplay mechanics using Unity and C#.',
          i4: 'Collaborated closely with designers and programmers to integrate gameplay systems with the user interface.',
          i5: 'Participated in project planning, sprint discussions, and production meetings throughout development.'
        },
        prod: {
          title: 'Production &amp; Collaboration',
          intro: 'One of the biggest challenges was coordinating a team of eight developers who had little previous experience working together on a project of this scale. To address this, we adopted Agile practices throughout development, including:',
          i1: 'Task management with ClickUp.',
          i2: 'Frequent sprint meetings and progress reviews.',
          i3: 'Meeting minutes to document decisions and action items.',
          i4: 'Version control using GitHub and Unity Version Control.',
          i5: 'Continuous collaboration between programming, design, and art teams.',
          outro: 'This experience gave me first-hand exposure to collaborative game production and reinforced the importance of communication, planning, and organized workflows.'
        },
        takeaways: {
          p1: 'This project taught me that building a successful game requires much more than writing code. Effective communication, task organization, and teamwork were essential to keeping the project on schedule and delivering a polished final product.',
          p2: 'Working within an Agile environment also strengthened my ability to collaborate with multidisciplinary teams, adapt to changing requirements, and contribute effectively throughout the entire development process.'
        }
      },
      purifyingbubble: {
        tag: 'Puzzle / Physics-Based · Game Jam Project',
        devTime: '7 Days',
        teamSize: '3 Developers',
        role: 'Game Designer, Gameplay Programmer, Level Designer',
        overview: {
          p1: 'PurifyingBubble was developed during a 7-day Game Jam, where the goal was to design and deliver a complete, playable experience within a very limited timeframe.',
          p2: "The player controls a bubble traveling through a desert to purify a corrupted oasis. Movement is physics-based, and instead of directly controlling the character, the player rotates the world to change the bubble's direction. Throughout the maze, players must avoid deadly thorns while using environmental mechanics and temporary abilities to safely reach the goal."
        },
        contrib: {
          intro: "I contributed to both the game's design and programming, implementing several of its core gameplay systems. My responsibilities included:",
          i1: 'Designed gameplay mechanics and level flow.',
          i2: "Implemented the player's movement system.",
          i3: 'Developed camera movement and camera transition systems.',
          i4: 'Programmed environmental interactions, including bounce walls and teleporters.',
          i5: 'Created temporary gameplay abilities, such as short invulnerability to safely cross hazardous obstacles.',
          i6: "Implemented screen transitions and the game's user interface.",
          i7: "Designed and balanced the level to encourage experimentation with the game's mechanics."
        },
        challenges: {
          p1: 'The greatest challenge was delivering a polished and enjoyable experience within only seven days. Because of the extremely limited timeframe, every feature had to be carefully prioritized. This required making quick design decisions, focusing on the core gameplay loop, and continuously balancing scope against available development time.',
          p2: 'Working under these constraints strengthened my ability to prototype quickly while maintaining code organization and gameplay quality.'
        },
        learned: {
          p1: 'This Game Jam reinforced the importance of effective planning and scope management. Rather than trying to build a large game, I learned that a simple concept executed well can result in a much stronger player experience. Careful prioritization and a clear development plan allowed our team to make the best use of the limited time available.'
        },
        qa: {
          p1: 'Developing several interconnected gameplay systems in such a short period helped me better understand how small changes can affect the overall player experience. It also reinforced the importance of continuously testing new features during development, quickly reproducing issues, and validating gameplay after every implementation to maintain stability despite rapid iteration.'
        }
      },
      gashero: {
        tag: '2D Platformer · Game Jam',
        intro: 'A humorous platformer where an absurd superhero fights pollution using the very thing that creates it, turning a ridiculous premise into a fun and complete gameplay experience.',
        devTime: '3 Days',
        teamSize: '3 Developers',
        role: 'Gameplay Programmer, UI Programmer',
        overview: {
          p1: 'GasHero was developed during a 3-day Game Jam, where the challenge was to create a complete game around a specific theme within a very limited timeframe.',
          p2: 'The game follows an intentionally absurd superhero whose power is... contaminating the environment by farting. Ironically, his mission is to protect nature and fight pollution. Rather than avoiding the absurdity, the team embraced it, creating a lighthearted experience centered around humor and simple yet engaging gameplay.'
        },
        contrib: {
          intro: "During development, I focused on implementing the player's core mechanics and user interface behavior. My main contributions included:",
          i1: "Designed and implemented the player's lateral movement system.",
          i2: 'Developed a responsive dash mechanic to enhance mobility and gameplay flow.',
          i3: 'Programmed the user interface interactions and screen responses.',
          i4: 'Implemented the Factory Design Pattern to create game objects without directly depending on their concrete classes, improving code organization and scalability.',
          i5: "Collaborated on gameplay iteration to ensure the mechanics supported the game's humorous concept."
        },
        design: {
          p1: "Rather than trying to justify the game's absurd premise, we decided to fully embrace it. The contrast between a superhero who pollutes while trying to save the environment became the game's defining feature. This allowed us to focus on creating mechanics that supported the joke while still delivering a coherent and enjoyable gameplay experience.",
          p2: "The movement system was intentionally kept simple and responsive so players could immediately engage with the game's core idea without unnecessary complexity."
        },
        challenges: {
          p1: 'One of the biggest challenges was adapting the Game Jam theme into a gameplay concept that was both original and achievable within only three days. Balancing creativity with the available development time required constant prioritization, ensuring that every implemented feature contributed directly to the core experience.',
          p2: 'Additionally, implementing the Factory Design Pattern within such a short development cycle provided valuable experience applying software engineering principles in a real project.'
        },
        qa: {
          p1: "Developing the player's movement systems highlighted the importance of testing gameplay responsiveness after every iteration. Even small adjustments to movement speed or dash timing significantly affected the player's experience, reinforcing the value of continuous playtesting and rapid validation during development."
        },
        learned: {
          p1: 'This project taught me that the first idea is not always the wrong one simply because it sounds absurd. Instead of searching for the "perfect" concept, committing to a simple and fun idea allowed the team to spend more time polishing gameplay and creating a more enjoyable experience.',
          p2: 'I also gained practical experience applying object-oriented design principles through the implementation of the Factory Design Pattern in Unity.'
        },
        reflection: {
          title: 'Project Reflection',
          quote: 'One of the most valuable lessons from this project was learning that execution matters more than perfection. A simple idea, developed with focus and confidence, can become a memorable experience when the team commits to making it fun.'
        }
      },
      coyaslug: {
        tag: 'Light Gun Shooter · University Project',
        intro: 'A retro-inspired light gun shooter where a Coya fights invading aliens using Rey Momo carnival foam as an unconventional weapon while escaping an alien spaceship.',
        langValue: 'Event-Based Visual Scripting',
        devTime: '2 Months',
        teamSize: '6 Developers',
        role: 'Game Designer, Gameplay Programmer',
        overview: {
          p1: 'Coya Slug is a university project inspired by classic arcade light gun shooters and retro action games.',
          p2: 'The game follows a Coya who is abducted by aliens after attending the local carnival. While searching for a way to escape the spaceship, he discovers that the artificial carnival foam Rey Momo damages the aliens, turning an everyday carnival item into his primary weapon.',
          p3: 'The project combined humorous local cultural references with retro gameplay mechanics to create a fast-paced arcade experience.'
        },
        contrib: {
          intro: "Throughout the project I collaborated on both gameplay programming and game design, helping define the player's experience. My main contributions included:",
          i1: 'Developed core gameplay mechanics using Construct 3.',
          i2: 'Designed gameplay systems following Object-Oriented Programming (OOP) principles.',
          i3: 'Implemented gameplay interactions using physics-based behaviors.',
          i4: 'Collaborated on balancing gameplay and enemy encounters to create a satisfying arcade experience.'
        },
        design: {
          p1: 'Rather than creating a conventional sci-fi shooter, the team decided to combine a recognizable retro gameplay style with elements of Argentine culture.',
          p2: "Using Rey Momo carnival foam as the player's weapon created an unexpected contrast that reinforced the game's humorous identity while supporting the core gameplay loop.",
          p3: 'The retro-inspired visual style also complemented this approach, making the experience feel familiar while giving it its own personality.'
        },
        challenges: {
          p1: 'One of the biggest challenges was adapting recently acquired programming knowledge to a new development environment.',
          p2: "Unlike Unity, where many systems are readily available, Construct 3 required us to build much of the game's behavior ourselves through event systems and custom logic. This forced me to think more carefully about gameplay architecture and how different systems interacted with one another."
        },
        highlights: {
          title: 'Technical Highlights',
          i1: 'Applied Object-Oriented Programming principles to structure gameplay systems.',
          i2: 'Worked extensively with physics-based interactions to support arcade gameplay.',
          i3: "Developed gameplay logic within Construct 3's event system, strengthening my understanding of system design beyond engine-specific tools."
        },
        qa: {
          p1: 'Creating gameplay systems from scratch helped me understand how seemingly small implementation details can produce unexpected behaviors. This experience improved my ability to analyze gameplay logic, isolate issues, and understand how different systems interact — skills that are directly applicable to technical QA and debugging.'
        },
        learned: {
          p1: 'This project became one of the foundations of my programming journey. Beyond implementing gameplay mechanics, I gained a much deeper appreciation for the importance of Object-Oriented Programming, mathematics, and structured problem-solving when developing games.',
          p2: 'Many of the concepts I first encountered during this project continue to influence how I approach gameplay programming today.'
        },
        sidebarTitle: 'Technologies &amp; Concepts',
        pillPhysics: 'Physics',
        pillRetro: 'Retro Game Design',
        pillArcade: 'Arcade Mechanics'
      },
      pestinvasion: {
        tag: '2D Platformer · University Project',
        intro: "A 2D platformer where a young inventor, accidentally shrunk to the size of insects, must battle an overwhelming pest invasion inside his family's candy factory using his experimental insecticide.",
        devTime: '2 Months',
        teamSize: '4 Developers',
        role: 'Game Designer, Gameplay Programmer',
        overview: {
          p1: 'Pest Invasion is a 2D platformer developed as a university project. Players take control of Ricky, the son of a candy factory owner, who accidentally shrinks himself while creating an experimental insecticide capable of eliminating any insect.',
          p2: 'Now reduced to the size of the invading pests, Ricky must fight through swarms of ants, cockroaches, bees, and other insects while searching for a way to restore his original size.',
          p3: 'The project combined classic platforming mechanics with enemy behaviors designed to create increasingly dynamic gameplay encounters.'
        },
        contrib: {
          intro: 'During development, I focused on implementing enemy behavior systems and gameplay interactions. My main responsibilities included:',
          i1: 'Designed and programmed enemy behaviors.',
          i2: 'Implemented enemy patrol systems.',
          i3: 'Developed sinusoidal movement patterns using mathematical functions to create more dynamic enemy movement.',
          i4: 'Programmed interactive environmental objects used throughout the levels.',
          i5: 'Collaborated on gameplay balancing and enemy placement to support the overall level design.'
        },
        design: {
          p1: 'Instead of giving every enemy the same movement pattern, we introduced different behaviors to encourage players to adapt their strategy.',
          p2: 'Simple patrols provided predictable obstacles, while sinusoidal movement created less predictable enemies that increased the challenge without requiring complex AI systems. This approach allowed us to create gameplay variety using relatively simple mathematical concepts.'
        },
        challenges: {
          p1: "One of the project's biggest challenges was intentionally minimizing the use of Unity's built-in components. Rather than relying on existing engine solutions whenever possible, I challenged myself to build gameplay systems through custom C# scripts. This approach required a deeper understanding of both Unity and the mathematical principles behind character movement.",
          p2: 'Implementing sinusoidal enemy movement also strengthened my ability to translate mathematical formulas into gameplay mechanics.'
        },
        highlights: {
          title: 'Technical Highlights',
          i1: 'Implemented custom enemy AI behaviors through C# scripting.',
          i2: 'Developed patrol systems for autonomous enemy movement.',
          i3: 'Applied trigonometric functions to create smooth sinusoidal movement patterns.',
          i4: "Built custom gameplay logic instead of relying exclusively on Unity's built-in components.",
          i5: 'Strengthened understanding of mathematics as a foundation for gameplay programming.'
        },
        qa: {
          p1: 'Developing enemy behavior systems demonstrated how small logic changes could significantly affect gameplay difficulty and player experience. It reinforced the importance of testing movement patterns, collision behavior, and gameplay consistency across different enemy types — an analytical mindset that translates directly to technical QA and gameplay validation.'
        },
        learned: {
          p1: 'This project significantly strengthened my programming fundamentals. More importantly, it helped me understand that mathematics is not just an academic subject but an essential tool for creating engaging gameplay systems.',
          p2: 'Building my own gameplay components instead of depending solely on engine features also gave me greater confidence when designing reusable and maintainable systems.'
        },
        reflection: {
          title: 'Project Reflection',
          quote: 'This project changed the way I approached gameplay programming. Instead of asking what Unity could do for me, I started asking how I could build the system myself. That shift in mindset helped me better understand both programming and game mechanics.'
        },
        pillTrig: 'Trigonometry'
      }
    },

    es: {
      meta: {
        title: 'Mauro Albarracín — Diseñador &amp; Desarrollador de Videojuegos',
        description: 'Portfolio de Mauro Albarracín, Diseñador &amp; Desarrollador de Videojuegos con experiencia en QA.'
      },
      nav: { projects: 'Proyectos', skills: 'Habilidades', about: 'Sobre mí', contact: 'Contacto' },
      common: {
        backHome: '← Volver al inicio',
        engine: 'Motor',
        language: 'Lenguaje',
        platform: 'Plataforma',
        mobile: 'Móvil',
        devTime: 'Tiempo de Desarrollo',
        teamSize: 'Tamaño del Equipo',
        overview: 'Resumen',
        myRole: 'Mi Rol',
        mainContributions: 'Contribuciones Principales',
        keyContributions: 'Contribuciones Clave',
        designDecisions: 'Decisiones de Diseño',
        techChallenges: 'Desafíos Técnicos',
        whatLearned: 'Qué Aprendí',
        qaPerspective: 'Perspectiva de QA',
        keyTakeaways: 'Conclusiones Clave',
        toolsTech: 'Herramientas &amp; Tecnologías',
        gallery: 'Galería',
        nextProject: 'Siguiente proyecto',
        backTo: 'Volver al',
        homeStrong: 'Inicio →',
        viewCaseStudy: 'Ver caso de estudio completo →',
        email: 'Correo'
      },
      hero: {
        eyebrow: 'Diseñador &amp; Desarrollador de Videojuegos',
        line1: 'Diseñando sistemas, construyendo',
        line2: 'experiencias jugables.',
        lead: 'Diseñador y Desarrollador de Videojuegos con experiencia en QA. Abordo los juegos primero como diseñador, definiendo mecánicas y sistemas, y luego como desarrollador, dándoles vida a través de la programación de gameplay — con el aseguramiento de calidad como la mirada que mantiene cada detalle pulido.',
        viewProjects: 'Ver proyectos'
      },
      projects: {
        heading: 'Proyectos Destacados',
        aychanda: { tag1: 'Unity · Móvil', tag2: 'Proyecto Final', desc: 'Endless runner móvil desarrollado como proyecto final universitario junto a un equipo de 8 personas bajo metodología Agile.', role: 'Diseñador &amp; Programador de Gameplay/UI' },
        purifyingbubble: { tag1: 'Unity', tag2: 'Game Jam · 7 Días', desc: 'Puzzle de física en el que el jugador rota el mundo para guiar una burbuja a través del desierto, evitando espinas.', role: 'Diseñador de Juego/Niveles &amp; Programador' },
        gashero: { tag1: 'Unity', tag2: 'Game Jam · 3 Días', desc: 'Un plataformas humorístico: un superhéroe absurdo combate la contaminación... contaminando. Dash, UI y patrón Factory.', role: 'Programador de Gameplay &amp; UI' },
        coyaslug: { tag1: 'Construct 3', tag2: 'Proyecto Universitario', desc: 'Shooter de pistola de luz retro: un Coya enfrenta alienígenas con espuma de carnaval, construido con principios de POO y corrutinas.', role: 'Diseñador &amp; Programador de Gameplay' },
        pestinvasion: { tag1: 'Unity', tag2: 'Proyecto Universitario', desc: 'Plataformas 2D donde un inventor encogido combate una plaga de insectos usando comportamientos de enemigos personalizados y movimiento senoidal.', role: 'Diseñador &amp; Programador de Gameplay' }
      },
      skills: {
        heading: 'Habilidades',
        qa: { title: 'QA', p1: 'Testing Manual', p2: 'Testing de Regresión', p3: 'Creación de Casos de Prueba', p4: 'Reporte de Bugs', p5: 'Pasos de Reproducción', p6: 'Análisis de Gameplay', p7: 'Feedback de Funcionalidades' },
        dev: { title: 'Desarrollo', p2: 'Programación de Gameplay', p3: 'Programación de UI', p4: 'Sistemas de Juego', p5: 'Programación Orientada a Objetos' },
        design: { title: 'Diseño', p1: 'Diseño de Juegos', p2: 'Diseño de Niveles', p3: 'Diseño de Sistemas', p4: 'Balanceo de Juego', p5: 'Documentación de GDD' },
        tools: { title: 'Herramientas' }
      },
      about: {
        heading: 'Sobre Mí',
        p1: 'Soy Diseñador y Desarrollador de Videojuegos con experiencia en QA, lo que me permite abordar los juegos primero como diseñador, definiendo la experiencia del jugador, y luego como desarrollador, construyendo los sistemas que le dan vida.',
        p2: 'Me gradué como Técnico en Diseño Integral de Videojuegos en la Universidad Nacional de Jujuy, donde trabajé en múltiples proyectos colaborativos usando Unity y C#, asumiendo roles de diseño de juegos y programación de gameplay.',
        p3: 'A lo largo de mis proyectos, lideré trabajo de diseño de juego y de niveles, traduje decisiones de diseño en código de gameplay funcional, y usé mi experiencia en QA para validar que las mecánicas se sintieran realmente bien en manos del jugador. Esto me dio una visión completa del pipeline de desarrollo, desde el concepto hasta una build pulida y testeada.',
        p4: 'Disfruto prototipar mecánicas, redactar GDDs y balancear sistemas, para luego meter mano en la programación de gameplay y darle vida a esos diseños. Mi experiencia en QA suma una última capa de rigor: el hábito de testear a fondo y detectar problemas antes que los jugadores. Siempre estoy dispuesto a aprender nuevas tecnologías, colaborar con equipos multidisciplinarios y contribuir a construir juegos pulidos y disfrutables.',
        stat1: 'Proyectos lanzados',
        stat2: '+ Dev + QA',
        stat3: 'Motores (Unity, Construct 3)'
      },
      aychanda: {
        tag: 'Endless Runner · Juego Móvil · Proyecto Final Universitario',
        devTime: '3 Meses',
        teamSize: '8 Desarrolladores',
        role: 'Diseñador de Juego, Programador de Gameplay &amp; Programador de UI',
        overview: {
          p1: '¡Ay Chanda! es un endless runner móvil desarrollado como proyecto final universitario para la carrera de Diseño de Videojuegos. El proyecto fue creado por un equipo multidisciplinario a lo largo de tres meses, siguiendo una metodología Agile para simular un entorno profesional de desarrollo de videojuegos.',
          p2: 'Más allá de construir un juego completo, el proyecto se enfocó en aplicar prácticas de desarrollo colaborativo, planificación de proyectos y producción iterativa desde el concepto hasta la entrega.'
        },
        contrib: {
          intro: 'Durante el proyecto, fui responsable de diseñar e implementar la interfaz de usuario móvil del juego mientras desarrollaba sistemas centrales de gameplay. Mis principales responsabilidades incluyeron:',
          i1: 'Diseñé e implementé la UI móvil completa.',
          i2: 'Desarrollé el sistema de movimiento del jugador y los controles táctiles para dispositivos móviles.',
          i3: 'Programé las mecánicas centrales de gameplay usando Unity y C#.',
          i4: 'Colaboré estrechamente con diseñadores y programadores para integrar los sistemas de gameplay con la interfaz de usuario.',
          i5: 'Participé en la planificación del proyecto, discusiones de sprint y reuniones de producción durante todo el desarrollo.'
        },
        prod: {
          title: 'Producción &amp; Colaboración',
          intro: 'Uno de los mayores desafíos fue coordinar a un equipo de ocho desarrolladores con poca experiencia previa trabajando juntos en un proyecto de esta escala. Para abordar esto, adoptamos prácticas Agile durante todo el desarrollo, incluyendo:',
          i1: 'Gestión de tareas con ClickUp.',
          i2: 'Reuniones de sprint frecuentes y revisiones de progreso.',
          i3: 'Minutas de reunión para documentar decisiones y acciones a seguir.',
          i4: 'Control de versiones usando GitHub y Unity Version Control.',
          i5: 'Colaboración continua entre los equipos de programación, diseño y arte.',
          outro: 'Esta experiencia me dio exposición directa a la producción colaborativa de videojuegos y reforzó la importancia de la comunicación, la planificación y los flujos de trabajo organizados.'
        },
        takeaways: {
          p1: 'Este proyecto me enseñó que construir un juego exitoso requiere mucho más que escribir código. La comunicación efectiva, la organización de tareas y el trabajo en equipo fueron esenciales para mantener el proyecto en cronograma y entregar un producto final pulido.',
          p2: 'Trabajar dentro de un entorno Agile también fortaleció mi capacidad para colaborar con equipos multidisciplinarios, adaptarme a requisitos cambiantes y contribuir efectivamente durante todo el proceso de desarrollo.'
        }
      },
      purifyingbubble: {
        tag: 'Puzzle / Basado en Física · Proyecto de Game Jam',
        devTime: '7 Días',
        teamSize: '3 Desarrolladores',
        role: 'Diseñador de Juego, Programador de Gameplay, Diseñador de Niveles',
        overview: {
          p1: 'PurifyingBubble fue desarrollado durante una Game Jam de 7 días, donde el objetivo era diseñar y entregar una experiencia jugable completa dentro de un plazo muy limitado.',
          p2: 'El jugador controla una burbuja que viaja a través de un desierto para purificar un oasis corrompido. El movimiento está basado en física y, en lugar de controlar directamente al personaje, el jugador rota el mundo para cambiar la dirección de la burbuja. A lo largo del laberinto, los jugadores deben evitar espinas mortales mientras usan mecánicas ambientales y habilidades temporales para llegar a la meta con seguridad.'
        },
        contrib: {
          intro: 'Contribuí tanto al diseño como a la programación del juego, implementando varios de sus sistemas centrales de gameplay. Mis responsabilidades incluyeron:',
          i1: 'Diseñé las mecánicas de gameplay y el flujo del nivel.',
          i2: 'Implementé el sistema de movimiento del jugador.',
          i3: 'Desarrollé el movimiento de cámara y los sistemas de transición de cámara.',
          i4: 'Programé interacciones ambientales, incluyendo paredes rebotadoras y teletransportadores.',
          i5: 'Creé habilidades temporales de gameplay, como invulnerabilidad breve para cruzar obstáculos peligrosos con seguridad.',
          i6: 'Implementé las transiciones de pantalla y la interfaz de usuario del juego.',
          i7: 'Diseñé y balanceé el nivel para fomentar la experimentación con las mecánicas del juego.'
        },
        challenges: {
          p1: 'El mayor desafío fue entregar una experiencia pulida y disfrutable en solo siete días. Debido al plazo extremadamente limitado, cada funcionalidad tuvo que ser cuidadosamente priorizada. Esto requirió tomar decisiones de diseño rápidas, enfocarse en el loop central de gameplay y balancear constantemente el alcance contra el tiempo de desarrollo disponible.',
          p2: 'Trabajar bajo estas restricciones fortaleció mi capacidad de prototipar rápidamente mientras mantenía la organización del código y la calidad del gameplay.'
        },
        learned: {
          p1: 'Esta Game Jam reforzó la importancia de una planificación efectiva y la gestión del alcance. En lugar de intentar construir un juego grande, aprendí que un concepto simple bien ejecutado puede resultar en una experiencia de jugador mucho más sólida. La priorización cuidadosa y un plan de desarrollo claro permitieron a nuestro equipo aprovechar al máximo el tiempo limitado disponible.'
        },
        qa: {
          p1: 'Desarrollar varios sistemas de gameplay interconectados en un período tan corto me ayudó a entender mejor cómo los pequeños cambios pueden afectar la experiencia general del jugador. También reforzó la importancia de probar continuamente las nuevas funcionalidades durante el desarrollo, reproducir problemas rápidamente y validar el gameplay después de cada implementación para mantener la estabilidad a pesar de la iteración rápida.'
        }
      },
      gashero: {
        tag: 'Plataformas 2D · Game Jam',
        intro: 'Un plataformas humorístico donde un superhéroe absurdo combate la contaminación usando lo mismo que la genera, convirtiendo una premisa ridícula en una experiencia de gameplay divertida y completa.',
        devTime: '3 Días',
        teamSize: '3 Desarrolladores',
        role: 'Programador de Gameplay, Programador de UI',
        overview: {
          p1: 'GasHero fue desarrollado durante una Game Jam de 3 días, donde el desafío era crear un juego completo en torno a una temática específica dentro de un plazo muy limitado.',
          p2: 'El juego sigue a un superhéroe intencionalmente absurdo cuyo poder es... contaminar el ambiente tirándose pedos. Irónicamente, su misión es proteger la naturaleza y combatir la contaminación. En lugar de evitar el absurdo, el equipo lo abrazó, creando una experiencia liviana centrada en el humor y un gameplay simple pero atractivo.'
        },
        contrib: {
          intro: 'Durante el desarrollo, me enfoqué en implementar las mecánicas centrales del jugador y el comportamiento de la interfaz de usuario. Mis principales contribuciones incluyeron:',
          i1: 'Diseñé e implementé el sistema de movimiento lateral del jugador.',
          i2: 'Desarrollé una mecánica de dash responsiva para mejorar la movilidad y el flujo de gameplay.',
          i3: 'Programé las interacciones de la interfaz de usuario y las respuestas de pantalla.',
          i4: 'Implementé el patrón de diseño Factory para crear objetos de juego sin depender directamente de sus clases concretas, mejorando la organización del código y la escalabilidad.',
          i5: 'Colaboré en la iteración del gameplay para asegurar que las mecánicas respaldaran el concepto humorístico del juego.'
        },
        design: {
          p1: 'En lugar de intentar justificar la premisa absurda del juego, decidimos abrazarla por completo. El contraste entre un superhéroe que contamina mientras intenta salvar el ambiente se convirtió en el rasgo definitorio del juego. Esto nos permitió enfocarnos en crear mecánicas que respaldaran el chiste sin dejar de ofrecer una experiencia de gameplay coherente y disfrutable.',
          p2: 'El sistema de movimiento se mantuvo intencionalmente simple y responsivo para que los jugadores pudieran involucrarse de inmediato con la idea central del juego sin complejidad innecesaria.'
        },
        challenges: {
          p1: 'Uno de los mayores desafíos fue adaptar la temática de la Game Jam a un concepto de gameplay que fuera tanto original como alcanzable en solo tres días. Balancear la creatividad con el tiempo de desarrollo disponible requirió una priorización constante, asegurando que cada funcionalidad implementada contribuyera directamente a la experiencia central.',
          p2: 'Adicionalmente, implementar el patrón de diseño Factory en un ciclo de desarrollo tan corto brindó una experiencia valiosa aplicando principios de ingeniería de software en un proyecto real.'
        },
        qa: {
          p1: 'Desarrollar los sistemas de movimiento del jugador destacó la importancia de probar la capacidad de respuesta del gameplay después de cada iteración. Incluso pequeños ajustes en la velocidad de movimiento o el timing del dash afectaban significativamente la experiencia del jugador, reforzando el valor del playtesting continuo y la validación rápida durante el desarrollo.'
        },
        learned: {
          p1: 'Este proyecto me enseñó que la primera idea no siempre es la equivocada solo porque suena absurda. En lugar de buscar el concepto "perfecto", comprometerse con una idea simple y divertida permitió al equipo dedicar más tiempo a pulir el gameplay y crear una experiencia más disfrutable.',
          p2: 'También adquirí experiencia práctica aplicando principios de diseño orientado a objetos a través de la implementación del patrón Factory en Unity.'
        },
        reflection: {
          title: 'Reflexión del Proyecto',
          quote: 'Una de las lecciones más valiosas de este proyecto fue aprender que la ejecución importa más que la perfección. Una idea simple, desarrollada con foco y confianza, puede convertirse en una experiencia memorable cuando el equipo se compromete a hacerla divertida.'
        }
      },
      coyaslug: {
        tag: 'Shooter de Pistola de Luz · Proyecto Universitario',
        intro: 'Un shooter de pistola de luz de estilo retro donde un Coya combate alienígenas invasores usando espuma de carnaval del Rey Momo como arma poco convencional mientras escapa de una nave espacial alienígena.',
        langValue: 'Programación Visual Basada en Eventos',
        devTime: '2 Meses',
        teamSize: '6 Desarrolladores',
        role: 'Diseñador de Juegos, Programador de Gameplay',
        overview: {
          p1: 'Coya Slug es un proyecto universitario inspirado en los clásicos shooters de pistola de luz arcade y los juegos de acción retro.',
          p2: 'El juego sigue a un Coya que es abducido por alienígenas tras asistir al carnaval local. Mientras busca una forma de escapar de la nave espacial, descubre que la espuma artificial de carnaval del Rey Momo daña a los alienígenas, convirtiendo un objeto cotidiano del carnaval en su arma principal.',
          p3: 'El proyecto combinó referencias culturales locales con humor y mecánicas de gameplay retro para crear una experiencia arcade de ritmo rápido.'
        },
        contrib: {
          intro: 'A lo largo del proyecto colaboré tanto en la programación de gameplay como en el diseño de juegos, ayudando a definir la experiencia del jugador. Mis principales contribuciones incluyeron:',
          i1: 'Desarrollé las mecánicas centrales de gameplay usando Construct 3.',
          i2: 'Diseñé sistemas de gameplay siguiendo principios de Programación Orientada a Objetos (POO).',
          i3: 'Implementé interacciones de gameplay usando comportamientos basados en física.',
          i4: 'Colaboré en el balanceo del gameplay y los encuentros con enemigos para crear una experiencia arcade satisfactoria.'
        },
        design: {
          p1: 'En lugar de crear un shooter de ciencia ficción convencional, el equipo decidió combinar un estilo de gameplay retro reconocible con elementos de la cultura argentina.',
          p2: 'Usar la espuma de carnaval del Rey Momo como arma del jugador creó un contraste inesperado que reforzó la identidad humorística del juego mientras respaldaba el loop central de gameplay.',
          p3: 'El estilo visual de inspiración retro también complementó este enfoque, haciendo que la experiencia se sintiera familiar a la vez que le daba su propia personalidad.'
        },
        challenges: {
          p1: 'Uno de los mayores desafíos fue adaptar conocimientos de programación recientemente adquiridos a un nuevo entorno de desarrollo.',
          p2: 'A diferencia de Unity, donde muchos sistemas están disponibles de forma inmediata, Construct 3 nos exigió construir gran parte del comportamiento del juego nosotros mismos a través de sistemas de eventos y lógica personalizada. Esto me obligó a pensar más cuidadosamente sobre la arquitectura de gameplay y cómo interactuaban los distintos sistemas entre sí.'
        },
        highlights: {
          title: 'Aspectos Técnicos Destacados',
          i1: 'Apliqué principios de Programación Orientada a Objetos para estructurar los sistemas de gameplay.',
          i2: 'Trabajé extensamente con interacciones basadas en física para dar soporte al gameplay arcade.',
          i3: 'Desarrollé lógica de gameplay dentro del sistema de eventos de Construct 3, fortaleciendo mi comprensión del diseño de sistemas más allá de herramientas específicas de motor.'
        },
        qa: {
          p1: 'Crear sistemas de gameplay desde cero me ayudó a entender cómo detalles de implementación aparentemente pequeños pueden producir comportamientos inesperados. Esta experiencia mejoró mi capacidad para analizar la lógica de gameplay, aislar problemas y entender cómo interactúan distintos sistemas — habilidades directamente aplicables al QA técnico y la depuración.'
        },
        learned: {
          p1: 'Este proyecto se convirtió en uno de los cimientos de mi camino como programador. Más allá de implementar mecánicas de gameplay, gané una apreciación mucho más profunda de la importancia de la Programación Orientada a Objetos, las matemáticas y la resolución estructurada de problemas al desarrollar juegos.',
          p2: 'Muchos de los conceptos que conocí por primera vez durante este proyecto siguen influyendo en cómo abordo la programación de gameplay hoy en día.'
        },
        sidebarTitle: 'Tecnologías &amp; Conceptos',
        pillPhysics: 'Física',
        pillRetro: 'Diseño de Juegos Retro',
        pillArcade: 'Mecánicas Arcade'
      },
      pestinvasion: {
        tag: 'Plataformas 2D · Proyecto Universitario',
        intro: 'Un plataformas 2D donde un joven inventor, encogido accidentalmente al tamaño de los insectos, debe combatir una abrumadora invasión de plagas dentro de la fábrica de golosinas de su familia usando su insecticida experimental.',
        devTime: '2 Meses',
        teamSize: '4 Desarrolladores',
        role: 'Diseñador de Juegos, Programador de Gameplay',
        overview: {
          p1: 'Pest Invasion es un plataformas 2D desarrollado como proyecto universitario. Los jugadores controlan a Ricky, el hijo del dueño de una fábrica de golosinas, quien se encoge accidentalmente mientras crea un insecticida experimental capaz de eliminar a cualquier insecto.',
          p2: 'Reducido ahora al tamaño de las plagas invasoras, Ricky debe combatir enjambres de hormigas, cucarachas, abejas y otros insectos mientras busca una forma de recuperar su tamaño original.',
          p3: 'El proyecto combinó mecánicas de plataformas clásicas con comportamientos de enemigos diseñados para crear encuentros de gameplay cada vez más dinámicos.'
        },
        contrib: {
          intro: 'Durante el desarrollo, me enfoqué en implementar los sistemas de comportamiento de enemigos y las interacciones de gameplay. Mis principales responsabilidades incluyeron:',
          i1: 'Diseñé y programé los comportamientos de los enemigos.',
          i2: 'Implementé sistemas de patrullaje de enemigos.',
          i3: 'Desarrollé patrones de movimiento senoidal usando funciones matemáticas para crear un movimiento de enemigos más dinámico.',
          i4: 'Programé objetos ambientales interactivos utilizados a lo largo de los niveles.',
          i5: 'Colaboré en el balanceo del gameplay y la ubicación de enemigos para respaldar el diseño general de niveles.'
        },
        design: {
          p1: 'En lugar de darle a cada enemigo el mismo patrón de movimiento, introdujimos comportamientos diferentes para incentivar a los jugadores a adaptar su estrategia.',
          p2: 'Los patrullajes simples ofrecían obstáculos predecibles, mientras que el movimiento senoidal creaba enemigos menos predecibles que aumentaban el desafío sin requerir sistemas de IA complejos. Este enfoque nos permitió crear variedad de gameplay usando conceptos matemáticos relativamente simples.'
        },
        challenges: {
          p1: 'Uno de los mayores desafíos del proyecto fue minimizar intencionalmente el uso de componentes integrados de Unity. En lugar de depender de soluciones del motor siempre que fuera posible, me desafié a construir sistemas de gameplay mediante scripts personalizados en C#. Este enfoque requirió una comprensión más profunda tanto de Unity como de los principios matemáticos detrás del movimiento de personajes.',
          p2: 'Implementar el movimiento senoidal de los enemigos también fortaleció mi capacidad de traducir fórmulas matemáticas en mecánicas de gameplay.'
        },
        highlights: {
          title: 'Aspectos Técnicos Destacados',
          i1: 'Implementé comportamientos de IA de enemigos personalizados mediante scripting en C#.',
          i2: 'Desarrollé sistemas de patrullaje para el movimiento autónomo de enemigos.',
          i3: 'Apliqué funciones trigonométricas para crear patrones de movimiento senoidal suaves.',
          i4: 'Construí lógica de gameplay personalizada en lugar de depender exclusivamente de componentes integrados de Unity.',
          i5: 'Fortalecí mi comprensión de las matemáticas como base para la programación de gameplay.'
        },
        qa: {
          p1: 'Desarrollar los sistemas de comportamiento de enemigos demostró cómo pequeños cambios de lógica pueden afectar significativamente la dificultad del gameplay y la experiencia del jugador. Reforzó la importancia de probar los patrones de movimiento, el comportamiento de colisiones y la consistencia del gameplay entre distintos tipos de enemigos — una mentalidad analítica que se traduce directamente en QA técnico y validación de gameplay.'
        },
        learned: {
          p1: 'Este proyecto fortaleció significativamente mis fundamentos de programación. Más importante aún, me ayudó a entender que las matemáticas no son solo una materia académica, sino una herramienta esencial para crear sistemas de gameplay atractivos.',
          p2: 'Construir mis propios componentes de gameplay en lugar de depender únicamente de las funcionalidades del motor también me dio mayor confianza al diseñar sistemas reutilizables y mantenibles.'
        },
        reflection: {
          title: 'Reflexión del Proyecto',
          quote: 'Este proyecto cambió la forma en que abordaba la programación de gameplay. En lugar de preguntarme qué podía hacer Unity por mí, empecé a preguntarme cómo podía construir yo mismo el sistema. Ese cambio de mentalidad me ayudó a entender mejor tanto la programación como las mecánicas de juego.'
        },
        pillTrig: 'Trigonometría'
      }
    }
  };

  function resolve(dict, key) {
    var parts = key.split('.');
    var cur = dict;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      cur = cur[parts[i]];
    }
    return typeof cur === 'string' ? cur : null;
  }

  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') return saved;
    } catch (e) {}
    var browserLang = ((navigator.language || navigator.userLanguage || 'es') + '').slice(0, 2).toLowerCase();
    return browserLang === 'en' ? 'en' : 'es';
  }

  function applyLang(lang) {
    var dict = i18n[lang] || i18n.es;

    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-i18n');
      var val = resolve(dict, key);
      if (val != null) el.innerHTML = val;
    }

    var dtElements = document.querySelectorAll('[data-i18n-datatext]');
    for (var j = 0; j < dtElements.length; j++) {
      var dtEl = dtElements[j];
      var dtKey = dtEl.getAttribute('data-i18n-datatext');
      var dtVal = resolve(dict, dtKey);
      if (dtVal != null) {
        dtEl.setAttribute('data-text', dtVal);
        dtEl.textContent = dtVal;
      }
    }

    var titleEl = document.querySelector('title[data-i18n-title]');
    if (titleEl) {
      var titleVal = resolve(dict, titleEl.getAttribute('data-i18n-title'));
      if (titleVal != null) document.title = titleVal.replace(/&amp;/g, '&');
    }

    var metaDesc = document.querySelector('meta[name="description"][data-i18n-content]');
    if (metaDesc) {
      var descVal = resolve(dict, metaDesc.getAttribute('data-i18n-content'));
      if (descVal != null) metaDesc.setAttribute('content', descVal);
    }

    document.documentElement.setAttribute('lang', lang);

    var buttons = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < buttons.length; k++) {
      var btn = buttons[k];
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // Runs synchronously (script is placed at the end of body, before
  // script.js), so the DOM above it is already available and the hero
  // typewriter effect in script.js will read the already-translated
  // data-text values.
  var initialLang = getInitialLang();
  applyLang(initialLang);

  var langButtons = document.querySelectorAll('.lang-btn');
  for (var b = 0; b < langButtons.length; b++) {
    langButtons[b].addEventListener('click', function (e) {
      applyLang(e.currentTarget.getAttribute('data-lang'));
    });
  }
})();
