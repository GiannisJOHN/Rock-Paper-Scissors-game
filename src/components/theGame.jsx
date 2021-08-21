import React from 'react'
import { weapons, rules } from '../rules.js'


var weaponsToPlay = weapons.slice(0, 3)
var randomNumber

class Game extends React.Component {

    constructor() {
        super()
        this.state = {
            select: true,
            userPicked: '',
            computerPicked: '',
            result: 0
        }
    }
    
    checkWhoWins = () => {

        if (this.state.userPicked === '') {
            return
        } else if (rules[this.state.userPicked].includes(this.state.computerPicked)) {
            this.setState({result: this.state.result + 1})
        } else if (this.state.userPicked === this.state.computerPicked) {
            return
        } else {
            this.setState({result: this.state.result - 1})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.userPicked !== prevState.userPicked) {
            this.checkWhoWins()
        }
    }
    
    
    render() {
        

        return (
            <>
                <h1>select weapon</h1>
                {

                weaponsToPlay.map( (each) => {
                        return (
                        <button onClick={() => {



                            randomNumber = Math.floor(Math.random() * 3)
                            this.setState({userPicked: each, computerPicked: weaponsToPlay[randomNumber]})


                        }}>{each}</button>  
                        )
                    })
                }
                <hr />

                <h1>your weapon</h1>
                <p>{this.state.userPicked}</p>
                <hr />
                <h1>computer picked</h1>
                <p>{this.state.computerPicked}</p>
                <hr />
                <h1>result</h1>
                <p>{this.state.result}</p>
                <button onClick={() => {
                    this.setState({userPicked: '', computerPicked: '', result: 0})
                }}>try again</button>
            </>
        );
    }
}

export default Game