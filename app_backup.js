const root = getComputedStyle(document.documentElement);

const darkModeToggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header');

const clrDark = root.getPropertyValue('--clr-dark');
const clrLight = root.getPropertyValue('--clr-light');
const clrPrimary = root.getPropertyValue('--clr-primary');
const clrPrimaryVariant = root.getPropertyValue('--clr-primary-variant');
const clrSecondary = root.getPropertyValue('--clr-secondary');
const clrError = root.getPropertyValue('--clr-error');

// const enableDarkMode = () => {

// }

darkModeToggle.addEventListener('click', function(){
  this.classList.toggle("bi-brightness-high-fill");
  if (this.classList.toggle('bi-moon-stars')){
    body.style.background = clrLight;
    body.style.color = 'black';
    body.style.transition = '0.25s';
    header.style.background = clrPrimaryVariant;
  }else{
    body.style.background = clrDark;
    body.style.color = 'white';
    body.style.transition = '0.25s';
    header.style.background = 'black';
  }
})
