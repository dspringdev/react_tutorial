import React, { useState } from 'react';
//import ReactDom from 'react-dom'
import './Counter.css';


function Counter(){
  const [count, setCount] = useState(0);
  
  function getCount(){
    return(count === 0 ? "Zero" : count)
  };

  function getBadgeStyle(){
    let baseClass = "badge m-2 badge-"
    baseClass += count === 0 ? "warning" : "primary"
    return (baseClass)
  }

  return (
    <React.Fragment>
      <span className={ getBadgeStyle() }>{ getCount() }</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </React.Fragment>
  );
}


export default Counter;
