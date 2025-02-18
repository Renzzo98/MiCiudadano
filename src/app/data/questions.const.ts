import { Question } from '../models/question.model';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "The Constitution",
      "The Bill of Rights",
      "The Declaration of Independence",
      "Federal Laws"
    ],
    correctAnswers: ["The Constitution"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 1,
      question: "¿Cuál es la ley suprema de la tierra?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "La Constitución",
        "Los Derechos de la Constitución",
        "La Declaración de Independencia",
        "Leyes Federales"
      ],
      correctAnswers: ["La Constitución"]
    }
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "Sets up the government",
      "Banned the English language",
      "Requires citizens to learn English",
      "Establishes federal holidays"
    ],
    correctAnswers: [
      "Sets up the government",
      "Defines the government",
      "Protects basic rights"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 2,
      question: "¿Qué hace la Constitución?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Establece el gobierno",
        "Banea el idioma inglés",
        "Exige que los ciudadanos aprendan inglés",
        "Establece días festivos federales"
      ],
      correctAnswers: ["Establece el gobierno", "Define el gobierno", "Protege los derechos básicos"]
    }
  },
  {
    id: 3,
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "We the People",
      "Life and Liberty",
      "In God We",
      "United States of"
    ],
    correctAnswers: ["We the People"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 3,
      question: "La idea de gobierno propio está en las primeras tres palabras de la Constitución. ¿Cuáles son estas palabras?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Nosotros el Pueblo",
        "Vida y Libertad",
        "En Dios Nosotros",
        "Estados Unidos de"
      ],
      correctAnswers: ["Nosotros el Pueblo"]
    }
  },
  {
    id: 4,
    question: "What is an amendment?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "A change to the Constitution",
      "A change to the Bill of Rights",
      "A federal law",
      "A state regulation"
    ],
    correctAnswers: [
      "A change to the Constitution",
      "An addition to the Constitution"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 4,
      question: "¿Qué es una enmienda?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Un cambio a la Constitución",
        "Un cambio a Carta de Derechos",
        "Una ley federal",
        "Una regulación estatal"
      ],
      correctAnswers: ["Un cambio a la Constitución", "Una adición a la Constitución"]
    }
  },
  {
    id: 5,
    question: "What do we call the first ten amendments to the Constitution?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "The Bill of Rights",
      "The Declaration of Independence",
      "The Articles of Confederation",
      "The Federalist Papers"
    ],
    correctAnswers: ["The Bill of Rights"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 5,
      question: "¿Cómo llamamos las primeras diez enmiendas a la Constitución?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "La Carta de Derechos",
        "La Declaración de Independencia",
        "Los Artículos de Confederación",
        "Los Papeles Federalistas"
      ],
      correctAnswers: ["La Carta de Derechos"]
    }
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    category: "Principles of American Democracy",
    flagged: true,
    possibleAnswers: [
      "Guns",
      "Speech",
      "Food",
      "Internet"
    ],
    correctAnswers: [
      "Speech",
      "Religion",
      "Assembly",
      "Petition the government",
      "Press"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 6,
      question: "¿Qué es un derecho o libertad de la Primera Enmienda?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Arma",
        "Expresión",
        "Comida",
        "Internet"
      ],
      correctAnswers: ["Expresión", "Religión", "Asamblea", "Petición al gobierno", "Impresión"]
    }
  },
  {
    id: 7,
    question: "How many amendments does the Constitution have?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "Twenty-seven (27)",
      "Twenty-five (25)",
      "Thirty (30)",
      "Twenty-three (23)"
    ],
    correctAnswers: ["Twenty-seven (27)"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 7,
      question: "¿Cuántas enmiendas tiene la Constitución?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Veinte y siete (27)",
        "Veinte y cinco (25)",
        "Treinta (30)",
        "Veinte y tres (23)"
      ],
      correctAnswers: ["Veinte y siete (27)"]
    }
  },
  {
    id: 8,
    question: "What did the Declaration of Independence do?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "Announced independence from Great Britain",
      "Declared war on Great Britain",
      "Created the United States military",
      "Established the first Congress"
    ],
    correctAnswers: ["Announced independence from Great Britain"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 8,
      question: "¿Qué hizo la Declaración de Independencia?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Anunció la independencia de Gran Bretaña",
        "Declaró guerra a Gran Bretaña",
        "Creó el ejército de los Estados Unidos",
        "Estableció el primer Congreso"
      ],
      correctAnswers: ["Anunció la independencia de Gran Bretaña"]
    }
  },
  {
    id: 9,
    question: "What are two rights in the Declaration of Independence?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "Religion",
      "Internet",
      "No Taxes",
      "Liberty"
    ],
    correctAnswers: [
      "Life",
      "Liberty",
      "Pursuit of Happiness"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 9,
      question: "¿Qué son dos derechos en la Declaración de Independencia?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Religión",
        "Internet",
        "No Impuestos",
        "Libertad"
      ],
      correctAnswers: ["Vida", "Libertad", "Búsqueda de la Felicidad"]
    }
  },
  {
    id: 10,
    question: "What is freedom of religion?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "You're free to kill someone for their religion",
      "You can practice any religion",
      "You must practice a religion",
      "The government chooses your religion"
    ],
    correctAnswers: [
      "You can practice any religion",
      "You can practice no religion"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 10,
      question: "¿Qué es la libertad de religión?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Eres libre de matar a alguien por su religión",
        "Puedes practicar cualquier religión",
        "Debes practicar una religión",
        "El gobierno elige tu religión"
      ],
      correctAnswers: ["Puedes practicar cualquier religión", "Puedes practicar ninguna religión"]
    }
  },
  {
    id: 11,
    question: "What is the economic system in the United States?",
    category: "Principles of American Democracy",
    flagged: true,
    possibleAnswers: [
      "Capitalist economy",
      "Socialist economy",
      "Communist economy",
      "Mixed economy"
    ],
    correctAnswers: ["Capitalist economy"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 11,
      question: "¿Cuál es el sistema económico en los Estados Unidos?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Economía Capitalista",
        "Economía Socialista",
        "Economía Comunista",
        "Economía Mixta"
      ],
      correctAnswers: ["Economía Capitalista"]
    }
  },
  {
    id: 12,
    question: "What is the rule of law?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "Everyone must follow the law",
      "Leaders must obey the law",
      "Government must obey the law",
      "No one is above the law"
    ],
    correctAnswers: [
      "Everyone must follow the law",
      "Leaders must obey the law",
      "Government must obey the law",
      "No one is above the law"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 12,
      question: "¿Qué es la orden de la ley?",
      category: "Principios de la Democracia Americana",
      possibleAnswers: [
        "Todos deben seguir la ley",
        "Los líderes deben obedecer la ley",
        "El gobierno debe obedecer la ley",
        "Nadie está por encima de la ley"
      ],
      correctAnswers: ["Todos deben seguir la ley", "Los líderes deben obedecer la ley", "El gobierno debe obedecer la ley", "Nadie está por encima de la ley"]
    }
  },
  {
    id: 13,
    question: "Name one branch or part of the government.",
    category: "System of Government",
    flagged: true,
    possibleAnswers: [
      "Congress",
      "State Department",
      "FBI",
      "United Nations"
    ],
    correctAnswers: ["Congress", "Legislative branch", "Executive branch", "Judicial branch", "President"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 13,
      question: "¿Cuál es una rama o parte del gobierno?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Congreso",
        "Departamento de Estado",
        "FBI",
        "Organización de las Naciones Unidas"
      ],
      correctAnswers: ["Congreso", "Rama Legislativa", "Rama Ejecutiva", "Rama Judicial", "Presidente"]
    }
  },
  {
    id: 14,
    question: "What stops one branch of government from becoming too powerful?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Checks and balances",
      "Separation of powers",
      "The Constitution",
      "The Supreme Court"
    ],
    correctAnswers: [
      "Checks and balances",
      "Separation of powers"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 14,
      question: "¿Qué detiene una rama del gobierno debecoming too powerful?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Equilibrio y balances",
        "Separación de poderes",
        "La Constitución",
        "La Corte Suprema"
      ],
      correctAnswers: ["Equilibrio y balances", "Separación de poderes"]
    }
  },
  {
    id: 15,
    question: "Who is in charge of the executive branch?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "The President",
      "The Chief Justice",
      "The Speaker of the House",
      "The Senate Majority Leader"
    ],
    correctAnswers: ["The President"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 15,
      question: "¿Quién es responsable de la rama ejecutiva?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "El Presidente",
        "La Corte Suprema",
        "El Speaker de la Cámara de Representantes",
        "El Líder Mayoritario del Senado"
      ],
      correctAnswers: ["El Presidente"]
    }
  },
  {
    id: 16,
    question: "Who makes federal laws?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Congress",
      "The President",
      "The Supreme Court",
      "State Governors"
    ],
    correctAnswers: ["Congress"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 16,
      question: "¿Quién hace las leyes federales?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Congreso",
        "El Presidente",
        "La Corte Suprema",
        "Los Gobernadores de Estado"
      ],
      correctAnswers: ["Congreso"]
    }
  },
  {
    id: 17,
    question: "What are the two parts of the U.S. Congress?",
    category: "System of Government",
    flagged: true,
    possibleAnswers: [
      "The Senate and House of Representatives",
      "The House and Senate Judiciary",
      "The Executive and Legislative",
      "The Upper and Lower Houses"
    ],
    correctAnswers: ["The Senate and House of Representatives"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 17,
      question: "¿Qué son las dos partes del Congreso de los Estados Unidos?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "El Senado y la Cámara de Representantes",
        "La Cámara y el Senado de la Corte de Apelación",
        "La Rama Ejecutiva y la Rama Legislativa",
        "La Casa Alta y la Casa Baja"
      ],
      correctAnswers: ["El Senado y la Cámara de Representantes"]
    }
  },
  {
    id: 18,
    question: "How many U.S. Senators are there?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "One hundred (100)",
      "Fifty (50)",
      "Four hundred thirty-five (435)",
      "Two hundred (200)"
    ],
    correctAnswers: ["One hundred (100)"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 18,
      question: "¿Cuántos senadores de los Estados Unidos hay?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Cien (100)",
        "Cincuenta (50)",
        "Cuatrocientos treinta y cinco (435)",
        "Doscientos (200)"
      ],
      correctAnswers: ["Cien (100)"]
    }
  },
  {
    id: 19,
    question: "We elect a U.S. Senator for how many years?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Six (6)",
      "Four (4)",
      "Two (2)",
      "Eight (8)"
    ],
    correctAnswers: ["Six (6)"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 19,
      question: "¿Cuántos años electa un senador de los Estados Unidos?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Seis (6)",
        "Cuatro (4)",
        "Dos (2)",
        "Ocho (8)"
      ],
      correctAnswers: ["Seis (6)"]
    }
  },
  {
    id: 20,
    question: "Who is one of your state's U.S. Senators now?",
    category: "System of Government",
    flagged: true,
    possibleAnswers: [
      "Answers will vary by state",
      "The Governor",
      "The State Representative",
      "The Mayor"
    ],
    correctAnswers: ["Chuck Schumer"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 20,
      question: "¿Quién es uno de los senadores de los Estados Unidos de tu estado ahora?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Las respuestas variarán por estado",
        "El Gobernador",
        "El Representante del Estado",
        "El Alcalde"
      ],
      correctAnswers: ["Chuck Schumer"]  
    }
  },
  {
    id: 21,
    question: "The House of Representatives has how many voting members?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Four hundred thirty-five (435)",
      "One hundred (100)",
      "Two hundred (200)",
      "Fifty (50)"
    ],
    correctAnswers: ["Four hundred thirty-five (435)"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 21,
      question: "¿Cuántos miembros votan en la Cámara de Representantes?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Cuatrocientos treinta y cinco (435)",
        "Cien (100)",
        "Doscientos (200)",
        "Cincuenta (50)"
      ],
      correctAnswers: ["Cuatrocientos treinta y cinco (435)"]
    }
  },
  {
    id: 22,
    question: "We elect a U.S. Representative for how many years?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Two (2)",
      "Four (4)",
      "Six (6)",
      "Eight (8)"
    ],
    correctAnswers: ["Two (2)"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 22,
      question: "¿Cuántos años electa un representante de los Estados Unidos?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Dos (2)",
        "Cuatro (4)",
        "Seis (6)",
        "Ocho (8)"
      ],
      correctAnswers: ["Dos (2)"]
    }
  },
  {
    id: 23,
    question: "Name your U.S. Representative.",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Answers will vary by district",
      "The Governor",
      "The State Senator",
      "The Mayor"
    ],
    correctAnswers: ["Tom Suozzi"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 23,
      question: "¿Cuál es el nombre de tu representante de los Estados Unidos?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Las respuestas variarán por distrito",
        "El Gobernador",
        "El Senador del Estado",
        "El Alcalde"
      ],
      correctAnswers: ["Tom Suozzi"]
    }
  },
  {
    id: 24,
    question: "Who does a U.S. Senator represent?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "All people of the state",
      "Only the state governor",
      "Only their political party",
      "Federal employees"
    ],
    correctAnswers: ["All people of the state"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 24,
      question: "¿Quién representa a un senador de los Estados Unidos?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Todos los habitantes del estado",
        "Solo el gobernador del estado",
        "Solo su partido político",
        "Empleados federales"
      ],
      correctAnswers: ["Todos los habitantes del estado"]
    }
  },
  {
    id: 25,
    question: "Why do some states have more Representatives than other states?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Because of the state's population",
      "Because of the state's size",
      "Because of the state's location",
      "Because of the state's wealth"
    ],
    correctAnswers: ["Because of the state's population"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 25,
      question: "¿Por qué algunos estados tienen más representantes que otros estados?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Por la población del estado",
        "Por el tamaño del estado",
        "Por la ubicación del estado",
        "Por la riqueza del estado"
      ],
      correctAnswers: ["Por la población del estado"]
    }
  },
  {
    id: 26,
    question: "We elect a President for how many years?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Four (4)",
      "Two (2)",
      "Six (6)",
      "Eight (8)"
    ],
    correctAnswers: ["Four (4)"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 26,
      question: "¿Cuántos años electa un presidente de los Estados Unidos?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Cuatro (4)",
        "Dos (2)",
        "Seis (6)",
        "Ocho (8)"
      ],
      correctAnswers: ["Cuatro (4)"]
    }
  },
  {
    id: 27,
    question: "In what month do we vote for President?",
    category: "System of Government",
    flagged: true,
    possibleAnswers: [
      "November",
      "October",
      "December",
      "January"
    ],
    correctAnswers: ["November"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 27,
      question: "¿En qué mes votamos para presidente?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Noviembre",
        "Octubre",
        "Diciembre",
        "Enero"
      ],
      correctAnswers: ["Noviembre"]
    }
  },
  {
    id: 28,
    question: "What is the name of the President of the United States now?",
    category: "System of Government",
    flagged: true,
    possibleAnswers: [
      "Joe Biden",
      "Donald Trump",
      "Barack Obama",
      "George W. Bush"
    ],
    correctAnswers: ["Donald Trump"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 28,
      question: "¿Cuál es el nombre del presidente de los Estados Unidos ahora?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Joe Biden",
        "Donald Trump",
        "Barack Obama",
        "George W. Bush"
      ],
      correctAnswers: ["Donald Trump"]
    }
  },
  {
    id: 29,
    question: "What is the name of the Vice President of the United States now?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "JD Vance",
      "Mike Pence",
      "Joe Biden",
      "Dick Cheney"
    ],
    correctAnswers: ["JD Vance"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 29,
      question: "¿Cuál es el nombre del vicepresidente de los Estados Unidos ahora?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "JD Vance",
        "Mike Pence",
        "Joe Biden",
        "Dick Cheney"
      ],
      correctAnswers: ["JD Vance"]
    }
  },
  {
    id: 30,
    question: "If the President can no longer serve, who becomes President?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "The Vice President",
      "The Speaker of the House",
      "The Secretary of State",
      "The Chief Justice"
    ],
    correctAnswers: ["The Vice President"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 30,
      question: "Si el presidente no puede servir, ¿quién se convierte en presidente?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "El vicepresidente",
        "El Speaker de la Cámara de Representantes",
        "El Secretario de Estado",
        "El Juez Supremo"
      ],
      correctAnswers: ["El vicepresidente"]
    }
  },
  {
    id: 31,
    question: "If both the President and the Vice President can no longer serve, who becomes President?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "The Speaker of the House",
      "The Secretary of State",
      "The Chief Justice",
      "The Senate Majority Leader"
    ],
    correctAnswers: ["The Speaker of the House"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 31,
      question: "Si ambos el presidente y el vicepresidente no pueden servir, ¿quién se convierte en presidente?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "El Presidente de la Cámara de Representantes",
        "El Secretario de Estado",
        "El Juez Supremo",
        "El Líder Mayoritario del Senado"
      ],
      correctAnswers: ["El Presidente de la Cámara de Representantes"]
    }
  },
  {
    id: 32,
    question: "Who is the Commander in Chief of the military?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "The President",
      "The Secretary of Defense",
      "The Joint Chiefs of Staff",
      "The General of the Army"
    ],
    correctAnswers: ["The President"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 32,
      question: "¿Quién es el Comandante en Jefe del ejército?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "El Presidente",
        "El Secretario de Defensa",
        "El Jefe de los Jefes de Personal",
        "El General del Ejército"
      ],
      correctAnswers: ["El Presidente"]
    }
  },
  {
    id: 33,
    question: "Who signs bills to become laws?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "The President",
      "The Vice President",
      "The Speaker of the House",
      "The Chief Justice"
    ],
    correctAnswers: ["The President"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 33,
      question: "¿Quién firma los proyectos de leyes para convertirse en leyes?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "El Presidente",
        "El Vicepresidente",
        "El Speaker de la Cámara de Representantes",
        "El Juez Supremo"
      ],
      correctAnswers: ["El Presidente"]
    }
  },
  {
    id: 34,
    question: "Who vetoes bills?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "The President",
      "Congress",
      "The Supreme Court",
      "The Senate"
    ],
    correctAnswers: ["The President"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 34,
      question: "¿Quién vetaría los proyectos de leyes?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "El Presidente",
        "El Congreso",
        "La Corte Suprema",
        "El Senado"
      ],
      correctAnswers: ["El Presidente"]
    }
  },
  {
    id: 35,
    question: "What does the President's Cabinet do?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Advises the President",
      "Makes laws",
      "Approves Supreme Court Justices",
      "Commands the military"
    ],
    correctAnswers: ["Advises the President"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 35,
      question: "¿Qué hace el gabinete del presidente?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Advise el presidente",
        "Haga leyes",
        "Aprobó los jueces de la Corte Suprema",
        "Comando el ejército"
      ],
      correctAnswers: ["Advise el presidente"]
    }
  },
  {
    id: 36,
    question: "What are two Cabinet-level positions?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Secretary of State and Secretary of Defense",
      "Speaker of the House and Senate Leader",
      "Chief Justice and Attorney General",
      "Governor and Lieutenant Governor"
    ],
    correctAnswers: ["Secretary of State", "Secretary of Defense", "Secretary of Agriculture", "Secretary of Commerce", "Secretary of Labor", "Secretary of Health and Human Services", "Secretary of Housing and Urban Development", "Secretary of Transportation", "Secretary of Energy", "Secretary of Education", "Secretary of Veterans Affairs", "Secretary of Homeland Security", "Secretary of the Treasury", "Secretary of the Interior", "Attorney General"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 36,
      question: "¿Qué son dos posiciones del gabinete?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Secretario de Estado y Secretario de Defensa",
        "Speaker de la Cámara de Representantes y Líder del Senado",
        "Juez Supremo y Abogado General",
        "Gobernador y Vicegobernador"
      ],
      correctAnswers: ["Secretario de Estado", "Secretario de Defensa", "Secretario de Agricultura", "Secretario de Comercio", "Secretario de Trabajo", "Secretario de Servicios Sociales y Desarrollo Comunitario", "Secretario de Vivienda y Desarrollo Urbano", "Secretario de Transporte", "Secretario de Energía", "Secretario de Educación", "Secretario de Veteranos", "Secretario de Seguridad Nacional", "Secretario del Tesoro", "Secretario del Interior", "Abogado General"]
    }
  },
  {
    id: 37,
    question: "What does the judicial branch do?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Reviews and explains laws",
      "Writes laws",
      "Enforces laws",
      "Collects taxes"
    ],
    correctAnswers: ["Reviews and explains laws", "Reviews laws", "Explains laws", "Decides if a law goes against the Constitution"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 37,
      question: "¿Qué hace la rama judicial?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Revisa y explica las leyes",
        "Escribe leyes",
        "Enfoca leyes",
        "Recolecta impuestos"
      ],
      correctAnswers: ["Revisa y explica las leyes", "Revisa leyes", "Explica leyes", "Decide si una ley va en contra de la Constitución"]
    }
  },
  {
    id: 38,
    question: "What is the highest court in the United States?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "The Supreme Court",
      "The Federal Court",
      "The District Court",
      "The Appeals Court"
    ],
    correctAnswers: ["The Supreme Court"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 38,
      question: "¿Cuál es la corte más alta en los Estados Unidos?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "La Corte Suprema",
        "La Corte Federal",
        "La Corte de Distrito",
        "La Corte de Apelaciones"
      ],
      correctAnswers: ["La Corte Suprema"]
    }
  },
  {
    id: 39,
    question: "How many justices are on the Supreme Court?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Nine (9)",
      "Seven (7)",
      "Eleven (11)",
      "Thirteen (13)"
    ],
    correctAnswers: ["Nine (9)"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 39,
      question: "¿Cuántos jueces hay en la Corte Suprema?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Nueve (9)",
        "Siete (7)",
        "Once (11)",
        "Trece (13)"
      ],
      correctAnswers: ["Nueve (9)"]
    }
  },
  {
    id: 40,
    question: "Who is the Chief Justice of the United States now?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "John Roberts",
      "John Marshall",
      "William Rehnquist",
      "Earl Warren"
    ],
    correctAnswers: ["John Roberts"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 40,
      question: "¿Quién es el Presidente de la Corte Suprema ahora?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "John Roberts",
        "John Marshall",
        "William Rehnquist",
        "Earl Warren"
      ],
      correctAnswers: ["John Roberts"]
    }
  },
  {
    id: 41,
    question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "To print money",
      "To declare war",
      "To create an army",
      "To make treaties",
      "To provide schooling",
      "To issue driver's licenses"
    ],
    correctAnswers: [
      "To print money",
      "To declare war",
      "To create an army",
      "To make treaties"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 41,
      question: "Según nuestra Constitución, algunos poderes pertenecen al gobierno federal. ¿Cuál es un poder del gobierno federal?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Imprimir dinero",
        "Declarar guerra",
        "Crear un ejército",
        "Hacer tratados",
        "Proporcionar educación y escuelas",
        "Emitir licencias de conducir"
      ],
      correctAnswers: ["Imprimir dinero", "Declarar guerra", "Crear un ejército", "Hacer tratados"]
    }
  },
  {
    id: 42,
    question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Provide schooling and education",
      "Protect public safety",
      "Issue driver's licenses",
      "Approve zoning and land use",
      "Print money",
      "Make treaties"
    ],
    correctAnswers: [
      "Provide schooling and education",
      "Protect public safety",
      "Issue driver's licenses",
      "Approve zoning and land use"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 42,
      question: "Según nuestra Constitución, algunos poderes pertenecen a los estados. ¿Cuál es un poder de los estados?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Proporcionar educación y escuelas",
        "Proteger la seguridad pública",
        "Emitir licencias de conducir",
        "Aprobar zonificación y uso de tierras",
        "Imprimir dinero",
        "Hacer tratados"
      ],
      correctAnswers: ["Proporcionar educación y escuelas", "Proteger la seguridad pública", "Emitir licencias de conducir", "Aprobar zonificación y uso de tierras"]
    }
  },
  {
    id: 43,
    question: "Who is the Governor of your state now?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Kathy Hochul",
      "The State Senator",
      "The Lieutenant Governor",
      "The State Representative"
    ],
    correctAnswers: ["Kathy Hochul"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 43,
      question: "¿Quién es el Gobernador de tu estado ahora?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Kathy Hochul",
        "El Senador del Estado",
        "El Vicegobernador",
        "El Representante del Estado"
      ],
      correctAnswers: ["Kathy Hochul"]
    }
  },
  {
    id: 44,
    question: "What is the capital of your state?",
    category: "System of Government",
    flagged: true,
    possibleAnswers: [
      "Albany",
      "Washington D.C.",
      "New York City",
      "Los Angeles"
    ],
    correctAnswers: ["Albany"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 44,
      question: "¿Cuál es la capital de tu estado?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Albany",
        "Washington D.C.",
        "Nueva York",
        "Los Ángeles"
      ],
      correctAnswers: ["Albany"]
    }
  },
  {
    id: 45,
    question: "What are the two major political parties in the United States?",
    category: "System of Government",
    flagged: true,
    possibleAnswers: [
      "Democratic and Republican",
      "Liberal and Conservative",
      "Green and Independent",
      "Reform and Libertarian"
    ],
    correctAnswers: ["Democratic and Republican"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 45,
      question: "¿Cuáles son las dos principales partidos políticos en los Estados Unidos?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Demócrata y Republicano",
        "Liberal y Conservador",
        "Verde y Independiente",
        "Reforma y Libertario"
      ],
      correctAnswers: ["Demócrata y Republicano"]
    }
  },
  {
    id: 46,
    question: "What is the political party of the President now?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Democratic Party",
      "Republican Party",
      "Independent",
      "Green Party"
    ],
    correctAnswers: ["Republican Party"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 46,
      question: "¿Cuál es el partido político del Presidente ahora?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Partido Demócrata",
        "Partido Republicano",
        "Independiente",
        "Partido Verde"
      ],
      correctAnswers: ["Partido Republicano"]
    }
  },
  {
    id: 47,
    question: "What is the name of the Speaker of the House of Representatives now?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Nancy Pelosi",
      "Kevin McCarthy",
      "John Boehner",
      "Eric Cantor"
    ],
    correctAnswers: ["Mike Johnson"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 47,
      question: "¿Cuál es el Presidente de la Cámara de Representantes ahora?",
      category: "Sistema de Gobierno",
      possibleAnswers: [
        "Nancy Pelosi",
        "Kevin McCarthy",
        "John Boehner",
        "Eric Cantor"
      ],
      correctAnswers: ["Mike Johnson"]
    }
  },
  {
    id: 48,
    question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    category: "Rights and Responsibilities",
    flagged: false,
    possibleAnswers: [
      "Citizens eighteen (18) and older (can vote)",
      "You don’t have to pay (a poll tax) to vote",
      "Any citizen can vote", 
      "A male citizen of any race (can vote)"
    ],
    correctAnswers: [
      "Citizens eighteen (18) and older (can vote)",
      "You don’t have to pay (a poll tax) to vote",
      "Any citizen can vote", 
      "A male citizen of any race (can vote)"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 48,
      question: "¿Cuáles son los cuatro artículos de la Constitución sobre quién puede votar? Describe uno de ellos.",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "Ciudadanos de al menos 18 años (pueden votar)",
        "No tienes que pagar (un impuesto de registro) para votar",
        "Cualquier ciudadano puede votar",
        "Un ciudadano masculino de cualquier raza (puede votar)"
      ],
      correctAnswers: ["Ciudadanos de al menos 18 años (pueden votar)", "No tienes que pagar (un impuesto de registro) para votar", "Cualquier ciudadano puede votar", "Un ciudadano masculino de cualquier raza (puede votar)"]
    }
  },
  {
    id: 49,
    question: "What is one responsibility that is only for United States citizens?",
    category: "Rights and Responsibilities",
    flagged: true,
    possibleAnswers: [
      "Give up loyalty to other countries",
      "Defend the Constitution",
      "Obey the laws of the United States",
      "Serve in the military if needed",
      "Be loyal to the United States"
    ],
    correctAnswers: ["Serve on a Jury", "Vote in a Federal Election"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 49,
      question: "¿Cuál es una responsabilidad que es solo para ciudadanos de los Estados Unidos?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "Dar up loyalty to otros países",
        "Defender la Constitución",
        "Cumplir con las leyes de los Estados Unidos",
        "Servir en el ejército si es necesario",
        "Ser leal a los Estados Unidos"
      ],
      correctAnswers: ["Servir en un Jurado", "Votar en una Elección Federal"]
    }
  },
  {
    id: 50,
    question: "Name one right only for United States citizens?",
    category: "Rights and Responsibilities",
    flagged: false,
    possibleAnswers: [
      "Vote in a Federal Election",
      "Join a political party",
      "Help with a campaign",
    ],
    correctAnswers: ["Vote in a Federal Election", "Run for Federal Office"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 50,
      question: "¿Cuál es un derecho solo para ciudadanos de los Estados Unidos?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "Votar en una Elección Federal",
        "Unirse a un partido político",
        "Ayudar con una campaña",
      ],
      correctAnswers: ["Votar en una Elección Federal", "Buscar un cargo federal"]
    }
  },
  {
    id: 51,
    question: "What are two rights of everyone living in the United States?",
    category: "Rights and Responsibilities",
    flagged: false,
    possibleAnswers: [
      "Freedom of expression",
    ], 
    correctAnswers: [
      "Freedom of expression",
      "Freedom of speech",
      "Freedom of assembly",
      "Freedom to petition the government",
      "Freedom of religion",
      "The right to bear arms"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 51,
      question: "¿Cuáles son dos derechos de todos los habitantes de los Estados Unidos?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "Libertad de expresión",
        "Libertad de habla",
        "Libertad de reunión",
        "Libertad de petición al gobierno",
        "Libertad de religión",
        "El derecho a portar armas"
      ],
      correctAnswers: ["Libertad de expresión", "Libertad de habla", "Libertad de reunión", "Libertad de petición al gobierno", "Libertad de religión", "El derecho a portar armas"]
    }
  },
  {
    id: 52,
    question: "What do we show loyalty to when we say the Pledge of Allegiance?",
    category: "Rights and Responsibilities",
    flagged: false,
    possibleAnswers: [
      "The flag",
      "The Constitution",
      "The President",
      "The Supreme Court"
    ],
    correctAnswers: ["The Flag", "United States"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 52,
      question: "¿Qué mostramos lealtad cuando decimos el Pledge of Allegiance?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "La bandera",
        "La Constitución",
        "El Presidente",
        "El Tribunal Supremo"
      ],
      correctAnswers: ["La bandera", "Estados Unidos"]
    }
  },
  {
    id: 53,
    question: "What is one promise you make when you become a United States citizen?",
    category: "Rights and Responsibilities",
    flagged: false,
    possibleAnswers: [
      "Franklin Roosevelt",
      "Give up loyalty to other countries",
    ],
    correctAnswers: [
      "Give up loyalty to other countries",
      "Defend the Constitution and laws of the United States",
      "Obey the laws of the United States",
      "Serve in the U.S. military (if needed)",
      "Serve (do important work for) the nation (if needed)",
      "Be loyal to the United States"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 53,
      question: "¿Qué es una promesa que haces cuando te conviertes en ciudadano de los Estados Unidos?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "Dar up loyalty to other countries",
        "Defender la Constitución y las leyes de los Estados Unidos",
        "Cumplir con las leyes de los Estados Unidos",
        "Servir en el ejército de los Estados Unidos (si es necesario)",
        "Servir (hacer trabajo importante para) la nación (si es necesario)",
        "Ser leal a los Estados Unidos"
      ],
      correctAnswers: ["Dar up loyalty to other countries", "Defender la Constitución y las leyes de los Estados Unidos", "Cumplir con las leyes de los Estados Unidos", "Servir en el ejército de los Estados Unidos (si es necesario)", "Servir (hacer trabajo importante para) la nación (si es necesario)", "Ser leal a los Estados Unidos"]
    }
  },
  {
    id: 54,
    question: "How old do citizens have to be to vote for President?",
    category: "Rights and Responsibilities",
    flagged: true,
    possibleAnswers: [
      "18",
      "21",
      "25",
      "30"
    ],
    correctAnswers: ["Eighteen (18) and older"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 54,
      question: "¿Qué edad tienen que tener los ciudadanos para votar por el Presidente?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "18",
        "21",
        "25",
        "30"
      ],
      correctAnswers: ["Dieciocho (18) y más"]
    }
  },
  {
    id: 55,
    question: "What are two ways that Americans can participate in their democracy?",
    category: "Rights and Responsibilities",
    flagged: false,
    possibleAnswers: [
      "Vote",
      "Run for office",
      "Help with a campaign",
      "Join a political party"
    ],
    correctAnswers: ["Vote", "Join a political party", "Help with a campaign", "Join a civic group", "Join a community group", "Give an elected official your opinion on an issue", "Call Senators and Representatives", "Publicly support or oppose an issue or policy", "Run for office", "Write to a newspaper"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 55,
      question: "¿Cuáles son dos formas en las que los estadounidenses pueden participar en su democracia?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "Votar",
        "Unirse a un partido político",
        "Ayudar con una campaña",
        "Unirse a un grupo cívico",
        "Unirse a un grupo comunitario",
        "Dar su opinión a un oficial electo",
        "Llamar a los Senadores y Representantes",
        "Apoyar o oponerse públicamente a un problema o política",
        "Buscar un cargo",
        "Escribir a un periódico"
      ],
      correctAnswers: ["Votar", "Unirse a un partido político", "Ayudar con una campaña", "Unirse a un grupo cívico", "Unirse a un grupo comunitario", "Dar su opinión a un oficial electo", "Llamar a los Senadores y Representantes", "Apoyar o oponerse públicamente a un problema o política", "Buscar un cargo", "Escribir a un periódico"]
    }
  },
  {
    id: 56,
    question: "When is the last day you can send in federal income tax forms?",
    category: "Rights and Responsibilities",
    flagged: true,
    possibleAnswers: [
      "April 15",
      "January 1",
      "July 4",
      "December 31"
    ],
    correctAnswers: ["April 15"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 56,
      question: "¿Cuál es el último día para enviar formularios de impuestos federales de ingresos?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "Abril 15",
        "Enero 1",
        "Julio 4",
        "Diciembre 31"
      ],
      correctAnswers: ["Abril 15"]
    }
  },
  {
    id: 57,
    question: "When must all men register for the Selective Service?",
    category: "Rights and Responsibilities",
    flagged: false,
    possibleAnswers: [
      "At age eighteen (18)",
      "Between eighteen (18) and twenty-six (26)",
      "At age twenty-one (21)",
      "At age sixteen (16)"
    ],
    correctAnswers: [
      "At age eighteen (18)",
      "Between eighteen (18) and twenty-six (26)"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 57,
      question: "¿Cuándo deben todos los hombres registrarse para el Servicio Selectivo?",
      category: "Derechos y Responsabilidades",
      possibleAnswers: [
        "A los 18 años (18)",
        "Entre 18 y 26 años",
        "A los 21 años (21)",
        "A los 16 años (16)"
      ],
      correctAnswers: ["A los 18 años (18)", "Entre 18 y 26 años"]
    }
  },
  {
    id: 58,
    question: "What is one reason colonists came to America?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "To get away from religious persecution",
      "To get away from political persecution",
      "To find gold",
      "To find food",
      "To start a new life",
      "To get away from the British"
    ],
    correctAnswers: [
      "freedom",
      "political liberty",
      "religious freedom",
      "economic opportunity",
      "practice their religion",
      "escape persecution"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 58,
      question: "¿Cuál es una razón por la que los colonos vinieron a América?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "To get away from religious persecution",
        "To get away from political persecution",
        "To find gold",
        "To find food",
        "To start a new life",
        "To get away from the British"
      ],
      correctAnswers: ["Libertad", "Libertad política", "Libertad religiosa", "Oportunidad económica", "Practicar su religión", "Evadir la persecución"]
    }
  },
  {
    id: 59,
    question: "Who Lived in America before the Europeans arrived?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "Indians",
      "Africans",
      "Europeans",
      "Asians"
    ],
    correctAnswers: [
      "American Indians",
      "Native Americans"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 59,
      question: "¿Quiénes vivían en América antes de que llegaran los europeos?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Indios americanos",
        "Africanas",
        "Europeas",
        "Asiáticas"
      ],
      correctAnswers: ["Indios americanos", "Nativos americanos"]
    }
  },
  {
    id: 60,
    question: "What group of people was taken to America and sold as slaves?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "Africans",
      "People from Africa",
      "African Americans",
      "All of the above"
    ],
    correctAnswers: [
      "Africans",
      "People from Africa"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 60,
      question: "¿Qué grupo de personas fue llevado a América y vendido como esclavos?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Africanas",
        "Personas de África",
        "Africanos estadounidenses",
        "Todas las anteriores"
      ],
      correctAnswers: ["Africanas", "Personas de África"]
    }
  },
  {
    id: 61,
    question: "Why did the colonists fight the British?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "Because of high taxes",
      "Because the British army stayed in their houses",
      "Because they didn't have self-government",
      "All of the above"
    ],
    correctAnswers: [
      "Because of high taxes",
      "Because the British army stayed in their houses",
      "Because they didn't have self-government",
      "Because of taxation without representation"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 61,
      question: "¿Por qué los colonos lucharon contra los británicos?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Porque de altas tasas impositivas",
        "Porque el ejército británico se quedó en sus casas",
        "Porque no tenían gobierno propio",
        "Todas las anteriores"
      ],
      correctAnswers: ["Porque de altas tasas impositivas", "Porque el ejército británico se quedó en sus casas", "Porque no tenían gobierno propio", "Porque de impuestos sin representación"]
    }
  },
  {
    id: 62,
    question: "Who wrote the Declaration of Independence?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "Thomas Jefferson",
      "George Washington",
      "Benjamin Franklin",
      "John Adams"
    ],
    correctAnswers: ["Thomas Jefferson"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 62,
      question: "¿Quién escribió la Declaración de Independencia?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Thomas Jefferson",
        "George Washington",
        "Benjamin Franklin",
        "John Adams"
      ],
      correctAnswers: ["Thomas Jefferson"]
    }
  },
  {
    id: 63,
    question: "When was the Declaration of Independence adopted?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "July 4, 1776",
      "July 4, 1789",
      "July 4, 1787",
      "July 4, 1778"
    ],
    correctAnswers: ["July 4, 1776"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 63,
      question: "¿Cuándo fue adoptada la Declaración de Independencia?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "July 4, 1776",
        "July 4, 1789",
        "July 4, 1787",
        "July 4, 1778"
      ],
      correctAnswers: ["July 4, 1776"]
    }
  },
  {
    id: 64,
    question: "There were 13 Original States. Name three.",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "Texas",
      "California",
      "New York",
      "Florida"
    ],
    correctAnswers: [
      "New Hampshire",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
      "Delaware",
      "Maryland",
      "Virginia",
      "North Carolina",
      "South Carolina",
      "Georgia"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 64,
      question: "¿Cuáles eran los 13 Estados Originales? Nombra tres.",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Texas",
        "California",
        "New York",
        "Florida"
      ],
      correctAnswers: ["New Hampshire", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland", "Virginia", "North Carolina", "South Carolina", "Georgia"]
    }
  },
  {
    id: 65,
    question: "What happened at the Constitutional Convention?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "The Constitution was written",
      "The Declaration of Independence was signed",
      "The Revolutionary War ended",
      "The Bill of Rights was ratified"
    ],
    correctAnswers: ["The Constitution was written", "The Founding Fathers wrote the Constitution."],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 65,
      question: "¿Qué pasó en la Convención Constitucional?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "La Constitución fue escrita",
        "Los Padres Fundadores escribieron la Constitución",
        "La Guerra Revolucionaria terminó",
        "El Bill of Rights fue ratificado"
      ],
      correctAnswers: ["La Constitución fue escrita", "Los Padres Fundadores escribieron la Constitución"]
    }
  },
  {
    id: 66,
    question: "When was the Constitution written?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "1787",
      "1776",
      "1492",
      "1812"
    ],
    correctAnswers: ["1787"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 66,
      question: "¿Cuándo fue escrita la Constitución?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "1787",
        "1776",
        "1492",
        "1812"
      ],
      correctAnswers: ["1787"]
    }
  },
  {
    id: 67,
    question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "Alexander Hamilton",
      "James Madison",
      "John Jay",
      "George Washington"
    ],
    correctAnswers: ["James Madison", "Alexander Hamilton", "John Jay", "Publius"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 67,
      question: "Los Documentos Federalistas apoyaron la aprobación de la Constitución de los Estados Unidos. Mencione a uno de sus autores.",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Alexander Hamilton",
        "James Madison",
        "John Jay",
        "George Washington"
      ],
      correctAnswers: ["James Madison", "Alexander Hamilton", "John Jay", "Publius"]
    }
  },
  {
    id: 68,
    question: "What is one thing Benjamin Franklin is famous for?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "U.S. diplomat",
      "Oldest member of the Constitutional Convention",
      "First Postmaster General",
      "Writer of Poor Richard's Almanac"
    ],
    correctAnswers: [
      "U.S. diplomat",
      "Oldest member of the Constitutional Convention",
      "First U.S. Postmaster General",
      "Writer of Poor Richard's Almanac",
      "Started the first free libraries"
    ],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 68,
      question: "¿Qué es una cosa famosa que hizo Benjamin Franklin?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Diplomático de los Estados Unidos",
        "Miembro más antiguo de la Convención Constitucional",
        "Primer Director General de Correos de los Estados Unidos",
        "Escritor del Almanaque de Poor Richard"
      ],
      correctAnswers: ["Diplomático de los Estados Unidos", "Miembro más antiguo de la Convención Constitucional", "Primer Director General de Correos de los Estados Unidos", "Escritor del Almanaque de Poor Richard"]
    }
  },
  {
    id: 69,
    question: "Who is the “Father of Our Country”?",
    category: "Colonial Period and Independence",
    flagged: false,
    possibleAnswers: [
      "Alexander Hamilton",
      "James Madison",
      "John Jay",
      "George Washington"
    ],
    correctAnswers: ["George Washington"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 69,
      question: "¿Quién es el “Padre de Nuestra Nación”?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Alexander Hamilton",
        "James Madison",
        "John Jay",
        "George Washington"
      ],
      correctAnswers: ["George Washington"]
    }
  },
  {
    id: 70,
    question: "Who was the first President?",
    category: "Colonial Period and Independence",
    flagged: true,
    possibleAnswers: [
      "Alexander Hamilton",
      "James Madison",
      "John Jay",
      "George Washington"
    ],
    correctAnswers: ["George Washington"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 70,
      question: "¿Quién fue el primer Presidente?",
      category: "Período Colonial y Independencia",
      possibleAnswers: [
        "Alexander Hamilton",
        "James Madison",
        "John Jay",
        "George Washington"
      ],
      correctAnswers: ["George Washington"]
    }
  },
  {
    id: 71,
    question: "What territory did the United States buy from France in 1803?",
    category: "1800s",
    flagged: false,
    possibleAnswers: [
      "The Louisiana Territory",
      "Alaska",
      "Hawaii",
      "Texas"
    ],
    correctAnswers: ["The Louisiana Territory", "Louisiana"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 71,
      question: "¿Qué territorio compró los Estados Unidos de Francia en 1803?",
      category: "1800s",
      possibleAnswers: [
        "Territorio de Luisiana",
        "Alaska",
        "Hawaii",
        "Texas"
      ],
      correctAnswers: ["Territorio de Luisiana", "Luisiana"]
    }
  },
  {
    id: 72,
    question: "Name One War fought by the United States in the 1800s.",
    category: "1800s",
    flagged: false,
    possibleAnswers: [
      "The Civil War",
      "WWI",
      "Vietnam War",
      "Afghanistan War",
    ],
    correctAnswers: ["The War of 1812", "The Mexican-American War", "The Civil War", "The Spanish-American War"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 72,
      question: "¿Qué guerra luchó los Estados Unidos en 1800?",
      category: "1800s",
      possibleAnswers: [
        "Guerra Civil",
        "Guerra de 1812",
        "Guerra Mexicana-Americana",
        "Guerra Hispano-Americana"
      ],
      correctAnswers: ["Guerra de 1812", "Guerra Mexicana-Americana", "Guerra Civil", "Guerra Hispano-Americana"]
    }
  },
  {
    id: 73,
    question: "Name the U.S. war between the North and the South.",
    category: "1800s",
    flagged: false,
    possibleAnswers: [
      "WWII",
      "Gulf War",
      "The Civil War",
      "War of 1812",
    ],
    correctAnswers: ["The Civil War"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 73,
      question: "¿Qué guerra luchó los Estados Unidos entre el Norte y el Sur?",
      category: "1800s",
      possibleAnswers: [
        "Guerra Mundial II",
        "Guerra del Golfo",
        "Guerra Civil",
        "Guerra de 1812"
      ],
      correctAnswers: ["Guerra Civil"]
    }
  },
  {
    id: 74,
    question: "Name One Problem that led to the Civil War.",
    category: "1800s",
    flagged: false,
    possibleAnswers: [
      "Slavery",
      "Telegraph",
      "Railroads",
      "The Constitution",
    ],
    correctAnswers: ["Slavery", "Economic Reasons", "States’ Rights"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 74,
      question: "¿Qué problema llevó a la Guerra Civil?",
      category: "1800s",
      possibleAnswers: [
        "Esclavitud",
        "Telegrafía",
        "Ferrocarriles",
        "La Constitución"
      ],
      correctAnswers: ["Esclavitud", "Razones Económicas", "Derechos de los Estados"]
    }
  },
  {
    id: 75,
    question: "What was One Important Thing that Abraham Lincoln did?",
    category: "1800s",
    flagged: true,
    possibleAnswers: [
      "He freed the slaves",
      "He was the first President",
      "He was the Vice President",
      "He invented the telephone",
    ],
    correctAnswers: ["Freed the Slaves (Emancipation Proclamation)", "Saved (or preserved) the Union", "led the United States during the Civil War"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 75,
      question: "¿Qué fue una cosa importante que Abraham Lincoln hizo?",
      category: "1800s",
      possibleAnswers: [
        "Liberó a los esclavos",
        "Preservó (o preservó) la Unión",
        "Lideró los Estados Unidos durante la Guerra Civil"
      ],
      correctAnswers: ["Liberó a los esclavos (Proclamación de Emancipación)", "Preservó (o preservó) la Unión", "Lideró los Estados Unidos durante la Guerra Civil"]
    }
  },
  {
    id: 76,
    question: "What did the Emancipation Proclamation do?",
    category: "1800s",
    flagged: false,
    possibleAnswers: [
      "It freed the slaves",
      "It ended the Civil War",
      "It violated the Constitution",
      "It started the War of 1812",
    ],
    correctAnswers: ["Freed the Slaves", "Freed Slaves in the Confederacy", "Freed Slaves in the Confederate States", "Freed Slaves in most Southern States"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 76,
      question: "¿Qué hizo la Proclamación de Emancipación?",
      category: "1800s",
      possibleAnswers: [
        "Liberó a los esclavos",
        "Terminó la Guerra Civil",
        "Violó la Constitución",
        "Empezó la Guerra de 1812"
      ],
      correctAnswers: ["Liberó a los esclavos", "Liberó a los esclavos en la Confederación", "Liberó a los esclavos en las Estados Confederados", "Liberó a los esclavos en la mayoría de los estados sur"]
    }
  },
  {
    id: 77,
    question: "What did Susan B. Anthony do?",
    category: "1800s",
    flagged: false,
    possibleAnswers: [
      "Fought for women's rights",
      "Led the Civil War",
      "Wrote the Constitution",
      "Discovered electricity"
    ],
    correctAnswers: ["Fought for women's rights", "Fought for civil rights"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 77,
      question: "¿Qué hizo Susan B. Anthony?",
      category: "1800s",
      possibleAnswers: [
        "Luchó por los derechos de las mujeres",
        "Lideró la Guerra Civil",
        "Escribió la Constitución",
        "Descubrió la electricidad"
      ],
      correctAnswers: ["Luchó por los derechos de las mujeres", "Luchó por los derechos civiles"]
    }
  },
  {
    id: 78,
    question: "Name one war fought by the United States in the 1900s.",
    category: "Recent American History and Other Important Historical Information",
    flagged: true,
    possibleAnswers: [
      "Civil War",
      "American Revolution",
      "World War II",
      "Afghanistan War",
    ],
    correctAnswers: ["World War I", "World War II", "Korean War", "Vietnam War", "Persian Gulf War"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 78,
      question: "¿Qué guerra luchó los Estados Unidos en el 1900?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Guerra Civil",
        "Revolución Americana",
        "Segunda Guerra Mundial",
        "Guerra de Afganistán"
      ],
      correctAnswers: ["Primera Guerra Mundial", "Segunda Guerra Mundial", "Guerra de Corea", "Guerra de Vietnam", "Guerra del Golfo"]
    }
  },
  {
    id: 79,
    question: "Who was President during World War I?",
    category: "Recent American History and Other Important Historical Information",
    flagged: false,
    possibleAnswers: [
      "Woodrow Wilson",
      "Herbert Hoover",
      "Franklin Roosevelt",
      "Dwight Eisenhower"
    ],
    correctAnswers: ["Woodrow Wilson"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 79,
      question: "¿Quién fue Presidente durante la Primera Guerra Mundial?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Woodrow Wilson",
        "Herbert Hoover",
        "Franklin Roosevelt",
        "Dwight Eisenhower"
      ],
      correctAnswers: ["Woodrow Wilson"]
    }
  },
  {
    id: 80,
    question: "Who was President during the Great Depression and World War II?",
    category: "Recent American History and Other Important Historical Information",
    flagged: false,
    possibleAnswers: [
      "Franklin Roosevelt",
      "Harry Truman",
      "Dwight Eisenhower",
      "Herbert Hoover"
    ],
    correctAnswers: ["Franklin Roosevelt"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 80,
      question: "¿Quién fue Presidente durante la Gran Depresión y la Segunda Guerra Mundial?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Franklin Roosevelt",
        "Harry Truman",
        "Dwight Eisenhower",
        "Herbert Hoover"
      ],
      correctAnswers: ["Franklin Roosevelt"]
    }
  },
  {
    id: 81,
    question: "Who did the United States fight in World War II?",
    category: "Recent American History and Other Important Historical Information",
    flagged: false,
    possibleAnswers: [
      "England",
      "Spain",
      "Germany",
      "France"
    ],
    correctAnswers: ["Japan", "Germany", "Italy"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 81,
      question: "¿Quién luchó los Estados Unidos en la Segunda Guerra Mundial?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Japón",
        "Alemania",
        "Italia"
      ],
      correctAnswers: ["Japón", "Alemania", "Italia"]
    }
  },
  {
    id: 82,
    question: "Before he was President, Eisenhower was a general. What war was he in?",
    category: "Recent American History and Other Important Historical Information",
    flagged: false,
    possibleAnswers: [
      "World War I",
      "World War II",
      "Korean War",
      "Vietnam War",
    ],
    correctAnswers: ["World War II"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 82,
      question: "¿Qué guerra luchó Eisenhower antes de ser Presidente?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Primera Guerra Mundial",
        "Segunda Guerra Mundial",
        "Guerra de Corea",
        "Guerra de Vietnam"
      ],
      correctAnswers: ["Segunda Guerra Mundial"]
    }
  },
  {
    id: 83,
    question: "During the Cold War, what was the main concern of the United States?",
    category: "Recent American History and Other Important Historical Information",
    flagged: false,
    possibleAnswers: [
      "Capitalism",
      "Democracy",
      "Communism",
      "Dictatorship",
    ],
    correctAnswers: ["Communism"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 83,
      question: "¿Cuál fue el principal problema de los Estados Unidos durante la Guerra Fría?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Capitalismo",
        "Democracia",
        "Comunismo",
        "Dictadura"
      ],
      correctAnswers: ["Comunismo"]
    }
  },
  {
    id: 84,
    question: "What movement tried to end racial discrimination?",
    category: "Recent American History and Other Important Historical Information",
    flagged: false,
    possibleAnswers: [
      "Civil Rights movement",
      "Women's Suffrage movement",
      "Labor movement",
      "Progressive movement"
    ],
    correctAnswers: ["Civil Rights movement"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 84,
      question: "¿Qué movimiento intentó acabar con la discriminación racial?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Movimiento por los Derechos Civiles",
        "Movimiento por el Sufragio Femenino",
        "Movimiento Laboral",
        "Movimiento Progresista"
      ],
      correctAnswers: ["Movimiento por los Derechos Civiles"]
    }
  },
  {
    id: 85,
    question: "What did Martin Luther King, Jr. do?",
    category: "Recent American History and Other Important Historical Information",
    flagged: true,
    possibleAnswers: [
      "Fought for civil rights",
      "Became the first Black president",
      "Discovered America",
      "Led the Revolutionary War"
    ],
    correctAnswers: ["Fought for civil rights"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 85,
      question: "¿Qué hizo Martin Luther King, Jr.?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Movimiento por los Derechos Civiles",
        "Se convirtió en el primer presidente negro",
        "Descubrió América",
        "Lideró la Revolución Americana"
      ],
      correctAnswers: ["Movimiento por los Derechos Civiles"]
    }
  },
  {
    id: 86,
    question: "What major event happened on September 11, 2001, in the United States?",
    category: "Recent American History and Other Important Historical Information",
    flagged: false,
    possibleAnswers: [
      "The Civil War ended",
      "Terrorists attacked the United States",
      "The Declaration of Independence was signed",
      "The Constitution was written"
    ],
    correctAnswers: ["Terrorists attacked the United States"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 86,
      question: "¿Qué evento importante sucedió el 11 de septiembre de 2001 en los Estados Unidos?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Guerra Civil terminó",
        "Terroristas atacaron los Estados Unidos",
        "La Declaración de Independencia fue firmada",
        "La Constitución fue escrita"
      ],
      correctAnswers: ["Terroristas atacaron los Estados Unidos"]
    }
  },
  {
    id: 87,
    question: "Name one American Indian tribe in the United States.",
    category: "Recent American History and Other Important Historical Information",
    flagged: false,
    possibleAnswers: [
      "Incas",
      "Vikings",
      "Cherokee",
      "Mayans"
    ],
    correctAnswers: ["Cherokee", "Navajo", "Sioux", "Chippewa", "Choctaw", "Pueblo", "Apache", "Iroquois", "Creek", "Blackfeet", "Seminole", "Cheyenne", "Arawak", "Shawnee", "Mohegan", "Huron", "Oneida", "Lakota", "Crow", "Teton", "Hopi", "Inuit"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 87,
      question: "¿Qué tribu indígena estadounidense es?",
      category: "Historia Americana Reciente y Otra Información Histórica Importante",
      possibleAnswers: [
        "Incas",
        "Vikingos",
        "Cherokee",
        "Mayas"
      ],
      correctAnswers: ["Cherokee", "Navajo", "Sioux", "Chippewa", "Choctaw", "Pueblo", "Apache", "Iroquois", "Creek", "Blackfeet", "Seminole", "Cheyenne", "Arawak", "Shawnee", "Mohegan", "Huron", "Oneida", "Lakota", "Crow", "Teton", "Hopi", "Inuit"]
    }
  },
  {
    id: 88,
    question: "What is one of the two Longest Rivers in the United States?",
    category: "Geography",
    flagged: false,
    possibleAnswers: [
      "Mississippi River",
      "Colorado River",
      "Ohio River",
      "Rio Grande"
    ],
    correctAnswers: ["Mississippi River", "Missouri River"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 88,
      question: "¿Qué río estadounidense es uno de los dos más largos?",
      category: "Geografía",
      possibleAnswers: [
        "Río Mississippi",
        "Río Colorado",
        "Río Ohio",
        "Río Grande"
      ],
      correctAnswers: ["Río Mississippi", "Río Missouri"]
    }
  },
  {
    id: 89,
    question: "What Ocean is on the West Coast of the United States?",
    category: "Geography",
    flagged: false,
    possibleAnswers: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ],
    correctAnswers: ["Pacific Ocean"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 89,
      question: "¿Qué océano está en la costa occidental de los Estados Unidos?",
      category: "Geografía",
      possibleAnswers: [
        "Océano Pacífico",
        "Océano Atlántico",
        "Océano Índico",
        "Océano Ártico"
      ],
      correctAnswers: ["Océano Pacífico"]
    }
  },
  {
    id: 90,
    question: "What Ocean is on the East Coast of the United States?",
    category: "Geography",
    flagged: false,
    possibleAnswers: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ],
    correctAnswers: ["Atlantic Ocean"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 90,
      question: "¿Qué océano está en la costa oriental de los Estados Unidos?",
      category: "Geografía",
      possibleAnswers: [
        "Océano Atlántico",
        "Océano Pacífico",
        "Océano Índico",
        "Océano Ártico"
      ],
      correctAnswers: ["Océano Atlántico"]
    }
  },
  {
    id: 91,
    question: "Name one U.S. territory.",
    category: "Geography",
    flagged: false,
    possibleAnswers: [
      "Hawaii",
      "Puerto Rico",
      "Alaska",
      "Florida"
    ],
    correctAnswers: ["Puerto Rico", "U.S. Virgin Islands", "Northern Mariana Islands", "American Samoa", "Guam"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 91,
      question: "¿Qué territorio estadounidense es?",
      category: "Geografía",
      possibleAnswers: [
        "Hawaii",
        "Puerto Rico",
        "Alaska",
        "Florida"
      ],
      correctAnswers: ["Puerto Rico", "Islas Vírgenes de los Estados Unidos", "Islas Marianas del Norte", "Samoa Americana", "Guam"]
    }
  },
  {
    id: 92,
    question: "Name one state that borders Canada.",
    category: "Geography",
    flagged: false,
    possibleAnswers: [
      "Maine",
      "Texas",
      "California",
      "Florida"
    ],
    correctAnswers: ["Maine", "Alaska", "Idaho", "Michigan", "Minnesota", "Montana", "New Hampshire", "New York", "North Dakota", "Vermont", "Washington"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 92,
      question: "¿Qué estado estadounidense tiene frontera con Canadá?",
      category: "Geografía",
      possibleAnswers: [
        "Maine",
        "Texas",
        "California",
        "Florida"
      ],
      correctAnswers: ["Maine", "Alaska", "Idaho", "Michigan", "Minnesota", "Montana", "New Hampshire", "New York", "North Dakota", "Vermont", "Washington"]
    }
  },
  {
    id: 93,
    question: "Name one state that borders Mexico.",
    category: "Geography",
    flagged: false,
    possibleAnswers: [
      "California",
      "Florida",
      "Alabama",
      "Louisiana"
    ],
    correctAnswers: ["California", "Arizona", "New Mexico", "Texas"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 93,
      question: "¿Qué estado estadounidense tiene frontera con México?",
      category: "Geografía",
      possibleAnswers: [
        "California",
        "Florida",
        "Alabama",
        "Louisiana"
      ],
      correctAnswers: ["California", "Arizona", "Nuevo México", "Texas"]
    }
  },
  {
    id: 94,
    question: "What is the capital of the United States?",
    category: "Geography",
    flagged: true,
    possibleAnswers: [
      "New York City",
      "Boston",
      "Washington, D.C.",
      "Philadelphia"
    ],
    correctAnswers: ["Washington, D.C."],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 94,
      question: "¿Cuál es la capital de los Estados Unidos?",
      category: "Geografía",
      possibleAnswers: [
        "Nueva York",
        "Boston",
        "Washington, D.C.",
        "Filadelfia"
      ],
      correctAnswers: ["Washington, D.C."]
    }
  },
  {
    id: 95,
    question: "Where is the Statue of Liberty?",
    category: "Geography",
    flagged: false,
    possibleAnswers: [
      "Washington, D.C.",
      "New York (Harbor)",
      "Boston",
      "Philadelphia"
    ],
    correctAnswers: ["New York (Harbor)", "Liberty Island", "New Jersey", "near New York City", "on the Hudson (River)"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 95,
      question: "¿Dónde está la Estatua de la Libertad?",
      category: "Geografía",
      possibleAnswers: [
        "Washington, D.C.",
        "Nueva York (Puerto)",
        "Boston",
        "Filadelfia"
      ],
      correctAnswers: ["Nueva York (Puerto)", "Isla Libertad", "Nueva Jersey", "cerca de la ciudad de Nueva York", "en el Hudson (Río)"]
    }
  },
  {
    id: 96,
    question: "Why does the flag have 13 stripes?",
    category: "Symbols and Holidays",
    flagged: false,
    possibleAnswers: [
      "Because there were 13 Original Colonies",
      "Because there were 13 British Colonies",
      "Because it represents 13 Presidents",
      "Because it was designed by 13 people"
    ],
    correctAnswers: ["Because there were 13 Original Colonies", "because the Stripes represent the Original Colonies"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 96,
      question: "¿Por qué la bandera tiene 13 rayas?",
      category: "Símbolos y Fiestas",
      possibleAnswers: [
        "Porque había 13 Colonias Originales",
        "Porque había 13 Colonias Británicas",
        "Porque representa a 13 Presidentes",
        "Porque fue diseñada por 13 personas"
      ],
      correctAnswers: ["Porque había 13 Colonias Originales", "Porque las rayas representan las Colonias Originales"]
    }
  },
  {
    id: 97,
    question: "Why does the flag have 50 stars?",
    category: "Symbols and Holidays",
    flagged: true,
    possibleAnswers: [
      "Because there are 50 states",
      "Because there are 50 senators",
      "Because of the 50 years of independence",
      "Because of the 50 original territories"
    ],
    correctAnswers: ["Because there are 50 states", "Because there is one star for each state", "Because each star represents a state"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 97,
      question: "¿Por qué la bandera tiene 50 estrellas?",
      category: "Símbolos y Fiestas",
      possibleAnswers: [
        "Porque hay 50 estados",
        "Porque hay 50 senadores",
        "Porque hay 50 años de independencia",
        "Porque hay 50 territorios originales"
      ],
      correctAnswers: ["Porque hay 50 estados", "Porque hay una estrella para cada estado", "Porque cada estrella representa un estado"]
    }
  },
  {
    id: 98,
    question: "What is the name of the national anthem?",
    category: "Symbols and Holidays",
    flagged: false,
    possibleAnswers: [
      "The Star-Spangled Banner",
      "God Bless America",
      "America the Beautiful",
      "My Country 'Tis of Thee"
    ],
    correctAnswers: ["The Star-Spangled Banner"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 98,
      question: "¿Cuál es el nombre del himno nacional?",
      category: "Símbolos y Fiestas",
      possibleAnswers: [
        "The Star-Spangled Banner",
        "God Bless America",
        "America the Beautiful",
        "My Country 'Tis of Thee"
      ],
      correctAnswers: ["The Star-Spangled Banner"]
    }
  },
  {
    id: 99,
    question: "When do we celebrate Independence Day?",
    category: "Symbols and Holidays",
    flagged: true,
    possibleAnswers: [
      "July 4",
      "July 1",
      "June 14",
      "May 30"
    ],
    correctAnswers: ["July 4"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 99,
      question: "¿Cuándo celebramos el Día de la Independencia?",
      category: "Símbolos y Fiestas",
      possibleAnswers: [
        "July 4",
        "July 1",
        "June 14",
        "May 30"
      ],
      correctAnswers: ["July 4"]
    }
  },
  {
    id: 100,
    question: "Name two national U.S. holidays.",
    category: "Symbols and Holidays",
    flagged: false,
    possibleAnswers: [
      "Independence Day and Thanksgiving",
      "Flag Day and Labor Day",
      "Arbor Day and Easter",
      "Valentine's Day and Halloween"
    ],
    correctAnswers: ["New Year's Day", "Martin Luther King Jr. Day", "Presidents Day", "Memorial Day", "Independence Day", "Labor Day", "Columbus Day", "Veterans Day", "Thanksgiving", "Christmas"],
    correctAttempts: 0,
    failedAttempts: 0,
    spanishVer: {
      id: 100,
      question: "¿Cuáles son dos días nacionales de los Estados Unidos?",
      category: "Símbolos y Fiestas",
      possibleAnswers: [
        "Independence Day and Thanksgiving",
        "Flag Day and Labor Day",
        "Arbor Day and Easter",
        "Valentine's Day and Halloween"
      ],
      correctAnswers: ["Independence Day and Thanksgiving"]
    }
  }
]; 