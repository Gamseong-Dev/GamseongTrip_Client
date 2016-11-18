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

	$reply.user.imageUrl = "img/person/per.png";
	$feeds.feed.user.imageUrl = "img/person/per.png";
	$scope.feedImg = null;

	$scope.isTab = function(){
		return true;
	}
	$ionicLoading.show();
	console.log($stateParams.id);
	$http.get(ClientProxy.url + '/gamseong/feeds/' + $stateParams.id).
			 success(function(data) {
				 $ionicLoading.hide();
				 $scope.data = data;
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
	$ionicActionSheet, $timeout, $cordovaFileTransfer, $cordovaFile, $cordovaDevice) {

	var page = 1;
	var localId;
	var userId = $window.localStorage.getItem("id");
	var userName = $window.localStorage.getItem("name");
	var myLocalId = $window.localStorage.getItem("locId");
	var address =  $window.localStorage.getItem("address");
	var param = $stateParams.id;
	console.log(userId);

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
			$http.get(ClientProxy.url + '/gamseong/feeds/locations/' + localId).
					 success(function(data) {
						 console.log(data);

						 for(var i = 0; i<data.length; i++){
								if(data[i].feed.user.imageUrl == null){
								data[i].feed.user.imageUrl = "img/person/per.png";
							  }
								if(data[i].userLikeStatus == 1) {
									data[i].userLikeStatus = i;
										data[i].likeBtn = false;
								}
								else{
									data[i].likeBtn = true;
								}

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
			$http.get(ClientProxy.url + '/gamseong/feeds/locations/' + localId).
					 success(function(data) {
						 console.log(data);

						 console.log(data[1].feed);
						 for(var i = 0; i<data.length; i++){
								if(data[i].feed.user.imageUrl == null){
									data[i].feed.user.imageUrl = "img/person/per.png";
								}
								if(data[i].userLikeStatus == 1) {
									data[i].userLikeStatus = i;
										data[i].likeBtn = false;
								}
								else{
									data[i].likeBtn = true;
								}
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
	//	var feedImg = $scope.feedImg;
//		var feedImg = "img/person/per.png";
		var feedImgUrl = $scope.uploadImage();

		var param = {
				feed : {
					userId:  userId
					,contents: $scope.writer.contents
					,locationId: myLocalId
					,address: address
					,sticker :[]
					,imgUrl : feedImgUrl.reason
				}
		};

		$http.post(ClientProxy.url + '/gamseong/feeds',param
	/*	,{headers: { 'Content-Type': 'application/json; charset=UTF-8'
	,'s-Id' : 'asd'
	,'s-token': 'asd'}}*/)
		.success(function (data, status, headers, config){
			console.log(config);
			console.log(data);
			console.log(status);
			console.log(headers);
			if(data.result == "success") {
				alert("입력하였습니다.");
				$scope.modal.hide();
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

	$scope.uploadImage = function() {
	// Destination URL
		var url = ClientProxy.url + "/gamseong/feeds/img";
	  var result;
		// File for Upload
		var targetPath = $scope.pathForImage($scope.image);
    alert(targetPath);
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
			.then(function(response) {
				alert('Success'+ response + 'Image upload finished.');
				result = response;
			});
			return result;
		}

		$scope.takeImg = function () {

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
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
					alert(currentName);
		    // If you are trying to load image from the gallery on Android we need special treatment!
		    if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {

		      window.FilePath.resolveNativePath(imagePath, function(entry) {
		        window.resolveLocalFileSystemURL(entry, success, fail);
		        function fail(e) {
		          console.error('Error: ', e);
		        }

		        function success(fileEntry) {
		          var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
		          // Only copy because of access rights
		          $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success){
								$scope.image = newFileName;
									alert(newFileName+"kjkjkj");
		          }, function(error){
		            $scope.showAlert('Error', error.exception);
		          });
		        };
		      });

		    } else {

		      var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
		      // Move the file to permanent storage
		      $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
							alert(newFileName);
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
			console.log(config);
			console.log(data);
			console.log(status);
			console.log(headers);
			if(data.result == "success") {
				alert("업데이트하였습니다.");
				$scope.modal.hide();
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

	$scope.doDelete = function(){

	}

	$scope.noMoreItemsAvailable = false;

	$scope.getPage = function(){
		page++;
		//$ionicLoading.show()
		$http.get(ClientProxy.url + '/gamseong/feeds/locations/' + localId
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

					if(datas[i].userLikeStatus == 1) datas[i].userLikeStatus = ((page * 10)+i);

					if(datas[i].reply.length > 0){
						if(datas[i].reply[0].user.imageUrl == null)
						datas[i].reply[0].user.imageUrl = "img/person/per.png";
					}

				 $scope.feedList.push(datas[i]);
			 };
		 });
		$scope.$broadcast('scroll.infiniteScrollComplete');
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
				alert("입력하였습니다.");
				$scope.messageModal.hide();
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
