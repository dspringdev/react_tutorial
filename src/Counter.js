import React, { useState } from 'react';
//import ReactDom from 'react-dom'
import './Counter.css';


function Counter(){
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);
  
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
      <ul>{ tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>
    </React.Fragment>
  );
}


export default Counter;
