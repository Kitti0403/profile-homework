let count = 0;
let direction = 1;

const clickableDiv = document.getElementById('clickableDiv');
const clickCount = document.getElementById('clickCount');

clickableDiv.addEventListener('click', () => {
    count++;
    clickableDiv.style.transform = `rotate(${9 * direction}deg)`; // Rotate 15 degrees in the current direction
    clickCount.textContent = count;

    direction *= -1;
});