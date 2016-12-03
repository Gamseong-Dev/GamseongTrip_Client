/*
 * Controller for feed
 *
 * 2016.10.20
 * author : Shim
 */
angular.module('gamseong.feed-controllers', [])

// Feed Controller
.controller('FeedCtrl', function($scope, $ionicModal, $window, $stateParams, ClientProxy, $http, $ionicLoading) {

	var userId = $window.localStorage.getItem("id");
	var userName = $window.localStorage.getItem("name");
	var reciveId;
	var reciveName;
	var imgUrl = null;

//	$reply.user.imageUrl = "img/person/per.png";
//	$feeds.feed.user.imageUrl = "img/person/per.png";
 $scope.feedImg = null;
 $scope.userName = userName;

 $ionicLoading.show();

 $http.get(ClientProxy.url + '/gamseong/feeds/' + $stateParams.id).
			 success(function(data) {
				 $ionicLoading.hide();
				 $scope.data = data;
				 $scope.imgUrl  =  ClientProxy.url + data.feed.imageUrl
				 userCall(data.feed.user.id,data.feed.user.name);
	});

	$ionicModal.fromTemplateUrl('templates/modal/message_send.html', {
			scope : $scope
	}).then(function(messageModal) {
			$scope.messageModal = messageModal;
	});

	$scope.messageOpen = function(id , name){
			var message ={
					reciveUser: {
							id : ""
							,name : ""
					},
					sendUser : {
							id : ""
							,name : ""
					}
			}
			message.reciveUser.id = reciveId;
			message.reciveUser.name = reciveName;
			message.sendUser.name = userName;
			message.sendUser.id = userId;

			$scope.message = message;
			$scope.messageModal.show();
		}

		var userCall = function(id, name) {
				reciveId = id;
				reciveName = name;
		}

		$scope.doSend = function(){

			var param = {
						reciveUserId: $scope.message.reciveUser.id
						,sendUserId: $scope.message.sendUser.id
						,contents: $scope.message.content
			};

			$http.post(ClientProxy.url + '/gamseong/messages',param)
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
			}
})

// Feed List Controller
.controller('FeedListCtrl', function(GeoService, $scope,$window, $ionicModal,
	$http, ClientProxy, $ionicLoading, $stateParams, $cordovaCamera,
	$ionicActionSheet, $timeout, $cordovaFileTransfer, $cordovaFile, $cordovaDevice, $cordovaActionSheet) {

	var page = 1;
	var localId;
	var userId = $window.localStorage.getItem("id");
	var userName = $window.localStorage.getItem("name");
	var myLocalId = $window.localStorage.getItem("locId");
	var address =  $window.localStorage.getItem("address");
	var param = $stateParams.id;
	var myLocalMotherId = $window.localStorage.getItem("locMotherId");

	$scope.writeType = false;
	$scope.writeUserName = userName;
	var proxy = ClientProxy;
	console.log(userId);

	$scope.feedSetting = function(feed) {
		var options = {
			title: '선택해주세요.',
		//	buttonLabels: ['수정', '삭제'],
			buttonLabels: ['삭제'],
			addCancelButtonWithLabel: 'Cancel',
			androidEnableCancelButton : true,
		};

		$cordovaActionSheet.show(options).then(function(btnIndex) {
			var type = null;
		/*	if (btnIndex === 1) {
				$scope.writeType = true;
				$scope.writerModal.show();
			} else if (btnIndex === 2) {
				doDelete(feed);
			}*/
			if (btnIndex === 1) {
				doDelete(feed);
			}
		});
	};

 	$scope.doRefresh = function() {
	$http.get(ClientProxy.url + '/gamseong/feeds/locations/' + localId + '/users/' + userId).
			 success(function(data) {
				 console.log(data);

				 for(var i = 0; i<data.length; i++){
						if(data[i].feed.user.imageUrl == null){
						data[i].feed.user.imageUrl = "img/person/per.png";
						}
						if(data[i].feed.imgUrl != null){
							data[i].feed.imgUrl = proxy.url + data[i].feed.imgUrl;
							console.log(data[i].feed.imgUrl)
						}
						if(data[i].userLikeStatus == 1) {
								data[i].likeBtn = false;
						}
						else{
							data[i].likeBtn = true;
						}
								data[i].userLikeStatus = i;
						if(data[i].reply.length > 0){
								if(data[i].reply[0].user.imageUrl == null)
								data[i].reply[0].user.imageUrl = "img/person/per.png";
						}
				 };
				 $scope.feedList = data;
	 }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
   });
}

	$scope.isUser =function(){
			console.log(userId);
			if(userId == null) return false;
			else return true;
	}

	if(param == ""){
		localId = myLocalId;
	}
	else {
		localId = param;
	}
	$ionicLoading.show();
	if(userId == null) alert("로그인을 해주세요.");
	else {
		if(myLocalId == localId){
			$scope.local = $window.localStorage.getItem("locName")
			$http.get(ClientProxy.url + '/gamseong/feeds/locations/' + localId + '/users/' + userId).
					 success(function(data) {
						 console.log(data);

						 for(var i = 0; i<data.length; i++){
								if(data[i].feed.user.imageUrl == null){
								data[i].feed.user.imageUrl = "img/person/per.png";
							  }
								if(data[i].feed.imgUrl != null){
									data[i].feed.imgUrl = proxy.url + data[i].feed.imgUrl;
									console.log(data[i].feed.imgUrl)
								}
								if(data[i].userLikeStatus == 1) {
										data[i].likeBtn = false;
								}
								else{
									data[i].likeBtn = true;
								}
										data[i].userLikeStatus = i;
								if(data[i].reply.length > 0){
										if(data[i].reply[0].user.imageUrl == null)
										data[i].reply[0].user.imageUrl = "img/person/per.png";
								}
						 };
						 $scope.feedList = data;
			 }).
					 error(function(data, status, headers, config) {
						 console.log(ClientProxy.url);
			});
		}
		else {
			$http.get(ClientProxy.url + '/gamseong/feeds/locations/' + localId + '/users/' + userId).
					 success(function(data) {
						 console.log(data);

						 for(var i = 0; i<data.length; i++){
								if(data[i].feed.user.imageUrl == null){
									data[i].feed.user.imageUrl = "img/person/per.png";
								}
								if(data[i].feed.imgUrl != null){
									data[i].feed.imgUrl = proxy.url + data[i].feed.imgUrl;
									console.log(data[i].feed.imgUrl)
								}
								if(data[i].userLikeStatus == 1) {
										data[i].likeBtn = false;
								}
								else{
									data[i].likeBtn = true;
								}
									data[i].userLikeStatus = i;
								if(data[i].reply.length > 0){
									if(data[i].reply[0].user.imageUrl == null)
									data[i].reply[0].user.imageUrl = "img/person/per.png";
								}
						 };
						 $scope.feedList = data;

			 }).
					 error(function(data, status, headers, config) {

			});
		}
		$http.get(ClientProxy.url + '/gamseong/events/locations/'+ myLocalMotherId).
			success(function(data){

				$scope.event = data[0];
		});
	}

	$ionicLoading.hide();
	$scope.like = function(id, count){

		var likeStaus = $scope.feedList[count].likeBtn;
		if(likeStaus == false) 	$scope.feedList[count].likeBtn = true;
		else 	$scope.feedList[count].likeBtn = false;

		$http.get(ClientProxy.url + '/gamseong/likes/feeds/'+ id + '/users/' + userId).
				 success(function(data) {
					  console.log(data);
					 if(data.result == "fail") alert("이미 좋아요 했습니다.");

				 });
	}

/*
 * write 공간
 */


	$scope.writer={
        contents: ""
   };

 	$scope.image = null;
	$scope.doWriter = function(){
		$ionicLoading.show()
	//	var feedImg = $scope.feedImg;
//		var feedImg = "img/person/per.png";
		if($scope.image != null)	{
			$scope.uploadImage();
		}
		else{
			imgUrl = null;
		}
		var param = {
				feed : {
					userId:  userId
					,contents: $scope.writer.contents
					,locationId: myLocalId
					,address: address
					,sticker :[]
					,imgUrl : imgUrl
				}
		};

		$http.post(ClientProxy.url + '/gamseong/feeds', param)
	/*	,{headers: { 'Content-Type': 'application/json; charset=UTF-8'
	,'s-Id' : 'asd'
	,'s-token': 'asd'}}*/
		.success(function (data, status, headers, config){
			$ionicLoading.hide();
			console.log(config);
			console.log(data);
			console.log(status);
			console.log(headers);
			if(data.result == "success") {
				alert("입력하였습니다.");
				$scope.modal.hide();
				$ionicLoading.show()
				$window.location.reload();
				$ionicLoading.hide();
			}
			else{
				alert("실패하였습니다.");
			}
		})
		.error(function (data, status) {
				//error handler
				$ionicLoading.hide();
				alert("실패하였습니다.");
		});
	}

	$scope.uploadImage = function() {
	// Destination URL
		var url = ClientProxy.url + "/gamseong/feeds/img";

		// File for Upload
		var targetPath = $scope.pathForImage($scope.image);
		// File name only
		var filename = $scope.image;

		var options = {
			fileKey: "file",
			fileName: filename,
			chunkedMode: false,
			mimeType: "multipart/form-data",
			params : {'fileName': filename}
		};

		$cordovaFileTransfer.upload(url, targetPath, options)
			.then(function(result) {
				$scope.res = JSON.parse(result.response);
				imgUrl = $scope.res.reason
			 	imgResponse ($scope.res.reason);
			});
		}

		var imgResponse = function (result) {
			imgUrl = result;
		}

		$scope.takeImg = function () {

		var sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,

    };
	    $cordovaCamera.getPicture(options).then(function(imagePath) {

	    //  imageData = "data:image/jpeg;base64," + imageData;
			var currentName = imagePath.replace(/^.*[\\\/]/, '');

		    //Create a new name for the photo
		    var d = new Date(),
		    n = d.getTime(),
		    newFileName =  n + ".jpg";

		    // If you are trying to load image from the gallery on Android we need special treatment!
		    if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {

		      window.FilePath.resolveNativePath(imagePath, function(entry) {
		        window.resolveLocalFileSystemURL(entry, success, fail);
		        function fail(e) {
		          console.error('Error: ', e);
		        }

		        function success(fileEntry) {
		          var namePath = fileEntry.nativeURL.substring(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
		          // Only copy because of access rights
		          $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success){
								$scope.image = newFileName;

		          }, function(error){
		            $scope.showAlert('Error', error.exception);
		          });
		        };
		      });

		    } else {

		      var namePath = imagePath.substring(0, imagePath.lastIndexOf('/') + 1);
		      // Move the file to permanent storage
		      $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success){

		      $scope.image = newFileName;
		      }, function(error){
		        $scope.showAlert('Error', error.exception);
		      });
		    }
	    }, function(err) {
	      // error
	    })
  };

	$scope.pathForImage = function(image) {
	  if (image === null) {
	    return '';
	  } else {
	    return cordova.file.dataDirectory + image;
	  }
	};


/*
* 업데이트 딜리트
*/

	$scope.update={
        feedId: ""
   };
	$scope.doUpdate = function(){

		var param = {
				feed : {
					id: $scope.update.feedId
					,userId: userId
					,contents: $scope.writer.contents
					,sticker :[]
				}
		};

		$http.put(ClientProxy.url + '/gamseong/feeds/'+feedId,param
	/*	,{headers: { 'Content-Type': 'application/json; charset=UTF-8'
	,'s-Id' : 'asd'
	,'s-token': 'asd'}}*/)
		.success(function (data, status, headers, config){
			if(data.result == "success") {
				alert("업데이트하였습니다.");
				$scope.modal.hide();
				$ionicLoading.show()
				$window.location.reload();
				$ionicLoading.hide()
			}
			else{
				alert("실패하였습니다.");
			}
		})
		.error(function (data, status) {
				//error handler
				alert("실패하였습니다.");
		});
	}

	var doDelete = function(feed){
		$http.delete(ClientProxy.url + '/gamseong/feeds/'+feed.id)
		.success(function (data, status, headers, config){
			if(data.result == "success") {
				alert("삭제하였습니다.");
				$ionicLoading.show()
				$window.location.reload();
				$ionicLoading.hide()
			}
			else{
				alert("실패하였습니다.");
			}
		})
		.error(function (data, status) {
				//error handler
				alert("실패하였습니다.");
		});
	}

	$scope.noMoreItemsAvailable = false;

	$scope.getPage = function(){
		page++;
		//$ionicLoading.show()
		$http.get(ClientProxy.url + '/gamseong/feeds/locations/' + localId + '/users/' + userId
		+ "?pageNum="+page).
			success(function(datas) {
					console.log(datas);
		//	$ionicLoading.hide()
			if(datas.length < 10) {
				$scope.plus= "더이상 데이터가 없습니다."
				$scope.noMoreItemsAvailable = true;
			}
			 for(var i = 0; i<datas.length; i++){

				 if(datas[i].feed.user.imageUrl == null){
						datas[i].feed.user.imageUrl = "img/person/per.png";
					}
					if(datas[i].feed.imgUrl != null){
						datas[i].feed.imgUrl = ClientProxy + datas[i].feed.imgUrl;
						console.log(datas[i].feed.imgUrl)
					}

					if(datas[i].userLikeStatus == 1){
						datas[i].likeBtn = false;
					}else{
							datas[i].likeBtn = true;
					}
					datas[i].userLikeStatus = ((page * 10)+i);

					if(datas[i].reply.length > 0){
						if(datas[i].reply[0].user.imageUrl == null)
						datas[i].reply[0].user.imageUrl = "img/person/per.png";
					}

				 $scope.feedList.push(datas[i]);
			 };
		 });
		 $http.get(ClientProxy.url + '/gamseong/events/locations/'+ myLocalMotherId).
 			success(function(data){

 				$scope.event = data[0];
 		});
		$scope.$broadcast('scroll.infiniteScrollComplete');
	}


	/*
	* 댓글
	*/

		$ionicModal.fromTemplateUrl('templates/feed/reply/reply.html', {
			scope: $scope
		}).then(function(replyModal) {
			$scope.replyModal = replyModal;
		});

		var replyFeedId;
		$scope.replyOpen = function(id) {
			  replyFeedId = id;
				$scope.userId = userId;
		    $scope.replyModal.show();
				$ionicLoading.show();
				$http.get(ClientProxy.url + '/gamseong/replies/feeds/' + id).
						 success(function(data) {
							 console.log(data);
							 $scope.replyList = data;
							 $ionicLoading.hide();
				 }).
						 error(function(data, status, headers, config) {
							 console.log(ClientProxy.url);
							  $ionicLoading.hide();
				});
		}
		$scope.replyClose = function(){
				$scope.replyModal.hide();
		}
	// replyModal
		$scope.reply = {
			content:""
		}
		$scope.doReplyWrite = function(){
			$ionicLoading.show();
			var param = {
					feedId: replyFeedId,
					userId: userId,
					contents: $scope.reply.content
			};
				console.log(param);
			$http.post(ClientProxy.url + '/gamseong/replies',param)
			.success(function (data){
				console.log(data);

				if(data.result == "success") {
					alert("입력하였습니다.");
					$window.location.reload();
					$scope.messageModal.show();
				}
				else{
					alert("실패하였습니다.");
				}
				$ionicLoading.hide();
			})
			.error(function (data, status) {
					//error handler
					alert("실패하였습니다.");
				});
				$ionicLoading.hide();
			};

	// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/feed/feed_writer.html', {
			scope: $scope
		}).then(function(writerModal) {
			$scope.writerModal = writerModal;
		});

		// Triggered in the login modal to close it
		$scope.writerClose = function() {
			$scope.writer.contents = "";
			$scope.feedImg = null;
			$scope.writerModal.hide();
		};

		// Open the login modal
		$scope.writerOpen = function() {
			if(myLocalId != localId) alert("내지역이 아니면 입력할수 없습니다.");
			else $scope.writerModal.show();
		};

	$ionicModal.fromTemplateUrl('templates/modal/message_send.html', {
		scope : $scope
	}).then(function(messageModal) {
		$scope.messageModal = messageModal;
	});

/*
* 쪽지
*/

	$scope.messageOpen = function(id,name){
		var message ={
				reciveUser: {
						id : ""
						,name : ""
				},
				sendUser : {
						id : ""
						,name : ""
				}
		}
		message.reciveUser.id = id;
		message.reciveUser.name = name;
		message.sendUser.name = userName;
		message.sendUser.id = userId;

		$scope.message = message;
		$scope.messageModal.show();
	}


	$scope.doSend = function(){

		var param = {
					reciveUserId: $scope.message.reciveUser.id
					,sendUserId: $scope.message.sendUser.id
					,contents: $scope.message.content
		};

		$http.post(ClientProxy.url + '/gamseong/messages',param)
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
		}


	$scope.show = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			buttons: [
				{ text: '<b>Share</b> This' },
				{ text: 'Move' }
			],
			destructiveText: 'Delete',
			titleText: 'Modify your album',
			cancelText: 'Cancel',
			cancel: function() {
					 // add cancel code..
				 },
			buttonClicked: function(index) {
				return true;
			}
		});
		$timeout(function() {
			hideSheet();
		}, 2000);
	};
})

.controller('LocalSearchCtrl', function($scope, $window, $http, SearchService) {

	$scope.data = { "locations" : [], "search" : '' };

	$scope.search = function() {

    	SearchService.searchData($scope.data.search).then(
    		function(matches) {
    			$scope.data.locations = matches;
    		}
    	)
    }

})
// Alarm Controller
.controller('AlarmCtrl', function($scope) {
	//GamseongPushServerr/

	$scope.alarmList = [ {

	} ];
})
// Message Controller
.controller('MessageCtrl', function($scope, $stateParams, $window, $http, ClientProxy) {

	var userId = $window.localStorage.getItem("id");

	$http.get(ClientProxy.url + '/gamseong/messages/recive/users/' + userId).
			 success(function(data) {
				 console.log(data);
				 $scope.messageList = data;
	 	 })
})

.controller('MessageSingleCtrl', function($scope,$http, ClientProxy, $stateParams, $window, $ionicModal) {

	var userId = $window.localStorage.getItem("id");

	$http.get(ClientProxy.url + '/gamseong/messages/' + $stateParams.id).
			 success(function(data) {
				 console.log(data);
				 $scope.message = data;
	 	 })

	$ionicModal.fromTemplateUrl('templates/modal/message_send.html', {
		scope : $scope
	}).then(function(messageModal) {
		$scope.messageModal = messageModal;
	});

	$scope.doSend = function(){

		var param = {
					sendUserId: userId
					,reciveUserId: $scope.message.sendUser.id
					,contents: $scope.message.content
		};

		$http.post(ClientProxy.url + '/gamseong/messages',param)
		.success(function (data){
			console.log(data);

			if(data.result == "success") {
				alert("보냈습니다.");
				$window.location.reload();
			}
			else{
				alert("실패하였습니다.");
			}
		})
		.error(function (data, status) {
				//error handler
				alert("실패하였습니다.");
		});
	}


});
