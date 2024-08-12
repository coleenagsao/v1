import { Github, Linkedin } from 'lucide-react';

module.exports = {
    email: 'coleentherese.agsao@gmail.com',
  
    socialMedia: [
      {
        name: 'GitHub',
        url: 'https://github.com/coleenagsao',
        icon: <Github size={20}/>
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/coleenagsao',
        icon: <Linkedin size={20} />
      },
    ],
  
    navLinks: [
      {
        name: 'About',
        url: '/#about',
      },
      {
        name: 'Skills',
        url: '/#skills',
      },
      {
        name: 'Experience',
        url: '/#jobs',
      },
      {
        name: 'Projects',
        url: '/#projects',
      },
      {
        name: 'Contact',
        url: '/#contact',
      },
    ],

    skills: {
      Languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'C', 'Java', 'R', 'SQL'],
      Frameworks: ['React', 'Vue', 'Tailwind', 'Bootstrap', 'Bulma'],
      Tools: ['MongoDB', 'Firebase', 'Git', 'GitHub', 'Postman', 'Insomnia'],
      Design: ['Figma', 'Prototyping', 'Wireframing', 'User Testing']
    },

    work: [
      {
        title: 'Software Programming Instructor',
        company: 'MyCode',
        range: 'JUL 2022 - PRESENT',
        description: [
          'Instructed 50+ one-hour coding sessions for children in Python game development with the Turtle Module, and web development using HTML and CSS, helping students to develop essential programming skills and create engaging games and web pages.',
          'Conducted detailed code reviews of student submissions, identifying areas for improvement and providing constructive feedback on coding style and algorithms to support student growth and development.'
        ], 
        skills: ['HTML', 'CSS', 'Python'],
        url: 'https://www.mycode.ph/'
      },
      {
        title: 'AI and Machine Learning Apprentice',
        company: 'Dashlabs.ai through KadaKareer',
        range: 'SEPT - NOV 2023',
        description: [
          "Independently spearheaded the development of a case-study specific project aimed at processing health forms through text extraction using Amazon Textract.",
          "Executed text segmentation, organized data utilizing PyPandas, and produced visualizations derived from the extracted data."
        ], 
        skills: ['Python', 'AWS Textract'],
        url: 'https://dashlabs.ai/'
      },
      {
        title: 'Software Engineering Intern',
        company: 'White Widget',
        range: 'JUL - AUG 2023',
        description: [
          "Engaged in a live project, executing feasibility evaluations of prospective technologies. These assessments made a definitive 100% impact on the project's trajectory, endorsing the implementation of OSM and Pelias.",
          'Developed a data ingestion Proof of Concept UI for Pelias, focused on backend utilization of ElasticSearch API and comprehension of the Pelias/csv-importer.'
        ], 
        skills: ['Vue', 'Typescript', 'Bulma', 'OSM', 'Pelias', 'Docker'],
        url: 'https://whitewidget.com/'
      },
      {
        title: 'Python Tutor',
        company: 'Freelance',
        range: 'AUG - OCT 2021',
        description: [
          "Led a successful private tutoring program for 5 non-computer science juniors, delivering 36 hours of foundational programming instruction and practical support over three months.",
        ], 
        skills: ['Python'],
        url: ''
      }
    ],

    featured: [
      {
        title: 'Code Blue API',
        type: 'API',
        image: '/projects/api_cb.png',
        description: 'An API that facilitates the storage, retrieval, and management of a trauma registry database for both mobile and web-based client.',
        tech: ['Firebase', 'Node', 'Express'],
        github: '',
        external: '',
        featured: true,
        
      },
      {
        title: 'Code Blue',
        type: 'Web Application',
        image: '/projects/web_cb.png',
        description: 'A web application for administrators that streamlines the management and analysis of trauma patient data for the Philippine healthcare system.',
        tech: ['Code Blue API', 'React', 'Tailwind'],
        github: '',
        external: 'https://youtu.be/w37PM-vviyM',
        featured: true,
      },
      {
        title: 'Bridge',
        type: 'Mobile Application',
        image: '/projects/mobile_bridge.png',
        description: 'A social to-do mobile app where users can collaborate on tasks, share progress, and manage their productivity with their social circle.',
        tech: ['Dart', 'Flutter', 'Firebase'],
        github: 'https://github.com/coleenagsao/flutter-shared-todo',
        external: '',
        featured: true,
      },
      {
        title: 'Bedev',
        type: 'Web Application',
        image: '/projects/web_bedev.png',
        description: 'A full-stack social networking app  that provides a platform for users to connect, share posts, and interact with friends.',
        tech: ['MongoDB', 'Express', 'React', 'Node'],
        github: 'https://github.com/coleenagsao/mern-social-site',
        external: '',
        featured: true,
      },
    ],

    projects: [
      {
        title: 'AutoExtractMD: A Medical Form Extractor',
        type: 'Desktop App',
        image: '',
        description: "A program that automatically scans and extract information, specifically, key-value pairs, from forms and records in jpg/png. Upon extraction, visualization in the form of a pie chart can be generated based on the user's chosen variable.",
        tech: ['Python', 'AWS Textract', 'Pypands'],
        github: 'https://github.com/coleenagsao/py-autoextractMD',
        external: '',
        featured: false,
      }, 
      {
        title: 'Eight-Puzzle Game with AI Solver',
        type: 'Desktop App',
        image: '',
        description: 'An interactive Python application using PyGame that allows users to solve the 8-puzzle game with three AI agents: BFS, DFS, and A-Star Search, providing various solution methods.',
        tech: ['Python'],
        github: 'https://github.com/coleenagsao/mern-social-site',
        external: '',
        featured: false,
      }, 
      {
        title: 'LOL Code Interpreter',
        type: 'Desktop App',
        image: '',
        description: "An interpreter of LOLCODE that implements lexical, syntax, and semantic analysis.",
        tech: ['Python', 'LOLCODE'],
        github: 'https://github.com/coleenagsao/python-lolcode-interpreter',
        external: '',
        featured: false,
      },
      {
        title: 'Portfolio v1',
        type: 'Web Application',
        image: '',
        description: "The first iteration of my personal portfolio website, specifically, this website.",
        tech: ['Next.js', 'Tailwind'],
        github: 'https://github.com/coleenagsao/v1',
        external: '',
        featured: false,
      },
      {
        title: 'Multiplayer Typeracer Game',
        type: 'Desktop App',
        image: '',
        description: "A multiplayer typeracer game using UDP socket programming.",
        tech: ['Java'],
        github: 'https://github.com/coleenagsao/java-space-shooter-game',
        external: '',
        featured: false,
      },
      {
        title: 'Single-Player Space Shooter Game',
        type: 'Desktop App',
        image: '',
        description: "A pixel space shooter game utilizing the JavaFX framework, featuring a boss encounter and a variety of power-ups to aid the player, with a focus on the application of object-oriented programming principles.",
        tech: ['Java'],
        github: 'https://github.com/coleenagsao/javafxml-typeracer-multiplayer',
        external: '',
        featured: false,
      },
      {
        title: 'TaskCLI',
        type: 'Command-line application',
        image: '',
        description: "A command-line application that allows users to efficiently manage their tasks. With this tool, users can create, edit, delete, and view tasks along with their corresponding deadlines, descriptions, and categories.",
        tech: ['SQL', 'Python'],
        github: 'https://github.com/coleenagsao/python-todo-terminal-based-app',
        external: '',
        featured: false,
      },
      {
        title: 'Map Search',
        type: 'Web Application',
        image: '',
        description: "A website that allows users search for locations using a user-friendly search bar with autocomplete capabilities. This also allows for interaction with basic map features, including zooming into predefined locations added via GeoJSON data",
        tech: ['Vue', 'Typescript', 'OSM', 'Pelias'],
        github: 'https://github.com/coleenagsao/vue-ts-osm-pelias-search',
        external: '',
        featured: false,
      },
    ],
  
    srConfig: (delay = 200, viewFactor = 0.25) => ({
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
  };
  