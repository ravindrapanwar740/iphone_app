import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from "react-bootstrap";
import Containers from './Containers';

class List2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:null
        }
    }
    componentDidMount() {
        this.getData();
      }
      getData() {
        fetch("http://localhost:3000/iphone").then((response) => {
          response.json().then((result) => {
            this.setState({ list: result });
          });
        });
      }

    
    render() {
        return (
            <div>
               {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Modal</th>
                  <th>Rating</th>
                  <th>Prize</th>
                  
                        </tr>
                </thead>
                <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>
                      <b>{item.id}</b>
                    </td>
                    <td>
                      <b>{item.name}</b>
                    </td>
                    <td>
                      <b>{item.modal }</b>
                    </td>
                    <td>
                      <b>{item.rating}</b>
                    </td>
                    <td>
                      <b>{item.prize }</b>
                    </td>
                    
                    
                    {/* <td>
                      <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} color="orange" />
                      </Link>
                      <span onClick={() => this.delete(item.id)}>
                        <FontAwesomeIcon icon={faTrashAlt} color="red" />
                      </span>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Loading.....</p>
        )}  
            </div>
        )
    }
}

export default List2
