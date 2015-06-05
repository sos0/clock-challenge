'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('myApp module testing', function(){
  beforeEach(module('myApp'));

  describe('ClockController', function(){
    it('should be defined', inject(function($controller){
      var controller = $controller('ClockController');
      expect(controller).toBeDefined();
    }))

    it('should update clock based on utc', function() {
      select('utc').option('0');
      expect(input('utc').val()).toBe('0');
    });

    it('updates controller scope utc value only if within correct range', inject(function($controller){
      var $scope = {};
      var controller = $controller('ClockController', { $scope: $scope });
      var utc = 0;
      $scope.updateClock(utc);
      expect($scope.utc).toEqual(utc);
    })
  })
})