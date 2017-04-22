var functionReady = () => {
    var out = "";
   $.getJSON( "https://www.dropbox.com/s/p7ovxa1xmtvgwb2/Menus.json?dl=0", function( data ) {
       console.log(data);
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   });
};