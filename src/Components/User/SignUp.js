import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class SignUp extends Component {

	render() {
		return (
			  <Form inline>
			    <FormGroup controlId="formInlineName">
			      <ControlLabel>Name</ControlLabel>
			      {' '}
			      <FormControl type="text" placeholder="Jane Doe" />
			    </FormGroup>
			    {' '}
			    <FormGroup controlId="formInlineEmail">
			      <ControlLabel>Email</ControlLabel>
			      {' '}
			      <FormControl type="email" placeholder="jane.doe@example.com" />
			    </FormGroup>
			    {' '}
			    <Button type="submit">
			      Send invitation
			    </Button>
			  </Form>
		);
	}
} 

export default SignUp;