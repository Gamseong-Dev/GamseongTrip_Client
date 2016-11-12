angular.module('gamseong.facebook-services', [])
.factory('facebookService', function($q, $http, ClientProxy, $window, $location) {

    return {
        auth: function(){
        var res;
          FB.getLoginStatus(function(response) {
            res = response;
          });
          return res;
        }
        ,getMyInfo: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: ['id','name','email','gender']
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
        ,setUser: function(param) {
          console.log(param);
          $http.post(ClientProxy.url + '/gamseongAccounts/users/facebook ', param)
          .success(function (data){
            console.log(data);
            if(data.result == "success"){
                $window.localStorage.setItem("token",data.user.tokenKey);
                $window.localStorage.setItem("email",data.user.account);
                $window.localStorage.setItem("id",data.user.id);
                $window.localStorage.setItem("name",data.user.name);
                if(data.user.imageUrl != null){
                $window.localStorage.setItem("img",data.user.imageUrl);
                }
                $location.path('/app/feed/list/');
                $window.location.reload();
           }
         });
       }
     }
});
