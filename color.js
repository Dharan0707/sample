const colorOptions = ['#1c88c7', '#de2647', '#dede26', '#de26d8', '#77ed86', '#000000'];
const colorOptionElements = [];

function generateColorOptions() {
    const colorOptionsSection = document.getElementById('color-options');
    colorOptions.forEach((color) => {
        const colorOptionElement = document.createElement('div');
        colorOptionElement.classList.add('color-option');
        colorOptionElement.style.backgroundColor = color;
        colorOptionElement.addEventListener('click', () => {
            changeBackgroundColor(color);
        });
        colorOptionsSection.appendChild(colorOptionElement);
        colorOptionElements.push(colorOptionElement);
    });
}

function changeBackgroundColor(color) {
    const mainContent = document.getElementById('main-content');
    mainContent.style.backgroundColor = color;
    deselectAllColorOptions();
    const selectedColorOption = colorOptionElements.find((option) => option.style.backgroundColor === color);
    selectedColorOption.classList.add('selected');
}

function deselectAllColorOptions() {
    colorOptionElements.forEach((option) => {
        option.classList.remove('selected');
    });
}

generateColorOptions();