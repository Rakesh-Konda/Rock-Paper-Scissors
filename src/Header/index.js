import {Component} from 'react'
import ScoreContext from '../context/ScoreContext'
import {Heading, Div, Div1, Para, ScoreDiv} from './styledComponent'

class Header extends Component {
  render() {
    return (
      <ScoreContext.Consumer>
        {value => {
          const {score} = value

          return (
            <Div1>
              <Div>
                <div>
                  <Heading>
                    Rock <br /> Paper <br /> Scissors
                  </Heading>
                </div>
                <ScoreDiv>
                  <Para>Score</Para>
                  <Para>{score}</Para>
                </ScoreDiv>
              </Div>
            </Div1>
          )
        }}
      </ScoreContext.Consumer>
    )
  }
}

export default Header
