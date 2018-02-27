var map1;
var map2;
var map3;

function initMap() {

    var mapStyles = [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 60.091378, lng: 30.368530},
            zoom: 13,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center1);
        });

        map1.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map2')) {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 59.963610, lng: 30.321756},
            zoom: 15,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center2 = map2.getCenter();
            google.maps.event.trigger(map2, 'resize');
            map2.setCenter(center2);
        });

        map2.setOptions({styles: mapStyles});
    }

    var geomarkDark = {
        url: '/img/mark-1.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkGold = {
        url: '/img/mark-2.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkPark = {
        url: '/img/mark-3.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkSubway = {
        url: '/img/mark-4.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkSubway2 = {
        url: '/img/mark-5.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkSchool = {
        url: '/img/mark-6.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkBaby = {
        url: '/img/mark-7.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkHome = {
        url: '/img/mark-8.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkPlus = {
        url: '/img/mark-9.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkShop = {
        url: '/img/mark-10.png',
        size: new google.maps.Size(48, 66)
    };

    var geomarkSw = {
        url: '/img/mark-11.png',
        size: new google.maps.Size(48, 66)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 60.100065, lng: 30.385561},
        map: map1,
        icon: geomarkGold
    });

    var markOffice2 = new google.maps.Marker({
        position: {lat: 60.091378, lng: 30.368530},
        map: map1,
        icon: geomarkDark
    });

    var markAviator = new google.maps.Marker({
        position: {lat: 60.094769, lng: 30.418632},
        map: map1,
        icon: geomarkPark
    });

    var markPark1 = new google.maps.Marker({
        position: {lat:  60.085693, lng: 30.398622},
        map: map1,
        icon: geomarkSubway
    });

    var markPark2 = new google.maps.Marker({
        position: {lat:  60.078474, lng: 30.309979},
        map: map1,
        icon: geomarkSubway2
    });

    var subway = new google.maps.Marker({
        position: {lat:  60.094050, lng: 30.339884},
        map: map1,
        icon: geomarkSubway
    });

    var subway2 = new google.maps.Marker({
        position: {lat:  60.096754, lng: 30.328474},
        map: map1,
        icon: geomarkSchool
    });

    var school1 = new google.maps.Marker({
        position: {lat:  60.086790,  lng: 30.338085},
        map: map1,
        icon: geomarkBaby
    });

    var school2 = new google.maps.Marker({
        position: {lat:  60.066549,  lng: 30.396699},
        map: map1,
        icon: geomarkHome
    });

    var school3 = new google.maps.Marker({
        position: {lat:  60.084233,  lng: 30.381930},
        map: map1,
        icon: geomarkPlus
    });

    var baby1 = new google.maps.Marker({
        position: {lat:  60.078585, lng: 30.401925},
        map: map1,
        icon: geomarkShop
    });

    var baby2 = new google.maps.Marker({
        position: {lat:  60.049938, lng: 30.441612},
        map: map1,
        icon: geomarkSw
    });

    var baby3 = new google.maps.Marker({
        position: {lat:  60.067092, lng: 30.333315},
        map: map1,
        icon: geomarkSw
    });

    var office = new google.maps.Marker({
        position: {lat:  59.963610, lng: 30.321756},
        map: map2,
        icon: geomarkSubway2,
        title: 'Офис продаж'
    });

}

initMap();