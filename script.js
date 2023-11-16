// Toggle Menu
const toggleMenu = document.querySelector('#toggle-menu');
const toggleMenuIcon =toggleMenu.querySelector('img')
  const menu = document.querySelector('#menu');

  toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-y-0');
    console.log('toggleMenu');
    changeMenuIcon()
  });

  function changeMenuIcon() {
    const isContainTranslate = menu.classList.contains('translate-y-[200%]')
     const icon = isContainTranslate ? 'icon-menu' : 'icon-close'
     toggleMenuIcon.src = `${scss-svgrepo-com.svg}.svg`
  }

 // Code to display current date and time

 // Get Value
 let clock = document.getElementById('clock')

 //Set Time
 setInterval(function(){
   let date = new Date ()
   clock.innerHTML = date.toLocaleTimeString()
 })
