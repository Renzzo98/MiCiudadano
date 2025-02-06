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
    failedAttempts: 0
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "Sets up the government",
      "Defines the government",
      "Protects basic rights",
      "Establishes federal holidays"
    ],
    correctAnswers: [
      "Sets up the government",
      "Defines the government",
      "Protects basic rights"
    ],
    correctAttempts: 0,
    failedAttempts: 0
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
    failedAttempts: 0
  },
  {
    id: 4,
    question: "What is an amendment?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "A change to the Constitution",
      "An addition to the Constitution",
      "A federal law",
      "A state regulation"
    ],
    correctAnswers: [
      "A change to the Constitution",
      "An addition to the Constitution"
    ],
    correctAttempts: 0,
    failedAttempts: 0
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
    failedAttempts: 0
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    category: "Principles of American Democracy",
    flagged: true,
    possibleAnswers: [
      "Speech",
      "Religion",
      "Assembly",
      "Petition the government",
      "Press"
    ],
    correctAnswers: [
      "Speech",
      "Religion",
      "Assembly",
      "Petition the government",
      "Press"
    ],
    correctAttempts: 0,
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
  },
  {
    id: 9,
    question: "What are two rights in the Declaration of Independence?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "Life",
      "Liberty",
      "Pursuit of Happiness",
      "Bear Arms"
    ],
    correctAnswers: [
      "Life",
      "Liberty",
      "Pursuit of Happiness"
    ],
    correctAttempts: 0,
    failedAttempts: 0
  },
  {
    id: 10,
    question: "What is freedom of religion?",
    category: "Principles of American Democracy",
    flagged: false,
    possibleAnswers: [
      "You can practice any religion",
      "You can practice no religion",
      "You must practice a religion",
      "The government chooses your religion"
    ],
    correctAnswers: [
      "You can practice any religion",
      "You can practice no religion"
    ],
    correctAttempts: 0,
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    correctAnswers: ["Answers will vary by state"],
    correctAttempts: 0,
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    correctAnswers: ["Answers will vary by district"],
    correctAttempts: 0,
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
  },
  {
    id: 43,
    question: "Who is the Governor of your state now?",
    category: "System of Government",
    flagged: false,
    possibleAnswers: [
      "Answers will vary by state",
      "The State Senator",
      "The Lieutenant Governor",
      "The State Representative"
    ],
    correctAnswers: ["Answers will vary by state"],
    correctAttempts: 0,
    failedAttempts: 0
  },
  {
    id: 44,
    question: "What is the capital of your state?",
    category: "System of Government",
    flagged: true,
    possibleAnswers: [
      "Answers will vary by state",
      "Washington D.C.",
      "New York City",
      "Los Angeles"
    ],
    correctAnswers: ["Answers will vary by state"],
    correctAttempts: 0,
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
  },
  {
    id: 50,
    question: "Name one right only for United States citizens?",
    category: "Rights and Responsibilities",
    flagged: false,
    possibleAnswers: [
      "Vote",
      "Join a political party",
      "Help with a campaign",
    ],
    correctAnswers: ["Vote in a Federal Election", "Run for Federal Office"],
    correctAttempts: 0,
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
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
    failedAttempts: 0
  }
]; 