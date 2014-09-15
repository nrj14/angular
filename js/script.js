// We can listen to the 
// $locationChangeSuccess event (broadcasted from the $rootScope instance) 
// to be notified whenever a location (URL in a browser) changes, as given in the following code:

// Similar to the DOM events, we can call the preventDefault() and 
// stopPropagation() methods on event object. The stopPropagation() method 
// call will prevent an event from bubbling up the scopes' hierarchy, and is available 
// only for events dispatched upwards in the hierarchy ($emit).

var EventCtrl = function ($scope) {
	$scope.$on('$locationChangeStart', function(event, newUrl, oldUrl){
		console.log('location changed start!');
	});
	$scope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl){
		console.log('location changed success!');
	});
	console.log('EventCtrl');
	
};


// not working !! maybe rooting is needed : chack later !





