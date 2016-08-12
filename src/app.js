angular.module('diceapp', [])
.controller('mainController', mainController);

function mainController() {
    var vm = this;

    var diceSizes = [4, 6, 8, 10, 12];

    console.log('main controller, dice = ', diceSizes);
}
