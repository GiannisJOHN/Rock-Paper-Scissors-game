import React from 'react'

class Colorful extends React.Component {

    constructor() {
        super()
        this.state = {
            init: true
        }
    }



    render() {
        return (
            <>
                    <div className='colorfulFlex'>
                        <div 
                        className={`colorfulBoxes ${this.props.colorThis} ${this.props.colorfulSize}`}>
                            <div className={`innerWhite ${this.props.innerSize}`}>
                                {this.props.children}
                            </div>
                        </div>

                        <div className="animatedCircles" style={{display: this.props.animateCircles === true ? 'flex' : 'none'}}>
                            <div className="animate-circle" style={{animationDelay: '0s'}}></div>
                            <div className="animate-circle" style={{animationDelay: '1s'}}></div>
                            <div className="animate-circle" style={{animationDelay: '2s'}}></div>
                            <div className="animate-circle" style={{animationDelay: '3s'}}></div>
                        </div>
                    </div>
            </> 
        );
    }
}

export default Colorful