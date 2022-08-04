import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,count2:0,
        tags: ["1","2","3","4"]
    };
    /*constructor()
    {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/
    handleIncrement = () => /* Replacement of the constructor */
    {
        /*console.log("Increment Clicked",this);*/
        this.setState({ count: this.state.count + 1 })
    };
    
    handleDecrement = () =>
    {
        this.setState({ count: this.state.count -1})
    };
    /* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */
    render() { 
        return <div>
            Items
            <button className={this.getClassName()}>{this.formatCount()}</button>
            <button onClick={this.handleIncrement}>Add to Cart</button>
            <button className='Delete' onClick={this.handleDecrement}>Delete</button>
            </div>;
    }
    
    getClassName()
    {
        let classes="";
        classes += this.state.count ===0?"Warning":"Counter";
        return classes;
    }
    formatCount()
{
    const {count} = this.state
    return count === 0 ? "Zero" : count;
}
}


 
export default Counter;