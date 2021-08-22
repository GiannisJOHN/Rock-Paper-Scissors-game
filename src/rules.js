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

export var weapons = ['scissors', 'paper', 'rock', 'lizard', 'spock']

export var rules = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock']
}


