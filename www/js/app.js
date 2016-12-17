// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('gamseong', [
  'ionic'
, 'ngCordovaOauth'
, 'ngCordova'
, 'gamseong.controllers'
, 'gamseong.feed-controllers'
, 'gamseong.local-controllers'
, 'gamseong.setting-controllers'
, 'gamseong.friend-controllers'
, 'gamseong.profile-controllers'
, 'gamseong.login-controllers'
, 'gamseong.reply-controllers'
, 'gamseong.main-controllers'
, 'gamseong.weeklyBest'
, 'gamseong.geo-services'
, 'gamseong.search-services'
, 'gamseong.facebook-services'
, 'gamseong.autocomplete_directive'
, 'gamseong.directive'
])

.constant('ClientProxy', {
  url: 'http://52.78.110.20:8080'
  //url: 'http://localhost:8080'
})

.run(function($ionicPlatform, $window, $http, ClientProxy ,GeoService, $cordovaFacebook) {

/*  $window.fbAsyncInit = function() {
      FB.init({
        appId: '210753882669143',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.3'
      });
  };*/

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

      if (cordova.platformId == "browser") {
        var appID = '210753882669143';
        var version = "v2.0";
      //  $cordovaFacebook.browserInit(appID, version);
        facebookConnectPlugin.browserInit('210753882669143');
      }
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $cordovaFacebookProvider) {

  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('gamseong', {
      url: '/gamseong',
      templateUrl: 'templates/main.html',
      controller : 'MainCtrl'
  })
  .state('app.feed', {
      url: '/feed',
      views: {
        'menuContent': {
          templateUrl: 'templates/feed/feed_tabs.html'
        }
      }
  })
  .state('app.feed.list', {
      url: '/list/:id',
      views: {
        'tab-list': {
          templateUrl: 'templates/feed/feed_list.html',
          controller: 'FeedListCtrl'
        }
      }
  })
  .state('app.feed.feed-single', {
      url: '/single/:id',
      views: {
        'tab-list': {
          templateUrl: 'templates/feed/feed_single.html',
          controller: 'FeedCtrl'
        }
      }
  })
  .state('app.feed.local-search', {
      url: '/search',
      views: {
        'tab-list': {
          templateUrl: 'templates/feed/local_search.html',
          controller: 'LocalSearchCtrl'
        }
      }
  })
  .state('app.feed.alarm', {
      url: '/feed/alarm',
      views: {
        'tab-alarm': {
          templateUrl: 'templates/feed/alarm.html',
          controller: 'AlarmCtrl'
        }
      }
  })
  .state('app.feed.message', {
      url: '/message',
      views: {
        'tab-message': {
          templateUrl: 'templates/feed/message.html',
          controller: 'MessageCtrl'
        }
      }
  })
  .state('app.feed.message-single', {
      url: '/message/:id',
      views:{
        'tab-message':{
          templateUrl: 'templates/feed/message_single.html',
          controller: 'MessageSingleCtrl'
        }
      }
  })
  .state('app.localEvent', {
      url: '/local',
      views: {
        'menuContent': {
          templateUrl: 'templates/local/local_event_list.html',
          controller: 'LocallistCtrl'
        }
      }
  })
  //weekly감성Best 관련된 것
  .state('app.wBest', {
      url: '/wbest',
      views: {
        'menuContent': {
          templateUrl: 'templates/weeklyBest/best.html',
          controller:'WeeklyBestCtrl'
        }
      }
  })
  .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          templateUrl: 'templates/setting/setting_default.html',
          controller: 'SettingCtrl'
        }
      }
  })
  // profile과 관련된 js
  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile/profile_body.html',
          controller: 'ProfileFeedCtrl'
        }
      }
  })
  .state('app.profile.feed', {
      url: '/feed',
      views: {
        'inception': {
          templateUrl: 'templates/profile/profile_feed.html',
          controller: 'ProfileFeedCtrl'
        }
      }
  })
  .state('app.profileFeed-single', {
      url: '/feed/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile/feed_single.html',
          controller: 'ProfileAFeed'
        }
      }
  })
  .state('app.profile.trip', {
      url: '/trip',
      views: {
        'inception': {
          templateUrl: 'templates/profile/profile_trip.html',
          controller: 'ProfileFeedCtrl'
        }
      }
  })
  .state('app.profile.int', {
      url: '/int',
      views: {
        'inception': {
          templateUrl: 'templates/profile/profile_int.html',
          controller: 'ProfileIntCtrl'
        }
      }
  })
  .state('app.friend', {
      url: '/friends',
      views: {
        'menuContent': {
          templateUrl: 'templates/friend/friend_list.html',
          controller: 'FriendlistCtrl'
        }
      }
  })
  .state('app.friend_single', {
        url: '/friends/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/friend/friend_single.html',
            controller: 'FriendCtrl'
          }
        }
  })
  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login/login.html',
          controller: 'LoginCtrl'
        }
      }
  });
  // 정민아 이부분 뭔지 모르겠다..ㅎㅎㅎ
  // .state('app.login', {
  //     url: '/login',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/login/login_tabs.html'
  //       }
  //     }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/feed/list/');
});
