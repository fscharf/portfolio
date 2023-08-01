export const changeLinkState = () => {
  const links = document.querySelectorAll('.nav-link')
  const sections = document.querySelectorAll<HTMLDivElement>(
    '#home, #skills, #projects'
  )

  let index = sections.length

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {
    //
  }

  links.forEach(link => link.classList.remove('active'))
  links[index].classList.add('active')
}

export const scrollTop = () => window.scrollTo(0, 0)

export const toggleScrollButton = () => {
  const button = document.getElementById('scrollTopButton')

  if (window.scrollY > 120) {
    button?.classList.remove('d-none')
  } else {
    button?.classList.add('d-none')
  }
}
