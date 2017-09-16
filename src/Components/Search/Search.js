import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import axios from 'axios';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

  }
  
  componentDidMount() {
    axios.get("http://localhost:10000/api/categories")
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({ data: data
        });
      });
  }

	render() {
		return (
			<form>
                <Row>
                <Col xs={9}>
                  
                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" />
                      <DropdownButton
                        componentClass={InputGroup.Button}
                        id="input-dropdown-addon"
                        title="All"
                      >
                      {this.state.data.map((category) =>  
                        <MenuItem key={category}>{category}</MenuItem>
                      )}
                      </DropdownButton>
                    </InputGroup>
                  </FormGroup>  
                </Col>
                </Row>
            </form>
		);
	}
} 

export default Search;