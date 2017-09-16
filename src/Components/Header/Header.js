import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import './Header.css';
import logo from '../../logo.svg';
import HomePage from '../../Pages/HomePage';
import NewsPage from '../../Pages/NewsPage';
import SignInPage from '../../Pages/SignInPage';
import SignUpPage from '../../Pages/SignUpPage';
import DocStorePage from '../../Pages/DocStorePage';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';

const Header = (props) => (
  	<Router>
	  <div>
	    <Nav bsStyle="pills" activeKey={3}>
    		<NavItem eventKey={1} href="/">Home</NavItem>
    		<NavItem eventKey={2} href="/news">News</NavItem>
    		<NavItem eventKey={3} href="/about">About</NavItem>
    		<NavItem eventKey={4} href="/signin">Sign In</NavItem>
  		</Nav>
	 
      <hr/>
	    <Route exact path="/" component={HomePage}/>
	    <Route path="/about" component={About}/>
	    <Route path="/news" component={NewsPage}/>
	    <Route path="/signin" component={SignInPage}/>
	    <Route path="/signup" component={SignUpPage}/>
	    <Route path="/doc" component={DocStorePage}/>
	  </div>
	</Router>
);


export default Header;