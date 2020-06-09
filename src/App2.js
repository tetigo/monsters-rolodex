import React, {Component} from 'react';

class App2 extends Component{
    constructor(){
        super();
        this.handleClick2 = this.handleClick1.bind(this);
    }

    handleClick1=(e)=>{
        console.log('button 1 clicked');
    }

    handleClick3 = (e) => {console.log('button 4 clicked')}

    render(){
        return(
            <div>
                <button onClick={this.handleClick1()}>click 1</button>
                <button onClick={this.handleClick1}>click 2</button>
                <button onClick={this.handleClick2}>click 3</button>
                <button onClick={this.handleClick3}>click 4</button>
            </div>
        )
    }
}

export default App2;