module.exports = {
    email: 'coleentherese.agsao@gmail.com',
  
    socialMedia: [
      {
        name: 'GitHub',
        url: 'https://github.com/coleenagsao',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/coleenagsao',
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
        range: 'SEPT 2023 - NOV 2023',
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
        range: 'JUL 2023 - AUG 2023',
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
        range: 'AUG 2021 - OCT 2021',
        description: [
          "Led a successful private tutoring program for 5 non-computer science juniors, delivering 36 hours of foundational programming instruction and practical support over three months.",
        ], 
        skills: ['Python'],
        url: ''
      }
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
  