import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        Counters: [
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
     } 
    handleReset = () =>
    {
        const counters = this.state.counters.map(c=>{
            c.value=0;
            return c;
        });
        this.setState({ counters });
    };
    render() { 
        return (
            <div>
                <div className='wrapper'>{this.state.Counters.map(counter=> <Counter key={counter.id}/>)}Total Items 🛒: 7</div>
                <button onClick={this.handleReset} className="Reset">Reset</button>
            </div>
        );
    }
}
 
export default Counters;