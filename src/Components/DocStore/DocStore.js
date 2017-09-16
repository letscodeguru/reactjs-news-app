import React, { Component } from 'react';
import axios from 'axios';
import Media from 'react-bootstrap/lib/Media'; 
class DocStore extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

  }

  componentDidMount() {
    axios.get("http://localhost:10000/api/docstore")
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({ data: data
        });
      });
  }


	render() {
		return (
			<div>
				{this.state.data.map((article) =>
                  <Media>
                    <Media.Left align="middle">
                      <img width={200} height={100} src={article.urlToImage} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>{article.title}</Media.Heading>
                      <p><b>Source: {article.name}</b></p>
                      <p><b>Published At: {article.publishedAt}</b></p>

                      <p>{article.description}<a href={article.url}>read more...</a></p>
                    </Media.Body>
                  </Media>
            )}
            
			</div>
		);
	}
} 

export default DocStore;