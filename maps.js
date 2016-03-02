window.onload = function(){
    var options = {
        zoom: 14
        , center: new google.maps.LatLng(40.434956, -3.707064)
        , mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
};