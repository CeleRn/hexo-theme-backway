"use strict";




///////////
// Стили //
///////////


require('./style/main.scss');


//////////////
// Картинки //
//////////////

require('./images/logo_backway.svg');

/////////////
// Скрипты //
/////////////

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import 'owl.carousel';

import './js/my-stcripts.js';

$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});


/////////////////////////////////
// Загрузка иконок для спрайта //
/////////////////////////////////

// main
require('./icons/home.svg');
require('./icons/mail.svg');
require('./icons/phone.svg');
require('./icons/place.svg');
require('./icons/search.svg');
require('./icons/time.svg');
require('./icons/comment.svg');
require('./icons/edit.svg');

// Иконки причин
require('./icons/crashs/bug.svg');
require('./icons/crashs/crypt.svg');
require('./icons/crashs/down.svg');
require('./icons/crashs/fire.svg');
require('./icons/crashs/format.svg');
require('./icons/crashs/replace.svg');
require('./icons/crashs/trash.svg');
require('./icons/crashs/water.svg');

// Иконки файлов
require('./icons/files/data.svg');
require('./icons/files/docs.svg');
require('./icons/files/images.svg');
require('./icons/files/musics.svg');
require('./icons/files/videos.svg');

// Иконки операционных систем
require('./icons/systems/apple.svg');
require('./icons/systems/windows.svg');
require('./icons/systems/linux.svg');
require('./icons/systems/android.svg');