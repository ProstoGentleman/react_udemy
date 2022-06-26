import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';

// const elem = <h2>Hello world!</h2>
// const elem = React.createElement('h2', {className: 'dreetings'}, 'Hello world!');
// const text = "Hello world!";
// const elem = (
//   <div>
//     <h2 className='text'>{text}</h2>
//     <input type='text' />
//     <button tabIndex="0">Click</button>
//   </div>
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>,
);
