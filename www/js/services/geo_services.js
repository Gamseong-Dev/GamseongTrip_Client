angular.module('gamseong.geo-services', [])
.factory('GeoService', function($rootScope, $location, $window, $http, $window, ClientProxy) {

    return{
      locationCode : function() {
          var myLat;
          var myLng;
        $window.navigator.geolocation.getCurrentPosition(function(position) {
          myLat = position.coords.latitude;
          myLng = position.coords.longitude;
          var address;
          var geocoder = new google.maps.Geocoder();
          var latlng = new google.maps.LatLng(myLat, myLng);
          var request = {
                 latLng: latlng
          };
          geocoder.geocode(request, function(data, status) {
             if (status == google.maps.GeocoderStatus.OK) {
               if (data[5] != null) {

                 address = data[5].formatted_address.substring(5);
                 $window.localStorage.setItem("address",data[5].formatted_address);

                 $http.get(ClientProxy.url + "/gamseong/locations/address/" + address
               , {header : {'Content-Type' : 'application/json; charset=UTF-8'}})
                 .success(function (data) {

                     $window.localStorage.setItem("locId",data.id);
                     $window.localStorage.setItem("locMotherId",data.motherId);
                     $window.localStorage.setItem("locName",data.name);
                     $window.localStorage.setItem("locMotherName",data.name);
                 })
               } else {
                 console.log("No address available");
               }
             }
          })
        })
      }
    }
});
