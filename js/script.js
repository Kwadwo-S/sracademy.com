let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.add('active');
}
document.querySelector('#close-menu-info').onclick = () =>{
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   contactInfo.classList.remove('active');
}

// parallsx

let parallax = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;

    parallax.forEach((prllx) => {
        // console.log(offset- prllx.offsetTop);

        prllx.style.backgroundPositionY = (offset- prllx.offsetTop) * .7 + "px";
    })
})

