var FormController = function($scope) {

	$scope.message = "msg";
	$scope.remaining = 100 - $scope.message.length;
	$scope.remainingStyle = {};

	$scope.$watch('message', function(newVal, oldVal) {
		if(newVal != oldVal){
			// if($scope.message.length > 100){
			// 	$scope.message = $scope.message.slice(0,99);
			// }
			$scope.remaining = Math.max(0, 100 - $scope.message.length)  ;
		}
	})

	$scope.overflow = function() {
		return $scope.message.length > 100;
	};
	$scope.empty = function() {
		return $scope.message.length == 0;
	};
	$scope.clear = function() {
		$scope.message = "";
	};

	$scope.send = function() {
		console.log("button send !")
	};

};





