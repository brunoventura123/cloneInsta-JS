function abrirMenu(){
    let menu = document.querySelector('.up-box-1')
    let main = document.querySelector('main')
    if(menu.classList.contains('open')){
            menu.classList.remove('open')
    } else {
            menu.classList.add('open')
    }
   
}
function seguir(){
    let menu = document.querySelector('.up-box')
    let main = document.querySelector('main')
    if(menu.classList.contains('open')){
            menu.classList.remove('open')
    } else {
            menu.classList.add('open')
    }
   
}
function amigos(){
    let menu = document.querySelector('.friends')
    let main = document.querySelector('main')
    if(menu.style.display === 'none'){
            menu.style.display = 'block'
    } else {
            menu.style.display = 'none'
    }
   
}
function first() {
    let move = document.querySelector('.slider-move')
    move.style.marginLeft = '0'
}
function second(){
    let move = document.querySelector('.slider-move')
    move.style.marginLeft = '-100vw'
}
function thirth(){
    let move = document.querySelector('.slider-move')
    move.style.marginLeft = '-200vw'
}