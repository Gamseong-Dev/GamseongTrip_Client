//세팅 페이지
angular.module('gamseong.profile-controllers', [])
.controller('ProfileFeedCtrl', function($scope, $window, $http, ClientProxy) {
  console.log("내게시글이다");
  var userId = $window.localStorage.getItem("id");
  console.log(userId);
  $http.get(ClientProxy.url + '/gamseong/feeds/users/' + userId).
       success(function(data) {
         console.log(data);
         for(var i = 0; i<data.length; i++){
           if(data[i].feed.user.imageUrl == null){
           data[i].feed.user.imageUrl = "img/person/per.png";
           }
           if(data[i].reply.length > 0){
               if(data[i].reply[0].user.imageUrl == null)
               data[i].reply[0].user.imageUrl = "img/person/per.png";
           }
         };
         $scope.feedlist = data;
  });
  $http.get(ClientProxy.url + '/gamseong/locations/area/code').
    success(function(data){
      $scope.triplist = data.slice(2);
    });

})
.controller('ProfileIntCtrl', function($scope) {
  console.log("관심여행지다");
  $scope.intlist = [
    { title: "전주야행", date: "2016년 12월 10일" , venue : "전주한옥마을", id : 1},
    { title: "부산광안리", date: "2016년 11월 20일" , venue : "부산시 남구 광안리길", id : 2},
    { title: "남산타워", date: "2016년 11월 28일" , venue : "서울 중구 남산타워길", id : 3}
  ];
});
