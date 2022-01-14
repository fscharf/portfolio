import * as Hi from 'react-icons/hi';

const useSkills = () => {
  return [
    {
      icon: <Hi.HiOutlinePhotograph />,
      title: 'Front-end',
      specs: [
        { name: 'React', level: 2 },
        { name: 'JavaScript ES6+', level: 2 },
        { name: 'HTML5 + CSS3', level: 3 },
        { name: 'SASS + SCSS', level: 2 },
        { name: 'styled-components', level: 2 },
      ],
    },
    {
      icon: <Hi.HiOutlineTerminal />,
      title: 'Back-end',
      specs: [
        { name: 'Node', level: 2 },
        { name: 'Asp.NET', level: 1 },
        { name: 'C#', level: 1 },
        { name: 'API REST', level: 2 },
        { name: 'JSON', level: 2 },
        { name: 'SQL', level: 2 },
      ],
    },
    {
      icon: <Hi.HiOutlineCog />,
      title: 'Tools',
      specs: [
        { name: 'VTEX Legacy', level: 2 },
        { name: 'VTEX IO', level: 1 },
        { name: 'Heroku', level: 2 },
        { name: 'GitHub', level: 2 },
        { name: 'Figma', level: 2 },
      ],
    },
    {
      icon: <Hi.HiOutlinePuzzle />,
      title: 'Practices',
      specs: [
        { name: 'GitFlow', level: 2 },
        { name: 'Clean Code', level: 2 },
        { name: 'Design Patterns', level: 1 },
        { name: 'UI/UX', level: 1 },
      ],
    },
  ];
};

export default useSkills;
