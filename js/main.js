$(document).ready(function() { // эта конструкция дает гарантию, что html прогрузился
    /* Плавная прокрутка меню */
    $('nav a[href^="#"]').click(function() { //здесь будут находиться все ссылки, наинающиеся на решетку
        let target = $(this).attr('href'); // $(this) - та ссылка, по которой был выполнен клик. Attr позволяет выбрать атрибут. В переменной target будет храниться значение ссылки
        $('html, body').animate({
            scrollTop: $(target).offset().top // offset высчитывает отступы
        },500); // анимация будет выполняться за полсекунды (500 миллисекунд)
        $('nav a[href^="#"]').parent().removeClass('active'); // удаляем класс .active для всех ссылок, которые будут найдены
        $(this).parent().addClass('active'); // добавляем этот класс для текущей ссылки (для родителя!)
        $('.menu__mobile .menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false; // отменяем стандартное поведение ссылок
    });
    /* Мобильное меню */
    $('.menu__burger').click(function () {
        $('.menu__mobile .menu').toggle(500);
        $(this).toggleClass('close');

    });
});