console.log("Started")

const navSlide = () => {
  const collicon = document.querySelector(".collicon")
  const nav = document.querySelector(".items")
  const navLinks = document.querySelectorAll(".items li")

  collicon.addEventListener('click', () => {
    nav.classList.toggle("nav-active")
    collicon.classList.toggle("toggle")
  

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 +0.3}s`;
      }
    })
  })
}

navSlide()