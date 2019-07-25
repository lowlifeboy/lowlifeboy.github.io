$(window).on("scroll touchmove", function () {
  $('#header').toggleClass('tiny', $(document).scrollTop() > 0);
});

document.querySelector('.menu').addEventListener('click', () => {
  let navClasses = document.querySelector('nav').classList;
  navClasses.contains('hide') 
    ? navClasses.remove('hide')
    : navClasses.add('hide');
});

// document.querySelector('body').addEventListener('click', () => {
//   let navClasses = document.querySelector('nav').classList;
//   if (!navClasses.contains('hide')) {
//     navClasses.add('hide');
//   }
// });