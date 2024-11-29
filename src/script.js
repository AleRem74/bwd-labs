// Получение элементов
const burgerMenu = document.getElementById('burger-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// Изначально скрываем крестик
closeMenu.style.display = 'none';

//  обработчик события на бургер-меню
burgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Переключаем класс active
    closeMenu.style.display = sidebar.classList.contains('active') ? 'block' : 'none'; // Показываем или скрываем крестик;
    burgerMenu.classList.toggle('open');
});

//  обработчик события на крестик
closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Скрыть сайдбар
    closeMenu.style.display = 'none'; // Скрыть крестик
    burgerMenu.style.display = 'block'; // Показать бургер-меню
});

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.top-nav a'); // Получаем все ссылки
    const currentUrl = window.location.href; // Получаем URL текущей страницы

    menuItems.forEach(item => {
        // Проверяем, соответствует ли href ссылки текущему URL
        if (item.href === currentUrl) {
            item.classList.add('active'); // Добавляем класс active
        }
    });
});
