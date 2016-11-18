// 지역 정보 이벤트
angular.module('gamseong.weeklyBest', [])
.controller('WeeklyBestCtrl', function($scope, $ionicSlideBoxDelegate, ClientProxy, $http) {
  console.log("weeklyBest 정보");
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
         console.log(data);
         $scope.bestFeed = data;
   }).
       error(function(data, status, headers, config) {
         console.log(ClientProxy.url);
  });

  $http.get(ClientProxy.url + '/gamseong/events').
       success(function(data) {
         console.log(data);
         $scope.bestEvent = data;
   }).
       error(function(data, status, headers, config) {
         console.log(ClientProxy.url);
  });

  $scope.bestLocation = [
    {
      city: '서울',
      location: '남산타워',
      content: '우하하하하'
    },
    {
      city: '부산',
      location: '광안리',
      content: '우하하하2222'
    },
    {
      city: '대구',
      location: '김광석거리',
      content: '우하하3333'
    }
  ];
  $scope.bestEvent = [
    {
      city: '서울',
      location: '신촌',
      content: '물총놀이'
    },
    {
      city: '서울',
      location: '이태원',
      content: '할로윈'
    },
    {
      city: '경기',
      location: '지산',
      content: '락페스티벌'
    }
  ];
});
