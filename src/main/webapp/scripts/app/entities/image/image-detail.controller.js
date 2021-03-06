'use strict';

angular.module('testApp')
    .controller('ImageDetailController', function ($scope, $rootScope, $stateParams, DataUtils, entity, Image, Space) {
        $scope.image = entity;
        $scope.load = function (id) {
            Image.get({id: id}, function(result) {
                $scope.image = result;
            });
        };
        var unsubscribe = $rootScope.$on('testApp:imageUpdate', function(event, result) {
            $scope.image = result;
        });
        $scope.$on('$destroy', unsubscribe);

        $scope.byteSize = DataUtils.byteSize;
    });
