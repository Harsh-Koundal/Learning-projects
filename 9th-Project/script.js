const checkboxes = document.querySelectorAll('.check');
const lines = document.querySelectorAll('.para');
const cut = document.querySelectorAll('.fa-solid');  // cut icons
const add = document.querySelector('#add');
const dataList = document.querySelector('.data-list');

add.addEventListener('click', () => {
    const taskText = document.querySelector('#search').value;

    function addTask(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'data';
        taskDiv.innerHTML = `
            <input type="checkbox" class="check">
            <p class="para">${taskText}<i class="fa-solid fa-xmark"></i></p>
            <div class="line"></div>
        `;
        dataList.appendChild(taskDiv);
    }

    addTask(taskText);

    // Clear input after adding
    document.querySelector('#search').value = '';

    // Re-select all because new elements are added
    todoList(
        document.querySelectorAll('.check'),
        document.querySelectorAll('.para'),
        document.querySelectorAll('.fa-solid')
    );
});

function todoList(checkboxes, lines, cut) {
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                lines[index].style.textDecoration = 'line-through';
            } else {
                lines[index].style.textDecoration = 'none';
            }
        });
    });

    // Add event listener for cut icons to delete task container
    cut.forEach((cutIcon) => {
        cutIcon.addEventListener('click', () => {
            const task = cutIcon.closest('.data'); // find the task div
            if (task) {
                task.remove();
                console.log('Deleted:', task);
            }
        });
    });
}

// Initial call on page load
todoList(checkboxes, lines, cut);
