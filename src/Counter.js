import React, { useState } from 'react';
//import ReactDom from 'react-dom'
import './Counter.css';


function Counter(props){
  const [count, setCount] = useState(props.counter.value);
  
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
      <button className="btn btn-secondary btn-sm" 
              onClick={ () => { Increment(count) }}>
      Increment</button>
      <button className="btn btn-danger btn-sm m-2" 
              onClick={ () => props.onDelete(props.counter.id) }>
      Delete</button>
    </div>
  );
}


export default Counter;
