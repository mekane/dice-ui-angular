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
                var stats = window.dice.getPercentageStatsFromTotals(window.dice.combineTotals(rolls));
                if ( ctrl.modifier ) {
                    var modifiedStats = {};
                    Object.keys(stats).forEach(function (key) {
                        var newKey = (1 * key) + (1 * ctrl.modifier);
                        modifiedStats[newKey] = stats[key];
                    });
                    ctrl.stats = modifiedStats;
                }
                else {
                    ctrl.stats = stats;
                }
            }
        },
        template: [
            '<form name="diceForm">',
            '  <dice-input ng-repeat="die in $ctrl.diceConfig" number="die.number" size="die.size"></dice-input>',
            '  <span class="dice-form__plus">+</span>',
            '  <input class="dice-form__modifier" type="text" ng-model="$ctrl.modifier">',
            '  <button class="dice-form__button dice-form__roll" type="button" ng-click="$ctrl.roll()">Roll!</button>',
            '</form>',
            '<stats-chart ng-if="$ctrl.stats" stats="$ctrl.stats"></stats-chart>'
        ].join('')
    });