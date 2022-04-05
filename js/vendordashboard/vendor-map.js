//Google Map
function initMap(){
    function getMap(source, ...destination){
        var options = {
            zoom: 9,
            center: source
        }
        //New Map
        var map = new google.maps.Map(document.getElementById('map'), options)
    
        addMarker(source, 'Head Office');
        addMarker(destination[0], 'Branch Office')
        addMarker(destination[1], 'Brance Office')
        //Add Marker function to add more than one marker
        function addMarker (coords, info){
            //Add Marker
            var marker = new google.maps.Marker({
                position: coords,
                map: map,
                // icon: `https://developers.google.com/maps/documentation/javascript/examples/full/images/${icon}`
            });
    
            // //Add info
            var infoWindow = new google.maps.InfoWindow({
                content: `<p style="color: #ff0000">${info}</p>`
            });

            //Add Path
            var line = new google.maps.Polyline({
                path: [source, ...destination],
                map: map
            })
    
            marker.addListener('mouseover', function(){
                infoWindow.open(map, marker);
            });
        }
    }
    getMap({lat: 7.1475, lng: 3.3619}, {lat: 6.8322, lng: 3.6319}, {lat: 6.7077, lng: 3.2560})
}

document.getElementById('menu-icon')
    .addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('neg-left-200px');
        document.getElementById('menu-icon').classList.toggle('fa-bars');
        document.getElementById('menu-icon').classList.toggle('fa-close');
    })

let vendorLogin = JSON.parse(localStorage.getItem('Vendor-Login'))?JSON.parse(localStorage.getItem('Vendor-Login')):"";
document.getElementById('vendor-name').innerHTML = vendorLogin?.userName;