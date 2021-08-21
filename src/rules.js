//  []   ()
/* Rules
- Scissors beats Paper
- Scissors beats Lizard

- Paper beats Rock
- Paper beats Spock

- Rock beats Lizard
- Rock beats Scissors

- Lizard beats Paper
- Lizard beats Spock

- Spock beats Scissors
- Spock beats Rock
*/

export var weapons = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock']

export var rules = {
    Scissors: ['Paper', 'Lizard'],
    Paper: ['Rock', 'Spock'],
    Rock: ['Lizard', 'Scissors'],
    Lizard: ['Paper', 'Spock'],
    Spock: ['Scissors', 'Rock']
}


