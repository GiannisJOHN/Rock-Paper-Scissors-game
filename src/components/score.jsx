import React from 'react'
import logo from '../images/logo.svg'

class Score extends React.Component {

    render() {
        return (
            <>
                <header>
                    <div className="scoreContainer">
                        <img src={logo} alt="" />
                        <div className="theScore">
                            <h4>SCORE</h4>
                            <p>{this.props.score}</p>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Score