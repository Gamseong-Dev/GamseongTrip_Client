/*
 * Controller for feed
 *
 * 2016.10.20
 * author : Shim
 */
angular.module('gamseong.feed-controllers', [])

// Feed Controller
.controller('FeedCtrl', function($scope, $stateParams, ClientProxy, $http) {

	console.log($stateParams.id);
	$http.get(ClientProxy.url + '/gamseong/feeds/' + $stateParams.id).
			 success(function(data) {
				 console.log(data);
				 $scope.data = data;
	 }).
			 error(function(data, status, headers, config) {
				 console.log(ClientProxy.url);
	});

})

// Feed List Controller
.controller('FeedListCtrl', function($scope,$window, $ionicModal, $http, ClientProxy, GeoService) {
	GeoService.locationCode()

	if($window.localStorage.getItem("id") != null){
		$http.get(ClientProxy.url + '/gamseong/feeds/locations/'+$window.localStorage.getItem("id")).
				 success(function(data) {
					 console.log(data);
					 $scope.feedList = data;
		 }).
				 error(function(data, status, headers, config) {
					 console.log(ClientProxy.url);

		});
	}

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

	// Create the login modal that we will use later
$ionicModal.fromTemplateUrl('templates/feed/feed_writer.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		$scope.writerClose = function() {
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.writerOpen = function() {
			console.log("writer 모달업")
			$scope.modal.show();
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

	$ionicModal.fromTemplateUrl('templates/modal/message_send.html', {
		scope : $scope
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
	//
	// $scope.openMessage = function() {
	// 	console.log("쪽지");
	// 	$scope.messageModal.show();
	// };
	//
	// $scope.closeMessage = function() {
	// 	$scope.messageModal.hide();
	// };
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
	$scope.messageList = [ {
		message : "상운님이 어느 여행지가 제일 좋았어요?",
		id : 1
	}, {
		message : "부산은 어때요?",
		id : 2
	}, {
		message : "서울 맛집 추천 부탁드려요~",
		id : 3
	} ];
})
.controller('MessageSingleCtrl', function($scope, $stateParams, $ionicModal) {
	$scope.messageSingle =  {
		from: "이유경",
		to: "이상운",
		message : "상운님이 어느 여행지가 제일 좋았어요?",
		id : 1
	};
	$ionicModal.fromTemplateUrl('templates/modal/message_send.html', {
		scope : $scope
	}).then(function(messageModal) {
		$scope.messageModal = messageModal;
	});
});

// , {
// 	from: "최정민",
// 	to: "이상운",
// 	message : "부산은 어때요?",
// 	id : 2
// }, {
// 	from: "김건우",
// 	to: "이상운",
// 	message : "서울 맛집 추천 부탁드려요~",
// 	id : 3
// }
