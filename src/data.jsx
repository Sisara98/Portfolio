import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaCertificate,
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGitAlt,
    FaFigma,
    FaAndroid,
    FaMicrosoft
  } from 'react-icons/fa';

  import {SiAdobephotoshop } from 'react-icons/si'; 
 

  import { FiFileText,  FiGithub } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.jpeg';
  import Work2 from './assets/project-2.jpg';
  import Work3 from './assets/project-3.jpeg';
  import Work4 from './assets/project-4.jpeg';
  import Work5 from './assets/project-5.jpg';
  import Work6 from './assets/project-6.jpg';
  import Work7 from './assets/project-7.jpg';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },

    // {
    //   id: 3,
    //   name: 'Services',
    //   icon: <FaBriefcase className='nav__icon' />,
    //   path: '/services',
    // },

    {
      id: 4,
      name: 'Project',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/project',
    },
  
    {
      id: 5,
      name: 'Archived',
      icon: <FaCertificate className='nav__icon' />,
      path: '/archived',

      
    },
    {
      id: 6,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },

   
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'D.A.Sisara',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Dilhari',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '25 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Sinhala',
    },
  
    {
      id: 5,
      title: 'Address : ',
      description: 'No 67/A, Medagama, Netolpitiya',
    },
  
    {
      id: 6,
      title: 'Phone : ',
      description: '+94715747238',
    },
  
    {
      id: 7,
      title: 'Email : ',
      description: 'sisaradilhari.1998@mail.com',
    },
  
  
    {
      id: 8,
      title: 'Languages : ',
      description: 'Sinhala, English',
    },
  ];
  
  // export const stats = [
  //   {
  //     id: 1,
  //     no: '12+',
  //     title: 'Years of <br /> Experience',
  //   },
  
  //   {
  //     id: 2,
  //     no: '97+',
  //     title: 'Completed <br /> Projects',
  //   },
  
  //   {
  //     id: 3,
  //     no: '81+',
  //     title: 'Happy <br /> Customers',
  //   },
  
  //   {
  //     id: 4,
  //     no: '53+',
  //     title: ' Awards <br /> Won',
  //   },
  // ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2024 Feb - 2024 Aug',
      title: 'Software Engineer <span> Wora Metrics(pvt) Ltd </span>',
      desc: '06 months industrial training experiences, Knowledge and hands on experience in ReactJs,NextJs, API and Git etc',
    },
  
  
    {
      id: 2,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2019 - 2024',
      title: 'B.ICT(Hons) IN SOFTWARE TECHNOLOGIES <span> South Eastern University </span>',
      desc: 'Specializing in Software Technology and got a 2.58 GPA at the end of 6th semester',
    },
  
    {
      id: 3,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2017 - 2018',
      title: ' G. C. E. ADVANCED LEVEL <span> H/Tangalle Girls School </span>',
      desc: 'Got through A/L with a district rank of 35th and z.score of 1.2093 in 2018',
      details: [
        {
          session: 'First Shy',
          year: '2017',
          rank: '1.0551',
          subjects: [
            { subject: 'BST', grade: 'B' },
            { subject: 'SFT', grade: 'C' },
            { subject: 'ICT', grade: 'S' },
          ],
        },
        {
          session: 'Second Shy',
          year: '2018',
          rank: '1.2093',
          subjects: [
            { subject: 'BST', grade: 'B' },
            { subject: 'SFT', grade: 'C' },
            { subject: 'ICT', grade: 'C' },
          ],
        },
      ],
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2014',
      title: ' G. C. E. ORDINARY LEVEL LEVEL <span> H/Tangalle Girls School </span>',
      desc: 'Passed O/L examination with flying colors.',
      details: [
        {
          session: 'First Shy',
          year: '2014',
          subjects: [
            { subject: 'BUDDHISM', grade: 'A' },
            { subject: 'HEALTH & PHY. EDU', grade: 'A' },
            { subject: 'HISTORY', grade: 'B' },
            { subject: 'MATHEMATICS', grade: 'C' },
            { subject: 'SCIENCE', grade: 'C' },
            { subject: 'BUSINESS & ACCOUNTING', grade: 'C' },
            { subject: 'SINHALA', grade: 'C' },
            { subject: 'MUSIC', grade: 'C' },
            { subject: 'ENGLISH', grade: 'S' },
          ],
        },
        {
          session: 'Second Shy',
          year: '2016 & 2017',
          subjects: [
            { subject: 'ENGLISH', grade: 'C' },
            { subject: 'TAMIL', grade: 'C' },
          ],
        },
      ],
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '25',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '89',
    },
  
    {
      id: 3,
      title: 'Css',
      percentage: '70',
    },
  
    {
      id: 4,
      title: 'Php',
      percentage: '66',
    },
  
    {
      id: 5,
      title: 'Wordpress',
      percentage: '95',
    },
  
    {
      id: 6,
      title: 'Jquery',
      percentage: '50',
    },
  
    {
      id: 7,
      title: 'Angular',
      percentage: '65',
    },
  
    {
      id: 8,
      title: 'React',
      percentage: '45',
    },
  ];
  
  export const project = [
    {
      id: 1,
      img: Work3,
      title: 'Website for University',
      category: 'Web',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'This is a user interface for the university website.',
        },
        {
          icon: <FiGithub />,
          title: 'Link : ',
          desc: 'https://github.com/Sisara98/University-website',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, JS & MediaQuery',
        },
      ],
    },

    {
      id: 2,
      img: Work2,
      title: '3D Design Figma',
      category: 'Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: '3D juice UI',
        },
        {
          icon: <FiGithub />,
          title: 'Link : ',
          desc: 'https://github.com/Sisara98/3D-Juice-figma',
        },
        {
          icon: <FaCode />,
          title: 'Tool : ',
          desc: 'Figma',
        },
      ],
    },

    {
      id: 3,
      img: Work7,
      title: 'Attendance Marking App',
      category: 'App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Attendance Marking App for teachers',
        },
        {
          icon: <FiGithub />,
          title: 'Link : ',
          desc: 'https://github.com/Sisara98/Attendance_Mark_App',
        },
        {
          icon: <FaCode />,
          title: 'Tools : ',
          desc: 'Android studio',
        },
       
      ],
    },

    {
      id: 4,
      img: Work4,
      title: 'Google Drive Clone',
      category: 'Web',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Google Drive UI',
        },
        {
          icon: <FiGithub />,
          title: 'Link : ',
          desc: 'https://github.com/Sisara98/Google_Drive_Clone',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML,CSS & JS',
        },
      ],
    },

    {
      id: 5,
      img: Work5,
      category: 'Web',
      title: 'Social Book',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Front-end social media website',
        },
        {
          icon: <FiGithub />,
          title: 'Link : ',
          desc: 'https://github.com/Sisara98/Social_Book',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
       
      ],
    },

    {
      id: 6,
      img: Work6,
      title: 'Research Cinnamon Leaf Care App',
      category: 'App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Research Cinnamon Leaf disease prediction App',
        },
        {
          icon: <FiGithub />,
          title: 'Link : ',
          desc: 'https://github.com/Sisara98/Cinnamon-leaf-care-app',
        },
        {
          icon: <FaCode />,
          title: 'Tools & Technologies : ',
          desc: 'Android studio,Machine learning',
        },
       
      ],
    },

    {
      id: 7,
      img: Work1,
      title: 'Figma UI',
      category: 'Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Movie ticket booking app figma UI design',
        },
        {
          icon: <FiGithub />,
          title: 'Link : ',
          desc: 'https://github.com/Sisara98/Movie-Ticket-Booking-Design?tab=readme-ov-file',
        },
        {
          icon: <FaCode />,
          title: 'Tool : ',
          desc: 'Figma',
        },
      ],
    },
    
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
       id: 7,
       img: Theme7,
       color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];

  export const profile_experience = [
    {
      id: 1,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2024',
      title: 'Certification of Pioneering Disease Prediction in Cinnamon Leaves Using Machine Learning <span> - Systematic Literature Review </span>',
      desc: 'Published in 4th International Conference on Science and Technology - 2024.',
    },
    
    {
      id: 2,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2023',
      title: 'Successfully Completed the Franklin Free Training <span> - Mobile App Development.</span>',
      desc: 'completed mobile app development course.',
    },
    
    {
      id: 3,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2022',
      title: 'Successful Completion of <span> Backend Web Development </span>',
      desc: 'Completed Backend Web Development using JavaScript, Node.js and Express course.',
    },
    
    {
      id: 4,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2023',
      title: 'Successful Completion of <span> Google Drive Clone  </span>',
      desc: 'Completion of Google Drive Clone using HTML & CSS DevTown Boot camp.',
    },

    {
      id: 5,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2023',
      title: 'Basic Java Development by using IDE <span> Digimax Edu lk</span>',
      desc: 'Completed basic java Development course.',
    },

    {
      id: 6,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2021',
      title: 'Introduction to Cybersecurity <span> - CISCO Firm </span>',
      desc: 'Successfully completed the Introduction to Cybersecurity course..',
    },

    {
      id: 7,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2021',
      title: 'CCNA:<span> Introduction to Networks</span>',
      desc: ' Successfully completed the Introduction to Networks course and achieved this student level credential',
    },

    {
      id: 8,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2021',
      title: 'CCNA: <span> Switching, Routing, and Wireless Essentials </span>',
      desc: 'successfully completed the Switching, Routing, and Wireless Essentials course and achieved this student level credential.',
    },

    {
      id: 9,
      category: 'certificates',
      icon: <FaBriefcase />,
      year: '2021',
      title: 'Networking Academy Learn-A-Thon 2020 <span> CISCO </span>',
      desc: 'participated in a Learn-A-Thon event organized by a local Networking Academy..',
    },
    
    {
      id: 5,
      category: 'activities',
      icon: <FaGraduationCap />,
      year: '2014-2017',
      title: 'Leadership in <span> School </span>',
      desc: 'Former caption & vice caption of cricket and elle team in H/Tangalle Girls National School',
    },
    
    {
      id: 6,
      category: 'activities',
      icon: <FaGraduationCap />,
      year: '2024',
      title: 'Inter faculty sport competitions <span> South eastern university. </span>',
      desc: 'Participated to inter faculty sport competitions and won the 3rd place for elle.',
    },

    {
      id: 7,
      category: 'activities',
      icon: <FaGraduationCap />,
      year: '2015-2017',
      title: 'Inter House Sports Meet <span> H/Tangalle Girls National School </span>',
      desc: 'Participated to House Sports Meets and won the cricket and elle matches.',
    },

    {
      id: 9,
      category: 'activities',
      icon: <FaGraduationCap />,
      year: '2014-2017',
      title: 'Southern Provincial Zonal<span> Sports Competitions </span>',
      desc: 'Participated to Southern Provincial Zonal Sports Competitions and won places.',
    },

    {
      id: 10,
      category: 'activities',
      icon: <FaGraduationCap />,
      year: '2015',
      title: 'National Youth Sports Festival<span> Divisional Meet </span>',
      desc: 'Participated to National Youth Sports Festival and champions in cricket and netball.',
    },

    {
      id: 11,
      category: 'skills',
      icon: <FaMicrosoft />,
      name: 'Microsoft Office',
    },

    {
      id: 12,
      category: 'skills',
      icon: <FaHtml5 />,
      name: 'html 5',
  
    },

    {
      id: 13,
      category: 'skills',
      icon: <FaCss3 />,
      name: 'css 3',
  
    },

    {
      id: 14,
      category: 'skills',
      icon: <FaJs />,
      name: 'javascript',
  
    },
    {
      id: 15,
      category: 'skills',
      icon: <FaReact />,
      name: 'react js',
  
    },

    {
      id: 16,
      category: 'skills',
      icon: <FaNodeJs />,
      name: 'Node.js',
    },

    {
      id: 17,
      category: 'skills',
      icon: <FaDatabase />,
      name: 'SQL',
    },

    {
      id: 18,
      category: 'skills',
      icon: <FaGitAlt />,
      name: 'Git',
    },
    {
      id: 19,
      category: 'skills',
      icon: <FaFigma />,
      name: 'Figma',
    },
    {
      id: 20,
      category: 'skills',
      icon: <FaAndroid />,
      name: 'Android Studio',
    },
    {
      id: 21,
      category: 'skills',
      icon: <SiAdobephotoshop/>,
      name: 'Adobe Photoshop',
    },

    
  ];
  
  