import React, { useState } from 'react';
import Counter from './Counter';


function Counters(){

    const [counters] = useState(
        [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    );

    return(
        <React.Fragment>
            {counters.map(counter => <Counter key={ counter.id } value={ counter.value }/>)}
        </React.Fragment>
    );
}

export default Counters;
