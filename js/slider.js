prev = document.querySelector("#prev"); // кнопка предыдущий слайд
next = document.querySelector("#next"); // кнопка следующий слайд  
slideImg = document.querySelector('.slider-img img'); // большое изображение  
allImages = document.querySelectorAll('.slider-small-img img'); // массив маленьких картинок  

allImages.forEach(Image => Image.addEventListener('click', showImage)); // ждем клик на каждой картинке из массива и при клике передаем this в функцию показа большой картинки

function showImage() { // показ большой картинки
    slideImg.src = this.src;   // подставляем источник в тег большой картинки
    document.querySelector('.slider .slider-small-img li.active').classList.remove('active'); // удаляем активный класс у выделеной картинки
    this.parentNode.classList.add('active'); // назначаем активный класс выбранной картинке, т.е. рамку и откуда двигать слайдер кнопками
}

next.onclick = function () { // нажатие на кнопку вправо с показом выбранной картинки
    let currentSlide = document.querySelector('.slider .slider-small-img li.active'); // активная картинка
    currentSlide.classList.remove('active');  // удаляем активный   класс
    let nextSlide = currentSlide.nextElementSibling; // берем следующий элемент из атрибутов текущего
    if (nextSlide) { // если следующий существует
        nextSlide.classList.add('active'); // назначаем ему активный класс 
    } else {
        nextSlide = document.querySelector('.slider .slider-small-img li'); // иначе назначаем ему первый элемент
        nextSlide.classList.add('active'); // и назначаем ему активный класс
    }
    slideImg.src = nextSlide.querySelector('img').src; // подставляем источник для показа
}

prev.onclick = function () { // нажатие на кнопку влево с показом выбранной картинки
    let currentSlide = document.querySelector('.slider .slider-small-img li.active');
    currentSlide.classList.remove('active');
    let prevSlide = currentSlide.previousElementSibling; // берем предыдущий элемент из атрибутов текущего
    if (prevSlide) {
        prevSlide.classList.add('active');
    } else {
        prevSlide = document.querySelector('.slider .slider-small-img li:last-child'); // иначе назначаем ему последний элемент
        prevSlide.classList.add('active');
    }
    slideImg.src = prevSlide.querySelector('img').src;
}