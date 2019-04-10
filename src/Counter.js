import React, { useState } from 'react';
//import ReactDom from 'react-dom'
import './Counter.css';


function Counter(props){
  const [count, setCount] = useState(props.value);
  
  function getCount(){
    return(count === 0 ? "Zero" : count)
  };

  function getBadgeStyle(){
    let baseClass = "badge m-2 badge-"
    baseClass += count === 0 ? "warning" : "primary"
    return (baseClass)
  }

  function Increment(count){
    return setCount(count + 1);
  }

  return (    
    <div>
      <span className={ getBadgeStyle() }>{ getCount() }</span>
      <button className="btn btn-secondary btn-sm" onClick={ () => { Increment(count) }}>Increment</button>
    </div>
  );
}


export default Counter;
