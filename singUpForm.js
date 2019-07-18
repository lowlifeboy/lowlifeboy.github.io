$('select').styler({
	selectSearch: true
});

const singUpForCourseForm = document.querySelector('.singUpForCourse');

singUpForCourseForm.addEventListener('click', (event) => {
  console.log(event.target === document.querySelector('.fieldNameBeforeClick'));
  if (event.target === 'label') {
    event.target.classList.add('fieldNameAfterClick');
    event.target.classList.remove('fieldNameBeforeClick');
  }
});