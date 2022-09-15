

// var audio = new Audio('./sound/tetris.mp3');
// audio.play();

var header = document.querySelector('header');

var start = true;

header.addEventListener('click', function() {
  if (start) {
    start = false;
  } else {
    start = true;
  }

 alert("Etat :" + start)

});

var ordi = document.querySelector('.img-ordi');
var shadow_ordi = 0;
var shadow_i = 1;

// console.log("Header :" + header.offsetWidth);

var mesBrique = [
    {x: 28, y:690, r: 0, rotation: false, vx: -32, vy: 32, d: "g"},      // 1
    {x: 172, y:719, r: 0, rotation: false, vx: -32, vy: 32, d: "g"},     // 2
    {x: 100, y:690, r: 0, rotation: false, vx: -32, vy: 32, d: "g"},      // 3
    {x: 172, y:690, r: 180, rotation: true, vx: -32, vy: 32, d: "g"},     // 4
    {x: 345, y:719, r: 0, rotation: false, vx: 32, vy: 32, d: "d"},     // 5
    {x: 244, y:676, r: 90, rotation: true, vx: 32, vy: 32, d: "d"},     // 6
    {x: 359, y:676, r: -90, rotation: true, vx: 32, vy: 32, d: "d"},    // 7
    {x: 518, y:719, r: 0, rotation: false, vx: 32, vy: 32, d: "d"},     // 8
    {x: 417, y:676, r: 90, rotation: true, vx: 32, vy: 32, d: "d"},     // 9
    {x: 331, y:661, r: 0, rotation: false, vx: 32, vy: 32, d: "d"},     // 10
    {x: 518, y:662, r: 0, rotation: false, vx: 32, vy: 32, d: "d"},     // 11
    {x: 330, y:618, r: 90, rotation: true, vx: 32, vy: 32, d: "d"},     // 12
    {x: 417, y:618, r: -90, rotation: true, vx: 32, vy: 32, d: "d"},     // 13
    {x: 115, y:662, r: 180, rotation: true, vx: -32, vy: 32, d:"g"},     // 14
    {x: 216, y:633, r: 0, rotation: false, vx: -32, vy: 32, d:"g"},     // 15
    {x: 504, y:604, r: 0, rotation: false, vx: 32, vy: 32, d:"d"},      // 16
    {x: 0, y:661, r: -180, rotation: true, vx: -32, vy: 32, d:"g"},      // 17
    {x: 115, y:605, r: 90, rotation: true, vx: -32, vy: 32, d:"g"},     // 18
    {x: 58, y:633, r: 0, rotation: false, vx: -32, vy: 32, d:"g"},      // 19
    {x: -14, y:562, r: 90, rotation: true, vx: -32, vy: 32, d:"g"},      // 20
    {x: 72, y:576, r: 0, rotation: false, vx: -32, vy: 32, d:"g"},      // 21
    {x: 302, y:603, r: 0, rotation: false, vx: -32, vy: 32, d:"g"},      // 22
    {x: 302, y:618, r: -90, rotation: true, vx: 32, vy: 32, d:"d"},      // 23
    {x: 388, y:589, r: 90, rotation: true, vx: 32, vy: 32, d:"d"},      // 24
    {x: 244, y:560, r: -90, rotation: true, vx: 32, vy: 32, d:"d"},     // 25
    {x: 504, y:618, r: -90, rotation: true, vx: 32, vy: 32, d:"d"},    // 26
    {x: 518, y:575, r: 0, rotation: false, vx: 32, vy: 32, d:"d"},     // 27
    {x: 546, y:518, r: 0, rotation: false, vx: 32, vy: 32, d:"d"},     // 28
    {x: 317, y:546, r: 0, rotation: true, vx: 32, vy: 32, d:"d"},     // 29
    {x: 303, y:503, r: 90, rotation: true, vx: 32, vy: 32, d:"d"}      // 29
  ]
  
  var numBrique = 0; 
 

  var update = function() {
  
    // var maBrique = mesBrique[numBrique];
  
    var brSelection = document.querySelector('.b' + numBrique);

    brSelection.classList.add('effet')
       
    var briqueTop = brSelection.offsetTop;
    var briqueLeft = brSelection.offsetLeft;
    
  // ****** Descente 1 ******   
  if (briqueTop <= mesBrique[numBrique].y/3) {
      descente();
  } else {

    briqueLeft = briqueLeft + mesBrique[numBrique].vx;

  // ****** Gauche droite ******
    if (mesBrique[numBrique].d == "g") {
        
      if (briqueLeft <= mesBrique[numBrique].x) {
      briqueLeft = mesBrique[numBrique].x
      Rotate_brique()
    }

    } else {

    if (briqueLeft >= mesBrique[numBrique].x) {
      briqueLeft = mesBrique[numBrique].x
      Rotate_brique()
    }
   }
}

// ****** Rotation ******
function Rotate_brique() {
    
    if (mesBrique[numBrique].rotation) {
      brSelection.style.transform = "rotate(" + mesBrique[numBrique].r + "deg)";
      brSelection.style.transition = "0.3s";
      mesBrique[numBrique].rotation = false;
    } else {
      brSelection.style.transition = "0s";
    }

    descente()

}

  // ****** Descente ******
function descente() {

      
    briqueTop = briqueTop + mesBrique[numBrique].vy;
    if (briqueTop >= mesBrique[numBrique].y) {

        briqueTop = mesBrique[numBrique].y
        // console.log("Max y atteint");

        if (brSelection.classList.contains('effet')) {
            // console.log("La class effet exist");
        }

        brSelection.classList.remove('effet')
        numBrique++
        if (numBrique> mesBrique.length) {
            numBrique = mesBrique.length
        }
    }

}
  
    brSelection.style.top = briqueTop + "px";
    brSelection.style.left = briqueLeft + "px";
    
    // console.log("Brique :" + numBrique, "Top " + briqueTop);
  
  }




  var update_ordi = function() {

    shadow_ordi = shadow_ordi + shadow_i;
    if (shadow_ordi>15 || shadow_ordi<0) {
        shadow_i = - shadow_i;
    }
    ordi.style.filter = `drop-shadow(0px 0px ${shadow_ordi}px white)`;

  }

setInterval(update_ordi, 100)


setInterval(update, 75);





  
  
  