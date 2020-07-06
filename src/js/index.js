window.onload = function () {
    var burger = document.querySelector('.burger-button');
    burger.onclick = function () {
        let sidenav = document.querySelector('.sidenav');
        let grey_layer = document.querySelector('.grey-layer');
        sidenav.classList.toggle("closed")
        grey_layer.classList.toggle("closed")
        return false;
    }
}