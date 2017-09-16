import React, { Component } from 'react';
import Home from '../Components/Home/Home';
import News from '../Components/News/News';
import Search from '../Components/Search/Search';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import User from '../Components/User/User'

class HomePage extends Component {

	render() {
		return (
			<div>
				<Search />
				<User />
				<Home symbol="EVOK"/>
				<News/>
				<Footer />
			</div>
		);
	}
} 

export default HomePage;