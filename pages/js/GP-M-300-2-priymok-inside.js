'use strick'


const
  gruzPod = 300; //грузоподъемность
  vMaxText = document.querySelector('.vMaxText'); // высота последней остановки
  vMaxBut = document.querySelector('.vMaxBut'); // высота последней остановки
  vText = document.querySelector('.vText'); // высота подъема
  vBut = document.querySelector('.vBut'); // высота подъема
  prText = document.querySelector('.prText'); // высота приямка
  prBut = document.querySelector('.prBut'); // высота приямка
  cabWidthText = document.querySelector('.cabWidthText'); // ширина кабины
  cabWidthBut = document.querySelector('.cabWidthBut'); // ширина кабины
  cabDepthText = document.querySelector('.cabDepthText'); // глубина кабины
  cabDepthBut = document.querySelector('.cabDepthBut'); // глубина кабины
  cabHeightText = document.querySelector('.cabHeightText'); // высота кабины
  cabHeightBut = document.querySelector('.cabHeightBut'); // высота кабины
  fenceInfront = document.querySelector('.fenceInfront'); // ограждения спереди
  fenceBehind = document.querySelector('.fenceBehind'); // ограждения сзади
  fenceRight = document.querySelector('.fenceRight'); // ограждения справа
  fenceLeft = document.querySelector('.fenceLeft'); // ограждения слева
  shitUp = document.querySelector('.shitUp');
  shitDown = document.querySelector('.shitDown');
  shit = document.querySelectorAll('.shit');
  arrowRight_1 = document.querySelector('.arrowRight_1');
  arrowLeft_1 = document.querySelector('.arrowLeft_1');
  arrowRight_2 = document.querySelector('.arrowRight_2');
  arrowLeft_2 = document.querySelector('.arrowLeft_2');
  arrowInfront_1 = document.querySelector('.arrowInfront_1');
  arrowInfront_2 = document.querySelector('.arrowInfront_2');




// Создаем холст с размерами 2000 х 2000*0,7
function draw() {
  canv = document.getElementById('canvas'); // привязываем переменную к классу холста (canvas)
  ctx = canv.getContext('2d'); // создание холста
  ctx.canvas.height = 2000; // 2000
  ctx.canvas.width = ctx.canvas.height * 0.7; // 0.7




// Добавление картинки (схемы подъемника) на холст
  const pic = new Image();
  pic.src = 'img/GP-M-300-2-priymok-inside.jpg';
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
    let x = 690,
        y = 850;

    ctx.fillStyle = 'white';
    ctx.fillRect(x + 2, y - 30, 35, 120); //очистим от предыдущего размера (40, 120 - вертикальное стирание)
    getRotate(x, y + 90, vText.value);
    makeGap();
    cabHeightFunk();
  }



//////////////////////
// Монтажные зазоры
let makeGap = function() {
  let x = 280,
      y = 1655;

  ctx.fillStyle = 'white'; // Вместо стирания заливаем фон белым цветом

  ctx.fillRect(x, y, 50, 31); // Стираем фон внизу
  ctx.fillRect(x + 290, y, 50, 31);
  ctx.fillRect(x + 350, y + 20, 35, 50);
  ctx.fillRect(x + 350, y - 330, 35, 100);
  ctx.fillRect(x + 580, y - 410, 50, 31);

  getNum(x, y + 31, gap()); // Рисуем монтажные зазоры
  getNum(x + 290, y + 31, gap());
  getRotate(x + 350, y + 70, gap());
  getRotate(x + 350, y - 240, 180 + gap()); // 180 - глубина мачты
  getNum(x + 580, y - 382, gap());
}

let gap = function() {
  if(vText.value < 5000) {
    return 30;
  } return 50;
}



//////////////////////
// Высота приямка
  prBut.addEventListener('click', prFunk);
  function prFunk() {
    let x = 690,
        y = 1280;

    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 35, -70); //очистим от предыдущего размера (40, 120 - вертикальное стирание)
    getRotate(x, y, prText.value);
  }



//////////////////////
// Ширина платформы
  cabWidthBut.addEventListener('click', cabWidthFunk);
  function cabWidthFunk() {
    let x = 380,
        y = 1735;

    ctx.fillStyle = 'white';
    ctx.fillRect(x + 20, y, 120, 30); //очистим от предыдущего размера (120, 40 - горизонтальное стирание)
    getNum(x + 30, y + 30, cabWidthText.value);
    prWidth();
  }


  //////////////////////
  //  Ширина подъемника
  let prWidth = function() {
    let x = 380,
        y = 1243;

    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 120, 35); //очистим от предыдущего размера (120, 40 - горизонтальное стирание)
    getNum(x + 30, y + 30, cabWidthText.value); // +cabDepthText.value - значение ширины кабины переведенное в число (+)
  }



  //////////////////////
  // Глубина платформы
    cabDepthBut.addEventListener('click', cabDepthFunk);
    function cabDepthFunk() {
      let x = 690,
          y = 1560;

      ctx.fillStyle = 'white';
      ctx.fillRect(x, y - 60, 35, 110); //очистим от предыдущего размера (40, 120 - вертикальное стирание)
      getRotate(x, y + 30, cabDepthText.value);
      prDepth();
    }


  //////////////////////
  // Глубина подъемника
  let prDepth = function() {
    let x = 980,
        y = 1245,
        z = 180, // Глубина мачты
        count = 0;

    count++;
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 120, 35); //очистим от предыдущего размера (120, 40 - горизонтальное стирание)

    // getNum(x + 30, y + 30, +cabDepthText.value ); // +cabWidthText.value - значение ширины кабины переведенное в число (+)
    if(count === 1) {
      getNum(x + 30, y + 30, +cabDepthText.value + z);
    } else {
      getNum(x + 30, y + 30, cabDepthText.value);
    }
  }







  //////////////////////
  // Высота последней остановки
  vMaxBut.addEventListener('click', vMaxFunk);
  function vMaxFunk() {
    let x = 690,
        y = 400;

    ctx.fillStyle = 'white'; // когда устанавливаем размер, закрашиваем фон под размером в белый цвет, чтобы стирать предыдущее число
    ctx.fillRect(x + 9, y - 10, 35, 120); //очистим от предыдущего размера (35, 120 - вертикальное стирание)
    getRotate(x + 10, y + 90, vMaxText.value);
  }





////////////////////////
// Зазор до потолка
let gapCeiling = function() {
  let x = 630,
      y = 240;

  ctx.fillStyle = 'white';
  ctx.fillRect(x, y, 35, -60);
  getRotate(x, y, 100); // Зазор до потолка - 100мм
}
gapCeiling();







///////////////////////////////////
// КПУ
let kpu = function() {
  let x1 = 290; // Координаты нижнего КПУ
      y1 = 950;
      x2 = 290; // Координаты верхнего КПУ
      y2 = 420;
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
        x = 1170;
        y = 350;
    ctx.lineWidth = 1; //задаем толщину линии ШУ
    if(direction === 'up') {
      clearShit(x, y); // Очистить верхний рисунок ЩУ
      clearShit(x, y + 500); // Очистить нижний рисунок ЩУ
      getShit(x, y); // Нарисовать верхний рисунок ЩУ
    }
    if(direction === 'down') {
      clearShit(x, y); // Очистить верхний рисунок ЩУ
      clearShit(x, y + 500); // Очистить нижний рисунок ЩУ
      getShit(x, y + 500); // Нарисовать нижний рисунок ЩУ
    }

    function getShit(x, y) {
      ctx.save();
      ctx.translate(x,y);
      ctx.font = "italic 40px GOST"; // задаем стил текста
      ctx.strokeText('ЩУ', 15, 53); // пишем ЩУ
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






  //////////////////////////////////////////////////
  // Ограждения
  const fenceX = 343,
        fenceY = 648;


  let count_1 = 0;
  // Глубина платформы с учетом толщины ограждения
  fenceInfront.addEventListener('click', fence_1);
  function fence_1() {
    count_1++;
    if(count_1 === 1) {
      cabDepthText.value = +cabDepthText.value + 40;
    }
    prDepth(); // возвращаемся к рассчету ширины подъемника
  }
  // Ограждение спереди
  fenceInfront.addEventListener('click', fenceInfrontFunk);
  function fenceInfrontFunk() {
    ctx.translate(fenceX, fenceY);
    ctx.beginPath();

    // на виде сверху
    ctx.lineWidth = 6;
    ctx.moveTo(0, 998);
    ctx.lineTo(215, 998);
    ctx.stroke();

    // на главном виде
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -100);
    ctx.lineTo(215, -100);
    ctx.lineTo(215, 0);
    ctx.stroke();

    // на виде сбоку
    ctx.moveTo(805, -100);
    ctx.lineTo(805, 0);
    ctx.stroke();
    ctx.translate(-fenceX, -fenceY);
  }



  // Ограждение сзади
  let count_2 = 0;
  fenceBehind.addEventListener('click', fence_2);
  function fence_2() {
    count_2++;
    if(count_2 === 1) {
     cabDepthText.value = +cabDepthText.value + 40;
    }
    prDepth(); // возвращаемся к рассчету ширины подъемника
  }
  fenceBehind.addEventListener('click', fenceBehindFunk);
  function fenceBehindFunk() {
    ctx.translate(fenceX, fenceY);
    ctx.beginPath();

    // на виде сверху
    ctx.lineWidth = 6;
    ctx.moveTo(0, 830);
    ctx.lineTo(215, 830);
    ctx.stroke();

    // на главном виде
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -100);
    ctx.lineTo(215, -100);
    ctx.lineTo(215, 0);
    ctx.stroke();

    // на виде сбоку
    ctx.moveTo(638, 0);
    ctx.lineTo(638, -100);
    ctx.stroke();
    ctx.translate(-fenceX, -fenceY);
  }



  // Ограждение слева
  let count_3 = 0;
  fenceLeft.addEventListener('click', fence_3);
  function fence_3() {
    count_3++;
    if(count_3 === 1) {
      cabWidthText.value = +cabWidthText.value + 40;
    }
    prWidth(); // возвращаемся к рассчету ширины подъемника
  }
  fenceLeft.addEventListener('click', fenceLeftFunk);
  function fenceLeftFunk() {
    ctx.translate(fenceX, fenceY);
    ctx.beginPath();

    //на виде сверху
    ctx.lineWidth = 6;
    ctx.moveTo(0, 830);
    ctx.lineTo(0, 1000);
    ctx.stroke();

    // на главном виде
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -100);
    ctx.stroke();

    // на виде сбоку
    ctx.moveTo(638, 0);
    ctx.lineTo(638, -100);
    ctx.lineTo(805, -100);
    ctx.lineTo(805, 0);
    ctx.stroke();
    ctx.translate(-fenceX, -fenceY);
  }


  // Ограждение справа
  let count_4 = 0;
  fenceRight.addEventListener('click', fence_4);
  function fence_4() {
    count_4++;
    if(count_4 === 1) {
      cabWidthText.value = +cabWidthText.value + 40;
    }
    prWidth(); // возвращаемся к рассчету ширины подъемника
  }
  fenceRight.addEventListener('click', fenceRightFunk);
  function fenceRightFunk() {
    ctx.translate(fenceX, fenceY);
    ctx.beginPath();

    //на виде сверху
    ctx.lineWidth = 6;
    ctx.moveTo(215, 830);
    ctx.lineTo(215, 1000);
    ctx.stroke();

    // на главном виде
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.moveTo(215, 0);
    ctx.lineTo(215, -100);
    ctx.stroke();

    // на виде сбоку
    ctx.moveTo(638, 0);
    ctx.lineTo(638, -100);
    ctx.lineTo(805, -100);
    ctx.lineTo(805, 0);
    ctx.stroke();
    ctx.translate(-fenceX, -fenceY);
  }








//////////////////////////////////////
// Стрелочки входа выхода
arrowRight_1.addEventListener('click', rightFunk_1);
function rightFunk_1() {
  let x = 280,
      y = 1050;

  if(arrowRight_1.classList.contains('active')) {
    arrowRight_1.classList.remove('active')
  } else {
    arrowRight_1.classList.add('active')
  }
  if(arrowRight_1.classList.contains('active')) {
    canvas_arrow(ctx, x + 300, y, x + 340, y);
    canvas_arrow(ctx, x + 340, y + 30, x + 300, y + 30);
  } else {
    ctx.fillStyle = 'white'; //закрашиваем фон под размером в белый цвет
    ctx.fillRect(x + 290, y - 15, 60, 60); //очистим от предыдущего размера
  }
}

arrowRight_2.addEventListener('click', rightFunk_2);
function rightFunk_2() {
  let x = 280,
      y = 560;

  if(arrowRight_2.classList.contains('active')) {
    arrowRight_2.classList.remove('active')
  } else {
    arrowRight_2.classList.add('active')
  }
  if(arrowRight_2.classList.contains('active')) {
    canvas_arrow(ctx, x + 300, y, x + 340, y);
    canvas_arrow(ctx, x + 340, y + 30, x + 300, y + 30);
  } else {
    ctx.fillStyle = 'white'; //закрашиваем фон под размером в белый цвет
    ctx.fillRect(x + 290, y - 15, 60, 60); //очистим от предыдущего размера
  }
}


arrowLeft_1.addEventListener('click', leftFunk_1);
function leftFunk_1() {
  let x = 280,
      y = 1050;

  if(arrowLeft_1.classList.contains('active')) {
    arrowLeft_1.classList.remove('active')
  } else {
    arrowLeft_1.classList.add('active')
  }
  if(arrowLeft_1.classList.contains('active')) {
  canvas_arrow(ctx, x, y, x + 40, y);
  canvas_arrow(ctx, x + 40, y + 30, x, y + 30);
  } else {
    ctx.fillStyle = 'white'; //закрашиваем фон под размером в белый цвет
    ctx.fillRect(x - 10, y - 15, 60, 60); //очистим от предыдущего размера
  }
}

arrowLeft_2.addEventListener('click', leftFunk_2);
function leftFunk_2() {
  let x = 280,
      y = 560;

  if(arrowLeft_2.classList.contains('active')) {
    arrowLeft_2.classList.remove('active')
  } else {
    arrowLeft_2.classList.add('active')
  }
  if(arrowLeft_2.classList.contains('active')) {
  canvas_arrow(ctx, x, y, x + 40, y);
  canvas_arrow(ctx, x + 40, y + 30, x, y + 30);
  } else {
    ctx.fillStyle = 'white'; //закрашиваем фон под размером в белый цвет
    ctx.fillRect(x - 10, y - 15, 60, 60); //очистим от предыдущего размера
  }
}


arrowInfront_1.addEventListener('click', infrontFunk_1);
function infrontFunk_1() {
  let x = 1160,
      y = 560;

  if(arrowInfront_1.classList.contains('active')) {
  arrowInfront_1.classList.remove('active')
  } else {
  arrowInfront_1.classList.add('active')
  }
  if(arrowInfront_1.classList.contains('active')) {
  canvas_arrow(ctx, x, y, x + 40, y);
  canvas_arrow(ctx, x + 40, y + 30, x, y + 30);
  } else {
    ctx.fillStyle = 'white'; //закрашиваем фон под размером в белый цвет
    ctx.fillRect(x - 10, y - 15, 60, 60); //очистим от предыдущего размера
  }
}

arrowInfront_2.addEventListener('click', infrontFunk_2);
function infrontFunk_2() {
  let x = 1160,
      y = 1050;

  if(arrowInfront_2.classList.contains('active')) {
  arrowInfront_2.classList.remove('active')
  } else {
  arrowInfront_2.classList.add('active')
  }
  if(arrowInfront_2.classList.contains('active')) {
  canvas_arrow(ctx, x, y, x + 40, y);
  canvas_arrow(ctx, x + 40, y + 30, x, y + 30);
  } else {
    ctx.fillStyle = 'white'; //закрашиваем фон под размером в белый цвет
    ctx.fillRect(x - 10, y - 15, 60, 60); //очистим от предыдущего размера
  }
}


// функция прорисовки стрелок
function canvas_arrow(context, fromx, fromy, tox, toy){
    var headlen = 20;   // length of head in pixels
    var angle = Math.atan2(toy-fromy,tox-fromx);
    context.beginPath();
    context.moveTo(fromx, fromy);
    context.lineWidth = 1;
    context.lineTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(tox, toy);
    context.lineTo(tox -headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
    context.stroke();
}


  }, false);


}
draw();
