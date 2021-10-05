
import React, { Component } from 'react'
import { Table, Form, Container } from "react-bootstrap";


class Search extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          searchData: null,
          noData: false,
        };
      }
      search(key) {
        console.warn(key);
        fetch("http://localhost:3000/iphone?q=" + key).then((data) => {
          data.json().then((resp) => {
            console.warn("Respo..", resp);
            if (resp.length > 0) {
              this.setState({ searchData: resp, noData: false });
            } else {
              this.setState({ noData: true, searchData: null });
            }
          });
        });
      }
    render() {
        return (
            <Container>
                 
        <Form.Control  type="text" 
          onChange={(event) => this.search(event.target.value)}
          placeholder="Search"
        />
 <div>
          {this.state.searchData ? (
            <div className="row-search">
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
                  {this.state.searchData.map((item) => (
                    <tr>
                      <td>
                        <b>{item.id}</b>
                      </td>
                      <td>
                        <b>{item.name}</b>
                      </td>
                      <td>
                        <b>{item.modal}</b>
                      </td>
                      <td>
                        <b>{item.rating}</b>
                      </td>
                      <td>
                        <b>{item.prize}</b>
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
            ""
          )}
          {this.state.noData ? <h3>No data found</h3> : null}
        </div>


            </Container>
        )
    }
}

export default Search;