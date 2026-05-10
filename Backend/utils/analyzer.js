const skills = require("../data/skills");

const suggestionsMap = {
  HTML: "Build a personal portfolio website using semantic HTML.",
  CSS: "Create a responsive landing page using Flexbox and Grid.",
  JavaScript: "Build a quiz app or expense tracker using JavaScript.",
  TypeScript: "Convert a JavaScript React project into TypeScript.",
  React: "Build a responsive dashboard using React components.",
  "Next.js": "Build a blog or portfolio website using Next.js.",
  Redux: "Add global state management to a shopping cart app.",
  Bootstrap: "Create a responsive website using Bootstrap components.",
  "Tailwind CSS": "Build a modern landing page using Tailwind CSS.",

  "Node.js": "Create a REST API using Node.js.",
  Express: "Build backend routes for a CRUD application using Express.",
  "REST API": "Build a task manager using REST APIs.",
  GraphQL: "Create a simple GraphQL API for a books or movies app.",
  JWT: "Add JWT-based login and protected routes to a web app.",
  Authentication: "Build a login and registration system.",
  Authorization: "Add role-based access control for admin and users.",

  MongoDB: "Create an app that stores user data in MongoDB.",
  Mongoose: "Build MongoDB schemas and models using Mongoose.",
  SQL: "Practice database queries with a student records project.",
  MySQL: "Create a CRUD app connected to a MySQL database.",
  PostgreSQL: "Build a notes app connected to PostgreSQL.",
  Firebase: "Build an authentication system using Firebase.",
  Redis: "Add caching to a Node.js API using Redis.",

  Python: "Create a small automation script or data analysis project.",
  Java: "Build a console-based student management system in Java.",
  "C++": "Practice DSA problems and build a simple management system.",
  C: "Build basic programs to practice pointers, arrays, and file handling.",
  "C#": "Create a basic desktop or web API project using C#.",
  PHP: "Build a simple form-based CRUD app using PHP and MySQL.",
  Go: "Create a simple REST API using Go.",
  Ruby: "Build a small command-line app using Ruby.",

  "Data Structures": "Practice arrays, linked lists, stacks, queues, trees, and graphs.",
  Algorithms: "Solve sorting, searching, recursion, and dynamic programming problems.",
  DSA: "Solve 50 beginner-to-intermediate DSA problems on arrays, strings, and recursion.",
  "Problem Solving": "Practice coding problems and explain your approach clearly.",
  OOP: "Build a library management system using object-oriented programming.",
  "Object Oriented Programming": "Create a project using classes, objects, inheritance, and encapsulation.",

  "Unit Testing": "Write unit tests for utility functions in a JavaScript project.",
  Jest: "Add Jest tests to a React or Node.js project.",
  "React Testing Library": "Test React components and user interactions.",
  Postman: "Test REST APIs using Postman collections.",
  "API Testing": "Create test cases for GET, POST, PUT, and DELETE APIs.",

  Git: "Upload projects to GitHub with proper commit history.",
  GitHub: "Create repositories with clean README files and project screenshots.",
  Docker: "Containerize a simple Node.js application using Docker.",
  Linux: "Practice basic Linux commands for files, folders, and permissions.",
  "CI/CD": "Set up automatic deployment using GitHub Actions.",
  Vercel: "Deploy a React or Next.js project on Vercel.",
  Netlify: "Deploy a frontend project on Netlify.",
  Render: "Deploy a backend API on Render.",

  AWS: "Learn basic cloud hosting concepts and deploy a simple app.",
  Azure: "Deploy a basic web app using Azure App Service.",
  "Google Cloud": "Host a simple backend or database project on Google Cloud.",

  "Machine Learning": "Build a simple prediction model using Python.",
  "Data Analysis": "Analyze a CSV dataset and create insights using Python.",
  Pandas: "Clean and analyze tabular data using Pandas.",
  NumPy: "Practice numerical operations and arrays using NumPy.",
  "Data Visualization": "Create charts from a dataset using Python.",
  "Power BI": "Create an interactive dashboard using sample sales data.",
  Excel: "Create a spreadsheet dashboard using formulas and charts.",

  "React Native": "Build a simple mobile task manager app using React Native.",
  Flutter: "Create a basic mobile UI using Flutter.",
  Android: "Build a simple Android app with form input and list display.",

  Figma: "Design a clean UI mockup for a web or mobile app.",
  "UI Design": "Create a modern landing page design.",
  "UX Design": "Improve an app flow by creating wireframes and user journeys.",
  "Responsive Design": "Make a website work well on mobile, tablet, and desktop.",

  Communication: "Practice explaining your project clearly in 2 minutes.",
  Teamwork: "Contribute to a group project or open-source repository.",
  Leadership: "Lead a small project and document planning, tasks, and outcomes.",
  "Time Management": "Plan and complete a project using weekly milestones.",
  "Critical Thinking": "Compare multiple solutions before choosing the best one.",
};


const findSkills = (text) => {
  const lowerText = text.toLowerCase();

  return skills.filter((skill) => lowerText.includes(skill.toLowerCase()));
};

const analyzeSkills = (resumeText, jobText) => {
  const resumeSkills = findSkills(resumeText);
  const jobSkills = findSkills(jobText);

  const matchedSkills = jobSkills.filter((skill) =>
    resumeSkills.includes(skill)
  );

  const missingSkills = jobSkills.filter(
    (skill) => !resumeSkills.includes(skill)
  );

  const matchScore =
    jobSkills.length === 0
      ? 0
      : Math.round((matchedSkills.length / jobSkills.length) * 100);

  const suggestions = missingSkills.map(
    (skill) =>
      suggestionsMap[skill] ||
      `Learn ${skill} and build a small project using it.`
  );

  return {
    resumeSkills,
    jobSkills,
    matchedSkills,
    missingSkills,
    matchScore,
    suggestions,
  };
};

module.exports = analyzeSkills;
