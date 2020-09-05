(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope)
{
 $scope.btnClick = function (){
 var text = $scope.name;
 if(text === "" || text == null)
  $scope.messageTxt = "Please enter data first";
 else
 {
  var formTxt = text.replace(/\s/g,'').replace(/, ,/g,',').replace(/,+/g,',').replace(/^,|,$/g, '');
  var count =  (formTxt.match(new RegExp(",", "g")) || []).length + 1;

  if(count > 3)$scope.messageTxt = "Too much!";
  else $scope.messageTxt = "Enjoy!";
  }

}
}
})();
