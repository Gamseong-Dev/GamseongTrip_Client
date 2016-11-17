//세팅 페이지
angular.module('gamseong.setting-controllers', [])
.controller('SettingCtrl', function($scope, $ionicModal) {
  console.log("세팅이다");
  $ionicModal.fromTemplateUrl('templates/modal/setting.html', {
		scope : $scope
	}).then(function(settingModal) {
		$scope.settingModal = settingModal;
	});

  $ionicModal.fromTemplateUrl('templates/login/signDetail.html', {
		scope : $scope
	}).then(function(detailModal) {
		$scope.detailModal = detailModal;
	});
  $scope.year = ["1994","1993","1992","1991", "1990", "1989"];
  $scope.month = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];


  $scope.pushNotiChange = function() {
    console.log('Push Notification Change', $scope.pushNoti.checked);
  };
  $scope.pushNoti = { checked: true };
  $scope.messageNoti = '쪽지수신';

});
