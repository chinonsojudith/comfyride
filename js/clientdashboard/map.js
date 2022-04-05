//Google Map
function initMap(){
    
    function getMap(source, destination){
        var options = {
            zoom: 9,
            center: source
        }
    
        //New Map
        var map = new google.maps.Map(document.getElementById('map'), options)
    
        addMarker(source, 'Pick Up Station', 'parking_lot_maps.png');
        addMarker(destination, 'Destination', 'beachflag.png')
        //Add Marker function to add more than one marker
        function addMarker (coords, info, icon){
            //Add Marker
            var marker = new google.maps.Marker({
                position: coords,
                map: map,
                icon: `https://developers.google.com/maps/documentation/javascript/examples/full/images/${icon}`
            });
    
            // //Add info
            var infoWindow = new google.maps.InfoWindow({
                content: `<p style="color: #ff0000">${info}</p>`
            });

            //Add Path
            var line = new google.maps.Polyline({
                path: [source, destination],
                map: map
            })
    
            marker.addListener('mouseover', function(){
                infoWindow.open(map, marker);
            });
        }
    }
    let bookingDetails = JSON.parse(localStorage.getItem('Booking-Details'));
    if(bookingDetails?.pickUp == "Abeokuta" && bookingDetails?.destination == "Shagamu"){
        getMap({lat: 7.1475, lng: 3.3619}, {lat: 6.8322, lng: 3.6319})
    } else if (bookingDetails?.pickUp == "Shagamu" && bookingDetails?.destination == "Abeokuta"){
        getMap({lat: 6.8322, lng: 3.6319}, {lat: 7.1475, lng: 3.3619})
    } else if (bookingDetails?.pickUp == "Abeokuta" && bookingDetails?.destination == "Ota"){
        getMap({lat: 7.1475, lng: 3.3619}, {lat: 6.7077, lng: 3.2560})
    } else if (bookingDetails?.pickUp == "Ota" && bookingDetails?.destination == "Abeokuta"){
        getMap({lat: 6.7077, lng: 3.2560}, {lat: 7.1475, lng: 3.3619})
    }  else if (bookingDetails?.pickUp == "Shagamu" && bookingDetails?.destination == "Ota"){
        getMap({lat: 6.8322, lng: 3.6319}, {lat: 6.7077, lng: 3.2560})
    }  else if (bookingDetails?.pickUp == "Ota" && bookingDetails?.destination == "Shagamu"){
        getMap({lat: 6.7077, lng: 3.2560}, {lat: 6.8322, lng: 3.6319})
    } else if(bookingDetails?.charterPickUp == "Abeokuta" && bookingDetails?.charterDestination == "Shagamu"){
        getMap({lat: 7.1475, lng: 3.3619}, {lat: 6.8322, lng: 3.6319})
    } else if (bookingDetails?.charterPickUp == "Shagamu" && bookingDetails?.charterDestination == "Abeokuta"){
        getMap({lat: 6.8322, lng: 3.6319}, {lat: 7.1475, lng: 3.3619})
    } else if (bookingDetails?.charterPickUp == "Abeokuta" && bookingDetails?.charterDestination == "Ota"){
        getMap({lat: 7.1475, lng: 3.3619}, {lat: 6.7077, lng: 3.2560})
    } else if (bookingDetails?.charterPickUp == "Ota" && bookingDetails?.charterDestination == "Abeokuta"){
        getMap({lat: 6.7077, lng: 3.2560}, {lat: 7.1475, lng: 3.3619})
    }  else if (bookingDetails?.charterPickUp == "Shagamu" && bookingDetails?.charterDestination == "Ota"){
        getMap({lat: 6.8322, lng: 3.6319}, {lat: 6.7077, lng: 3.2560})
    }  else if (bookingDetails?.charterPickUp == "Ota" && bookingDetails?.charterDestination == "Shagamu"){
        getMap({lat: 6.7077, lng: 3.2560}, {lat: 6.8322, lng: 3.6319})
    }
    
}

document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

let loginDetails = JSON.parse(localStorage.getItem('Login-Details'));
document.getElementById('name').innerHTML = loginDetails?.personName;