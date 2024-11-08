// Получаем элементы
const burgerMenu = document.getElementById('burger-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// Добавляем обработчик события на бургер-меню
burgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Переключаем класс active
    closeMenu.style.display = sidebar.classList.contains('active') ? 'block' : 'none'; // Показываем или скрываем крестик;
    burgerMenu.classList.toggle('open');
});

// Добавляем обработчик события на крестик
closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Скрыть сайдбар
    closeMenu.style.display = 'none'; // Скрыть крестик
    burgerMenu.style.display = 'block'; // Показать бургер-меню
});
