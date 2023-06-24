import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import Header from '../Header'
import InterFace from '../InterFace'
import {MainDiv, PopImage, PopDiv, PopBut} from './styledComponent'

class MainView extends Component {
  render() {
    return (
      <MainDiv>
        <Header />
        <InterFace />
        <div>
          <PopDiv>
            <Popup modal trigger={<PopBut type="button">Rules</PopBut>}>
              {close => (
                <>
                  <div>
                    <PopImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </div>
                  <button type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </button>
                </>
              )}
            </Popup>
          </PopDiv>
        </div>
      </MainDiv>
    )
  }
}

export default MainView
