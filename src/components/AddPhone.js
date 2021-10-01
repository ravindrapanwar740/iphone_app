import React, { Component } from 'react'

class AddPhone extends Component {
constructor(props) {
    super(props)

    this.state = {
        name: null,
        modal:null,
        rating: null,
        prize: null
    }
}

    create()
{
  fetch("http://localhost:3000/iphone",{
    method:"Post",
    headers:{
'content-type':'application/json'
    },
    body:JSON.stringify(this.state)
  }).then((result)=>{
result.json().then((resp)=>{
alert("data insert")
})

  })
}
    render() {
        return (
            <div>
               <h1>Creating...</h1> 
               <div>
          <input
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
            placeholder="Enter Phone name"
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({
                modal: event.target.value,
              });
            }}
            placeholder="Enter Modal no..."
          />
          <br />
          <br />
          <input 
            onChange={(event) => {
              this.setState({
                rating: event.target.value,
              });
            }}
            placeholder="Enter Rating"
          />
          <br />
          <br />
          <input 
            onChange={(event) => {
              this.setState({
                prize: event.target.value,
              });
            }}
            placeholder="Enter Prize"
          />
          <br />
          <br />
          
          <button onClick={()=>{this.create()}}>Add Phone</button>
        </div>
            </div>
        )
    }
}

export default AddPhone
