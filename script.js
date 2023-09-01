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
     toggleMenuIcon.src = `${icon}.svg`
  }

 