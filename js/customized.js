var functionReady = () => {
    var out = "";
   $.getJSON( "./Menus.json", function( data ) {
       console.log(data);
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   });
};