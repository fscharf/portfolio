const useProjects = () => {
  return [
    {
      title: 'agendai',
      siteUrl: '',
      repoUrl: 'https://github.com/fscharf/barber-shop',
      finished: false,
      description:
        'agendai was raised to schedule barber attendances, contains many resources as authenticated login, reset password, e-mail confirmation and schedule panel. it depends on an api (node) which is deployed at heroku.',
      tools: ['React', 'Node', 'SCSS', 'PostgreSQL'],
      images: [
        'https://i.imgur.com/CLMlHYV.png',
        'https://i.imgur.com/Vat0Vwl.png',
        'https://i.imgur.com/He1BJ7D.png',
        'https://i.imgur.com/Jnj3c1d.png',
      ],
    },
    {
      title: 'events',
      siteUrl: '',
      repoUrl: 'https://github.com/fscharf/events',
      finished: true,
      description:
        'final paper project made with asp.net, contains several resources like event subscription, online certification, validation for subscriptions, admin panel, user panel, crud operations, qrcode generator, etc.',
      tools: ['Asp.NET', 'C#', 'SCSS', 'SQL'],
      images: [
        'https://i.imgur.com/tcauPVw.png',
        'https://i.imgur.com/NamQBmQ.png',
        'https://i.imgur.com/yQBwwci.png',
        'https://i.imgur.com/4fA5eeQ.png',
        'https://i.imgur.com/6IjMDfo.png',
        'https://i.imgur.com/VICh2RG.png',
        'https://i.imgur.com/vLhpXvY.png',
      ],
    },
    {
      title: 'front-end challenge',
      siteUrl: '',
      repoUrl: 'https://github.com/fscharf/frontend-challenge',
      finished: true,
      description:
        'front-end challenge offered by corebiz. contains rest requests, responsive layout, custom components, add to cart, etc.',
      tools: ['React', 'SCSS'],
      images: [
        'https://i.imgur.com/og8Ws6q.png',
        'https://i.imgur.com/3QD7IjZ.png',
        'https://i.imgur.com/ZE8oO1H.png',
      ],
    },
    {
      title: 'iuri rulian fotografia',
      siteUrl: 'http://iurirulian.com.br',
      repoUrl: 'https://github.com/fscharf/photographer-gallery-react',
      finished: true,
      description:
        'initially this project was made like a template to photographers, later has been deployed at heroku with own domain. contains gallery, contact and some information.',
      tools: ['React', 'SCSS', 'Heroku'],
      images: [
        'https://i.imgur.com/spvXww7.png',
        'https://i.imgur.com/vVbfuG3.png',
        'https://i.imgur.com/MXp6FZt.png',
      ],
    },
    {
      title: 'petshop',
      siteUrl: '',
      repoUrl: 'https://github.com/fscharf/petshop',
      finished: false,
      description:
        'template for petshop e-commerce purposes. made only to practice react.',
      tools: ['React', 'SCSS'],
      images: [
        'https://i.imgur.com/K2dYuA9.png',
        'https://i.imgur.com/KKnJGic.png',
        'https://i.imgur.com/Tn0Hk3x.png',
      ],
    },
    {
      title: 'intranet',
      siteUrl: '',
      repoUrl: 'https://github.com/fscharf/intranet-tng',
      finished: true,
      description:
        'template for internal enterprise purposes. made only to practice node and database integration.',
      tools: ['Handlebars', 'Node', 'SQL'],
      images: [
        'https://i.imgur.com/gkDSGuI.png',
        'https://i.imgur.com/gkDSGuI.png',
      ],
    },
  ];
};

export default useProjects;
