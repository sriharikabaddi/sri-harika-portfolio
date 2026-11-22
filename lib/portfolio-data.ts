export const profile = {
  name: 'Sri Harika Baddi',
  role: 'Software Engineer',
  focus: 'Backend Development · AI Integration',
  email: 'harikabaddi667@gmail.com',
  github: 'https://github.com/sriharikabaddi',
  linkedin: 'https://www.linkedin.com/in/sri-harika-baddi/',
  leetcode: 'https://leetcode.com/u/harikabaddi_667/',
  availability: 'Open to Software Engineer opportunities',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

export type Project = {
  title: string
  tagline: string
  description: string
  stack: string[]
  metrics: { label: string; value: string }[]
  repo?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'ReachInbox — Email Scheduler',
    tagline: 'A backend-focused email scheduling and delivery application',
    description:
      'Built as a full-stack engineering project focused on scheduling email delivery and managing background jobs. The project explores queue-based processing, persistence, search, and operational visibility. Open the repository and walkthrough to review the implementation.',
    stack: ['TypeScript', 'Node.js', 'Express', 'BullMQ', 'Redis', 'SQL', 'Elasticsearch'],
    metrics: [
      { label: 'Project focus', value: 'Email scheduling' },
      { label: 'Processing', value: 'Background jobs' },
      { label: 'Walkthrough', value: 'Video available' },
    ],
    repo: 'https://github.com/sriharikabaddi/reachinbox',
    live: 'https://www.loom.com/share/95170d34e9c140c4baef9b4b374c19df',
  },
  {
    title: 'Explora — AI Travel Planner',
    tagline: 'Personalized travel itineraries based on trip preferences',
    description:
      'Developed an AI-powered travel planning application that generates personalized itineraries using destination, budget, and trip-duration preferences. Integrated Gemini API for recommendations and Firebase Authentication and Firestore for user and trip data management.',
    stack: ['React', 'JavaScript', 'Gemini API', 'Firebase', 'Firestore'],
    metrics: [
      { label: 'AI capability', value: 'Trip suggestions' },
      { label: 'Personalization', value: 'Budget & duration' },
      { label: 'Data', value: 'Firestore' },
    ],
    repo: 'https://github.com/sriharikabaddi/Explora',
  },
  {
    title: 'AI Resume Builder',
    tagline: 'AI-assisted resume content and cover-letter generation',
    description:
      'Created a web application that uses the Gemini API to analyze job descriptions and generate tailored resume content and personalized cover letters. Includes keyword matching and an estimated ATS score to help users review their resume alignment.',
    stack: ['React', 'JavaScript', 'Gemini API', 'Bootstrap'],
    metrics: [
      { label: 'AI capability', value: 'Content generation' },
      { label: 'Job alignment', value: 'Keyword matching' },
      { label: 'Feedback', value: 'Estimated ATS score' },
    ],
    repo: 'https://github.com/sriharikabaddi/AI-Resume-Builder',
  },
  {
    title: 'TaskFlow — Task Management API',
    tagline: 'A Java Spring Boot application for managing tasks',
    description:
      'Developing a Spring Boot application with backend components for task creation and task listing. Integrated an H2 database for task persistence and used Maven and Java 17 to configure and run the application.',
    stack: ['Java 17', 'Spring Boot', 'Maven', 'H2'],
    metrics: [
      { label: 'Backend', value: 'Spring Boot' },
      { label: 'Persistence', value: 'H2 database' },
      { label: 'Build', value: 'Maven' },
    ],
  },
]

export type SkillLevel = 'Core' | 'Working knowledge' | 'Learning'

export const skillGroups: {
  id: string
  label: string
  summary: string
  skills: { name: string; level: SkillLevel; note: string }[]
}[] = [
  {
    id: 'languages',
    label: 'Languages',
    summary: 'Programming languages used across coursework and application projects.',
    skills: [
      { name: 'Java', level: 'Core', note: 'Object-oriented programming and backend development' },
      { name: 'JavaScript', level: 'Core', note: 'Application logic and React development' },
      { name: 'SQL', level: 'Core', note: 'Relational queries and database fundamentals' },
      { name: 'Python', level: 'Working knowledge', note: 'Programming fundamentals and backend learning' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    summary: 'Backend frameworks and concepts used in projects and practical learning.',
    skills: [
      { name: 'Spring Boot', level: 'Working knowledge', note: 'Building Java backend applications' },
      { name: 'REST APIs', level: 'Working knowledge', note: 'API integration and application communication' },
      { name: 'JDBC', level: 'Working knowledge', note: 'Java database connectivity fundamentals' },
      { name: 'Node.js & Express', level: 'Working knowledge', note: 'Backend development with JavaScript/TypeScript' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    summary: 'Frontend technologies used to build responsive web application interfaces.',
    skills: [
      { name: 'React', level: 'Working knowledge', note: 'Component-based user interfaces' },
      { name: 'HTML & CSS', level: 'Core', note: 'Web page structure and styling' },
      { name: 'Bootstrap', level: 'Working knowledge', note: 'Responsive UI development' },
    ],
  },
  {
    id: 'data-ai',
    label: 'Data & AI',
    summary: 'Database and generative AI tools applied in project work.',
    skills: [
      { name: 'MySQL', level: 'Working knowledge', note: 'Relational database fundamentals' },
      { name: 'H2', level: 'Working knowledge', note: 'Database used in the TaskFlow project' },
      { name: 'Google Gemini API', level: 'Working knowledge', note: 'Generative AI integration in web apps' },
      { name: 'Firebase', level: 'Working knowledge', note: 'Authentication and Firestore in Explora' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    summary: 'Development tools used to build, run, test, and manage projects.',
    skills: [
      { name: 'Git & GitHub', level: 'Working knowledge', note: 'Version control and source repositories' },
      { name: 'Maven', level: 'Working knowledge', note: 'Java project build and dependency management' },
      { name: 'Postman', level: 'Working knowledge', note: 'API testing and exploration' },
      { name: 'VS Code & Eclipse', level: 'Working knowledge', note: 'Development environments' },
    ],
  },
]

export const education = {
  degree: 'Bachelor of Technology in Computer Science',
  school: 'Rajiv Gandhi University of Knowledge Technologies, Ongole',
  period: '2022 — 2026',
  detail: 'CGPA: 8.5 / 10',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
  ],
  certifications: [
    { name: 'Cloud Computing', issuer: 'NPTEL · IIT Kharagpur · 86% · Top 5%', year: '2026' },
    { name: 'Responsible & Safe AI Systems', issuer: 'IIIT Hyderabad · 84%', year: '2025' },
    { name: 'Introduction to Large Language Models', issuer: 'NPTEL · IIT Madras · 84%', year: '2025' },
    { name: 'Object Oriented System Development Using UML, Java and Patterns', issuer: 'NPTEL · IIT Kharagpur', year: '2025' },
    { name: 'Deep Learning', issuer: 'NPTEL · IIT Ropar', year: '2025' },
  ],
}
