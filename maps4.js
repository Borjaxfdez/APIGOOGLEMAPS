var marker, map;
var markers=[];
window.onload = function(){
	var options = {
        zoom: 8
        , center: new google.maps.LatLng(40.448177, -3.704962)
        , mapTypeId: google.maps.MapTypeId.SATELLITE
		, styles:[
  {
    "featureType": "landscape",
    "stylers": [
      { "hue": "#0044ff" },
      { "saturation": 43 },
      { "lightness": -38 },
      { "gamma": 0.71 }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      { "hue": "#D4EA13" },
      { "saturation": 11 },
      { "lightness": -25 },
      { "gamma": 0.22 }
    ]
  } 
  ,
  {
    "featureType": "road",
    "stylers": [
      { "hue": "#ff0008" },
      { "saturation": 74  },
      { "lightness": -42 },
      { "gamma": 0.58 }
    ]
  },
  {
    "featureType": "administrative.country",
    "stylers": [
      { "hue": "#e6ff00" },
      { "saturation": 11 },
      { "lightness": 50 },
      { "gamma": 0.46 }
    ]
  }
]

        , backgroundColor: '#ffffff'
        , noClear: true
        , disableDefaultUI: true
        , keyboardShortcuts: false
        , disableDoubleClickZoom: true
        , draggable: false
        , scrollwheel: false
        , draggableCursor: 'move'
        , draggingCursor: 'move'
 
        , mapTypeControl: true
        , mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_MENU
            , position: google.maps.ControlPosition.TOP_LEFT
            , mapTypeIds: [
                google.maps.MapTypeId.SATELLITE
            ]
        }
        , navigationControl: true
        , streetViewControl: true
        , navigationControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
            , style: google.maps.NavigationControlStyle.ANDROID
        }
        , scaleControl: true
        , scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
            , style: google.maps.ScaleControlStyle.DEFAULT
        }
    };
 
    map = new google.maps.Map(document.getElementById('map'), options);
	
 
    map.setOptions({
        zoom: 100
        , center: new google.maps.LatLng(40.448177, -3.704962)
        , mapTypeId: google.maps.MapTypeId.TERRAIN
 
        , keyboardShortcuts: true
        , disableDoubleClickZoom: false
        , draggable: true
        , scrollwheel: true
        , draggableCursor: 'hand'
        , draggingCursor: 'hand'
 
        , mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            , position: google.maps.ControlPosition.TOP_RIGHT
            , mapTypeIds: [
                google.maps.MapTypeId.ROADMAP
                , google.maps.MapTypeId.SATELLITE
            ]
        }
 
        , navigationControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
            , style: google.maps.NavigationControlStyle.ZOOM_PAN
        }
 
        , scaleControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_LEFT
            , style: google.maps.ScaleControlStyle.DEFAULT
        }
    });
 
    map.setZoom(5);
    var zoomLevel = map.getZoom();
 
    map.setCenter(new google.maps.LatLng(40.448177, -3.704962));
    var centerOfMap = map.getCenter();
 
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    var mapTypeIdOfMap = map.getMapTypeId();
 
    //alert(zoomLevel + ' -- ' + centerOfMap + ' -- ' + mapTypeIdOfMap);
	var optionsPosition={
		position: new google.maps.LatLng(39.612189, -3.338583)
	}
	marker = new google.maps.Marker(optionsPosition);
    marker.setMap(map);
	markers.push(marker);
	var optionsPosition1={
		position: new google.maps.LatLng(45.815230, 15.982175)
	}
	marker1 = new google.maps.Marker(optionsPosition1);
    marker1.setMap(map);
	markers.push(marker1);
	
var points = [
      new google.maps.LatLng(51.507316, -0.123949),
	  new google.maps.LatLng(53.481468, -2.2413279)
    ];

    var polyline = new google.maps.Polyline({
      path: points,
      strokeColor: "#FF0000",
      strokeWeight: 3
    });
    polyline.setMap(map);

var paths = [
      new google.maps.LatLng(44.391807, -9.845545),
      new google.maps.LatLng(41.989315, -8.790858),
      new google.maps.LatLng(41.891250, -6.373866),
      new google.maps.LatLng(37.323444, -7.296717),
      new google.maps.LatLng(35.805799, -5.758631),
      new google.maps.LatLng(36.656535, -2.067225),
	  new google.maps.LatLng(38.708245, 0.173986),
	  new google.maps.LatLng(39.628128, -0.133631),
	  new google.maps.LatLng(42.282605, 3.338049)
    ];
	var polygon = new google.maps.Polygon({
      paths: paths,
      fillColor: "#D4EA13",
      fillOpacity: 0.1,
      strokeColor: "#FF0000",
      strokeWeight: 4
    });
    polygon.setMap(map);
	var infowindowOptions = {
      position: new google.maps.LatLng(43.438177, -4.572108),
      content: 'SPAIN IS DIFFERENT!'
    };
	var infowindow = new google.maps.InfoWindow(infowindowOptions);
    infowindow.open(map);
	var button = document.getElementById("buttonA");
    button.addEventListener('click', bounce2);
	var button1 = document.getElementById("buttonB");
    button1.addEventListener('click', drop2);
	var buttonBus = document.getElementById("find");
    buttonBus.addEventListener('click', buscarDireccion);
	var bQ=document.getElementById("A");
	bQ.addEventListener('click',clearMarkers);
	var bM=document.getElementById("B");
	bM.addEventListener('click',showMarkers);
	var bE=document.getElementById("C");
	bE.addEventListener('click',deleteMarkers);
	var bP=document.getElementById("conte");
	bP.addEventListener('click',mostrar);
	var bC=document.getElementById("close");
	bC.addEventListener('click',quitar);
	};
	function drop(){
	 if (marker.getAnimation() && marker1.getAnimation()) {
        marker.setAnimation(null);
		marker1.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.DROP);
		marker1.setAnimation(google.maps.Animation.DROP);
    }
}
function drop2(){
		for(i=0;i<markers.length;i++){
			if(markers[i].getAnimation()){
				markers[i].setAnimation(null);
			}
			else{
				markers[i].setAnimation(google.maps.Animation.DROP);
			}
		}
	}
function bounce(){
	 if (marker.getAnimation() && marker1.getAnimation()) {
        marker.setAnimation(null);
		marker1.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
		marker1.setAnimation(google.maps.Animation.BOUNCE);
    }
}
	function bounce2(){
		for(i=0;i<markers.length;i++){
			if(markers[i].getAnimation()){
				markers[i].setAnimation(null);
			}
			else{
				markers[i].setAnimation(google.maps.Animation.BOUNCE);
			}
		}
	}

function buscarDireccion(){
	busqueda=document.getElementById("dir").value;
	var geocoder = new google.maps.Geocoder();
	var request = {
      address: busqueda
    };
    geocoder.geocode(request, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          var marke = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
		markers.push(marke);
        map.panTo(marke.getPosition());
      } else {
        window.console.log('failed to geocode address: '  + status);
      }
    });
		
	}
function clearMarkers() {
  setMapOnAll(null);
}


function showMarkers() {
  setMapOnAll(map);
}


function deleteMarkers() {
  clearMarkers();
  markers = [];
}
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

        function mostrar() {
		type = $(this).attr('data-type');
		
		$('.overlay-container').fadeIn(function() {
			
			window.setTimeout(function(){
				$('.window-container.'+type).addClass('window-container-visible');
			}, 100);
			
		});
	}
	
        function quitar() {
		$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
	}
	
