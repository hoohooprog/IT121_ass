// https://stackoverflow.com/questions/2874688/how-to-disable-an-input-type-text

// only do all these after DOM has been loaded to Window
window.onload = function() {

   document.getElementById('MPG').disabled = true;


   /*  activates and displays value in MPG output box when user presses
   submit button; hence eventlistener is required to target button and
   callback fn when click event is applied to button*/


   elForm =  document.getElementById('MPG_calculate');


   submitev = function(event){
      event.preventDefault();
   
      var milesDriven = document.getElementById('milesDriven');
      var gasGallonUsed = document.getElementById('gasGallonsUsed');
      var MPG = document.getElementById('MPG');
      MPG.value = parseInt(milesDriven.value) / parseInt(gasGallonUsed.value);
   
   }

   // a form of adding event listener that accepts event as 1st arg and puts the event as an argument
   // into a function called submitev; can also use event => {fn_details}
   elForm.addEventListener('submit', submitev);
}

// Post thoughts : I thought I should use 'click' as an event to listen to, but I had
// to add eventlistener to form instead and input type 'submit' is treated as an event
// TLDR: hence I thought submit would actually be some sort of button that I attach an eventlistener and its
// callback function to

// I used the submit event to prevent its default state to refresh form after submission by using its attribute
// preventDefault();

// slightly confused on how DOM gets updated or changes reflected in browser, ie if I declare
// milesDrive and gasGallonUsed before submitev func def, will user input be reflected in their values
// when eventhandler is triggered?