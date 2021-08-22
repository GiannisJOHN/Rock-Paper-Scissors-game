import React from 'react'
import Game from './components/theGame.jsx'
import bgVideo from './videos/pexels-pavel-danilyuk.mp4'
import imageRules from './images/image-rules.svg'




class App extends React.Component {

    constructor() {
      super()
      this.state = {
          modalOpened: false
      }
  }

  render() {


    return (
      <>
        <Game />
        <footer>
            <button onClick={
              () => { this.setState({modalOpened: true}) }
            }>RULES</button>
        </footer>
        <video autoPlay="autoplay" muted loop className="bgVideo">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="rulesModal" style={{display: this.state.modalOpened === true ? 'flex' : 'none'}}>
          <div>
            <div className="modalHeader">
              <h1>RULES</h1>
              <button onClick={
                () => { this.setState({modalOpened: false}) }
              }>&#10006;</button>
            </div>
            <img src={imageRules} alt="" />
          </div>
        </div>
        <div class="attribution">
          <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a></p>
          <p>Coded by <a href="https://iomentesidis.netlify.app" target="_blank" >Ioannis Mentesidis</a></p>
        </div>
      </>
    )

  }
}

export default App
