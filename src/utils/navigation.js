export const changeLinkState = () => {
  const links = document.querySelectorAll('.nav-link'),
    sections = document.querySelectorAll(['#home', '#skills', '#projects'])

  let index = sections.length

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach(link => link.classList.remove('active'))
  links[index].classList.add('active')
}

export const scrollTop = () => {
  window.scrollTo(0, 0)
}

export const toggleScrollButton = () => {
  const button = document.getElementById('scrollTopButton')

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120)
    button.classList.remove('d-none')
  else button.classList.add('d-none')
}
