const root = getComputedStyle(document.documentElement);

const darkModeToggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header');



darkModeToggle.addEventListener('click', function () {
  this.classList.toggle("bi-brightness-high-fill");
  // If in dark mode, change to light mode.
  if (this.classList.toggle('bi-moon-stars')) {
    body.style.transition = '.3s';
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');
    // If in light mode, change to dark mode.
  } else {
    body.style.transition = '.3s';
    document.body.classList.remove('lightmode');
    document.body.classList.add('darkmode')
  }
})

// darkModeToggle.addEventListener('click', function(){
//   this.classList.toggle("bi-brightness-high-fill");
//   // If in dark mode, change to light mode.
//   if (this.classList.toggle('bi-moon-stars')){
//     body.style.background = clrLight;
//     body.style.color = 'black';
//     body.style.transition = '0.25s';
//     header.style.background = clrPrimaryVariant;

//   // If in light mode, change to dark mode.
//   }else{
//     body.style.background = clrDark;
//     body.style.color = 'white';
//     body.style.transition = '0.25s';
//     header.style.background = 'black';
//   }
// })



// // Dark mode colors
// const clrLightDARKMODE = root.getPropertyValue('--clr-light-DARKMODE');
// const clrDarkDARKMODE = root.getPropertyValue('--clr-dark-DARKMODE');
// const clrDark2DARKMODE = root.getPropertyValue('--clr-dark-2-DARKMODE');
// const clrPrimaryDARKMODE = root.getPropertyValue('--clr-primary-DARKMODE');
// const clrPrimaryVariantDARKMODE = root.getPropertyValue('--clr-primary-variant-DARKMODE');
// const clrSecondaryDARKMODE = root.getPropertyValue('--clr-secondary-DARKMODE');
// const clrErrorDARKMODE = root.getPropertyValue('--clr-error-DARKMODE');

// // Light mode colors
// const clrLightLIGHTMODE = root.getPropertyValue('--clr-light-LIGHTMODE');
// const clrDarkLIGHTMODE = root.getPropertyValue('--clr-dark-LIGHTMODE');
// const clrDark2LIGHTMODE = root.getPropertyValue('--clr-dark-2-LIGHTMODE');
// const clrPrimaryLIGHTMODE = root.getPropertyValue('--clr-primary-LIGHTMODE');
// const clrPrimaryVariantLIGHTMODE = root.getPropertyValue('--clr-primary-variant-LIGHTMODE');
// const clrSecondaryLIGHTMODE = root.getPropertyValue('--clr-secondary-LIGHTMODE');
// const clrErrorLIGHTMODE = root.getPropertyValue('--clr-error-LIGHTMODE');