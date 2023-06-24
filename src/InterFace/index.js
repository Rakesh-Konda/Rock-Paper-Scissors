import {Component} from 'react'
import ScoreContext from '../context/ScoreContext'
import {
  Image,
  DivImage,
  Button,
  Para,
  DivRes,
  Heading,
  But,
  ButDiv,
} from './styledComponet'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    test: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    test: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    test: 'paperButton',
  },
]

class InterFace extends Component {
  state = {
    go: true,
    randImg: '',
    myImg: '',
    status: '',
  }

  onButtonClick = (imageId, setScore) => {
    const random = Math.floor(Math.random() * 3)
    const randomImage = choicesList[random]
    const myImage = choicesList.find(each => each.id === imageId)

    let result = ''
    if (imageId === 'PAPER' && randomImage.id === 'ROCK') {
      result = 'YOU WON'
    } else if (imageId === 'SCISSORS' && randomImage.id === 'ROCK') {
      result = 'YOU LOSE'
    } else if (imageId === 'ROCK' && randomImage.id === 'PAPER') {
      result = 'YOU LOSE'
    } else if (imageId === 'SCISSORS' && randomImage.id === 'PAPER') {
      result = 'YOU WON'
    } else if (imageId === 'ROCK' && randomImage.id === 'SCISSORS') {
      result = 'YOU WON'
    } else if (imageId === 'PAPER' && randomImage.id === 'SCISSORS') {
      result = 'YOU LOSE'
    } else if (imageId === randomImage.id) {
      result = 'IT IS DRAW'
    }

    this.setState({
      go: false,
      randImg: randomImage,
      myImg: myImage.imageUrl,
      status: result,
    })

    setScore(result) // Pass the result to the setScore function
  }

  playAgain = () => {
    this.setState({go: true})
  }

  render() {
    const {go, randImg, myImg, status} = this.state

    return (
      <ScoreContext.Consumer>
        {value => {
          const {setScore} = value

          return (
            <div>
              {go ? (
                <div>
                  <DivImage>
                    <div>
                      <Button
                        data-testid={choicesList[0].test}
                        onClick={() =>
                          this.onButtonClick(choicesList[0].id, setScore)
                        }
                      >
                        <Image
                          src={choicesList[0].imageUrl}
                          alt={choicesList[0].id}
                        />
                      </Button>
                      <Button
                        data-testid={choicesList[1].test}
                        onClick={() =>
                          this.onButtonClick(choicesList[1].id, setScore)
                        }
                      >
                        <Image
                          src={choicesList[1].imageUrl}
                          alt={choicesList[1].id}
                        />
                      </Button>
                    </div>
                    <div>
                      <Button
                        data-testid={choicesList[2].test}
                        onClick={() =>
                          this.onButtonClick(choicesList[2].id, setScore)
                        }
                      >
                        <Image
                          src={choicesList[2].imageUrl}
                          alt={choicesList[2].id}
                        />
                      </Button>
                    </div>
                  </DivImage>
                </div>
              ) : (
                <div>
                  <DivRes>
                    <div>
                      <Para>YOU</Para>
                      <Image src={myImg} alt="your choice" />
                    </div>
                    <div>
                      <Para>OPPONENT</Para>
                      <Image src={randImg.imageUrl} alt="opponent choice" />
                    </div>
                  </DivRes>
                  <div>
                    <Heading>{status}</Heading>
                    <ButDiv>
                      <But type="button" onClick={this.playAgain}>
                        PLAY AGAIN
                      </But>
                    </ButDiv>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </ScoreContext.Consumer>
    )
  }
}

export default InterFace
