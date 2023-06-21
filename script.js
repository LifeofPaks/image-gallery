const gallery = document.querySelector('.gallery')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


gallery.addEventListener('wheel', e=>{
    e.preventDefault()
    gallery.scrollLeft += e.deltaY
})

next.addEventListener('click', ()=>{
    gallery.style.scrollBehavior = 'smooth'
    gallery.scrollLeft += 900
})

prev.addEventListener('click', ()=>{
    gallery.style.scrollBehavior = 'smooth'
    gallery.scrollLeft -= 900
})
