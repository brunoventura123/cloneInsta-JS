const openMenu = () => toggleMenu(document.querySelector('.up-box-1'));
const follow = () => toggleMenu(document.querySelector('.up-box'));

let slideMove = document.querySelector('.slider-move') as HTMLDivElement
let modal = document.querySelector('.modal') as HTMLDivElement
let modalp = document.querySelector('.modalp') as HTMLDivElement

function toggleMenu(e){
    e.classList.toggle('open')
}

function friends(){
    let menu = document.querySelector('.friends')
    menu.classList.toggle('openFriends')
}
function move(e: string) {
    slideMove.style.marginLeft = e
}

function showVideo(e: string){
    let video = document.querySelector('.modalp video')
    modalp.style.opacity = '0'
    modalp.style.display = 'flex'
    video.setAttribute('src', 'images/videos/'+e+'.mp4')
    setTimeout(() => {
        modalp.style.opacity = '1'
    }, 200);
}

function showPhoto(e: string){
    let photo = document.querySelector('.modal img')
    modal.style.opacity = '0'
    modal.style.display = 'flex'
    photo.setAttribute('src', 'images/photos/'+e+'.png')
    setTimeout(() => {
        modal.style.opacity = '1'
    }, 200);
}
let qt = 17 // Limite a mostrar
let reels = document.querySelector('.rells')
let num = 27 // Limite a mostrar
let area = document.querySelector('.posts')

function loading(){
    for (let i = 1; i <= num; i++) {
    area.innerHTML += `<img onClick="showPhoto(${i})" src='images/photos/${i}.png'>`;
  }
    for (let i = 1; i <= qt; i++) {
    reels.innerHTML += `<video onClick="showVideo(${i})" src='images/videos/${i}.mp4'>`;
      }
}
loading()


function closeModal(){
    modal.style.display = 'none'
    modalp.style.display = 'none'
    document.querySelector('video').setAttribute('src', '')
}