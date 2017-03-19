MACodingClubVideoSystem.controller('VideoSystemCtrl', ['$scope', 'videoService', function($scope, videoService){
    // $scope.videoObject = videoService[0].videoObject;
    $scope.videoObjectArray = [];
    console.log(videoService[0])
    if(videoService[0]){
        $scope.videoObjectArray.push(videoService[0].videoObject);
        console.log($scope.videoObjectArray[0].videoObject)
    } else (
        console.log('Something does not work!')
    )

    $scope.addVideoObject = function addVideoObject(videoObject){
        $scope.videoObjectArray.push(videoObject)
    }
    
    $scope.comments = $scope.videoObjectArray[0].comments;
    
}])