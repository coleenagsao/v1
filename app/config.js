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
      Frameworks: ['React', 'Vue', 'Next.js', 'Tailwind', 'Bootstrap', 'Bulma'],
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
        description: 'A web application for administrators that streamlines the management and analysis of trauma patient data for the Philippine healthcare system. You may see the demonstration video linked below.',
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
        description: "During my AI and ML apprenticeship in Dashlabs.ai through Kadakareer, I developed a desktop application that automatically scans and extracts information, specifically, key-value pairs, from forms and records in jpg/png. Additionally, I also provided a visualization in the form of a pie chart can be generated based on the user's chosen variable.",
        tech: ['Python', 'AWS Textract', 'Pypandas'],
        github: 'https://github.com/coleenagsao/py-autoextractMD',
        external: 'https://drive.google.com/file/d/10OLgohEj3MOdJRx-6x_Al2qK3UqRp_vL/view?usp=sharing',
        featured: false,
      }, 
      {
        title: 'Eight-Puzzle Game with AI Solver',
        type: 'Desktop App',
        image: '',
        description: 'An interactive Python application using PyGame that allows users to solve the 8-puzzle game with three AI agents: BFS, DFS, and A-Star Search, providing various solution methods.',
        tech: ['Python'],
        github: 'https://github.com/coleenagsao/py-ai-eight-puzzle-game',
        external: 'https://youtu.be/XOyG4dALBA8',
        featured: false,
      }, 
      {
        title: 'LOLCode Interpreter',
        type: 'Desktop App',
        image: '',
        description: "An interpreter of LOLCODE that implements lexical, syntax, and semantic analysis. Working with a partner, I contributed equally to the lexical analysis and 90% of the semantic analysis components.",
        notes: 'Andre did the syntax analysis since I was sick, so I did the semantic analysis',
        tech: ['Python', 'LOLCODE'],
        github: 'https://github.com/coleenagsao/python-lolcode-interpreter',
        external: '',
        featured: false,
      },
      {
        title: 'Portfolio v1',
        type: 'Web Application',
        image: '',
        description: "The first iteration of my personal portfolio website, which also served as my introduction to Next.js.",
        tech: ['Next.js', 'Tailwind'],
        github: 'https://github.com/coleenagsao/v1',
        external: 'https://www.coleenagsao.com/',
        featured: false,
      },
      {
        title: 'Git Set Go: A Tech-Themed Multiplayer Typeracer Game',
        type: 'Desktop App',
        image: '',
        description: "A multiplayer typeracer game using UDP socket programming. In collaboration with a duo, I implemented majority of the backend and the initial frontend components.",
        notes: 'My partners implemented the final frontend and music',
        tech: ['Java'],
        github: 'https://github.com/coleenagsao/javafxml-typeracer-multiplayer',
        external: '',
        featured: false,
      },
      {
        title: 'Space Shooters: A Single-Player Space Shooter Game',
        type: 'Desktop App',
        image: '',
        description: "With a focus on the application of object-oriented programming principles, Space Shooters is a pixel shooting arcade game, featuring a boss encounter and a variety of power-ups to aid the player. Working with a partner, I implemented the splash screen, bullet shooting, bullet-enemy collision detection, and power ups.",
        notes: "My partner implemented the status bar, enemy and boss enemy spawning, time checking, and winning status check",
        tech: ['Java', 'JavaFX'],
        github: 'https://github.com/coleenagsao/java-space-shooter-game',
        external: '',
        featured: false,
      },
      {
        title: 'TaskCLI: A CLI Todo App',
        type: 'Command-line application',
        image: '',
        description: "A command-line application that allows users to efficiently manage their tasks. With this tool, users can create, edit, delete, and view tasks along with their corresponding deadlines, descriptions, and categories. ",
        tech: ['SQL', 'Python'],
        github: 'https://github.com/coleenagsao/python-todo-terminal-based-app',
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
  