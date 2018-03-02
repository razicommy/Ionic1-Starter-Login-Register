angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$timeout', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$timeout,$ionicModal) {

          $scope.animCtr = 1
          $timeout(function() {
            $scope.animCtr++
              $timeout(function() {
                $scope.animCtr++
                  $timeout(function() {
                    $scope.animCtr++
                  $timeout(function() {
                    $scope.animCtr++
                  }, 1100);
                  }, 900);
              }, 700);
          }, 500);     



$scope.loginUser=function(){
    $scope.modalLogin.show();
}
   $scope.modalLogin = $ionicModal.fromTemplate('<ion-modal-view> <ion-header-bar class="bar-secondary"> <h1 class="title">Login</h1> <button class="button button-clear button-assertive" ng-click="closeModalLogin()">Cancel</button> </ion-header-bar> <ion-content style="background-color:lightgreen"> <center><i class="icon assertive ion-location" style="font-size:800%;"></i></center> <form ng-submit="submitModalLogin()"> <div class="list padding"> <label class="item item-input"> <input type="text" placeholder="Enter new item" ng-model="item.title"> </label> </div><div class="padding"> <button type="submit" class="button button-block button-balanced">Login</button> </div></form></ion-modal-view>',
   {
   scope: $scope,
      animation: 'slide-in-up'
   })
	
   $scope.openModalLogin = function() {
      $scope.modalLogin.show();
   };
	
   $scope.closeModalLogin = function() {
      $scope.modalLogin.hide();
   };          
   $scope.submitModalLogin = function() {
      $scope.modalLogin.hide();
   };    
   
}])
 