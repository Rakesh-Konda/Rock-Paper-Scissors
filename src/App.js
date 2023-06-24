import {Component} from 'react'
import ScoreContext from './context/ScoreContext'
import MainView from './MainView'
import './App.css'

class App extends Component {
  state = {score: 0, res: ''}

  setScore = result => {
    this.setState({res: result})
    if (result === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (result === 'IT IS DRAW') {
      this.setState(prevState => ({
        score: prevState.score,
      }))
    }
  }

  render() {
    const {score, res} = this.state
    console.log(res)
    return (
      <ScoreContext.Provider
        value={{
          setScore: this.setScore,
          score,
          res,
        }}
      >
        <div>
          <MainView />
        </div>
      </ScoreContext.Provider>
    )
  }
}

export default App
