//세팅 페이지
angular.module('gamseong.profile-controllers', [])
.controller('ProfileFeedCtrl', function($scope, $window, $http, ClientProxy, $ionicModal, $ionicLoading) {
  console.log("내게시글이다");
  var userId = $window.localStorage.getItem("id");
  console.log(userId);

  $http.get(ClientProxy.url + '/gamseong/feeds/users/' + userId).
       success(function(data) {
         console.log(data);
         for(var i = 0; i<data.length; i++){
            if(data[i].feed.user.imageUrl == null){
            data[i].feed.user.imageUrl = "img/person/per.png";
            }
            if(data[i].feed.imgUrl != null){
              data[i].feed.imgUrl = ClientProxy.url + data[i].feed.imgUrl;
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
         $scope.feedlist = data;
  });


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

  $http.get(ClientProxy.url + '/gamseong/locations/users/'+userId).
    success(function(data){
      $scope.triplist = data;
    });

})
.controller('ProfileIntCtrl', function($scope) {
  console.log("관심여행지다");
  $scope.intlist = [
    { title: "전주야행", date: "2016년 12월 10일" , venue : "전주한옥마을", id : 1},
    { title: "부산광안리", date: "2016년 11월 20일" , venue : "부산시 남구 광안리길", id : 2},
    { title: "남산타워", date: "2016년 11월 28일" , venue : "서울 중구 남산타워길", id : 3}
  ];
});
