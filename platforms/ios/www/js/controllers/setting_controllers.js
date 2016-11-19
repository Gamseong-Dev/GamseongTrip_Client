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

  $scope.pushNotiChange = function() {
    console.log('Push Notification Change', $scope.pushNoti.checked);
  };
  $scope.pushNoti = { checked: true };
  $scope.messageNoti = '쪽지수신';

});
