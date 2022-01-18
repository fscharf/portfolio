export const utils = {
  fixNavbar: () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 100) navbar.classList.add('fixed');
    else navbar.classList.remove('fixed');
  },

  changeLinkState: () => {
    const links = document.querySelectorAll('.nav-link'),
      sections = document.querySelectorAll(['#home', '#skills', '#projects']);

    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
  },

  scrollTop: () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },

  toggleScrollBtn: () => {
    const button = document.getElementById('scrollTopButton');
    document.body.scrollTop > 120 || document.documentElement.scrollTop > 120
      ? button.classList.remove('d-none')
      : button.classList.add('d-none');
  },
};
