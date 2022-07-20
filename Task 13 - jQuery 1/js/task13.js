var london = $("#London");

var tokyo = $("#Tokyo");

var paris = $("#Paris");

$("#LondonButton").on("click", function(e) {

    paris.hide();
    tokyo.hide();
    
    london.show();

});


$("#ParisButton").on("click", function(e) {

    london.hide();
    tokyo.hide();
    
    paris.show();

});

$("#TokyoButton").on("click", function(e) {

    london.hide();
    paris.hide();
    
    tokyo.show();

});