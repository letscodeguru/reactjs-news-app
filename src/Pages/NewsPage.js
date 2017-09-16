import React, { Component } from 'react';
import News from '../Components/News/News';
import LatestNews from '../Components/News/LatestNews';
import Search from '../Components/Search/Search';

class NewsPage extends Component {

	render() {
		return (
			<div>
				<Search />
				<LatestNews />	
				<News/>
			</div>
		);
	}
} 

export default NewsPage;