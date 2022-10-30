<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script&gt;
    <script>
        var app = angular.module('myapp', []);
        app.controller('myCtrl', function($scope)
        {
         $scope.bmi_calc = function() {
             
                var w = $scope.weight;
                var h = $scope.height;
                //var bmi = $scope.weight / ($scope.height * $scope.height);
                var bmi = w / (h * h);
                if (bmi < 18.5) {
                    $scope.output = 'Under weight';
                    //return 'Under weight';
                } else if (bmi >= 18.5 && bmi < 25) {
                    $scope.output = 'Normal';
                    //return 'Normal';
                } else if (bmi >= 25 && bmi < 30) {
                    $scope.output = 'Over weight';
                    //return 'Over weight';
                } else if (bmi > 30) {
                    $scope.output = 'Obese';
                    //return 'Obese';
                }

            }

        });
    </script>
</head>
<body >
    <h2> BMI Calculator </h2>
    <br><hr><br>
    <div ng-app="myapp" ng-init="output='Testing'" ng-controller="myCtrl" >
    Enter weight : <input type="text" ng-model="weight" ng-init="weight=78"> <br>
    Enter height : <input type="text" ng-model="height" ng-init="height=1.8"> <br>
    <button ng-click="bmi_calc()">Click</button>
    <br><br>
    <p> {{output}}</p>

    </div>
</body>
</html>
