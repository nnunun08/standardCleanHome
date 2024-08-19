const mobileMenuToggle = document.querySelectorAll('.mobileMenuToggle')
const gnbMenu = document.querySelector('.mobileMenu')
const body = document.querySelector('body')

mobileMenuToggle[0].addEventListener('click', () => {
    gnbMenu.classList.add('ac')
})
mobileMenuToggle[1].addEventListener('click', () => {
    gnbMenu.classList.remove('ac')
})