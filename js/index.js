function changeBackground() {
    const newColor = '#4ECDC7';
    document.body.style.backgroundColor = newColor;
    console.log('Цвет фона изменен на бирюзовый!');
}

// Добавляем обработчик события для кнопки (на всякий случай)
document.addEventListener('DOMContentLoaded', function() {
    const colorChanger = document.querySelector('.color-changer');
    if (colorChanger) {
        colorChanger.addEventListener('click', changeBackground);
    }
});