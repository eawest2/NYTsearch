import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
// Hot Module Replacement - reloads application in the browser so that the browser doesnt perform a pg refresh. Do this so console.log() stays in developer console for debugging. To speed up productivity. Keep app state even on reload so you don't need to click through several on clicks etcs. 
// if (module.hot) {
//   module.hot.accept();
// }
registerServiceWorker();
