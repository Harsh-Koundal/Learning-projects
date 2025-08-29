const progress = document.querySelector('.line-inside');
const errorLabel = document.querySelector('.error-label');
const taskInputs = document.querySelectorAll('.task');
const roundedCheckBoxes = document.querySelectorAll('.rounded-checkbox');
const taskComplete = document.querySelector('.task-completed');

let currentWidth = 0;
let taskCompleted = 0;

roundedCheckBoxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    const relatedInput = taskInputs[index];

    if (checkbox.checked) {
      if (relatedInput.value.trim() === '') {
        checkbox.checked = false;
        errorLabel.style.display = 'block';
        return;
      }
      taskCompleted++;
      currentWidth += 6;

      // ✅ Apply styling only to this input
      relatedInput.style.textDecoration = "line-through";
      relatedInput.style.color = "green";
    } else {
      taskCompleted--;
      currentWidth -= 6;
      if (currentWidth < 0) currentWidth = 0;
      if (taskCompleted < 0) taskCompleted = 0;

      // ✅ Remove styling only from this input
      relatedInput.style.textDecoration = "none";
      relatedInput.style.color = "";
    }

    progress.style.width = `${currentWidth}rem`;
    taskComplete.textContent = `Task Completed ${taskCompleted}/${roundedCheckBoxes.length}`;

    // ✅ Check if all inputs have text (to show/hide the error label)
    const allInputsFilled = Array.from(taskInputs).every(input => input.value.trim() !== '');

    if (allInputsFilled) {
      errorLabel.style.display = 'none';
    } else {
      errorLabel.style.display = 'block';
    }
  });
});
