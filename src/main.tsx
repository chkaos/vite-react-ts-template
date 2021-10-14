import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import './index.less'
import { Provider } from 'mobx-react';
import routes from '@/routes'
import counterStore from './store/counterStore'
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={counterStore}>
        {renderRoutes(routes)}
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
