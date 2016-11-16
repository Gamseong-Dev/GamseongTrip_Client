angular.module('gamseong.reply-controllers', [])


.controller('ReplyListCtrl', function($scope, $stateParams, ClientProxy, $http) {
	var feedId = $scope.feedId

	$scope.doReplyWrite = function(){

			var param = {
					feedId: $scope.feedId,
					userId: $scope.userId,
					contents: $scope.content
			};

			$http.post(ClientProxy.url + '/gamseong/replies',param)
			.success(function (data){
				console.log(data);

				if(data.result == "success") {
					alert("입력하였습니다.");
					$scope.messageModal.hide();
				}
				else{
					alert("실패하였습니다.");
				}
			})
			.error(function (data, status) {
					//error handler
					alert("실패하였습니다.");
				});
			};


	$http.get(ClientProxy.url + '/gamseong/replies/feeds/' + $scope.feedId).
			 success(function(data) {
				 console.log(data);
				 $scope.replyList = data;
	 }).
			 error(function(data, status, headers, config) {
				 console.log(ClientProxy.url);
	});

})
