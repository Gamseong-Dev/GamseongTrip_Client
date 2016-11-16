angular.module('gamseong.geo-services', [])
.service('GeoService', function($rootScope, $location, $window, $http, $window, $ionicPlatform, ClientProxy, $cordovaGeolocation, $q) {

    return{

      localCode : function () {

          var options = {
              timeout: 10000,
              enableHighAccuracy: true
          };
          $cordovaGeolocation
                .getCurrentPosition(options)
                .then(
                    function (position) {

                        console.log(position.coords.latitude);
                        var geocoder = new google.maps.Geocoder();
                        var address;
                        var lat = position.coords.latitude;
                        var long = position.coords.longitude;

                        var latlng = new google.maps.LatLng(lat, long);
                        var request = {
                               latLng: latlng
                        };

                        geocoder.geocode(request, function(data, status) {
                           if (status == google.maps.GeocoderStatus.OK) {
                             if (data[0] != null) {
                               console.log(data[0].formatted_address);
                               if (~data[0].formatted_address.indexOf('대한민국')) {
                                  address = data[0].formatted_address.substring(5);
                                }
                                else {
                                  address = data[0].formatted_address;
                                }

                               $window.localStorage.setItem("address",data[5].formatted_address);

                               console.log(address);
                               $http.get(ClientProxy.url + "/gamseong/locations/address/" + address)
                               .success(function (data) {

                                // if(data.result != "fail"){
                                   $window.localStorage.setItem("locId",data.id);
                                   $window.localStorage.setItem("locMotherId",data.motherId);
                                   $window.localStorage.setItem("locName",data.name);
                                   $window.localStorage.setItem("locMotherName",data.name);
                              //   }
                                 console.log(data);
                               })
                             } else {
                               console.log("No address available");
                             }
                           }
                        })
                    });
      }
    }




/*
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
    }*/
});
