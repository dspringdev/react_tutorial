import React, { useState } from 'react';
import Counter from './Counter';


function Counters(){

    const [counters, setCounters] = useState(
        [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    );


    function handleCounterDelete(counterId){
        var resultcounters = counters.filter(c => c.id !== counterId);
        setCounters(resultcounters)
    }


    return(
        <React.Fragment>
            {counters.map(counter => <Counter 
                                      key={ counter.id } // used internally by react only. Cannot access in Counters component.
                                      onDelete={ handleCounterDelete }
                                      counter={ counter } />)};
        </React.Fragment>
    );
}

export default Counters;
