import React, { useState } from 'react';
//import ReactDom from 'react-dom'
import './Counter.css';


function Counter(){
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);
  
  function renderTags(){
    if( tags.length === 0 ) return (<p>There are no tags!</p>);

    return <ul>{ tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>
  }

  return (
    <React.Fragment>
      { renderTags() }
    </React.Fragment>
  );
}


export default Counter;
