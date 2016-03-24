app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'img/cbj.svg'
      },
      comment: {
        img: 'img/waves.jpeg',
        text: 'The ocean is equal parts scary and beautiful'
      }
    },


    {
      author: {
        name: 'Matthew Healy',
        avatar: 'img/mh.svg'
      },
      comment: {
        text: 'I used to dream I was wise.  I like to sleep smart.'
      }
    }
  ]
}]);