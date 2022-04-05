const useProjects = () => {
  return [
    {
      title: 'agendai',
      apiUrl: 'https://github.com/fscharf/barber-shop-api',
      siteUrl: '',
      repoUrl: 'https://github.com/fscharf/barber-shop',
      finished: false,
      description:
        'agendai is a schedule web app. features: authentication, my account, e-mail confirmation, dashboard, etc. there is also a web api built with node.',
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
      apiUrl: '',
      siteUrl: '',
      repoUrl: 'https://github.com/fscharf/events',
      finished: true,
      description:
        'final paper project made with asp.net. features: event subscription, online certification, subscription validation, admin/user dashboard, crud, web api, qrcode generator, etc.',
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
      apiUrl: '',
      siteUrl: '',
      repoUrl: 'https://github.com/fscharf/frontend-challenge',
      finished: true,
      description:
        'front-end challenge by corebiz. features: rest requests, responsive layout, custom components, add to cart, etc.',
      tools: ['React', 'SCSS'],
      images: [
        'https://i.imgur.com/og8Ws6q.png',
        'https://i.imgur.com/3QD7IjZ.png',
        'https://i.imgur.com/ZE8oO1H.png',
      ],
    },
    {
      title: 'minicart challenge',
      apiUrl: '',
      siteUrl: 'http://minicart-react.vercel.app/',
      repoUrl: 'https://github.com/fscharf/minicart-react',
      finished: true,
      description: 'simple minicart simulator.',
      tools: ['React', 'Styled-Components'],
      images: [
        'https://i.imgur.com/1yEFtEM.png',
        'https://i.imgur.com/BEHFo1U.png',
      ],
    },
    {
      title: 'form challenge',
      apiUrl: '',
      siteUrl: 'https://form-challenge-v2.vercel.app/',
      repoUrl: 'https://github.com/fscharf/form-challenge',
      finished: true,
      description: 'simple form simulator.',
      tools: ['React', 'Styled-Components'],
      images: [
        'https://i.imgur.com/PMCrue3.png',
        'https://i.imgur.com/Mqiagxa.png',
      ],
    },
  ];
};

export default useProjects;
