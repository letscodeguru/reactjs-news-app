import React, { Component } from 'react';
import axios from 'axios';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Carousel from 'react-bootstrap/lib/Carousel';
import Badge from 'react-bootstrap/lib/Badge';
 
class LatestNews extends Component {
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
    axios.get("http://localhost:10000/api/news?page=1&size=10")
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
              <Grid>
                <Row className="show-grid">
                <Col xs={12}>
                  <Carousel>
                    {this.state.data.map((article) =>
                    <Carousel.Item>
                      <img width={900} height={500} alt="900x500" src={article.urlToImage}/>
                      <Carousel.Caption>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    )}
                  </Carousel>
                </Col>
              </Row>             
            
            </Grid>  
      );
    }
}

export default LatestNews;