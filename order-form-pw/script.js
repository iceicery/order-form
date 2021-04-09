function FormController($scope) {
  $scope.rate = 1;
  $scope.currencies = [
    { country: 'USD', rate: 1, currentRate: 1, active: true },
    { country: 'ERO', rate: 0.84095, currentRate: 1, active: false },
    { country: 'CNY', rate: 6.548, currentRate: 1, active: false },
    { country: 'JPY', rate: 109.43, currentRate: 1, active: false },
  ];
  $scope.setRate = function (e) {
    $scope.rate = e.rate;
  };
  $scope.fruits = [
    {
      name: 'Apple',
      price: 5,
      active: false,
    },
    {
      name: 'Banana',
      price: 3,
      active: false,
    },
    {
      name: 'Peach',
      price: 8,
      active: false,
    },
    {
      name: 'Carrot',
      price: 4,
      active: false,
    },
    {
      name: 'Tomato',
      price: 6,
      active: false,
    },
  ];

  $scope.toggleActive = function (e) {
    e.active = !e.active;
  };

  $scope.sum = function () {
    let total = 0;
    angular.forEach($scope.fruits, function (e) {
      if (e.active) {
        total += e.price;
      }
    });
    return total;
  };
}
