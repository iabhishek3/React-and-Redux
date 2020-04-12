// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// step 1

import { createStore } from 'redux';


//step 2


const intialState={
   result:1,
   lastVlaues:[]
};

const reducer = (state=intialState, acton) => {

  switch (acton.type) {
    case "ADD": 

      state ={
       ...state,
       result:state.result+acton.payload,
       lastVlaues:[...state.lastVlaues,acton.payload]
      };
 
     
      break;

    case "SUB":
      break;
    default:
      break;
  }

  return state;

}

//step 3

const store = createStore(reducer);

store.subscribe(
  ()=>{
console.log(store.getState());
console.log("state update!!");

  }
)


store.dispatch({
    type:"ADD",
    payload:10

});
store.dispatch({
  type:"ADD",
  payload:20

})