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
                        className={`colorfulBoxes 
                        ${this.props.colorThis} 
                        ${this.props.colorfulSize}`}>
                            <div className={`innerWhite ${this.props.innerSize}`}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
            </> 
        );
    }
}

export default Colorful