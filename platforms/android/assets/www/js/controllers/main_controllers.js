angular.module('gamseong.main-controllers', [])

// Feed Controller
.controller('MainCtrl', function($scope, $cordovaOauth,  $q ,$location, $ionicModal, ClientProxy, $http, $window, $ionicLoading, facebookService) {

  var user;
  var facebookUser;

  $scope.fbLogin = function () {
    var authResponse;
    var isAuth = false;

    $cordovaOauth.facebook('210753882669143', ['email']).then(function(result) {
      authResponse = result.access_token;
      debugger;
      getMyInfo(authResponse);
    }, function(error) {
      alert("There was a Facebook login problem signing in! See the console for logs");
      console.log(error);
    });


    var getMyInfo = function (access_token) {
      $http.get("https://graph.facebook.com/v2.5/me", {params: {access_token: access_token,
        fields: "id,email,name,gender", format: "json" }}).then(function (result) {
          console.log(result);
          facebookUser = {
              id : result.data.id
             , account: result.data.email
             , name : result.data.name
             , gender : result.data.gender
             , imageUrl : "http://graph.facebook.com/"+ result.data.id +"/picture?width=270&height=270"
           };
          auth(facebookUser);
      }, function(error) {
        alert("Error: " + error);
      });
    };
/*

    $cordovaFacebook.getLoginStatus(function(response) {

              if (response.status == 'connected') {
                  authResponse = response;
                  alert("success");
                  //getUser(response);
              }
              else {
                alert("fail");
                $ionicLoading.hide();
                $cordovaFacebook.login({scope: 'public_profile,email'}).then(
                    function (response) {
                        if (response.status === 'connected') {

                        } else {
                            alert('Facebook login failed');
                        }
                    });
              }
          });

    facebookService.getMyInfo()
           .then(function(authResponse) {
            console.log(authResponse);
            facebookUser = {
                id : authResponse.id
               , account: authResponse.email
               , name : authResponse.name
               , gender : authResponse.gender
               , imageUrl : "http://graph.facebook.com/"+ authResponse.id +"/picture?width=270&height=270"
             };
            auth(facebookUser);
          });*/
  //  facebookService.setUser(user);
}

var getUser = function(response){
facebookService.getMyInfo()
       .then(function(response) {
        console.log(response);
        facebookUser = {
            id : response.id
           , account: response.email
           , name : response.name
           , gender : response.gender
           , imageUrl : "http://graph.facebook.com/"+response.id +"/picture?width=270&height=270"
         };
        auth(facebookUser);
       });
  }

  var auth = function(user){
    facebookService.setUser(user);
  };

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.user={
           account : ""
           ,password : ""
           ,name : ""
     };
    $scope.loginModal.show();
  };

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.signupModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSignup = function() {
    $scope.signupModal.hide();
  };

  // Open the login modal
  $scope.signup = function() {
    $scope.user={
           account : ""
           ,password : ""
           ,name : ""
     };
    $scope.signupModal.show();
  };


  $scope.user={
         account : ""
         ,password : ""
         ,name : ""
   };

  $scope.doLogin = function(){

    var param = {
        account: $scope.user.account
      , password: $scope.user.password
    };
      $http.post(ClientProxy.url + '/gamseongAccounts/users/login', param)
      .success(function (data){
        if(data.result == "success"){
            $window.localStorage.setItem("token",data.user.tokenKey);
            $window.localStorage.setItem("email",data.user.account);
            $window.localStorage.setItem("id",data.user.id);
            $window.localStorage.setItem("name",data.user.name);
            if(data.user.imageUrl != null){
              $window.localStorage.setItem("img",data.user.imageUrl);
            }
            else{
              $window.localStorage.setItem("img","../img/person/per.png");
            }
            $http.get(ClientProxy.url + '/gamseong/locations/code').
                 success(function(data) {
                   console.log(data);
                   $window.localStorage.setItem("code", JSON.stringify(data));
             }).
                 error(function(data, status, headers, config) {
                   console.log(ClientProxy.url);
            });
            $location.path('/app/feed/list/');
            $window.location.reload();
        }
        else if (data.result == "half") {
          alert("메일 인증을 해주세요.");
        }
        else{
          alert("아이디 또는 패스워드가 틀립니다.");
        }
      })
  };

  $scope.doJoin = function(){

    var pass = $scope.user.password;
    var passConfirm = $scope.user.passwordConfirm;
    if(pass != passConfirm) alert("패스워드가 다릅니다.");
    else {
      var param = {
        account: $scope.user.account
       , password: pass
       , name: $scope.user.nickname
      };
      $ionicLoading.show();
      console.log(param);
        $http
        .post(ClientProxy.url + '/gamseongAccounts/users', param)
        .success(function (data){
         console.log(data);
         $ionicLoading.hide();
          if(data.result == "success"){
               alert("회원가입이 되었습니다.")
            }
          else{
              alert("실패하였습니다.")
          }
            $scope.signupModal.hide();
          })
      }
    }
    $http.get(ClientProxy.url + '/gamseong/locations/code').
         success(function(data) {
           console.log(data);
           $window.localStorage.setItem("code", JSON.stringify(data));
     }).
         error(function(data, status, headers, config) {
           console.log(ClientProxy.url);
    });
});
