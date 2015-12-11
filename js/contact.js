angular.module('contact', [])
    .controller('contactCtrl', function($scope) {
        $scope.incomplete = true;
        $scope.emailIncomplete = true;
        $scope.phoneIncomplete = true;
        $scope.mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //phone number validation(XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX, XXXXXXXXXX)
        $scope.phoneformat= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        $scope.$watch('name', function() {$scope.test();});
        $scope.$watch('email', function() {$scope.test();});
        $scope.$watch('phone', function() {$scope.test();});
        $scope.$watch('message', function() {$scope.test();});

        $scope.test = function() {
            if (!$scope.name.length || !$scope.email.length || !$scope.mailformat.test($scope.email) ||
                !$scope.phone.length || !$scope.phoneformat.test($scope.phone) || !$scope.message.length){
                if(!$scope.mailformat.test($scope.email)){
                    $scope.emailIncomplete = false;
                }
                else if(!$scope.phoneformat.test($scope.phone)){
                    $scope.phoneIncomplete = false;
                }
                $scope.incomplete = true;
            }
            else {
                $scope.incomplete = false;
                $scope.emailIncomplete = true;
                $scope.phoneIncomplete = true;
            }
        };
    });
