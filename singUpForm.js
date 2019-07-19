$('select').styler({
	selectSearch: true
});

const singUpForCourseForm = document.querySelector('.singUpForCourse');

singUpForCourseForm.addEventListener('click', (event) => {
  if (event.target === document.querySelector('.fieldNameBeforeClick')) {
    event.target.classList.add('fieldNameAfterClick');
    event.target.classList.remove('fieldNameBeforeClick');
  } else if (event.target === document.querySelector('input') || event.target === document.querySelector('textarea')) {
    event.target.previousElementSibling.classList.add('fieldNameAfterClick');
    event.target.previousElementSibling.classList.remove('fieldNameBeforeClick');
  }
});

let currentAndPreviousFields = [];

const formQuestionsContainerField = document.querySelector('.formQuestionsContainer');

formQuestionsContainerField.addEventListener('click', (event) => {
  if (event.target === document.querySelector('textarea')) {
    event.target.previousElementSibling.classList.add('fieldNameAfterClick');
    event.target.previousElementSibling.classList.remove('fieldNameBeforeClick');
    event.target.style.lineHeight = '17px';
  }
});
