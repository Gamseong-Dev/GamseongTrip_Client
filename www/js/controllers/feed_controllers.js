/*
 * Controller for feed
 *
 * 2016.10.20
 * author : Shim
 */
angular.module('gamseong.feed-controllers', [])

// Feed Controller
.controller('FeedCtrl', function($scope, $stateParams) {
})

// Feed List Controller
.controller('FeedListCtrl', function($scope, $ionicModal) {

	// Control Feed List
	$scope.feedList = [ {
		id : 1,
		location : "경상남도 > 통영시",
		name : "심홍규",
		contents : "테스트임",
		like : "5",
		date : "2016-10-17"
	}, {
		id : 2,
		location : "제주도 > 북제주군",
		name : "이상운",
		contents : "테스트임",
		like : "5",
		date : "2016-10-18"
	}, {
		id : 3,
		location : "제주도 > 북제주군",
		name : "이유경",
		contents : "테스트임",
		like : "5",
		date : "2016-10-19"
	}, {
		id : 4,
		location : "전라남도 > 순천시",
		name : "최정민",
		contents : "테스트임",
		like : "5",
		date : "2016-10-20"
	}, {
		id : 5,
		location : "서울특별시 > 동대문구",
		name : "한은탁",
		contents : "테스트임",
		like : "5",
		date : "2016-10-21"
	} ];

	var isLike = false;
	// Control Inner Tab
	$scope.toggleLike = function() {
		if(isLike){
			isLike = false;
			console.log("like++");
			// TODO Update Table
		} else {
			isLike = true;
			console.log("like--");
			// TODO Update Table
		}



	};

	// Control Modal
	$ionicModal.fromTemplateUrl('templates/modal/location_search.html', {
		scope : $scope,
		animation : 'slide-in-down'	// FiXME
	}).then(function(searchModal) {
		$scope.searchModal = searchModal;
	});

	$ionicModal.fromTemplateUrl('templates/modal/location_search.html', {
		scope : $scope,
		animation : 'slide-in-up'
	}).then(function(replyModal) {
		$scope.replyModal = replyModal;
	});

	$ionicModal.fromTemplateUrl('templates/modal/location_search.html', {
		scope : $scope,
		animation : 'slide-in-up'
	}).then(function(messageModal) {
		$scope.messageModal = messageModal;
	});

	$scope.openSearch = function() {
		console.log("모달 업 !!");
		$scope.searchModal.show();
	};

	$scope.closeSearch = function() {
		console.log("모달 다운");
		$scope.searchModal.hide();
	};

	$scope.openReply = function() {
		console.log("댓글");
		$scope.replyModal.show();
	};

	$scope.closeReply = function() {
		$scope.replyModal.hide();
	};

	$scope.openMessage = function() {
		console.log("쪽지");
		$scope.messageModal.show();
	};

	$scope.closeMessage = function() {
		$scope.messageModal.hide();
	};
})

// Alarm Controller
.controller('AlarmCtrl', function($scope) {
	$scope.alarmList = [ {
		contents : "상운님이 좋아요를 했습니다.",
		id : 1
	}, {
		contents : "테스트임",
		id : 2
	}, {
		contents : "으앗똿 터졌씁니다.",
		id : 3
	} ];
})

// Message Controller
.controller('MessageCtrl', function($scope, $stateParams) {
});
