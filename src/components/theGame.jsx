import React from 'react'
import { weapons, rules } from '../rules.js'
import Colorful from './colorfulButtons.jsx'
import scissors from '../images/icon-scissors.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import blackTriangle from '../images/bg-triangle.svg'
import Score from './score.jsx'

class Game extends React.Component {

    constructor() {
        super()
        this.state = {
            selectStep: true,
            userPicked: 'scissors',
            computerPicked: 'paper',
            result: 0,
            wins: ''
        }
    }
    
    checkWhoWins = () => {

        if (this.state.userPicked === '') {
            return
        } else if (rules[this.state.userPicked].includes(this.state.computerPicked)) {
            this.setState({result: this.state.result + 1, wins: 'user'})
        } else if (this.state.userPicked === this.state.computerPicked) {
            this.setState({wins: 'none'})
        } else {
            this.setState({result: this.state.result - 1, wins: 'computer'})
        }
    }
   
    
    
    render() {
        var weaponsToPlay = weapons.slice(0, 3)
        var randomNumber
        var icons = {
            scissors: scissors,
            paper: paper,
            rock: rock
        }
        var winMessage = {
            user: 'YOU WIN',
            computer: 'YOU LOSE',
            none: 'DRAW'
        }

        var displaySelectWeapon = this.state.selectStep === true ? {display: 'flex'} : {display: 'none'}
        var displayResultUI = this.state.selectStep === false ? {display: 'flex'} : {display: 'none'}


        return (
            <>
                <Score score={this.state.result} />

                <div className="selectWeapon animation-one" style={displaySelectWeapon}>
                    <div className='colorfulBoxesContainer'>        
                        {weaponsToPlay.map( (each) => {
                            return (

                                <Colorful 
                                colorThis={each}
                                colorfulSize='colorfulBoxes-Small'
                                innerSize='innerWhite-Small'
                                >
                                    <button onClick={() => {
                                    randomNumber = Math.floor(Math.random() * 3)
                                    this.setState({
                                        selectStep: false,
                                        userPicked: each,
                                        computerPicked: weaponsToPlay[randomNumber]    
                                        }, () => { this.checkWhoWins() } )}}>
                                        <img style={{width: '65px'}} src={icons[each]} alt="" />
                                    </button>
                                </Colorful>
                            )
                        })}
                        <div className='blackTriangle'>
                            <img src={blackTriangle} alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="resultUI animation-one" style={displayResultUI}>
                    <div className="playersContainer">
                        <div>
                            <h2>YOU PICKED</h2>
                            <Colorful 
                            colorThis={this.state.userPicked} 
                            colorfulSize='colorfulBoxes-Big'
                            innerSize='innerWhite-Big'
                            >
                                    <button>
                                        <img style={{width: '100px'}} src={icons[this.state.userPicked]} alt="" />
                                    </button>
                            </Colorful>                    
                        </div>
                        <div>
                            <h1>{winMessage[this.state.wins]}</h1>
                            <button onClick={() => {
                                this.setState({selectStep: true, userPicked: '', computerPicked: ''})
                            }}>PLAY AGAIN</button>
                        </div>
                        <div>
                            <h2>THE HOUSE PICKED</h2>
                            <Colorful 
                            colorThis={this.state.computerPicked} 
                            colorfulSize='colorfulBoxes-Big'
                            innerSize='innerWhite-Big'
                            >
                                    <button>
                                        <img style={{width: '100px'}} src={icons[this.state.computerPicked]} alt="" />
                                    </button>
                            </Colorful> 
                            <div className="defaultCircle"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Game