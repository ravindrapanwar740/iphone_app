import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    counter()
    {
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.counter()}}>Click</button>
            </div>
        )
    }
}

export default Count
