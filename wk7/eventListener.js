// https://stackoverflow.com/questions/2874688/how-to-disable-an-input-type-text
//

document.getElementById('MPG').disabled = true;

/*  activates and displays value in MPG output box when user presses
   submit button; hence eventlistener is required to target button and
   callback fn when click event is applied to button*/

submitBut = document.querySelector('button[type="submit"]');



submitBut.addEventListener('click', function(){
    document.getElementById('MPG').disabled = false;
    var MilesDrive = document.getElementById('milesDriven');
    var gasGallonUsed = document.getElementById('gasGallonUsed');
    var MPG = document.getElementById('MPG');
    MPG.value = MilesDriven.value / gasGallonUsed.value;
  } );

