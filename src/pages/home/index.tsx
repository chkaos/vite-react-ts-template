import React from 'react'
import logo from '@/assets/logo.svg'
import './index.less'
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {

  render() {

    const { store } = this.props;

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React + Typescript + Mobx + React-router!</p>
          <p>
            <button type="button" onClick={() => { 
                store.add()
              }}
              >
              count is: {store.count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>)
  }
}

export default App
