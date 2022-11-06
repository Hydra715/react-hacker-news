// import React from 'react'
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App'
import { store, history } from './store'


// const render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App history={history} />
//     </Provider>,
//     document.getElementById('root')
//   )
// }

// render()


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container as Element); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
  <App history={history} />
</Provider>,
);