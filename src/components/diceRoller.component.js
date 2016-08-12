angular.module('diceapp')
    .component('diceRoller', {
        bindings: {},
        controller: function () {
            console.log('Dice Roller init');

        },
        template: [
            '<form name="diceForm">',
            '  <dice-input number="1" size="6">',
            '</form>'
        ].join('')
    });