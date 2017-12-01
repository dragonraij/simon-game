//var Simon = require('./../js/simon.js');
import Simon from './../js/simon.js';

$(document).ready(function(){
    var simonGame = new Simon();
    
    $("#display").text("!!");
    
    $("p").on("click", () => {
      alert("was clicked");
    });
});