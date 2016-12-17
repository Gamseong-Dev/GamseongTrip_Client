// 지역 정보 이벤트

angular.module('gamseong.weeklyBest', [])
.controller('WeeklyBestCtrl', function($scope, $ionicSlideBoxDelegate, ClientProxy, $http) {
  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });
  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    // note: the indexes are 0-based
    $scope.activeIndex = data.slider.activeIndex;
    $scope.previousIndex = data.slider.previousIndex;
  });

  $http.get(ClientProxy.url + '/gamseong/feeds/best').
       success(function(data) {
         for(var i = 0; i<data.length; i++){
           if(data[i].feed.imageUrl == null){
           data[i].feed.imageUrl = "img/logo.png";
           }
           if(data[i].feed.user.imageUrl == null){
           data[i].feed.user.imageUrl = "img/person/per.png";
           }
         };
         $scope.bestFeed = data;
   }).
       error(function(data, status, headers, config) {
         console.log(ClientProxy.url);
  });

  $http.get(ClientProxy.url + '/gamseong/events').
       success(function(data) {
         $scope.bestEvent = data;
   }).
       error(function(data, status, headers, config) {
         console.log(ClientProxy.url);
  });

  $http.get(ClientProxy.url + '/gamseong/locations/best').
       success(function(data) {
         $scope.bestLocation = data;
   }).
       error(function(data, status, headers, config) {
         console.log(ClientProxy.url);
  });
});
