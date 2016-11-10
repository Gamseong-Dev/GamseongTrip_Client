angular.module('gamseong.reply-controllers', [])

// Feed Controller
.controller('replyListCtrl', function($scope, $stateParams, ClientProxy, $http, feedId) {

	console.log(feedId);
	$http.get(ClientProxy.url + '/gamseong/replies/feeds/' + feedId).
			 success(function(data) {
				 console.log(data);
				 $scope.data = data;
	 }).
			 error(function(data, status, headers, config) {
				 console.log(ClientProxy.url);
	});

})
