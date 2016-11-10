angular.module('gamseong.search-services', [])

.factory('SearchService', function($q, $timeout, $window) {

  var locations = JSON.parse($window.localStorage.getItem("code"));

  console.log(locations);
  locations = locations.sort(function(a, b) {
      var locationA = a.name.toLowerCase();
      var locationB = b.name.toLowerCase();

      if(locationA > locationB) return 1;
      if(locationA < locationB) return -1;
      return 0;
    });

    var searchData= function(searchFilter) {
        console.log('Searching airlines for ' + searchFilter);
        var deferred = $q.defer();

  	    var matches = locations.filter( function(location) {

	    	if(location.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;
	    });

        $timeout( function(){
           deferred.resolve( matches );
        }, 100);
        return deferred.promise;

    };
    return {
        searchData : searchData
    }
})
