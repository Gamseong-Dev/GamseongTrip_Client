//세팅 페이지
angular.module('gamseong.profile-controllers', [])
.controller('ProfileFeedCtrl', function($scope, $window, $http, ClientProxy) {
  console.log("내게시글이다");

  var userId = $window.localStorage.getItem("id");
  console.log(userId);
  $http.get(ClientProxy.url + '/gamseong/feeds/users/' + userId).
       success(function(data) {
         console.log(data);
         $scope.feedlist = data;
  });

})

.controller('ProfileAFeed', function($scope, $stateParams) {
  console.log("각 피드글이다.");
})
.controller('ProfileTripCtrl', function($scope) {
  console.log("나의여행지다");
  $scope.triplist = [
    { title: "부산", contents: "제목 1에 들어갈 텍스트 내용" , like : "5", id : 1},
    { title: "광주", contents: "테스트임2" , like : "5", id : 2},
    { title: "서울", contents: "테스트임3" , like : "5", id : 3}
  ];
})
.controller('ProfileIntCtrl', function($scope) {
  console.log("관심여행지다");
  $scope.intlist = [
    { title: "관심지테스트중부산", contents: "제목 1에 들어갈 텍스트 내용" , like : "5", id : 1},
    { title: "관심지 02", contents: "테스트임2" , like : "5", id : 2},
    { title: "관심지03", contents: "테스트임3" , like : "5", id : 3}
  ];
});
