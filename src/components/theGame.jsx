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
            setTimeout(() => {
                this.setState({result: this.state.result + 1, wins: 'user'})
            }, 1000)
    
        } else if (this.state.userPicked === this.state.computerPicked) {
            this.setState({wins: 'none'})
        } else {
            setTimeout(() => {
                this.setState({result: this.state.result - 1, wins: 'computer'})
            }, 1000)
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
                                animateCircles={false}
                                >
                                    <button onClick={() => {
                                    randomNumber = Math.floor(Math.random() * 3)
                                    this.setState({
                                        selectStep: false,
                                        userPicked: each,
                                        computerPicked: weaponsToPlay[randomNumber]    
                                        }, () => { this.checkWhoWins() } )}}>
                                        <img  src={icons[each]} alt="" />
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
                            animateCircles={this.state.wins === 'user' ? true : false}
                            >
                                    <button style={{cursor: 'default'}}>
                                        <img   src={icons[this.state.userPicked]} alt="" />
                                    </button>
                            </Colorful>
                                       
                        </div>

                        <div className='announce animation-one' style={{animationDuration: '2.5s', animationDelay: '1s', opacity: '0'}}>
                            <h1>{winMessage[this.state.wins]}</h1>
                            <button onClick={() => {
                                this.setState({selectStep: true, userPicked: '', computerPicked: '', wins: 'none'})
                            }}>PLAY AGAIN</button>
                        </div>

                        <div className='animation-two' style={{opacity: '0'}}>
                            <h2>THE HOUSE PICKED</h2>
                            <Colorful 
                            colorThis={this.state.computerPicked} 
                            colorfulSize='colorfulBoxes-Big'
                            innerSize='innerWhite-Big'
                            animation='animation-two'
                            animateCircles={this.state.wins === 'computer' ? true : false}
                            >
                                    <button style={{cursor: 'default'}}>
                                        <img   src={icons[this.state.computerPicked]} alt="" />
                                    </button>
                            </Colorful> 
                            
                        </div>
                    </div>
                </div>
 
                
            </>
        );
    }
}

export default Game