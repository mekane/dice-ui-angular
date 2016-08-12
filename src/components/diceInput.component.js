angular.module('diceapp')
    .component('diceInput', {
        bindings: {
            number: '=',
            size: '='
        },
        controller: function () {
            var ctrl = this;

            ctrl.addOne = function addOne() {
                ctrl.number++;
            };

            ctrl.subtractOne = function subtractOne() {
                if ( ctrl.number > 1 )
                    ctrl.number--;
            };
        },
        template: [
            '<div class="dice-input">',
            '  <input type="text" name="number" ng-model="$ctrl.number">',
            '  <span class="dice-input__d">d</span>',
            '  <span class="dice-input__size">{{ $ctrl.size }}</span>',
            '  <div class="dice-input__controls">',
            '    <button type="button" class="dice-input__controls__button dice-input__controls__button-less" ng-click="$ctrl.subtractOne()">-</button>',
            '    <button type="button" class="dice-input__controls__button dice-input__controls__button-more" ng-click="$ctrl.addOne()">+</button>',
            '  </div>',
            '</div>'
        ].join('')
    });
