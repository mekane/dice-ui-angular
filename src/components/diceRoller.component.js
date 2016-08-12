angular.module('diceapp')
    .component('diceRoller', {
        controller: function () {
            var ctrl = this;

            ctrl.diceConfig = [
                {number: 0, size: 4},
                {number: 0, size: 6},
                {number: 0, size: 8},
                {number: 0, size: 10},
                {number: 0, size: 12}
            ];

            ctrl.modifier = 0;

            ctrl.roll = function () {
                var diceToRoll = window.dice.convertDiceToListOfDiceSizes(ctrl.diceConfig);
                var rolls = window.dice.computeRollsForDice(diceToRoll);
                ctrl.stats = window.dice.getPercentageStatsFromTotals(window.dice.combineTotals(rolls));
            }
        },
        template: [
            '<form name="diceForm">',
            '  <dice-input ng-repeat="die in $ctrl.diceConfig" number="die.number" size="die.size"></dice-input>',
            '  <span class="dice-form__plus">+</span>',
            '  <input class="dice-form__modifier" type="text" ng-model="$ctrl.modifier">',
            '  <button class="dice-form__button dice-form__roll" type="button" ng-click="$ctrl.roll()">Roll!</button>',
            '</form>',
            '<ul class="stats" ng-if="$ctrl.stats">',
            '  <li class="stats__item" ng-repeat="(roll, percentage) in $ctrl.stats">' +
            '    <span class="stats__item__roll">{{ roll }}:</span>',
            '    <span class="stats__item__percentage">{{ percentage }}%</span>',
            '  </li>',
            '</ul>'
        ].join('')
    });