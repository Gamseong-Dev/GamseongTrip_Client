// 지역 정보 이벤트
angular.module('gamseong.weeklyBest', [])
.controller('WeeklyBestCtrl', function($scope, $ionicLoading, $http) {
  console.log("weeklyBest 정보");
  $scope.bestFeed = [
    {
      user: '이유경',
      location: '서울',
      like: '200',
      ranking: '1',
      content: '서울의 명소라고 갔는데 화장품가게밖에 없네요 --...',
    },
    {
      user: '이유경',
      location: '부산',
      like: '176',
      ranking: '2',
      content: '역시 광안대교는 밤에 보는것이 쵝오지예~~~',
    },
    {
      user: '이상운',
      location: '속초',
      like: '132',
      ranking: '3',
      content: '아싸 포켓몬ㅋㅋㅋㅋㅋ',
    }
  ];
  $scope.bestLocation = [
    {
      city: '서울',
      location: '남산타워',
      content: '우하하하하'
    },
    {
      city: '부산',
      location: '광안리',
      content: '우하하하2222'
    },
    {
      city: '대구',
      location: '김광석거리',
      content: '우하하3333'
    }
  ];
  $scope.bestEvent = [
    {
      city: '서울',
      location: '신촌',
      content: '물총놀이'
    },
    {
      city: '서울',
      location: '이태원',
      content: '할로윈'
    },
    {
      city: '경기',
      location: '지산',
      content: '락페스티벌'
    }
  ];
});
