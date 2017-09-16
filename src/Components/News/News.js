import React, { Component } from 'react';
import axios from 'axios';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Pagination from 'react-bootstrap/lib/Pagination';
import Badge from 'react-bootstrap/lib/Badge';
import Media from 'react-bootstrap/lib/Media'; 
class News extends Component {
    constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleChange(event) {
    console.log("handleChange");
    this.setState({value: event.target.value});
    axios.get("http://localhost:10000/api/news/textsearch?name="+event.target.value)
      .then(res => {
        const data = res.data;
        this.setState({ data });
    });
  }

  handleSubmit(event) {
    console.log("handleSubmit");
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handlePageChange(event) {
    axios.get("http://localhost:10000/api/news?page="+event+"&size=10")
    .then(res => {
      const data = res.data.content;
      console.log(data);
      this.setState({ data: data,
        totalPages:res.data.number
      });
    });
  }

  componentDidMount() {
    axios.get("http://localhost:10000/api/news?page=1&size=50")
      .then(res => {
        const data = res.data.content;
        console.log(data);
        this.setState({ data: data,
          totalPages:res.data.number
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
            
               <Pagination
                  bsSize="large"
                  items={10}
                  activePage={this.state.totalPages}
                  onSelect={this.handlePageChange} />
          </div>     
      );
    }
}

export default News;