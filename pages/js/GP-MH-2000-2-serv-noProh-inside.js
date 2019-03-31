'use strick'

let
  gruzPod = 2000; //грузоподъемность
  vMaxText = document.querySelector('.vMaxText'); // высота последней остановки
  vMaxBut = document.querySelector('.vMaxBut'); // высота последней остановки
  vText = document.querySelector('.vText'); // высота подъема
  vBut = document.querySelector('.vBut'); // высота подъема
  prText = document.querySelector('.prText'); // сервисная высота
  prBut = document.querySelector('.prBut'); // сервисная высота
  cabWidthText = document.querySelector('.cabWidthText'); // ширина кабины
  cabWidthBut = document.querySelector('.cabWidthBut'); // ширина кабины
  cabDepthText = document.querySelector('.cabDepthText'); // глубина кабины
  cabDepthBut = document.querySelector('.cabDepthBut'); // глубина кабины
  cabHeightText = document.querySelector('.cabHeightText'); // высота кабины
  cabHeightBut = document.querySelector('.cabHeightBut'); // высота кабины
  shitUp = document.querySelector('.shitUp');
  shitDown = document.querySelector('.shitDown');
  shit = document.querySelectorAll('.shit');



// Создаем холст с размерами 2000 х 2000*0,7
function draw() {
  canv = document.getElementById('canvas'); // привязываем переменную к классу холста (canvas)
  ctx = canv.getContext('2d'); // создание холста
  ctx.canvas.height = 2000; // 2000
  ctx.canvas.width = ctx.canvas.height * 0.7; // 0.7




// Добавление картинки (схемы подъемника) на холст
  var pic = new Image();
  pic.src = 'img/GP-MH-2000-2-serv-noProh-inside.jpg';
  pic.addEventListener('load', function() {
    ctx.drawImage(pic,0,0, canv.width, canv.height); // схема подъемника рисуется в размер с холстом


// Функция, которая переводит радианы в градусы
  function inRad(degrees) {
    return degrees * Math.PI / 180;
  };




//////////////////////
// Высота подъема
  vBut.addEventListener('click', vFunk);
  function vFunk() {
    let x = 660,
        y = 890;

    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 40, 120); //очистим от предыдущего размера (40, 120 - вертикальное стирание)
    getRotate(x + 10, y + 90, vText.value);
    makeGap();
    cabHeightFunk();
  }


//////////////////////
// Монтажные зазоры
let makeGap = function() {
  let x = 210,
      y = 710;

  ctx.fillStyle = 'white';
  ctx.fillRect(x - 50, y + 7, 120, 35); //очистим от предыдущего размера (120, 40 - горизонтальное стирание)
  ctx.fillRect(x + 320, y + 7, 120, 35);
  ctx.fillRect(x + 690, y + 7, 120, 35);
  ctx.fillRect(x + 1070, y + 7, 60, 35);
  getNum(x + 20, y + 40, gap());
  getNum(x + 320, y + 40, gap());
  getNum(x + 770, y + 40, gap());
  getNum(x + 1070, y + 40, gap());
}

let gap = function() {
  if(vText.value < 5000) {
    return 30;
  } return 50;
}



//////////////////////
// Сервисная высота
  prBut.addEventListener('click', prFunk);
  function prFunk() {
    let x = 670,
        y = 1360;

    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 35, -110); //очистим от предыдущего размера (40, 120 - вертикальное стирание)
    getRotate(x, y, prText.value);
  }


//////////////////////
// Ширина кабины
  cabWidthBut.addEventListener('click', cabWidthFunk);
  function cabWidthFunk() {
    let x = 640,
        y = 1600;

    ctx.fillStyle = 'white';
    ctx.fillRect(x + 20, y - 50, 40, 120); //очистим от предыдущего размера (40, 120 - вертикальное стирание)
    getRotate(x + 30, y + 30, cabWidthText.value);
    prWidth();
  }


//////////////////////
// Ширина шахты
let prWidth = function() {
  let x = 1080,
      y = 1355;
  let a = 60, // Шахта из трубы 60х3
      b = 113.5; // Расстояние от шахты до кабины

  ctx.fillStyle = 'white';
  ctx.fillRect(x, y, 120, 40); //очистим от предыдущего размера (120, 40 - горизонтальное стирание)
  getNum(x + 30, y + 30, +cabWidthText.value + a*2 + b*2); // +cabWidthText.value - значение ширины кабины переведенное в число (+)
}


//////////////////////
// Глубина кабины
  cabDepthBut.addEventListener('click', cabDepthFunk);
  function cabDepthFunk() {
    let x = 330,
        y = 1775;

    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 120, 30); //очистим от предыдущего размера (120, 40 - горизонтальное стирание)
    getNum(x + 30, y + 30, cabDepthText.value);
    prDepth();
  }


  //////////////////////
  // Глубина шахты
  let prDepth = function() {
    let x = 330,
        y = 1355;
    let a = 60, // Шахта из трубы 60х3
        b = 20, // Расстояние от шахты до кабины
        c = 30; // Монтажное расстояние

    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 120, 40); //очистим от предыдущего размера (120, 40 - горизонтальное стирание)
    getNum(x + 30, y + 30, +cabDepthText.value + a*2 + b*2); // +cabDepthText.value - значение ширины кабины переведенное в число (+)
  }














//////////////////////
// Высота кабины
  cabHeightBut.addEventListener('click', cabHeightFunk);
  function cabHeightFunk() {
    let x = 145,
        y = 600;

    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 35, -120); //очистим от предыдущего размера (40, 120 - вертикальное стирание)
    getRotate(x, y, cabHeightText.value);


    let podv = 280, // расстояние от верха кабины до проушины (высота подвеса 12П)
        kruk, // высота крюкоблока для тельфера
        tal, // высота тельфера
        monZaz = 130; // 30мм от тельфера до верха шахты, 100мм от верха шахты до потолка

    if(gruzPod === 500) {kruk = 575} //тельфер на 1000кг
    else if(gruzPod === 1000) {kruk = 665} //тельфер на 2000кг
    else if(gruzPod === 2000) {kruk = 750} //тельфер на 3200кг
    else if(gruzPod === 3000) {kruk = 840} //тельфер на 5000кг
    else if(gruzPod === 5000) {kruk = 1030}; //тельфер на 8000кг

    if(gruzPod === 500 && vText.value < 24000) {tal = 310}
      else if(gruzPod === 500 && vText.value > 24000) {tal = 402} //тельфер на 1000кг
    else if(gruzPod === 1000 && vText.value < 24000) {tal = 402} //тельфер на 2000кг
      else if(gruzPod === 1000 && vText.value > 24000) {tal = 497} //тельфер на 2000кг
    else if(gruzPod === 2000 && vText.value > 24000) {tal = 42} //тельфер на 3200кг
      else if(gruzPod === 2000 && vText.value < 24000) {tal = 497} //тельфер на 3200кг
    else if(gruzPod === 3000 && vText.value < 30000) {tal = 497} //тельфер на 5000кг
      else if(gruzPod === 3000 && vText.value > 30000) {tal = 585} //тельфер на 5000кг
    else if(gruzPod === 5000) {tal = 585}; //тельфер на 8000кг

    sumMax = +cabHeightText.value + podv + kruk + tal + monZaz;

    if(vText.hasAttribute && cabHeightText.value) {
      // vMaxText.style.backgroundColor = 'white';
      vMaxText.setAttribute('value', sumMax);
    }

  }








  //////////////////////
  // Высота последней остановки
  vMaxBut.addEventListener('click', vMaxFunk);
  function vMaxFunk() {
    let x = 660,
        y = 360;

    ctx.fillStyle = 'white'; // когда устанавливаем размер, закрашиваем фон под размером в белый цвет, чтобы стирать предыдущее число
    ctx.fillRect(x, y, 40, 120); //очистим от предыдущего размера (40, 120 - вертикальное стирание)
    getRotate(x + 10, y + 90, vMaxText.value);
  }




////////////////////////
// Зазор до потолка
let gapCeiling = function() {
  let x = 215,
      y = 320;

  ctx.fillStyle = 'white';
  ctx.fillRect(x, y, 35, -60);
  getRotate(x, y, 100); // Зазор до потолка - 100мм
}
gapCeiling();




///////////////////////////////////
// КПУ
let kpu = function() {
  let x1 = 240; // Координаты нижнего КПУ
      y1 = 1020;
      x2 = 240; // Координаты верхнего КПУ
      y2 = 480;
      a = 30; // ширина КПУ
      b = 60; // высота КПУ

  let kpu = function(x, y) {
  ctx.save();  // Иногда без этого не работает (но здась можно убрать)
  ctx.translate(x,y);
  ctx.strokeRect( 0, 0, a, b);

  ctx.beginPath();
  ctx.arc(a/2, b/4, 6, 0,Math.PI*2,true); // Окружность
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(a/2, b/4 + b/4, 6, 0,Math.PI*2,true); // Окружность
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(a/2, b/4 + b/4 + b/4, 6, 0,Math.PI*2,true); // Окружность
  ctx.stroke();

  // Подписываем КПУ
  ctx.font = "italic 30px GOST";
  ctx.fillStyle = "black";
  ctx.fillText('КПУ', -5, -10);
  ctx.restore(); // Иногда без этого не работает (но здась можно убрать)
  }
  kpu(x1, y1);
  kpu(x2, y2);
}
kpu();





/////////////////////////
// ТТ чертежа
ctx.font = "italic 30px GOST";
ctx.fillStyle = "black";
ctx.fillText('ЩУ - щит управления', 900, 1800); // (ЩУ - щит управления)
ctx.fillText('КПУ - кнопочный пост управления', 900, 1840); // (КПУ - кнопочный пост управления)






////////////////////////
// Щит управления
let funk = function(){
  let direction = this.classList.contains('shitUp') ? 'up' : 'down';
  getShit(direction);
}

let setUpListener = function() { // Обработчик события прорисовки ЩУ
  shitUp.addEventListener('click', funk);
  shitDown.addEventListener('click', funk);
}
  setUpListener();

  let getShit = function(direction) {
    let a = 80; // шарина ЩУ
        b = 80; // глубина ЩУ
        x = 930;
        y = 350;

    if(direction === 'up') {
      clearShit(x, y); // Очистить верхний рисунок ЩУ
      clearShit(x, y + 550); // Очистить нижний рисунок ЩУ
      getShit(x, y); // Нарисовать верхний рисунок ЩУ
    }
    if(direction === 'down') {
      clearShit(x, y); // Очистить верхний рисунок ЩУ
      clearShit(x, y + 550); // Очистить нижний рисунок ЩУ
      getShit(x, y + 550); // Нарисовать нижний рисунок ЩУ
    }

    function getShit(x, y) {
      ctx.save();
      ctx.translate(x,y);
      ctx.font = "italic 40px GOST"; // задаем стил текста
      ctx.strokeText('ЩУ', 15, 53); // пишем ЩУ
      ctx.lineWidth = 2; //задаем толщину линии
      ctx.strokeRect(0, 0, a, b); // рисуем контуры квадрата (прозрачный внутри)
      ctx.restore();
    }

    function clearShit(x, y) { // очистка рисутка ЩУ перед прорисовкой нового.
      ctx.save();
      ctx.translate(x - 1, y - 1); // координаты смещаем для очистки ЩУ
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, a + 2, b + 2); // Стираем ЩУ
      ctx.restore();
    }

  };






// Функция пишет число из строки ввода, и поворачивает его на 90 град.
  function getRotate(x, y, num) {
    ctx.save() //сохраним состояние
    ctx.translate(x,y); //Сместим начало координат
    ctx.rotate(inRad(-90));
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'black';
    ctx.font = "italic 40px GOST";
    text = String(num);
    ctx.fillText(text, 0, 0);
    ctx.restore();  //Восстановим состояние, на самом деле не обязательно, но лучше восстановить
  }



// Функция пишет число из строки ввода
  function getNum(x, y, num) {
    ctx.save() //сохраним состояние
    ctx.translate(x,y); //Сместим начало координат
    ctx.fillStyle = 'black';
    ctx.font = "italic 40px GOST";
    text = String(num);
    ctx.fillText(text, 0, 0);
    ctx.restore();  //Восстановим состояние, на самом деле не обязательно, но лучше восстановить
  }



  }, false);


}
draw();
