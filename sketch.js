let itemAnno;
let data, giorno, mese, anno;
let splitString;
let palette = [];
let spinefoglie = [];
let arrSpine = [];
let arrFoglie = [];
let p = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  palette[0] = color(161,12,12);
  palette[1] = color(202,87,18);
  palette[2] = color(238,233,229);
  palette[3] = color(192,119,161);
  palette[4] = color(23,64,227);
  palette[5] = color(238,212,30);
  palette[6] = color(249,110,92);
  palette[7] = color(187,118,153);
  palette[8] = color(224,104,97);
  palette[9] = color(173,108,199);

  
  textAlign(CENTER);
  textSize(15);
  
  dateInput = createInput('1960-01-01', 'date');
  dateInput.position(width/2 - 62, 80);
  dateInput.input(myInputEvent);
  
  let mioInput = document.querySelector('input');
  mioInput.setAttribute('min', '1960-01-01');
  mioInput.setAttribute('max', '2002-12-31');
  
  h = random(300, 600);

  for(let i = 0; i < 12; i++) {
    p[i] = createVector(width/2, h + 50 + (25 * i));
    console.log(p[i])
  }

}

function draw() {
  fill(0);
  noStroke();
  background(200);
  text("Enter Date of Birth:", width/2, 50);

  if (controlloData()) {
    text("Enter Date of Birth:", width/2, 50);
    drawFiore();
  } else {
    fill(0);
    noStroke();
    text("The date entered is not valid, please enter another date.", width/2, 150);
  }
}
 
// FUNZIONA, NON LO TOCCARE PIU'
function myInputEvent() {
  data = this.value();
  splitString = split(data, '-');
  anno = +splitString[0];
  mese = +splitString[1];
  giorno = +splitString[2];
}

function drawFiore() {
  drawGambo();
  drawPetali();
  drawSpineFoglie();
}

// disegna il gambo del fiore, l'altezza è randomica
function drawGambo() {
  noFill();
  stroke(60, 89, 40);
  strokeWeight(1);
  p1 = createVector(width/2, h);
  p2 = createVector(width/2, height);
  line(p1.x, p1.y, p2.x, p2.y);
  fill(60, 89, 40);
  ellipse(p1.x,p1.y, 10,10);
}

function drawFoglie(arrFoglie) {
  for(let i = 0; i < arrFoglie.length; i++) {
    if(arrFoglie[i][0] === 'd') {
      triangle(arrFoglie[i][1].x+10, arrFoglie[i][1].y-10, arrFoglie[i][1].x+30, arrFoglie[i][1].y-30, arrFoglie[i][1].x+25, arrFoglie[i][1].y-10);
    } else if(arrFoglie[i][0] === 's') {
      triangle(arrFoglie[i][1].x-10, arrFoglie[i][1].y-10, arrFoglie[i][1].x-30, arrFoglie[i][1].y-30, arrFoglie[i][1].x-25, arrFoglie[i][1].y-10);
    }
  }
}

function drawSpine(arrSpine) {
  for(let i = 0; i < arrSpine.length; i++) {
    if(arrSpine[i][0] === 'd') {
      line(arrSpine[i][1].x, arrSpine[i][1].y, arrSpine[i][1].x+10, arrSpine[i][1].y-10);
    } else if(arrSpine[i][0] === 's') {
      line(arrSpine[i][1].x, arrSpine[i][1].y, arrSpine[i][1].x-10, arrSpine[i][1].y-10);
    }
  }
}

function drawSpineFoglie() {

  stroke(60, 89, 40);
  strokeWeight(1);
  fill(60, 89, 40);

  if(mese === 1) {
    arrSpine = [['d', p[0]]];
    arrFoglie = [];
  } else if(mese === 2) {
    arrSpine = [['s', p[0]], ['d', p[1]]];
    arrFoglie = [['d', p[1]]];
  } else if(mese === 3) {
    arrSpine = [['d', p[0]], ['s', p[1]], ['d', p[2]]];
    arrFoglie = [['s', p[1]]];
  } else if(mese === 4) {
    arrSpine = [['s', p[0]], ['d', p[1]], ['s', p[2]], ['d', p[3]]];
    arrFoglie = [['d', p[1]], ['s', p[2]]];
  } else if(mese === 5) {
    arrSpine = [['s', p[0]], ['d', p[1]], ['s', p[2]], ['d', p[3]], ['s', p[4]]];
    arrFoglie = [['d', p[1]], ['d', p[3]]];
  } else if(mese === 6) {
    arrSpine = [['d', p[0]], ['s', p[1]], ['d', p[2]], ['s', p[3]], ['d', p[4]], ['s', p[5]]];
    arrFoglie = [['s', p[1]], ['d', p[2]], ['s', p[5]]];
  } else if(mese === 7) {
    arrSpine = [['s', p[6]], ['d', p[7]], ['s', p[8]], ['d', p[9]], ['s', p[10]], ['d', p[11]]];
    arrFoglie = [['s', p[6]], ['d', p[9]], ['s', p[10]]];
  }else if(mese === 8) {
    arrSpine = [['s', p[7]], ['d', p[8]], ['s', p[9]], ['d', p[10]], ['s', p[11]]];
    arrFoglie = [['s', p[9]], ['s', p[11]]];
  }else if(mese === 9) {
    arrSpine = [['d', p[8]], ['s', p[9]], ['d', p[10]], ['s', p[11]]];
    arrFoglie = [['s', p[9]]];
  }else if(mese === 10) {
    arrSpine = [['s', p[9]], ['d', p[10]], ['s', p[11]]];
    arrFoglie = [['d', p[10]]];
  }else if(mese === 11) {
    arrSpine = [['d', p[10]], ['s', p[11]]];
    arrFoglie = [['d', p[10]]];
  }else if(mese === 12) {
    arrSpine = [['s', p[11]]];
    arrFoglie = [];
  }

  drawFoglie(arrFoglie);
  drawSpine(arrSpine);
}

// disegna i petali del fiore
function drawPetali() {
  strokeWeight(0.2);
  stroke('black')
  p1=createVector(width/2,h);
  //fill(180, 0, 47);
  coloraFiore();

  if(anno <= 1969) {
    //bocciolo
    quad(p1.x, p1.y, width/2-5, h-25, width/2, h-50, width/2+5, h-25)
    //quarto strato interno
    triangle(width/2, h, width/2-7, h-50, width/2-20, h-25);
    triangle(width/2, h, width/2+7, h-50, width/2+20, h-25);
    //terzo strato interno
    quad(p1.x+15, p1.y, width/2-15, h-5, width/2-20, h-50, width/2-2, h-25)
    quad(p1.x-15, p1.y, width/2+15, h-5, width/2+20, h-50, width/2+2, h-25)
    //secondo strato interno
    quad(p1.x+10, p1.y, width/2-25, h-5, width/2-35, h-45, width/2-5, h-25)
    quad(p1.x-10, p1.y, width/2+25, h-5, width/2+35, h-45, width/2+5, h-25)
    //primo strato interno
    quad(p1.x+5, p1.y, width/2-35, h-5, width/2-50, h-40, width/2-10, h-25)
    quad(p1.x-5, p1.y, width/2+35, h-5, width/2+50, h-40, width/2+10, h-25)
    //petali esterni
    quad(p1.x, p1.y, width/2-45, h-5, width/2-60, h-30, width/2-20, h-25)
    quad(p1.x, p1.y, width/2+45, h-5, width/2+60, h-30, width/2+20, h-25)
  
  } else if(anno >= 1970 && anno <= 1979) {

    //bocciolo
    quad(p1.x, p1.y, width/2-5, h-25, width/2, h-50, width/2+5, h-25)
    //terzo strato interno
    triangle(width/2, h, width/2-7, h-50, width/2-20, h-25);
    triangle(width/2, h, width/2+7, h-50, width/2+20, h-25);
    //secondo strato interno
    quad(p1.x+15, p1.y, width/2-15, h-5, width/2-20, h-50, width/2-2, h-25)
    quad(p1.x-15, p1.y, width/2+15, h-5, width/2+20, h-50, width/2+2, h-25)
    //primo strato interno
    quad(p1.x+10, p1.y, width/2-25, h-5, width/2-35, h-45, width/2-5, h-25)
    quad(p1.x-10, p1.y, width/2+25, h-5, width/2+35, h-45, width/2+5, h-25)
    //strato esterno
    quad(p1.x+5, p1.y, width/2-35, h-5, width/2-50, h-40, width/2-10, h-25)
    quad(p1.x-5, p1.y, width/2+35, h-5, width/2+50, h-40, width/2+10, h-25)

  } else if(anno >= 1980 && anno <= 1989) {

    //bocciolo
    quad(p1.x, p1.y, width/2-5, h-25, width/2, h-50, width/2+5, h-25)
    //secondo strato interno
    triangle(width/2, h, width/2-7, h-50, width/2-20, h-25);
    triangle(width/2, h, width/2+7, h-50, width/2+20, h-25);
    //primo strato interno
    quad(p1.x+15, p1.y, width/2-15, h-5, width/2-20, h-50, width/2-2, h-25)
    quad(p1.x-15, p1.y, width/2+15, h-5, width/2+20, h-50, width/2+2, h-25)
    //strato esterno
    quad(p1.x+10, p1.y, width/2-25, h-5, width/2-35, h-45, width/2-5, h-25)
    quad(p1.x-10, p1.y, width/2+25, h-5, width/2+35, h-45, width/2+5, h-25)
    
  } else if(anno >= 1990 && anno <= 1999) {
    //bocciolo
    quad(p1.x, p1.y, width/2-5, h-25, width/2, h-50, width/2+5, h-25)
    //primo strato interno
    triangle(width/2, h, width/2-7, h-50, width/2-20, h-25);
    triangle(width/2, h, width/2+7, h-50, width/2+20, h-25);
    //strato esterno
    quad(p1.x, p1.y, width/2-20, h-10, width/2-20, h-50, width/2-2, h-25)
    quad(p1.x, p1.y, width/2+20, h-10, width/2+20, h-50, width/2+2, h-25)
    
  } else if(anno >= 2000 && anno <= 2002) {
    triangle(width/2, h, width/2, h-50, width/2-20, h-25);
    triangle(width/2, h, width/2, h-50, width/2+20, h-25);
    triangle(width/2, h, width/2-20, h-25, width/2+20, h-25);
  }
}

function gradienteGiorno(index1, index2, giorno1, giorno2) {
  fill(palette[index1])
  if(giorno === giorno1) {
    lerpColor(palette[index1], palette[index2], 0.33);
  } else if(giorno === giorno2) {
    lerpColor(palette[index1], palette[index2], 0.66);
  }
}

// Crea un fill diverso in base al giorno
function coloraFiore() {
  if(giorno === 1 || giorno === 2 || giorno === 3) {
    gradienteGiorno(0, 1, 2, 3);
  } else if(giorno === 4 || giorno === 5 || giorno === 6) {
    gradienteGiorno(1, 2, 5, 6);
  } else if(giorno === 7 || giorno === 8 || giorno === 9) {
    gradienteGiorno(2, 3, 8, 9);
  } else if(giorno === 10 || giorno === 11 || giorno === 12) {
    gradienteGiorno(3, 4, 11, 12);
  } else if(giorno === 13 || giorno === 14 || giorno === 15) {
    gradienteGiorno(4, 5, 14, 15);
  } else if(giorno === 16 || giorno === 17 || giorno === 18) {
    gradienteGiorno(5, 6, 17, 18);
  } else if(giorno === 19 || giorno === 20 || giorno === 21) {
    gradienteGiorno(6, 7, 20, 21);
  } else if(giorno === 22 || giorno === 23 || giorno === 24) {
    gradienteGiorno(7, 8, 23, 24);
  } else if(giorno === 25 || giorno === 26 || giorno === 27) {
    gradienteGiorno(8, 9, 26, 27);
  } else if(giorno === 28 || giorno === 29 || giorno === 30 || giorno === 31) {
    fill(palette[9])
    let from = palette[9];
    let to = palette[0];
    let interA = lerpColor(from, to, 0.25);
    let interB = lerpColor(from, to, 0.50);
    let interC = lerpColor(from, to, 0.75);
    if(giorno === 29) {
      fill(interA);
    } else if(giorno === 30) {
      fill(interB);
    } else if(giorno === 31) {
      fill(interC);
    }
  }
}
 
// Controlla se la data è valida
function controlloData() {
  if (anno < 1960 || anno > 2002) {
    return false;
  } else {
    return true;
  }
}
