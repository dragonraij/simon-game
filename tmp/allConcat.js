//var Simon = require('./../js/simon.js');
import Simon from './../js/simon.js';

$(document).ready(function(){
    var simonGame = new Simon();
    
    $("#display").text("!!");
    
    $(".strict").addClass("btnShadow");
    $(".start").addClass("btnShadow");
    
    $(".start").on("hover", ()=>{ this.toggleClass("btnShadow"); alert("I was click")});
    
    $("p").on("click", () => {
      alert("was clicked");
    });
});