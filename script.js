// hamburger

document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('navItemCont').classList.toggle('activeNav');
});

document.querySelectorAll('.navbarLink').forEach((navlink)=>{
  navlink.addEventListener('click', ()=>{
    document.querySelector('.hamburger').classList.toggle('active');
     document.getElementById('navItemCont').classList.toggle('activeNav');
  })
})
