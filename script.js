var openMenu = function () { return toggleMenu(document.querySelector('.up-box-1')); };
var follow = function () { return toggleMenu(document.querySelector('.up-box')); };
var slideMove = document.querySelector('.slider-move');
var modal = document.querySelector('.modal');
var modalp = document.querySelector('.modalp');
function toggleMenu(e) {
    e.classList.toggle('open');
}
function friends() {
    var menu = document.querySelector('.friends');
    menu.classList.toggle('openFriends');
}
function move(e) {
    slideMove.style.marginLeft = e;
}
function showVideo(e) {
    var video = document.querySelector('.modalp video');
    modalp.style.opacity = '0';
    modalp.style.display = 'flex';
    video.setAttribute('src', 'images/videos/' + e + '.mp4');
    setTimeout(function () {
        modalp.style.opacity = '1';
    }, 200);
}
function showPhoto(e) {
    var photo = document.querySelector('.modal img');
    modal.style.opacity = '0';
    modal.style.display = 'flex';
    photo.setAttribute('src', 'images/photos/' + e + '.png');
    setTimeout(function () {
        modal.style.opacity = '1';
    }, 200);
}
var qt = 17; // Limite a mostrar
var reels = document.querySelector('.rells');
var num = 27; // Limite a mostrar
var area = document.querySelector('.posts');
function loading() {
    for (var i = 1; i <= num; i++) {
        area.innerHTML += "<img onClick=\"showPhoto(" + i + ")\" src='images/photos/" + i + ".png'>";
    }
    for (var i = 1; i <= qt; i++) {
        reels.innerHTML += "<video onClick=\"showVideo(" + i + ")\" src='images/videos/" + i + ".mp4'>";
    }
}
loading();
function closeModal() {
    modal.style.display = 'none';
    modalp.style.display = 'none';
    document.querySelector('video').setAttribute('src', '');
}
