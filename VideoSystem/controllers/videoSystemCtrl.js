MACodingClubVideoSystem.controller('VideoSystemCtrl', ['$scope', 'videoService', function VideoSystemCtrl ($scope, videoService){
    // $scope.videoObject = videoService[0].videoObject;
    $scope.videoObjectArray = videoService.getAllVideos();                    
        $scope.addVideoObject = function addVideoObject(videoObject){
        $scope.videoObjectArray.push(videoObject)
        document.getElementById("myForm").reset();
    }
}])