import * as Hi from 'react-icons/hi';

const useSkills = () => {
  return [
    {
      icon: <Hi.HiOutlinePhotograph />,
      title: 'Front-end',
      specs: [
        { name: 'React', level: 2 },
        { name: 'JavaScript', level: 2 },
        { name: 'TypeScript', level: 1 },
        { name: 'HTML | CSS', level: 3 },
        { name: 'SASS', level: 2 },
        { name: 'CSS-in-JS', level: 2 },
      ],
    },
    {
      icon: <Hi.HiOutlineTerminal />,
      title: 'Back-end',
      specs: [
        { name: 'Node', level: 2 },
        { name: 'C#', level: 1 },
        { name: 'API REST', level: 2 },
        { name: 'JSON | XML', level: 2 },
        { name: 'SQL', level: 2 },
      ],
    },
    {
      icon: <Hi.HiOutlineCog />,
      title: 'Tools',
      specs: [
        { name: 'VTEX | VTEX IO', level: 2 },
        { name: 'Heroku', level: 2 },
        { name: 'GitHub', level: 2 },
        { name: 'Figma', level: 2 },
        { name: 'AdobeXD', level: 1 },
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
