// 지역 정보 이벤트
angular.module('gamseong.local-controllers', [])
.controller('LocallistCtrl', function($scope) {
  console.log("로컬정보다");
  $scope.eventlist = [
    { title: "수원", contents: "테스트임" , like : "5", id : 1},
    { title: "수원이다", contents: "테스트임" , like : "5", id : 2},
    { title: "으아 파티다", contents: "테스트임" , like : "5", id : 3}
  ]; //테스트 데이터 임 이거 서버에서 가져온거를 너어서 클라이언트에서 사용하면댬
});
