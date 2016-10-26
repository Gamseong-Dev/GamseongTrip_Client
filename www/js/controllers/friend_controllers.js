angular.module('gamseong.friend-controllers', [])
.controller('FriendlistCtrl', function($scope) {
  console.log("피드정보다");
  $scope.friends = [
    { name: "심홍규",  id : 1 , email : "honggu@hong.com"},
    { name: "김건우",  id : 2 , email : "honggus@hong.com"},
    { name: "등등등",  id : 3 , email : "honggu@hong.com"}
  ]; //테스트 데이터 임 이거 서버에서 가져온거를 너어서 클라이언트에서 사용하면댬
})
.controller('FriendCtrl', function($scope, $stateParams) {
  console.log("피드개인정보다");

});
