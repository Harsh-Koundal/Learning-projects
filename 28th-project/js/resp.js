const body = document.body;
const labelElement = document.querySelector('.label');
const currentColor = body.style.backgroundColor;
if (!labelElement.querySelector('img')) {
    const img = document.createElement('img');
    img.src = '/day-cloudy.webp';
    img.alt = 'Label Image';
    img.style.width = '56px';
    img.style.height = '30px';
    img.style.borderRadius = '50px';
    labelElement.appendChild(img);
}
function background() {
    document.querySelector('.label').addEventListener('click', () => {
        const body = document.body;
        const labelElement = document.querySelector('.label');
        const currentColor = body.style.backgroundColor;


        if (currentColor === 'white' || currentColor === '') {
            // Switch to dark mode
            body.style.backgroundColor = 'black';
            body.style.color = 'white';



            // Remove any existing image first
            const existingImg = labelElement.querySelector('img');
            if (existingImg) {
                existingImg.remove();
            }

            // Add dark mode image
            const img = document.createElement('img');
            img.src = '/cloudy.webp';
            img.alt = 'Label Image';
            img.style.width = '56px';
            img.style.height = '30px';
            img.style.borderRadius = '50px';
            labelElement.appendChild(img);
        } else {
            // Switch to light mode
            body.style.backgroundColor = 'white';
            body.style.color = 'black';

            // Remove dark mode image first
            const existingImg = labelElement.querySelector('img');
            if (existingImg) {
                existingImg.remove();
            }

            // Add light mode image
            const img = document.createElement('img');
            img.src = '/day-cloudy.webp';
            img.alt = 'Label Image';
            img.style.width = '56px';
            img.style.height = '30px';
            img.style.borderRadius = '50px';
            labelElement.appendChild(img);
        }
    });
}

background();
