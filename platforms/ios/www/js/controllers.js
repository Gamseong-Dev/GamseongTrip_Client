angular.module('gamseong.controllers', [])

.controller('AppCtrl', function($scope, $http, $location,$ionicLoading, $ionicModal, $timeout, $window, GeoService, ClientProxy) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
 GeoService.localCode();
 $ionicLoading.show();
 //GeoService.locationCode()
 $scope.local = $window.localStorage.getItem("locName")
  // Form data for the login modal
 $scope.loginData = {};

 // Create the login modal that we will use later
 $ionicModal.fromTemplateUrl('templates/login.html', {
   scope: $scope
 }).then(function(modal) {
   $scope.modal = modal;
 });

 // Triggered in the login modal to close it
 $scope.closeLogin = function() {
   $scope.modal.hide();
 };

 // Open the login modal
 $scope.login = function() {
   $scope.modal.show();
 };

 $scope.options = {
   loop: false,
   effect: 'fade',
   speed: 500,
 }

var isLoggedIn;
var email = $window.localStorage.getItem("email");

if(email=='null'){
  isLoggedIn = false;
}
else{
  isLoggedIn = true;
  $scope.email = email;
  $scope.id = $window.localStorage.getItem("id");
  $scope.name =$window.localStorage.getItem("name");
  $scope.img = $window.localStorage.getItem("img");
}

  $scope.isLogged = function(){
  return isLoggedIn;
}

 $scope.user={
        account : ""
        ,password : ""
        ,name : ""
  };
 //login
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
           if(data.user.imageUrl.length > 10){
             console.log("장애냐 " + data.user.imageUrl.length);
           $window.localStorage.setItem("img",data.user.imageUrl);
           }
           else{
             console.log("아니냐? " + data.user.imageUrl.length);
             $window.localStorage.setItem("img","img/person/per.png");
           }
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

 $scope.doLogout = function(){
   var email = $window.localStorage.getItem("email");
   var token = $window.localStorage.getItem("token");
   var param = {
     account: email,
     tokenKey: token
   };
   console.log(param);
     $http
     .post(ClientProxy.url + '/gamseongAccounts/users/logout', param)
     .success(function (data){
       console.log(data);
           $window.localStorage.setItem("token",null);
           $window.localStorage.setItem("email",null);
           $window.localStorage.setItem("id",null);
           $window.localStorage.setItem("name",null);
           $window.localStorage.setItem("img",null);
           isLoggedIn = false;
           $location.path('/feed/list/');
           $window.location.reload();
     })
   };
})
