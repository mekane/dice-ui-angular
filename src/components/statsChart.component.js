angular.module('diceapp')
    .component('statsChart', {
        bindings: {
            'stats': '<'
        },
        template: [
            '<ul class="stats">',
            '  <li class="stats__item" ng-repeat="(roll, percentage) in $ctrl.stats">',
            '    <span class="stats__item__roll">{{ roll }}:</span>',
            '    <span class="stats__item__percentage">{{ percentage }}%</span>',
            '  </li>',
            '</ul>'
        ].join('')
    });