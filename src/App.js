import React, { Component } from 'react'
import { List, PullToRefresh } from 'antd-mobile'
import './App.css'
import FlexPractice from './components/flexPractice'

const Item = List.Item
const Brief = Item.Brief

class App extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date().toString(),
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  }

  render() {
    const { date, numbers } = this.state
    const listItems = numbers.map((number) =>
      <div className="border-black" key={ number }>
        <Item
            align="top"
            error={true}
            multipleLine>
          <Brief>
            <div className="first-div">
              <span>取餐号{ number }</span>
              <span className="num">{ '+' + (number).toFixed(2) }</span>
            </div>
          </Brief>
          <Brief>
            <div className="second-div">
              <span>[自提]</span>
              <span className="xianliao">12元</span>
              <span className="shiji">23元</span>
            </div>
          </Brief>
          <Brief>
            <div className="three-div">
              <span className="mini-size date-time">2018年6月3日11点50分</span>
              <span className="mini-size xianliao-font">馅料补贴</span>
              <span className="mini-size shiji-font">实付金额</span>
            </div>
          </Brief>
        </Item>
      </div>
    )

    return (
      <div className="App">
        <FlexPractice/>
        {/* <header>
          header
        </header>
        <nav>
          { date }
        </nav>
        <article>
          <PullToRefresh
            damping={60}
            ref={el => this.ptr = el}
            style={{
              height: this.state.height,
              overflow: 'auto',
            }}
            distanceToRefresh={60}
            indicator={{ deactivate: '上拉可以刷新' }}
            direction={ 'up' }
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this.setState({ 
                refreshing: true,
                numbers: [...numbers,...numbers]
              });
              setTimeout(() => {
                this.setState({ refreshing: false });
              }, 1000);
            }}
          >
            <List className="my-list">
              { listItems }
            </List>
          </PullToRefresh> 
        </article>
        <footer>
          footer
        </footer> */}
      </div>
    );
  }
}

export default App;
