'use strict'


const
  menu = document.querySelector('.menu'),
  name = document.querySelector('.name'),
  gp_msh = menu.querySelector('.gp_msh'),
  gp_gsh = menu.querySelector('.gp_gsh'),
  gp_m = menu.querySelector('.gp_m'),
  gpp = menu.querySelector('.gpp'),
  ppi = menu.querySelector('.ppi'),
  chain = menu.querySelector('.chain'),
  kg250 = menu.querySelector('.kg250'),
  kg300 = menu.querySelector('.kg300'),
  kg500 = menu.querySelector('.kg500'),
  kg1000 = menu.querySelector('.kg1000'),
  kg1500 = menu.querySelector('.kg1500'),
  kg2000 = menu.querySelector('.kg2000'),
  kg3000 = menu.querySelector('.kg3000'),
  kg5000 = menu.querySelector('.kg5000'),
  ost2 = menu.querySelector('.ost2'),
  ost3 = menu.querySelector('.ost3'),
  ost4 = menu.querySelector('.ost4'),
  priymok = menu.querySelector('.priymok'),
  serv = menu.querySelector('.serv'),
  noProh = menu.querySelector('.noProh'),
  proh = menu.querySelector('.proh'),
  inside = menu.querySelector('.inside'),
  outside = menu.querySelector('.outside'),
  withoutWall = menu.querySelector('.withoutWall'),
  wall = menu.querySelector('.wall'),
  sidewall = menu.querySelector('.sidewall'),
  withoutMash = menu.querySelector('.withoutMash'),
  withMash = menu.querySelector('.withMash'),
  but = document.querySelector('.but');

withoutWall.style.display = 'none'; // убираем выбор поковой стены при начальном открытии программы
withoutMash.style.display = 'none'; // убираем машинное помещение при начальном открытии программы

let nameGp, nameСhain, nameKg, nameOst, namePriymok, nameProh, nameWall, nameSide, nameMash, linkGp, linkСhain, linkLoad, linkOst, linkPriymok, linkProhod, linkWall, linkSide, linkMash;

// Тип продъемника
gp_msh.addEventListener('click', function() {
  nameGp = 'ГП-МШ';
  linkGp = 'GP-MH';
  getDisplay.call(gp_msh);
  getLink();
  getNameSum();
  checkAct.call(gp_msh);
})

gp_gsh.addEventListener('click', function() {
  nameGp = 'ГП-ГШ';
  linkGp = 'GP-GH';
  nameSide = '';  // при нажатии на ГП-ГШ, убирается свойство внутри/снаружи здания
  getDisplay.call(gp_gsh);
  getLink();
  getNameSum();
  checkAct.call(gp_gsh);
})

gp_m.addEventListener('click', function() {
  nameGp = 'ГП-М';
  linkGp = 'GP-M';
  getDisplay.call(gp_m);
  getLink();
  getNameSum();
  checkAct.call(gp_m);
})

gpp.addEventListener('click', function() {
  nameGp = 'ГПП';
  linkGp = 'GPP';
  getDisplay.call(gpp);
  getLink();
  getNameSum();
  // checkAct.call(gpp);
})

ppi.addEventListener('click', function() {
  nameGp = 'ППИ';
  linkGp = 'PPI';
  // getDisplay.call(ppi);
  getLink();
  getNameSum();
  // checkAct.call(ppi);
})







// трос или цепь (выбор грузоподъемности в зависимости от наличия цепи)
chain.addEventListener('click', function() {
  if(chain.classList.contains('show')) {
    chain.classList.remove('show');
    chain.style.background = '#666';
    nameСhain = '';
    linkСhain = '';
    if(gp_msh.classList.contains('act')) {
      getDisplay.call(gp_msh);
    } else if(gp_gsh.classList.contains('act')) {
      getDisplay.call(gp_gsh);
    } else if(gp_m.classList.contains('act')) {
      getDisplay.call(gp_m);
    };
  } else {
    chain.classList.add('show');
    chain.style.background = 'green';
    nameСhain = '-Цепь';
    linkСhain = '-C';
    if(gp_msh.classList.contains('act')) {
      getDisplay.call(gp_msh);
    } else if(gp_gsh.classList.contains('act')) {
      getDisplay.call(gp_gsh);
    } else if(gp_m.classList.contains('act')) {
      getDisplay.call(gp_m);
    };
  };
  // getDisplayChain.call(linkСhain);
  getLink();
  getNameSum();
});









// Грузоподъемность
kg250.addEventListener('click', function() {
  nameKg = '-250';
  linkLoad = '-250';
  getLink();
  getNameSum();
})

kg300.addEventListener('click', function() {
  nameKg = '-300';
  linkLoad = '-300';
  getLink();
  getNameSum();
})

kg500.addEventListener('click', function() {
  nameKg = '-500';
  linkLoad = '-500';
  getLink();
  getNameSum();
})

kg1000.addEventListener('click', function() {
  nameKg = '-1000';
  linkLoad = '-1000';
  getLink();
  getNameSum();
})

kg1500.addEventListener('click', function() {
  nameKg = '-1500';
  linkLoad = '-1500';
  getLink();
  getNameSum();
})

kg2000.addEventListener('click', function() {
  nameKg = '-2000';
  linkLoad = '-2000';
  getLink();
  getNameSum();
})

kg3000.addEventListener('click', function() {
  nameKg = '-3000';
  linkLoad = '-3000';
  getLink();
  getNameSum();
})

kg5000.addEventListener('click', function() {
  nameKg = '-5000';
  linkLoad = '-5000';
  getLink();
  getNameSum();
})







// Кол-во остановок
ost2.addEventListener('click', function() {
  nameOst = '-2ост';
 linkOst = '-2';
  getLink();
  getNameSum();
})

ost3.addEventListener('click', function() {
  nameOst = '-3ост';
 linkOst = '-3';
  getLink();
  getNameSum();
})

ost4.addEventListener('click', function() {
  nameOst = '-4ост';
 linkOst = '-4';
  getLink();
  getNameSum();
})






// Приямок, сервисная высота
priymok.addEventListener('click', function() {
  namePriymok = '-приямок';
  linkPriymok = '-priymok';
  getLink();
  getNameSum();
})

serv.addEventListener('click', function() {
  namePriymok = '-серв.высота';
  linkPriymok = '-serv';
  getLink();
  getNameSum();
})





// Наличие стены
wall.addEventListener('click', function() {
  nameWall = '-спиной к стене';
  linkWall = '-wall';
  getLink();
  getNameSum();
})

sidewall.addEventListener('click', function() {
  nameWall = '-боком к стене';
  linkWall = '-sidewall';
  getLink();
  getNameSum();
})







// Проходная, непроходная
noProh.addEventListener('click', function() {
  nameProh = '-непроходной';
  linkProhod = '-noProh';
  getLink();
  getNameSum();
})

proh.addEventListener('click', function() {
  nameProh = '-проходной';
  linkProhod = '-proh';
  getLink();
  getNameSum();
})








// Внутри здания, сранужи здания
inside.addEventListener('click', function() {
  nameSide = '-помещение';
   linkSide = '-inside';
  getLink();
  getNameSum();
})

outside.addEventListener('click', function() {
  nameSide = '-улица';
   linkSide = '-outside';
  getLink();
  getNameSum();
})








// Машинное помещение
withoutMash.addEventListener('click', function() {
  nameMash = '';
  getLink();
  getNameSum();
})

withMash.addEventListener('click', function() {
  nameMash = '-маш.пом';
  linkMash = '-mash';
  getLink();
  getNameSum();
})







// Формирование наименования подъемника
let getNameSum = function() {
  if(nameGp === undefined) {
    nameGp = '';
  }
  if(nameKg === undefined) {
    nameKg = '';
  }
  if(nameOst === undefined) {
    nameOst = ''
  }
  if(namePriymok === undefined) {
    namePriymok = ''
  }
  if(nameProh === undefined) {
    nameProh = ''
  }
  if(nameSide === undefined) {
    nameSide = ''
  }
  if(nameMash === undefined) {
    nameMash = ''
  }
  if(nameСhain === undefined) {
    nameСhain = ''
  }
  if(nameWall === undefined) {
    nameWall = ''
  }

  name.innerHTML = nameGp + nameСhain + nameKg + nameOst + namePriymok + nameProh + nameSide + nameMash + nameWall;
}

//GH-C-500-2-noProh-outside;   + '-' + linkMash

// Формирование ссылки на схему подъемника
let getLink = function() {
  if(linkGp === undefined) {
    linkGp = '';
  }
  if(linkLoad === undefined) {
    linkLoad = '';
  }
  if(linkOst === undefined) {
    linkOst = ''
  }
  if(linkPriymok === undefined) {
    linkPriymok = ''
  }
  if(linkProhod === undefined) {
    linkProhod = ''
  }
  if(linkSide === undefined) {
    linkSide = ''
  }
  if(linkMash === undefined) {
    linkMash = ''
  }
  if(linkСhain === undefined) {
    linkСhain = ''
  }
  if(linkWall === undefined) {
    linkWall = ''
  }

  but.href = 'pages/' + linkGp + linkСhain + linkLoad + linkOst + linkPriymok + linkProhod +  linkSide + linkWall + '.html';

  console.log(but.href);
}



/// Функция показывает или убирает нужные свойства для разных типов подъемников
let getDisplay = function() {

  switch (this) {
    case gp_msh:
    if(chain.classList.contains('show')) {  // проверка цепник или нет
      kg250.style.display = 'none';
      kg300.style.display = 'none';
      kg500.style.display = 'block';
      kg500.style.backgroundColor = '#b00202';
      kg1000.style.display = 'block';
      kg1000.style.backgroundColor = '#b00202';
      kg1500.style.display = 'none';
      kg2000.style.display = 'none';
      kg3000.style.display = 'none';
      kg5000.style.display = 'none';
      inside.style.display = 'block';
      withoutWall.style.display = 'none';
      withoutMash.style.display = 'none';

      break;
    } else {
      kg250.style.display = 'block';
      kg250.style.backgroundColor = '#b00202';
      kg300.style.display = 'none';
      kg500.style.display = 'block';
      kg500.style.backgroundColor = '#666';
      kg1000.style.display = 'block';
      kg1000.style.backgroundColor = '#666';
      kg1500.style.display = 'none';
      kg2000.style.display = 'block';
      kg2000.style.backgroundColor = '#666';
      kg3000.style.display = 'block';
      kg3000.style.backgroundColor = '#b00202';
      kg5000.style.display = 'block';
      kg5000.style.backgroundColor = '#b00202';
      inside.style.display = 'block';
      withoutWall.style.display = 'none';
      withoutMash.style.display = 'none';
      break;
    };


    case gp_gsh:
    if(chain.classList.contains('show')) {  // проверка цепник или нет
      kg250.style.display = 'none';
      kg250.style.backgroundColor = '#b00202';
      kg300.style.display = 'none';
      kg500.style.display = 'block';
      kg500.style.backgroundColor = '#b00202';
      kg1000.style.display = 'block';
      kg1000.style.backgroundColor = '#b00202';
      kg1500.style.display = 'none';
      kg2000.style.display = 'none';
      kg3000.style.display = 'none';
      kg5000.style.display = 'none';
      inside.style.display = 'none';
      withoutWall.style.display = 'none';
      withoutMash.style.display = 'block';
      break;
    } else {
      kg250.style.display = 'block';
      kg300.style.display = 'none';
      kg500.style.display = 'block';
      kg500.style.backgroundColor = '#666';
      kg1000.style.display = 'block';
      kg1000.style.backgroundColor = '#666';
      kg1500.style.display = 'none';
      kg2000.style.display = 'block';
      kg3000.style.display = 'block';
      kg5000.style.display = 'block';
      inside.style.display = 'none';
      withoutWall.style.display = 'none';
      withoutMash.style.display = 'block';
      break;
    }

    case gp_m:
    if(chain.classList.contains('show')) {  // проверка цепник или нет
      kg250.style.display = 'none';
      kg300.style.display = 'none';
      kg500.style.display = 'block';
      kg1000.style.display = 'block';
      kg1500.style.display = 'none';
      kg2000.style.display = 'none';
      kg3000.style.display = 'none';
      kg5000.style.display = 'none';
      inside.style.display = 'block';
      withoutWall.style.display = 'block';
      withoutMash.style.display = 'none';
      break;
    } else {
      kg250.style.display = 'none';
      kg300.style.display = 'block';
      kg500.style.display = 'block';
      kg1000.style.display = 'block';
      kg1500.style.display = 'block';
      kg2000.style.display = 'block';
      kg3000.style.display = 'none';
      kg5000.style.display = 'none';
      inside.style.display = 'block';
      noProh.style.display = 'none';
      withoutWall.style.display = 'block';
      withoutMash.style.display = 'none';
      break;
    }

    // default:

  }
}


// Проверка активного типа подъемников, после нажатия на "ЦЕПЬ".
let checkAct = function() {
  gp_msh.classList.remove('act');
  gp_gsh.classList.remove('act');
  gp_m.classList.remove('act');
  this.classList.add('act');
}
