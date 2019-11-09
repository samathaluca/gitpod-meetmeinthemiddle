
$(document).ready(function(){
// type_holder
// <div><label><input type="checkbox" class="types" value="mosque" />Mosque</label></div>
var types = ['accounting','airport','amusement_park','aquarium','art_gallery','atm','bakery','bank','bar','beauty_salon','bicycle_store','book_store','bowling_alley','bus_station','cafe','campground','car_dealer','car_rental','car_repair','car_wash','casino','cemetery','church','city_hall','clothing_store','convenience_store','courthouse','dentist','department_store','doctor','electrician','electronics_store','embassy','fire_station','florist','funeral_home','furniture_store','gas_station','gym','hair_care','hardware_store','hindu_temple','home_goods_store','hospital','insurance_agency','jewelry_store','laundry','lawyer','library','liquor_store','local_government_office','locksmith','lodging','mel_delivery','meal_takeaway','mosque','movie_rental','movie_theater','moving_company','museum','night_club','painter','park','parking','pet_store','pharmacy','physiotherapist','plumber','police','post_office','real_estate_agency','restaurant','roofing_contractor','rv_park','school','shoe_store','shopping_mall','spa','stadium','storage','store','subway_station','synagogue','taxi_stand','train_station','transit_station','travel_agency','university','veterinary_care','zoo'];
var html = '';
$.each(types, function( index, value ) {
var name = value.replace(/_/g, " ");
html += '<div><label><input type="checkbox" class="types" value="'+ value +'" />'+ capitalizeFirstLetter(name) +'</label></div>';
});
$('#type_holder').html(html);
});
function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}
var map;
var infowindow;
var autocomplete;

/////
var autocomplete2;
/////

var countryRestrict = {'country': 'in'};
var selectedTypes = [];


function initialize()
{
autocomplete = new google.maps.places.Autocomplete((document.getElementById('addressA')), {
types: ['(regions)'],
// componentRestrictions: countryRestrict
});
autocomplete2 = new google.maps.places.Autocomplete((document.getElementById('addressB')), {
types: ['(regions)'],
// componentRestrictions: countryRestrict
});
var samsroad = new google.maps.LatLng(53.3360, -2.2081);
map = new google.maps.Map(document.getElementById('map'), {
center: samsroad,
zoom: 12
});
}
///////////////////////////////////////////////////////////////////////////////////

function renderMap()
{
// Get the user defined values
var addressA = document.getElementById('addressA').value;

/////
var addressB = document.getElementById('addressB').value;
/////

var radius = parseInt(document.getElementById('radius').value) * 1000;
// get the selected type
selectedTypes = [];

$('.types').each(function(){
if($(this).is(':checked'))
{
selectedTypes.push($(this).val());
}
});

var geocoder = new google.maps.Geocoder();

geocoder.geocode({'address': addressA}, function(results, status) {
if (status === 'OK')
{
//console.log(results[0].geometry.location.lat() + ' - ' + results[0].geometry.location.lng());

/////
selLocLatA = results[0].geometry.location.lat();
selLocLngA= results[0].geometry.location.lng();
}
/////

else
{
alert('Geocode was not successful for the following reason: ' + status);
}
/////

}
);
///// end of geocoder function for Address A

geocoder.geocode({'address': addressB}, function(results, status) {
if (status === 'OK')
{
//console.log(results[0].geometry.location.lat() + ' - ' + results[0].geometry.location.lng());

/////
selLocLatB = results[0].geometry.location.lat();
selLocLngB= results[0].geometry.location.lng();
}
/////

else
{
alert('Geocode was not successful for the following reason: ' + status);
}
/////

}
);
///// end of geocoder function for Address B


MidLat = (selLocLatA + selLocLatB) / 2
MidLng = (selLocLngA + selLocLngB) / 2

//var samsroad = new google.maps.LatLng(53.3360, -2.2081);
var samsroad = new google.maps.LatLng(MidLat, MidLng);
map = new google.maps.Map(document.getElementById('map'), {
center: samsroad,
zoom: 14
});

var request = {
location: samsroad,
radius: radius,
types: selectedTypes
};

infowindow = new google.maps.InfoWindow();
var service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);
}
// end of function **--renderMap--**
//////////////////////////////////////////////////////////////////////////////


function callback(results, status)
{
if (status == google.maps.places.PlacesServiceStatus.OK)
{
for (var i = 0; i < results.length; i++)
{
createMarker(results[i], results[i].icon);
}
}
}
function createMarker(place, icon) {
var placeLoc = place.geometry.location;
var marker = new google.maps.Marker({
map: map,
position: place.geometry.location,
icon: {
url: icon,
scaledSize: new google.maps.Size(20, 20) // pixels
},
animation: google.maps.Animation.DROP
});
google.maps.event.addListener(marker, 'click', function() {
infowindow.setContent(place.name+ '<br>' +place.vicinity);
infowindow.open(map, this);
});
}
