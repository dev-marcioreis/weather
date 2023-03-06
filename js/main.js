const openBtn = document.querySelector('.state')
const searchBar = document.querySelector('.search__wiew')
const closeBtn = document.querySelector('.loading__icon')

openBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
    searchBar.classList.remove('active')
})
