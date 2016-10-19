//피드 메뉴에 있는것들
angular.module('gamseong.feed-controllers', [])
.controller('FeedlistCtrl', function($scope) {
  console.log("피드정보다");
  $scope.feedlist = [
    { title: "제목01", contents: "제목 1에 들어갈 텍스트 내용" , like : "5", id : 1},
    { title: "테스트02", contents: "테스트임2" , like : "5", id : 2},
    { title: "테스트03", contents: "테스트임3" , like : "5", id : 3}
  ]; //테스트 데이터 임 이거 서버에서 가져온거를 너어서 클라이언트에서 사용하면댬
})
.controller('FeedCtrl', function($scope, $stateParams) {
})
.controller('AlarmCtrl', function($scope) {
  $scope.alarmlist = [
    { contents: "상운님이 좋아요를 했습니다." , id : 1},
    { contents: "테스트임" , id : 2},
    { contents: "으앗똿 터졌씁니다.", id : 3}
  ]; //테스트
})
.controller('FavoritesCtrl', function($scope, $stateParams) {
});
